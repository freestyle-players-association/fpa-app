-- Create userprofile table
CREATE TABLE IF NOT EXISTS userprofiles
(
    id         UUID REFERENCES auth.users (id) PRIMARY KEY,
    username       TEXT NOT NULL,
    email      TEXT NOT NULL,
    avatar_url TEXT
);

alter table userprofiles
    enable row level security;

-- Create policy form UPDATE userprofile
CREATE POLICY "User can update own profile"
    ON userprofiles
    AS PERMISSIVE
    FOR UPDATE
    TO authenticated
    USING ((select auth.uid()) = id);

-- Create policy form INSERT userprofile
CREATE POLICY "User can create own profile"
    ON userprofiles
    AS PERMISSIVE
    for INSERT
    TO authenticated
    with check ((select auth.uid()) = id);

create policy "Enable read access for all authenticated users to userProfile"
    on userprofiles
    AS PERMISSIVE
    FOR SELECT
    TO authenticated
    USING (true);

insert into storage.buckets
    (id, name, public)
values ('avatars', 'avatars', true);

create policy "Public Access for avatars"
    on storage.objects for select
    using (bucket_id = 'avatars');

create policy "Authenticated users can write to avatars"
    on storage.objects for insert to authenticated with check (
    -- restrict bucket
    bucket_id = 'avatars'
    );

create policy "Authenticated users can update owned avatars"
    on storage.objects for update
    to authenticated
    with check (
    bucket_id = 'avatars' and
    ((select text(auth.uid())) = owner_id)
    );
