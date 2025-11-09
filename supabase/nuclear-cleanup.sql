-- NUCLEAR OPTION: Remove ALL triggers and functions from contacts/bookings tables
-- This will completely clean your database of any automation

-- Step 1: Drop ALL triggers on contacts table
DO $$ 
DECLARE 
    r RECORD;
BEGIN
    FOR r IN (
        SELECT trigger_name 
        FROM information_schema.triggers 
        WHERE event_object_schema = 'public' 
        AND event_object_table = 'contacts'
    ) LOOP
        EXECUTE 'DROP TRIGGER IF EXISTS ' || quote_ident(r.trigger_name) || ' ON public.contacts CASCADE';
        RAISE NOTICE 'Dropped trigger: %', r.trigger_name;
    END LOOP;
END $$;

-- Step 2: Drop ALL triggers on bookings table
DO $$ 
DECLARE 
    r RECORD;
BEGIN
    FOR r IN (
        SELECT trigger_name 
        FROM information_schema.triggers 
        WHERE event_object_schema = 'public' 
        AND event_object_table = 'bookings'
    ) LOOP
        EXECUTE 'DROP TRIGGER IF EXISTS ' || quote_ident(r.trigger_name) || ' ON public.bookings CASCADE';
        RAISE NOTICE 'Dropped trigger: %', r.trigger_name;
    END LOOP;
END $$;

-- Step 3: Drop ALL functions that contain 'http' in their definition
DO $$ 
DECLARE 
    r RECORD;
BEGIN
    FOR r IN (
        SELECT routine_schema, routine_name, routine_type
        FROM information_schema.routines
        WHERE routine_schema = 'public'
        AND (
            routine_definition LIKE '%http%' 
            OR routine_name LIKE '%email%'
            OR routine_name LIKE '%trigger%'
            OR routine_name LIKE '%contact%'
            OR routine_name LIKE '%booking%'
        )
    ) LOOP
        EXECUTE 'DROP ' || r.routine_type || ' IF EXISTS ' || 
                quote_ident(r.routine_schema) || '.' || quote_ident(r.routine_name) || ' CASCADE';
        RAISE NOTICE 'Dropped %: %.%', r.routine_type, r.routine_schema, r.routine_name;
    END LOOP;
END $$;

-- Step 4: Completely disable RLS
ALTER TABLE public.contacts DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings DISABLE ROW LEVEL SECURITY;

-- Step 5: Verify cleanup
SELECT 'Triggers remaining on contacts:' as check_type, count(*) as count
FROM information_schema.triggers 
WHERE event_object_table = 'contacts'
UNION ALL
SELECT 'Triggers remaining on bookings:', count(*)
FROM information_schema.triggers 
WHERE event_object_table = 'bookings'
UNION ALL
SELECT 'Functions with http:', count(*)
FROM information_schema.routines
WHERE routine_schema = 'public'
AND routine_definition LIKE '%http%';

-- Step 6: Test insert (uncomment to test)
-- INSERT INTO contacts (name, email, subject, message, status) 
-- VALUES ('Cleanup Test', 'test@example.com', 'Test', 'Testing after cleanup', 'new')
-- RETURNING *;
