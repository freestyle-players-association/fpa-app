# Local Development


# Pre-requisites

1. Install Docker Desktop
2. Configure General Settings in Docker Desktop according to this [link](https://supabase.com/docs/guides/cli/getting-started?queryGroups=platform&platform=windows)
2. Install Node.js

## Install Packages

Install packages with:
```bash
npm install
```

## Start Backend

You need to have docker daemon running

1. Run the start command
    ```bash
    npx supabase start
    ```
2. Create a new file called `.env.local`, put in the fields of the file `.example.env.local` and fill the content with
   the output from the command before (copy API_URL to NEXT_PUBLIC_SUPABASE_URL)
3. Seed the storage buckets
    ```bash
    node supabase/storage-seed.js
    ```
4. Open the backend dashboard
   `http://127.0.0.1:54323/`

## Start Frontend

1. Run the start command
   ```bash
    npm run dev
    ```
2. Open the frontend app
   `http://localhost:3000`
3. Log in with one of the users:

Email: `aang@fpa.com`, `kitara@fpa.com`,`uppa@fpa.com`, 

Password: `123456`.



## Create Migration

1. Create a new migration file with:
    ```bash
    npx supabase migration new <name_of_the_migration>
    # a new file will be created inside supabse/migrations/<name_of_the_migration>.sql 
    ```
2. Update the `supabase/seed.sql` accordingly.
3. Apply the migration and seed with:
    ```bash
    npx supabase db reset && sleep 1 && node supabase/storage-seed.js
    ```
4. Generate typescript types with:
    ```bash
    npx supabase gen types --lang=typescript --local > utils/supabase/database.types.ts
    ```

## Create Seed from local db

```bash
  npx supabase db dump --local --data-only --exclude storage.buckets --file supabase/seed.sql
# updates the supabase/seed.sql file with the data of the current local database
```

## Remote Development

### Release-flow

1. Create a new branch from `main`.
2. Make changes.
3. Create pull request.
4. (Optional ) To deploy migrations to the preview backend, execute the `deploy-preview` workflow from the github actions ui
5. Make all checks pass.
6. Let the pull request be approved by a collaborator
7. Merge pull request
8. All migrations are applied to the production backend environment after merge.