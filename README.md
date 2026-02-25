🌾 FarmLokal Backend Assignment

A high-performance backend service built as part of the FarmLokal Placement Assignment.
Designed with scalability, reliability, and clean system architecture principles for a hyperlocal marketplace use case.

🚀 Tech Stack

Node.js

TypeScript

Express.js

MySQL

Redis

Axios

🏗 Architecture Overview

This project follows a clean and scalable backend architecture:

REST API built using Express

MySQL for persistent product storage

Redis for performance optimization and reliability mechanisms:

OAuth token caching

Distributed locking

API response caching

Webhook idempotency handling

🔐 Authentication — OAuth2 Client Credentials

Implemented OAuth2 Client Credentials flow with performance optimizations:

Access tokens cached in Redis with TTL

Redis-based distributed locking prevents concurrent token fetches

Automatic token refresh before expiry

Reduced external auth provider calls

🔌 External API Integrations
API A (Synchronous Integration)

Request timeout handling

Retry mechanism with exponential backoff

Graceful degradation on transient failures

Built for resilience

API B (Webhook-Based Integration)

Webhook callback endpoint implemented

Redis-based idempotency handling

Duplicate event protection

Safe retry support

