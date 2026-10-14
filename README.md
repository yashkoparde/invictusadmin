# Invictus Club - Standalone Admin Portal

This is the private management console for **Invictus Club**. It connects directly to the Supabase database and storage bucket to manage Timeline Events and Hall of Fame fixture cards.

## Features
- **100% Client-Side Web Application**: Zero backend dependencies required.
- **Supabase Cloud Native**: Connects via Supabase JS SDK.
- **Drag & Drop Photos**: Uploads directly to `hall-of-fame-photos` Supabase storage.
- **Independent Deployment**: Detached from public club repository for security.

## Local Running
```bash
npm install
npm start
```

## Vercel Deployment
Deploy as static site project:
- **Framework Preset**: Other / None
- **Root Directory**: `./`
- **Output Directory**: `./`
