ALTER TABLE event_organizers RENAME CONSTRAINT tournamentorganizers_pkey TO event_organizers_pkey;
ALTER TABLE event_organizers RENAME CONSTRAINT tournamentorganizers_tournament_id_fkey TO event_organizers_tournament_id_fkey;
ALTER TABLE event_organizers RENAME CONSTRAINT tournamentorganizers_userprofile_id_fkey TO event_organizers_userprofile_id_fkey;

ALTER TABLE event_organizers_invitations RENAME CONSTRAINT tournament_organizers_invitations_pkey TO event_organizers_invitations_pkey;
ALTER TABLE event_organizers_invitations RENAME CONSTRAINT tournament_organizers_invitations_tournament_id_fkey TO event_organizers_invitations_event_id_fkey;
ALTER TABLE event_organizers_invitations RENAME CONSTRAINT tournament_organizers_invitations_userprofile_id_fkey TO event_organizers_invitations_userprofile_id_fkey;

ALTER TABLE event_schedules RENAME CONSTRAINT tournament_schedules_pkey TO event_schedules_pkey;
ALTER TABLE event_schedules RENAME CONSTRAINT tournament_schedules_tournament_id_fkey TO event_schedules_event_id_fkey;

ALTER TABLE events RENAME CONSTRAINT tournaments_pkey TO events_pkey;