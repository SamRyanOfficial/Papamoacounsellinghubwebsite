-- Create the stored procedure for counsellor profile creation
CREATE OR REPLACE FUNCTION create_counsellor_profile(
  user_id uuid,
  user_full_name text,
  user_date_of_birth date
) RETURNS void AS $$
BEGIN
  -- Start a transaction
  BEGIN
    -- Insert the counsellor record
    INSERT INTO counsellors (
      id,
      full_name,
      date_of_birth,
      status
    ) VALUES (
      user_id,
      user_full_name,
      user_date_of_birth,
      'pending'
    );

    -- If we get here, both operations succeeded
    COMMIT;
  EXCEPTION WHEN OTHERS THEN
    -- If anything fails, roll back the entire transaction
    ROLLBACK;
    RAISE EXCEPTION 'Failed to create counsellor profile: %', SQLERRM;
  END;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;