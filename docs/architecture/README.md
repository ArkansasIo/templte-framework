# Architecture

The framework is layered: browser entry point -> engine bootstrap -> APIs -> registry/router -> modules -> submodules -> classes/components -> pages/templates -> CSS. Modules should be isolated and communicate through the event bus rather than directly coupling unrelated systems.