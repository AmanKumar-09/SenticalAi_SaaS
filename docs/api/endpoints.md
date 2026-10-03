# API Endpoint Contracts

## Health Check
- `GET /health` -> Returns system health status and timestamp.

## Authentication (`/api/v1/auth`)
- `POST /api/v1/auth/register` -> Register user, org, membership & trial subscription.
- `POST /api/v1/auth/login` -> Authenticate user & set httpOnly session cookie.
- `POST /api/v1/auth/logout` -> Invalidate session & clear cookies.
- `GET /api/v1/auth/me` -> Retrieve current authenticated user profile & active org context.
- `POST /api/v1/auth/forgot-password` -> Request password reset email.
- `POST /api/v1/auth/reset-password` -> Execute password reset with token.

## Webhook Endpoint (`/api/v1/webhooks/whatsapp`)
- `GET /api/v1/webhooks/whatsapp` -> Meta Webhook Verification Challenge.
- `POST /api/v1/webhooks/whatsapp` -> Meta Inbound Event Ingestion.
