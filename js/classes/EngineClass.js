import { BaseClass } from './BaseClass.js';

export class EngineClass extends BaseClass {
  constructor(id = 'engine', options = {}) {
    super(id, options);
    this.state = 'stopped';
    this.modules = new Map();
  }
  register(module) {
    this.modules.set(module.id, module);
    return module;
  }
  start() {
    this.state = 'ready';
    for (const module of this.modules.values()) module.start?.(this);
    return this;
  }
  stop() {
    for (const module of this.modules.values()) module.stop?.();
    this.state = 'stopped';
  }
}
