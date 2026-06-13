-- Leads capturados no funil de quiz
create table if not exists funnel_leads (
  id           bigserial primary key,
  name         text,
  email        text,
  whatsapp     text,
  stage        int,
  stage_label  text,
  utm_source   text,
  utm_medium   text,
  utm_campaign text,
  utm_content  text,
  utm_term     text,
  utm_id       text,
  xcod         text,
  fbclid       text,
  session_id   text,
  platform     text,
  landed_at    timestamptz,
  ts           timestamptz default now()
);

-- Eventos do funil (page_view, question_answered, checkout_click etc.)
create table if not exists funnel_events (
  id           bigserial primary key,
  event        text,
  data         jsonb,
  utm_source   text,
  utm_medium   text,
  utm_campaign text,
  session_id   text,
  ts           timestamptz default now()
);

-- Sem RLS — acesso apenas via service_role key (Edge Function)
alter table funnel_leads  disable row level security;
alter table funnel_events disable row level security;
