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

🔐 Authentication – OAuth2 Client Credentials

Implemented OAuth2 Client Credentials flow with performance optimizations:

Access tokens cached in Redis with TTL

Redis-based distributed locking prevents multiple concurrent token fetches

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

🛒 Product Listing API
Endpoint
GET /api/products

Features

Cursor-based pagination

Sorting support

Filtering support

Indexed MySQL queries

Redis response caching

⚡ Performance Strategy

Designed to scale for 1M+ records:

Cache-first read strategy using Redis

Optimized indexed queries

Minimal database calls per request

TTL-based cache invalidation

Reduced external API dependency load

🛡 Reliability & System Design

Redis-based locking mechanisms

API response caching

Graceful external API failure handling

Idempotent webhook processing

Fault-tolerant architecture patterns

⚖️ Trade-offs & Design Decisions

Used TTL-based cache invalidation for simplicity

Mock OAuth provider used to focus on system architecture

Simulated large dataset instead of actual 1M records

Prioritized clean design and scalability patterns over feature breadth

📦 Setup Instructions
1️⃣ Install Dependencies
npm install

2️⃣ Run in Development Mode
npm run dev

📂 Project Structure (Example)
src/
 ├── controllers/
 ├── services/
 ├── repositories/
 ├── middlewares/
 ├── utils/
 ├── config/
 └── index.ts

🎯 Key Highlights

Clean system design

Scalable architecture patterns

Production-grade caching strategy

Distributed locking

Idempotency handling

Retry + backoff strategy

Performance-oriented database design

📌 Assignment Goal

To demonstrate:

Backend system design skills

Performance optimization strategies

Reliability engineering practices

Clean and maintainable TypeScript architecture

👨‍💻 Author

Aviral Shukla
B.Tech Computer Science
