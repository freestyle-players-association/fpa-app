// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// Setup type definitions for built-in Supabase Runtime APIs
import "https://esm.sh/@supabase/functions-js/src/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

Deno.serve(async (_req) => {
  try {
    console.log("Hello from Functions!");

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      {
        global: {
          headers: { Authorization: _req.headers.get("Authorization")! },
        },
      },
    );

    const body = await _req.json();

    const { error: organizersError } = await supabase
      .from("tournament_organizers")
      .insert({
        tournament_id: body.tournament_id,
        userprofile_id: body.userprofile_id,
      })
      .throwOnError();

    const { error: invitationsError } = await supabase
      .from("tournament_organizers_invitations")
      .delete()
      .match({
        tournament_id: body.tournament_id,
        userprofile_id: body.userprofile_id,
      });

    if (organizersError || invitationsError) {
      throw organizersError || invitationsError;
    }

    return new Response(JSON.stringify({}), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (err: any) {
    return new Response(String(err?.message ?? err), { status: 500 });
  }
});

/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/accept-tournament-organizer-invitation' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'

*/
