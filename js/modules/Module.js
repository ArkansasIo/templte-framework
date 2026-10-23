import { BaseClass } from '../classes/BaseClass.js';

export class Module extends BaseClass {
  constructor(id, definition = {}) {
    super(id, definition);
    this.definition = {
      id,
      name: definition.name ?? id,
      type: definition.type ?? 'core',
      version: definition.version ?? '0.1.0',
      enabled: definition.enabled ?? true
    };
  }
  start() {}
  stop() {}
}
