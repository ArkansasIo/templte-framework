# Application Pages and Panels

The application layer is organized as pages containing panels, with panels containing sub-panels. Menus and submenus provide navigation between these regions.

```text
Application
├── Dashboard
├── Tasks
├── Reports
├── Account
│   ├── Profile
│   └── Security
└── Administration
    ├── Overview
    ├── Users
    ├── Roles & Permissions
    ├── Audit Log
    └── System
```

Components are deliberately separated from page markup so applications can replace individual panels without changing the engine core.