# Papamoa Counselling Hub - Setup Guide

## Overview
This system provides a complete counsellor management platform with:
- ✅ Counsellor registration & approval workflow
- ✅ Profile management system
- ✅ Room booking with Stripe payments
- ✅ Email notifications via Resend
- ✅ Admin dashboard for approvals

## 🗄️ Database Setup (Supabase)

### 1. Create Supabase Project
1. Go to [supabase.com](https://supabase.com) and create a new project
2. Note your project URL and anon key from Settings > API

### 2. Create Database Tables
Run this SQL in your Supabase SQL editor:

```sql
-- Enable Row Level Security
ALTER DATABASE postgres SET "app.jwt_secret" TO 'your-jwt-secret';

-- Create counsellors table
CREATE TABLE counsellors (
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
CREATE TABLE counsellor_profiles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  counsellor_id UUID REFERENCES counsellors(id) ON DELETE CASCADE,
  bio TEXT,
  profile_photo_url TEXT,
  specializations TEXT[] DEFAULT '{}',
  qualifications TEXT,
  experience_years INTEGER,
  hourly_rate DECIMAL(10,2),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create rooms table
CREATE TABLE rooms (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  hourly_rate DECIMAL(10,2) NOT NULL,
  capacity INTEGER DEFAULT 2,
  amenities TEXT[] DEFAULT '{}',
  image_url TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create room_bookings table
CREATE TABLE room_bookings (
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

-- Insert sample rooms
INSERT INTO rooms (name, description, hourly_rate, amenities, image_url) VALUES
('Serenity Suite', 'A peaceful therapy room with natural lighting and comfortable seating', 85.00, '{"Natural lighting", "Comfortable seating", "Whiteboard", "Tissues", "Water"}', '/images/serenity-suite-1.jpg'),
('Harmony Lounge', 'Spacious room perfect for group sessions and family counselling', 95.00, '{"Large space", "Group seating", "Projector", "Whiteboard", "Tea/Coffee"}', '/images/harmony-lounge-1.jpg'),
('Tranquility Room', 'Intimate setting ideal for individual counselling sessions', 80.00, '{"Quiet environment", "Soft lighting", "Comfortable chairs", "Privacy"}', '/images/tranquility-room-1.jpg'),
('Wellness Room', 'Modern therapy space with state-of-the-art amenities', 100.00, '{"Modern furniture", "Sound system", "Adjustable lighting", "Zen garden view"}', '/images/wellness-room-1.jpg');

-- Enable Row Level Security
ALTER TABLE counsellors ENABLE ROW LEVEL SECURITY;
ALTER TABLE counsellor_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE room_bookings ENABLE ROW LEVEL SECURITY;

-- RLS Policies
-- Counsellors can read their own data
CREATE POLICY "Counsellors can read own data" ON counsellors
  FOR SELECT USING (auth.uid() = id);

-- Counsellors can insert their own record during signup
CREATE POLICY "Allow signup" ON counsellors
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Counsellors can read/write their own profiles
CREATE POLICY "Counsellors can manage own profiles" ON counsellor_profiles
  FOR ALL USING (counsellor_id = auth.uid());

-- Counsellors can manage their own bookings
CREATE POLICY "Counsellors can manage own bookings" ON room_bookings
  FOR ALL USING (counsellor_id = auth.uid());

-- Everyone can read rooms
CREATE POLICY "Anyone can read rooms" ON rooms
  FOR SELECT USING (true);
```

### 3. Configure Authentication
In Supabase Dashboard > Authentication > Settings:
- Enable email confirmations
- Set up email templates
- Configure redirect URLs

## 💳 Payment Setup (Stripe)

### 1. Create Stripe Account
1. Go to [stripe.com](https://stripe.com) and create an account
2. Get your publishable and secret keys from the dashboard
3. Set up webhooks for payment events

### 2. Configure Webhooks
Add webhook endpoint: `https://your-domain.com/api/stripe/webhooks`
Listen for these events:
- `payment_intent.succeeded`
- `payment_intent.payment_failed`

## 📧 Email Setup (Resend)

### 1. Create Resend Account
1. Go to [resend.com](https://resend.com)
2. Create an account and get your API key
3. Verify your domain for production use

## 🔐 Environment Variables

Create a `.env.local` file in your project root:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Resend
RESEND_API_KEY=re_...

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables** (see above)

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Test the system:**
   - Visit `/signup` to register a counsellor
   - Check email for verification
   - Admin approval required before full access

## 📋 Admin Tasks

### Approve Counsellors
Run this SQL to approve a counsellor:
```sql
UPDATE counsellors 
SET status = 'approved', 
    approved_at = NOW(), 
    approved_by = 'admin-user-id'
WHERE id = 'counsellor-user-id';
```

## 🔄 Next Steps

1. **Set up all environment variables**
2. **Create the database tables in Supabase**
3. **Test the signup/login flow**
4. **Configure Stripe for payments**
5. **Set up email templates in Resend**
6. **Create admin dashboard for approvals**

## 📱 Features Overview

### ✅ Currently Implemented
- Counsellor registration with approval workflow
- Professional login system with status checking
- Database schema for full system
- Responsive design with modern UI

### 🚧 To Be Built Next
- Profile setup page for approved counsellors
- Room booking system with calendar
- Stripe payment integration
- Admin dashboard
- Email notification system
- Invoice generation

## 🎯 User Flow

1. **Counsellor Registration:** 
   - Fill signup form → Email verification → Admin approval

2. **Profile Setup:** 
   - Add bio, photo, specializations → Ready to book

3. **Room Booking:** 
   - Browse rooms → Select time/date → Pay via Stripe → Receive confirmation

4. **Admin Management:** 
   - Review applications → Approve/reject → Monitor bookings

---

The foundation is now in place! Set up the environment variables and database, then we can continue building the profile setup and booking system. 