# Database Schema Specification

## Core Models

### Identity & Multi-Tenancy
- **User**: User credentials, profile, global authentication credentials.
- **Organization**: Multi-tenant boundary account.
- **OrganizationMember**: User role mapping within an Organization (`OWNER`, `ADMIN`, `MEMBER`).
- **Session**: HttpOnly cookie session storage.
- **PasswordResetToken**: Time-bounded password recovery tokens.
- **Subscription**: Billing state (`TRIAL`, `ACTIVE`, `CANCELED`, `PAST_DUE`).

### Messaging & WhatsApp Infrastructure
- **WhatsAppAccount**: WABA IDs, Meta Phone Number ID, credentials.
- **Contact**: Audience directory scoped by `organizationId`.
- **Conversation**: Threads between Organization & Contact.
- **Message**: Inbound and outbound message records with idempotent key `(organizationId, waMessageId)`.
- **MessageStatus**: Progression states (`queued` -> `sent` -> `delivered` -> `read`).
- **WebhookEvent**: Raw payload audit trail.
