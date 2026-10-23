# HTML5 API Engine

A modular HTML5 application framework organized around an engine core, APIs, routing, modules, classes, typed contracts, pages, panels, sub-panels, menus and CSS.

## Version

`0.1.0-alpha`

## Architecture

```text
Browser
  -> Engine Bootstrap
  -> API Layer
  -> Router / Registry
  -> Modules / Submodules
  -> Classes / Components
  -> Application Pages
  -> Panels / Sub-panels
  -> Templates / CSS / Themes
```

## Account system

- User registration and login UI
- Session abstraction
- Password policy
- User / administrator / super-admin roles
- Role guard
- Account and security panels
- Administrator console
- User, role, audit and system administration panels

## Application system

- Dashboard
- Tasks
- Reports
- Profile
- Security
- Nested menus and submenus
- Responsive panels and tables

## Development

```bash
npm test
python -m http.server 8080
```

Open `http://localhost:8080/` after starting the local server.

## Security boundary

The browser authentication implementation is a UI/session scaffold. It is not a production identity provider. Production deployments must implement server-side authentication, password hashing, secure sessions, authorization enforcement, rate limiting, CSRF protections where applicable, and audit logging.
