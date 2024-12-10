# AI SaaS Platform

A SaaS platform with AI-powered assistance and user dashboard functionality.

## Features

- AI Assistant for product queries using OpenAI
- User Dashboard with profile management
- Plan management and subscription details
- Supabase integration for authentication and data storage

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
Create a `.env.local` file in the root directory with the following variables:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
OPENAI_API_KEY=your_openai_api_key
```

3. Set up Supabase:
   - Create a new project in Supabase
   - Create a `profiles` table with the following schema:
     ```sql
     create table profiles (
       id uuid references auth.users on delete cascade,
       username text,
       plan_type text default 'Free',
       plan_status text default 'Active',
       plan_renewal_date timestamp with time zone,
       updated_at timestamp with time zone,
       primary key (id)
     );

     -- Enable Row Level Security
     alter table profiles enable row level security;

     -- Create policies
     create policy "Public profiles are viewable by everyone."
       on profiles for select
       using ( true );

     create policy "Users can insert their own profile."
       on profiles for insert
       with check ( auth.uid() = id );

     create policy "Users can update their own profile."
       on profiles for update
       using ( auth.uid() = id );
     ```

4. Run the development server:
```bash
npm run dev
```

## User Stories Implemented

1. AI Assistant for Product Queries
   - Real-time AI assistance using OpenAI
   - Context-aware responses for product-related questions
   - Persistent chat interface with message history

2. User Dashboard with Profile Settings
   - Account information management
   - Plan details display
   - Subscription status and renewal dates
   - Plan features overview
   - Upgrade options for free-tier users

## Development

The application is built with:
- Next.js 13+ (App Router)
- TypeScript
- Tailwind CSS
- Supabase for authentication and database
- OpenAI for AI assistance

## Environment Variables

Required environment variables:
- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase project's anon/public key
- `OPENAI_API_KEY`: Your OpenAI API key for AI assistant functionality
