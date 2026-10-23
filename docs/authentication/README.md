# Authentication

The framework provides a browser-facing authentication abstraction for users and administrators.

## Roles

- `user`: profile and normal application access.
- `administrator`: user, role, audit and system administration.
- `super-admin`: reserved full administrative permission set.

## Production requirements

The browser store is a UI/session scaffold only. A production deployment must authenticate against a server API, hash passwords with a modern password hashing algorithm, use secure HttpOnly/SameSite cookies or an equivalent secure session mechanism, enforce authorization server-side, rate-limit authentication endpoints, protect state-changing requests against CSRF where applicable, and record security-relevant audit events.