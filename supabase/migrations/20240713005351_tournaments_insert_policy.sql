alter table tournaments
    enable row level security;

create policy "Enable insert for authenticated users only"
    on "public"."tournaments"
    as PERMISSIVE
    for INSERT
    to authenticated
    with check (
    true
    );

create policy "Enable read access for all users"
    on "public"."tournaments"
    as PERMISSIVE
    for SELECT
    to public
    using (
    true
    );