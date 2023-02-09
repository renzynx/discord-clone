create table profiles (
  id uuid default uuid_generate_v4() primary key,
  updated_at timestamp default now(),
  username text,
  discriminator text,
  avatar_url text
);

create table guilds (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp default now(),
  name text not null,
  icon_url text,
  owner_id uuid references profiles (id)
);

create table members (
  id uuid default uuid_generate_v4() primary key,
  guild_id uuid references guilds (id),
  user_id uuid references profiles (id)
);

