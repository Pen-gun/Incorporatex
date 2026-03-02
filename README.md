# Incorporatex

A full-stack company incorporation workflow app with draft/save/submit flow and admin overview.

## Project Snapshot

Incorporatex models a practical incorporation journey: company registration, shareholder registration, submission, and admin-side review. It is built as a TypeScript monorepo with a React frontend and an Express + Prisma backend, backed by PostgreSQL and runnable with Docker Compose.

## Key Features

- Draft company creation and editing
- Shareholder replacement workflow based on declared shareholder count
- Submission lock rules (`SUBMITTED` companies cannot be edited)
- Admin dashboard with company and shareholder overview
- Health endpoint and typed API response envelope

## Tech Stack

### Frontend

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- TanStack Query
- Axios
- React Router

### Backend

- Node.js
- Express 5
- TypeScript
- Prisma 7
- PostgreSQL

### Infrastructure

- Docker
- Docker Compose

## Architecture Overview

### Monorepo Layout

```text
Incorporatex/
|- Frontend/
|- Backend/
`- docker-compose.yml
```

### Core Data Model

- `Company`
  - Status lifecycle: `DRAFT` -> `SUBMITTED`
- `Shareholder`
  - Belongs to a company
  - Cascade delete on company removal
  - Unique constraint on `companyId + firstName + lastName`

### Runtime URLs

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:8000`
- Health check: `GET http://localhost:8000/api/health`

## Getting Started (Local, Non-Docker)

### Prerequisites

- Node.js 20+
- npm
- PostgreSQL

### 1) Backend Setup

```bash
cd Backend
npm install
```

Create `Backend/.env`:

```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/Exam?schema=public"
PORT=8000
```

Apply migrations and start backend:

```bash
npx prisma migrate deploy
npm run dev
```

### 2) Frontend Setup

```bash
cd Frontend
npm install
```

Create `Frontend/.env`:

```env
VITE_API_URL="http://localhost:8000"
```

Start frontend:

```bash
npm run dev
```

## Getting Started (Docker Compose)

From repository root:

```bash
docker compose up --build
```

Backend container startup runs:

- `npm run dev:docker`
- `prisma migrate deploy` before launching the API server

If you encounter schema or stale volume issues:

```bash
docker compose down -v
docker compose up --build
```

## Environment Variables

### Backend (`Backend/.env`)

- `DATABASE_URL` (required)
- `PORT` (optional, default: `8000`)

Example:

```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/Exam?schema=public"
PORT=8000
```

### Frontend (`Frontend/.env`)

- `VITE_API_URL` (optional, default: `http://localhost:8000`)

Example:

```env
VITE_API_URL="http://localhost:8000"
```

## API Reference

Base route: `/api/companies`

### Endpoints

- `POST /api/companies`
- `GET /api/companies`
- `GET /api/companies/:id`
- `PATCH /api/companies/:id`
- `PATCH /api/companies/:id/submit`
- `PUT /api/companies/:id/shareholders`

### Response Envelope

```json
{
  "statusCode": 200,
  "data": {},
  "message": "Operation successful",
  "success": true
}
```

### Business Rules

- Submitted companies cannot be updated.
- A company must have at least one shareholder before submission.
- Shareholders cannot be modified after company submission.

## Scripts

### Backend (`Backend`)

- `npm run dev` - Run backend in development mode
- `npm run migrate:deploy` - Apply Prisma migrations
- `npm run dev:docker` - Apply migrations, then start backend

### Frontend (`Frontend`)

- `npm run dev` - Run Vite dev server
- `npm run build` - Build production assets
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Troubleshooting

- `P2021: The table ... does not exist`
  - Cause: migrations were not applied to the target database.
  - Fix: run `npx prisma migrate deploy` (or restart Docker with migration-enabled backend startup).
- API/CORS issues in browser
  - Verify `VITE_API_URL` and backend origin configuration.
- Works locally but fails in Docker
  - Local PostgreSQL and Docker `db` service are different databases. Apply migrations to the one in use.
- Schema drift or corrupted local Docker state
  - Reset containers and volumes with `docker compose down -v`, then `docker compose up --build`.

## Roadmap

- Authentication and role-based admin access
- Stronger validation and richer form error UX
- Automated test suite and CI pipeline
- Better observability (structured logging, metrics, tracing)

## Author

Paras Limbu

## License

ISC


