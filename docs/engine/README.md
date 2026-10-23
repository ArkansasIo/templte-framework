# Engine Runtime

`js/engine/Engine.js` is the composition root. It creates the engine, router, event bus, APIs and UI/authentication modules.

## Runtime layers

1. Engine class and lifecycle
2. API layer
3. Router and registry
4. Core/UI modules
5. Pages, panels and sub-panels
6. Components and templates
7. CSS themes and responsive styles

The browser layer is intentionally framework-agnostic and can be connected to a production backend through the HTTP utility and server-side APIs.
