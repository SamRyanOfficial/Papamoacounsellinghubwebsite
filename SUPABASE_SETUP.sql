-- Papamoa Counselling Hub - Supabase Setup SQL
-- Run this in your Supabase SQL Editor

-- Create counsellors table
CREATE TABLE IF NOT EXISTS counsellors (
  id UUID REFERENCES auth.users ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  date_of_birth DATE NOT NULL,
  status TEXT CHECK (status IN ('pending', 'approved', 'rejected')) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  approved_at TIMESTAMP WITH TIME ZONE,
  approved_by UUID REFERENCES auth.users,
  PRIMARY KEY (id)
);

-- Create counsellor_profiles table
CREATE TABLE IF NOT EXISTS counsellor_profiles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  counsellor_id UUID REFERENCES counsellors(id) ON DELETE CASCADE,
  bio TEXT,
  profile_photo_url TEXT,
  specializations TEXT[] DEFAULT ARRAY[]::TEXT[],
  qualifications TEXT,
  experience_years INTEGER,
  hourly_rate DECIMAL(10,2),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create rooms table
CREATE TABLE IF NOT EXISTS rooms (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  hourly_rate DECIMAL(10,2) NOT NULL,
  capacity INTEGER DEFAULT 2,
  amenities TEXT[] DEFAULT ARRAY[]::TEXT[],
  image_url TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create room_bookings table
CREATE TABLE IF NOT EXISTS room_bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  counsellor_id UUID REFERENCES counsellors(id) ON DELETE CASCADE,
  room_id UUID REFERENCES rooms(id) ON DELETE CASCADE,
  booking_date DATE NOT NULL,
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  total_amount DECIMAL(10,2) NOT NULL,
  stripe_payment_intent_id TEXT,
  status TEXT CHECK (status IN ('pending', 'confirmed', 'cancelled')) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert sample rooms if they don't exist
INSERT INTO rooms (name, description, hourly_rate, amenities, image_url)
SELECT 'Serenity Suite', 'A peaceful therapy room with natural lighting and comfortable seating', 85.00, ARRAY['Natural lighting', 'Comfortable seating', 'Whiteboard', 'Tissues', 'Water'], '/images/serenity-suite-1.jpg'
WHERE NOT EXISTS (SELECT 1 FROM rooms WHERE name = 'Serenity Suite');

INSERT INTO rooms (name, description, hourly_rate, amenities, image_url)
SELECT 'Harmony Lounge', 'Spacious room perfect for group sessions and family counselling', 95.00, ARRAY['Large space', 'Group seating', 'Projector', 'Whiteboard', 'Tea/Coffee'], '/images/harmony-lounge-1.jpg'
WHERE NOT EXISTS (SELECT 1 FROM rooms WHERE name = 'Harmony Lounge');

INSERT INTO rooms (name, description, hourly_rate, amenities, image_url)
SELECT 'Tranquility Room', 'Intimate setting ideal for individual counselling sessions', 80.00, ARRAY['Quiet environment', 'Soft lighting', 'Comfortable chairs', 'Privacy'], '/images/tranquility-room-1.jpg'
WHERE NOT EXISTS (SELECT 1 FROM rooms WHERE name = 'Tranquility Room');

INSERT INTO rooms (name, description, hourly_rate, amenities, image_url)
SELECT 'Wellness Room', 'Modern therapy space with state-of-the-art amenities', 100.00, ARRAY['Modern furniture', 'Sound system', 'Adjustable lighting', 'Zen garden view'], '/images/wellness-room-1.jpg'
WHERE NOT EXISTS (SELECT 1 FROM rooms WHERE name = 'Wellness Room');

-- Enable Row Level Security (idempotent)
ALTER TABLE counsellors ENABLE ROW LEVEL SECURITY;
ALTER TABLE counsellor_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE room_bookings ENABLE ROW LEVEL SECURITY;

-- Drop existing policies before recreating
DROP POLICY IF EXISTS "Counsellors can read own data" ON counsellors;
DROP POLICY IF EXISTS "Allow stored procedure inserts" ON counsellors;
DROP POLICY IF EXISTS "Counsellors can manage own profiles" ON counsellor_profiles;
DROP POLICY IF EXISTS "Anyone can read rooms" ON rooms;
DROP POLICY IF EXISTS "Counsellors can manage own bookings" ON room_bookings;

-- RLS Policies
CREATE POLICY "Counsellors can read own data" ON counsellors
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Allow stored procedure inserts" ON counsellors
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Counsellors can manage own profiles" ON counsellor_profiles
  FOR ALL USING (counsellor_id = auth.uid());

CREATE POLICY "Anyone can read rooms" ON rooms
  FOR SELECT USING (true);

CREATE POLICY "Counsellors can manage own bookings" ON room_bookings
  FOR ALL USING (counsellor_id = auth.uid());

-- Drop existing function and trigger before recreating
DROP FUNCTION IF EXISTS update_updated_at_column() CASCADE;
DROP TRIGGER IF EXISTS update_counsellor_profiles_updated_at ON counsellor_profiles;

-- Create a function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for counsellor_profiles
CREATE TRIGGER update_counsellor_profiles_updated_at 
  BEFORE UPDATE ON counsellor_profiles 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Drop existing stored procedure before recreating
DROP FUNCTION IF EXISTS create_counsellor_profile(UUID, TEXT, DATE, INTEGER);

-- Create function to handle new user signups automatically
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  -- Only create counsellor profile if the user has the required metadata
  IF NEW.raw_user_meta_data ? 'full_name' AND NEW.raw_user_meta_data ? 'date_of_birth' THEN
    -- Insert into counsellors table
    INSERT INTO public.counsellors (
      id,
      full_name,
      date_of_birth,
      status,
      created_at
    ) VALUES (
      NEW.id,
      NEW.raw_user_meta_data->>'full_name',
      (NEW.raw_user_meta_data->>'date_of_birth')::DATE,
      'pending',
      NOW()
    );

    -- Create empty profile
    INSERT INTO public.counsellor_profiles (
      counsellor_id,
      created_at,
      updated_at
    ) VALUES (
      NEW.id,
      NOW(),
      NOW()
    );
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user signups
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user(); 