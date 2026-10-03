# Git Workflow & Branching Strategy

## Core Branches
- `main`: Production-ready stability branch.
- `develop`: Nightly integration branch for merged features.

## Feature Branching Conventions
- `feature/marketing-home`
- `feature/marketing-features`
- `feature/marketing-pricing`
- `feature/auth-pages`
- `feature/dashboard-shell`
- `feature/auth-backend`
- `feature/whatsapp-webhook`
- `feature/inbox`

## Rules
1. Never push directly to `main` or `develop`.
2. All PRs require passing CI runs (build, lint, typecheck, unit tests).
3. Follow `.github/CODEOWNERS` for PR review assignments.
