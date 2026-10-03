# Developer Onboarding Guide

## Quick Start Requirements
- Node.js >= 22.0.0
- Docker & Docker Compose
- npm >= 10.0.0

## Getting Started

1. **Clone & Install Dependencies**:
   ```bash
   git clone <repo-url>
   cd sentical-ai
   npm install
   ```

2. **Copy Environment Configuration**:
   ```bash
   cp .env.example .env
   ```

3. **Start Infrastructure Services**:
   ```bash
   docker compose up -d
   ```

4. **Launch Local Monorepo Workspace**:
   ```bash
   npm run dev
   ```

## Local Port Allocation
- **Marketing App**: http://localhost:3000
- **Web Dashboard**: http://localhost:5173
- **Express API**: http://localhost:4000
- **PostgreSQL**: localhost:5432
- **Redis**: localhost:6379
