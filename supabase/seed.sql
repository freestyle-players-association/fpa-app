SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1 (Ubuntu 15.1-1.pgdg20.04+1)
-- Dumped by pg_dump version 15.7 (Ubuntu 15.7-1.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."audit_log_entries" ("instance_id", "id", "payload", "created_at", "ip_address") VALUES
	('00000000-0000-0000-0000-000000000000', '90518dd0-06bb-44d9-8a86-37f7fa6c55aa', '{"action":"user_signedup","actor_id":"d21dfe65-42b3-41f8-9481-8d6916782f2a","actor_username":"aang@fpa.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}', '2024-07-14 21:56:32.20056+00', ''),
	('00000000-0000-0000-0000-000000000000', '55b581b3-bceb-4c4f-9f30-6994f49a1184', '{"action":"login","actor_id":"d21dfe65-42b3-41f8-9481-8d6916782f2a","actor_username":"aang@fpa.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-07-14 21:56:32.202593+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a95dc1ac-0aed-40e9-9b44-861ec1908d45', '{"action":"logout","actor_id":"d21dfe65-42b3-41f8-9481-8d6916782f2a","actor_username":"aang@fpa.com","actor_via_sso":false,"log_type":"account"}', '2024-07-14 21:56:47.828334+00', ''),
	('00000000-0000-0000-0000-000000000000', '629a4461-a9e8-471f-97af-3d28cc153ca1', '{"action":"user_signedup","actor_id":"006d3f4c-be0e-4361-8cb2-78d1cf032719","actor_username":"kitara@fpa.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}', '2024-07-14 21:56:59.862578+00', ''),
	('00000000-0000-0000-0000-000000000000', '52eaf375-690a-47bc-aa6b-4a327d72736b', '{"action":"login","actor_id":"006d3f4c-be0e-4361-8cb2-78d1cf032719","actor_username":"kitara@fpa.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-07-14 21:56:59.864743+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ae5041c4-ba62-499b-8f23-6360c7588ce0', '{"action":"logout","actor_id":"006d3f4c-be0e-4361-8cb2-78d1cf032719","actor_username":"kitara@fpa.com","actor_via_sso":false,"log_type":"account"}', '2024-07-14 21:57:33.796598+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c2ae2bfb-aace-4749-8203-bde426b3ad39', '{"action":"user_signedup","actor_id":"24403d5a-668a-41a2-a9e5-1ed740bc5bfc","actor_username":"uppa@fpa.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}', '2024-07-14 21:57:52.240357+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c7dd2d59-8330-4389-9cf4-9d5bd5f88b66', '{"action":"login","actor_id":"24403d5a-668a-41a2-a9e5-1ed740bc5bfc","actor_username":"uppa@fpa.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-07-14 21:57:52.242116+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b6392ca6-3ef4-44ac-903e-5bc5894327a7', '{"action":"logout","actor_id":"24403d5a-668a-41a2-a9e5-1ed740bc5bfc","actor_username":"uppa@fpa.com","actor_via_sso":false,"log_type":"account"}', '2024-07-14 21:58:06.733851+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c6978842-5ec4-448b-9dbc-9e59469f2e46', '{"action":"login","actor_id":"24403d5a-668a-41a2-a9e5-1ed740bc5bfc","actor_username":"uppa@fpa.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-07-14 22:06:36.17763+00', ''),
	('00000000-0000-0000-0000-000000000000', '7c0285ff-a8d1-4cb3-b87d-7afd2250f4f2', '{"action":"login","actor_id":"006d3f4c-be0e-4361-8cb2-78d1cf032719","actor_username":"kitara@fpa.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-07-15 23:45:11.944486+00', '');


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at", "is_anonymous") VALUES
	('00000000-0000-0000-0000-000000000000', 'd21dfe65-42b3-41f8-9481-8d6916782f2a', 'authenticated', 'authenticated', 'aang@fpa.com', '$2a$10$vvdEKmsk9VSlemNvlhWgE.jLK8yA9ooGAI2IEhwGdBevv6L2eMn4e', '2024-07-14 21:56:32.200932+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-07-14 21:56:32.202885+00', '{"provider": "email", "providers": ["email"]}', '{"sub": "d21dfe65-42b3-41f8-9481-8d6916782f2a", "email": "aang@fpa.com", "email_verified": false, "phone_verified": false}', NULL, '2024-07-14 21:56:32.197343+00', '2024-07-14 21:56:32.204055+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', '24403d5a-668a-41a2-a9e5-1ed740bc5bfc', 'authenticated', 'authenticated', 'uppa@fpa.com', '$2a$10$ibxRj9zPwzgOeL5rGoJAO.8Abi5IulnEzo037YSkLb/o2Ln/Steeq', '2024-07-14 21:57:52.240627+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-07-14 22:06:36.178155+00', '{"provider": "email", "providers": ["email"]}', '{"sub": "24403d5a-668a-41a2-a9e5-1ed740bc5bfc", "email": "uppa@fpa.com", "email_verified": false, "phone_verified": false}', NULL, '2024-07-14 21:57:52.238349+00', '2024-07-14 22:06:36.179458+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', '006d3f4c-be0e-4361-8cb2-78d1cf032719', 'authenticated', 'authenticated', 'kitara@fpa.com', '$2a$10$vcix9trbE5XZ8LpLI2ZkQuVD33uWyAlNG.gAtympxiPLKnJVl401W', '2024-07-14 21:56:59.862919+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-07-15 23:45:11.945106+00', '{"provider": "email", "providers": ["email"]}', '{"sub": "006d3f4c-be0e-4361-8cb2-78d1cf032719", "email": "kitara@fpa.com", "email_verified": false, "phone_verified": false}', NULL, '2024-07-14 21:56:59.858872+00', '2024-07-15 23:45:11.94623+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('d21dfe65-42b3-41f8-9481-8d6916782f2a', 'd21dfe65-42b3-41f8-9481-8d6916782f2a', '{"sub": "d21dfe65-42b3-41f8-9481-8d6916782f2a", "email": "aang@fpa.com", "email_verified": false, "phone_verified": false}', 'email', '2024-07-14 21:56:32.1993+00', '2024-07-14 21:56:32.199323+00', '2024-07-14 21:56:32.199323+00', '54fce6ca-48d1-4de1-81c3-e05b1bd075a0'),
	('006d3f4c-be0e-4361-8cb2-78d1cf032719', '006d3f4c-be0e-4361-8cb2-78d1cf032719', '{"sub": "006d3f4c-be0e-4361-8cb2-78d1cf032719", "email": "kitara@fpa.com", "email_verified": false, "phone_verified": false}', 'email', '2024-07-14 21:56:59.860578+00', '2024-07-14 21:56:59.860597+00', '2024-07-14 21:56:59.860597+00', '1b16c67a-479a-4fa5-9724-36e343d2895e'),
	('24403d5a-668a-41a2-a9e5-1ed740bc5bfc', '24403d5a-668a-41a2-a9e5-1ed740bc5bfc', '{"sub": "24403d5a-668a-41a2-a9e5-1ed740bc5bfc", "email": "uppa@fpa.com", "email_verified": false, "phone_verified": false}', 'email', '2024-07-14 21:57:52.23947+00', '2024-07-14 21:57:52.239485+00', '2024-07-14 21:57:52.239485+00', '629a0a3a-890b-4c6d-a2f9-ee9c83ed4125');


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."sessions" ("id", "user_id", "created_at", "updated_at", "factor_id", "aal", "not_after", "refreshed_at", "user_agent", "ip", "tag") VALUES
	('ed65678a-bc0f-4b9d-bc46-15fb6699b27a', '24403d5a-668a-41a2-a9e5-1ed740bc5bfc', '2024-07-14 22:06:36.178196+00', '2024-07-14 22:06:36.178196+00', NULL, 'aal1', NULL, NULL, 'node', '192.168.65.1', NULL),
	('905a60d0-d39e-44d0-a6e7-59a3c6397eae', '006d3f4c-be0e-4361-8cb2-78d1cf032719', '2024-07-15 23:45:11.945133+00', '2024-07-15 23:45:11.945133+00', NULL, 'aal1', NULL, NULL, 'node', '192.168.65.1', NULL);


--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."mfa_amr_claims" ("session_id", "created_at", "updated_at", "authentication_method", "id") VALUES
	('ed65678a-bc0f-4b9d-bc46-15fb6699b27a', '2024-07-14 22:06:36.17977+00', '2024-07-14 22:06:36.17977+00', 'password', 'eb33f507-2c12-4cae-b212-a988a94cade7'),
	('905a60d0-d39e-44d0-a6e7-59a3c6397eae', '2024-07-15 23:45:11.946542+00', '2024-07-15 23:45:11.946542+00', 'password', '8bc53419-2dec-4345-a675-518cb0b15ed7');


--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: one_time_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."refresh_tokens" ("instance_id", "id", "token", "user_id", "revoked", "created_at", "updated_at", "parent", "session_id") VALUES
	('00000000-0000-0000-0000-000000000000', 4, '90UdHWPU8Pn9kJlKXJojTg', '24403d5a-668a-41a2-a9e5-1ed740bc5bfc', false, '2024-07-14 22:06:36.178782+00', '2024-07-14 22:06:36.178782+00', NULL, 'ed65678a-bc0f-4b9d-bc46-15fb6699b27a'),
	('00000000-0000-0000-0000-000000000000', 5, 'EMAukiBXNmuAsPbP_x81oQ', '006d3f4c-be0e-4361-8cb2-78d1cf032719', false, '2024-07-15 23:45:11.945633+00', '2024-07-15 23:45:11.945633+00', NULL, '905a60d0-d39e-44d0-a6e7-59a3c6397eae');


--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: key; Type: TABLE DATA; Schema: pgsodium; Owner: supabase_admin
--



--
-- Data for Name: events; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.events (id, name, description, start_date, end_date)
VALUES
    ('4e805da4-08b7-45ab-8d98-81d089b908f0', 'Amsterjam', 'Amsterdam', '2024-07-25 00:00:00.000000 +00:00','2024-07-28 00:00:00.000000 +00:00'),
    ('dc434470-bbca-47a7-bf6b-6d5a4a238657', 'Sandslash', 'Debki', '2024-08-22 00:00:00.000000 +00:00','2024-08-25 00:00:00.000000 +00:00'),
    ('686da678-6d82-46e3-a7f3-4f1cd792c01f', 'FPAW 24', 'Warsaw', '2024-08-14 00:00:00.000000 +00:00','2024-08-18 00:00:00.000000 +00:00'),
    ('8cb16914-4ebc-47b7-8fcd-2d5309ffd310', 'German Championship', 'Bonn', '2025-08-20 00:00:00.000000 +00:00','2025-08-23 00:00:00.000000 +00:00');

--
-- Data for Name: userprofiles; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."userprofiles" ("id", "username", "email", "avatar_url") VALUES
	('d21dfe65-42b3-41f8-9481-8d6916782f2a', 'Aang', 'aang@fpa.com', 'd21dfe65-42b3-41f8-9481-8d6916782f2a.jpg'),
	('006d3f4c-be0e-4361-8cb2-78d1cf032719', 'Kitara', 'kitara@fpa.com', '006d3f4c-be0e-4361-8cb2-78d1cf032719.png'),
	('24403d5a-668a-41a2-a9e5-1ed740bc5bfc', 'Uppa', 'uppa@fpa.com', '24403d5a-668a-41a2-a9e5-1ed740bc5bfc.jpeg');

--
-- Data for Name: event_organizers; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."event_organizers" ("event_id", "userprofile_id") VALUES
	('4e805da4-08b7-45ab-8d98-81d089b908f0', '006d3f4c-be0e-4361-8cb2-78d1cf032719'),
	('4e805da4-08b7-45ab-8d98-81d089b908f0', '24403d5a-668a-41a2-a9e5-1ed740bc5bfc'),
	('8cb16914-4ebc-47b7-8fcd-2d5309ffd310', '006d3f4c-be0e-4361-8cb2-78d1cf032719'),
	('8cb16914-4ebc-47b7-8fcd-2d5309ffd310', '24403d5a-668a-41a2-a9e5-1ed740bc5bfc'),
	('8cb16914-4ebc-47b7-8fcd-2d5309ffd310', 'd21dfe65-42b3-41f8-9481-8d6916782f2a'),
	('dc434470-bbca-47a7-bf6b-6d5a4a238657', 'd21dfe65-42b3-41f8-9481-8d6916782f2a'),
	('dc434470-bbca-47a7-bf6b-6d5a4a238657', '24403d5a-668a-41a2-a9e5-1ed740bc5bfc'),
	('686da678-6d82-46e3-a7f3-4f1cd792c01f', '006d3f4c-be0e-4361-8cb2-78d1cf032719');


--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

INSERT INTO "storage"."objects" ("id", "bucket_id", "name", "owner", "created_at", "updated_at", "last_accessed_at", "metadata", "version", "owner_id") VALUES
	('a38030fa-5b1c-4c00-8eb8-20a4a60fb74b', 'avatars', 'd21dfe65-42b3-41f8-9481-8d6916782f2a.jpg', 'd21dfe65-42b3-41f8-9481-8d6916782f2a', '2024-07-14 21:56:44.498421+00', '2024-07-15 23:44:58.637264+00', '2024-07-14 21:56:44.498421+00', '{"eTag": "\"85f1d2299ed84108f5142cbec65c415b\"", "size": 96934, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-07-15T23:44:58.632Z", "contentLength": 96934, "httpStatusCode": 200}', '84a2a35e-0630-40a6-85a0-81be383b06ad', 'd21dfe65-42b3-41f8-9481-8d6916782f2a'),
	('f4119fa4-16c4-411b-b292-b3e8603c4cc2', 'avatars', '006d3f4c-be0e-4361-8cb2-78d1cf032719.png', '006d3f4c-be0e-4361-8cb2-78d1cf032719', '2024-07-14 21:57:14.300612+00', '2024-07-15 23:44:58.661163+00', '2024-07-14 21:57:14.300612+00', '{"eTag": "\"a1e835ba58be792126aaecfd9fc09990\"", "size": 539773, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-07-15T23:44:58.656Z", "contentLength": 539773, "httpStatusCode": 200}', '54830105-0ac8-4b90-85f6-72093d2d921d', '006d3f4c-be0e-4361-8cb2-78d1cf032719'),
	('e5670352-0036-45e4-8606-42d43f55cf35', 'avatars', '24403d5a-668a-41a2-a9e5-1ed740bc5bfc.jpeg', '24403d5a-668a-41a2-a9e5-1ed740bc5bfc', '2024-07-14 21:58:01.512308+00', '2024-07-15 23:44:58.672159+00', '2024-07-14 21:58:01.512308+00', '{"eTag": "\"973427381c75288f8691ca5117dc0f79\"", "size": 8260, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-07-15T23:44:58.670Z", "contentLength": 8260, "httpStatusCode": 200}', '38e0c36a-ce9d-4049-9ac1-8262dffe2f78', '24403d5a-668a-41a2-a9e5-1ed740bc5bfc');


--
-- Data for Name: s3_multipart_uploads; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads_parts; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: hooks; Type: TABLE DATA; Schema: supabase_functions; Owner: supabase_functions_admin
--



--
-- Data for Name: secrets; Type: TABLE DATA; Schema: vault; Owner: supabase_admin
--



--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 5, true);


--
-- Name: key_key_id_seq; Type: SEQUENCE SET; Schema: pgsodium; Owner: supabase_admin
--

SELECT pg_catalog.setval('"pgsodium"."key_key_id_seq"', 1, false);


--
-- Name: hooks_id_seq; Type: SEQUENCE SET; Schema: supabase_functions; Owner: supabase_functions_admin
--

SELECT pg_catalog.setval('"supabase_functions"."hooks_id_seq"', 1, false);


--
-- PostgreSQL database dump complete
--

RESET ALL;
