# FarmLokal Backend Assignment

## Overview
This project is a backend service built as part of the FarmLokal placement assignment.
It focuses on performance, reliability, and clean system design for a hyperlocal marketplace use case.

## Tech Stack
- Node.js + TypeScript
- Express
- MySQL
- Redis
- Axios

## Architecture Overview
- Express-based REST API
- MySQL for persistent product data
- Redis for:
  - OAuth token caching
  - Distributed locking
  - API response caching
  - Idempotency handling for webhooks

## Authentication (OAuth2 Client Credentials)
- Implements OAuth2 Client Credentials flow
- Access tokens are cached in Redis with TTL
- Redis-based locking ensures concurrent requests do not trigger multiple token fetches
- Token refresh happens automatically before expiry

## External API Integrations
### API A (Synchronous)
- Timeout handling
- Retry with exponential backoff
- Designed to be resilient to transient failures

### API B (Webhook-based)
- Callback endpoint implemented
- Redis-based idempotency ensures duplicate events are safely ignored
- Safe retry handling

## Product Listing API
### Endpoint
`GET /api/products`

### Features
- Cursor-based pagination
- Sorting and filtering support
- Indexed MySQL queries for performance
- Redis response caching

### Performance Strategy
- Cache-first reads using Redis
- Minimal database queries per request
- Indexes on frequently filtered and sorted fields
- Designed to scale to 1M+ records

## Reliability & Performance
- Redis caching
- Rate limiting / locking mechanisms
- Graceful handling of external API failures

## Trade-offs
- Used TTL-based cache invalidation for simplicity
- Mock OAuth provider used to focus on system design
- Simulated large dataset instead of real 1M rows

## Setup Instructions
```bash
npm install
npm run dev
