ALTER TABLE tournaments RENAME TO events;
ALTER TABLE tournament_organizers RENAME TO event_organizers;
ALTER TABLE tournament_organizers_invitations RENAME TO event_organizers_invitations;
ALTER TABLE tournament_schedules RENAME TO event_schedules;

ALTER TABLE event_organizers RENAME COLUMN tournament_id TO event_id;
ALTER TABLE event_organizers_invitations RENAME COLUMN tournament_id TO event_id;
ALTER TABLE event_schedules RENAME COLUMN tournament_id TO event_id;