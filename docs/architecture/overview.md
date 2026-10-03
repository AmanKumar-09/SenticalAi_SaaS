# Sentical AI - System Architecture Overview

## Overview
Sentical AI is a multi-tenant B2B SaaS platform for WhatsApp Business Automation and Customer Engagement.

## Monorepo Topology
```
sentical-ai/
├── apps/
│   ├── marketing/     # Public Marketing Site (React + Vite + Tailwind CSS) [Port 3000]
│   ├── web/           # Authenticated Dashboard (React + Vite + shadcn/ui + TanStack) [Port 5173]
│   ├── api/           # Core API Engine (Express 5 + TypeScript + Zod) [Port 4000]
│   └── worker/        # Asynchronous Job Worker (BullMQ + Node.js)
├── packages/
│   ├── db/            # Database Schema & Client (Prisma + PostgreSQL)
│   ├── shared/        # Shared Types, Schemas, Constants & Contracts
│   ├── ui/            # Reusable UI Design System Components
│   ├── whatsapp/      # Meta WhatsApp Cloud API Client & Webhook Helpers
│   └── config/        # Shared Tooling Configurations
├── docs/              # System Architecture & Development Guides
└── .github/           # Workflows, CODEOWNERS, PR Templates
```

## Architectural Principles
1. **Strict Multi-Tenancy**: Every business record is isolated by `organizationId`.
2. **Asynchronous Webhooks**: Meta webhooks return `200 OK` within milliseconds and delegate heavy processing to BullMQ workers.
3. **Decoupled Workflows**: Frontends communicate exclusively through the API; database access is strictly encapsulated in backend services.
