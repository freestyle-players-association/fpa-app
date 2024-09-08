-- Add first_name, last_name, and date_of_birth to userprofiles
ALTER TABLE userprofiles
ADD COLUMN first_name TEXT,
ADD COLUMN last_name TEXT,
ADD COLUMN date_of_birth DATE;
