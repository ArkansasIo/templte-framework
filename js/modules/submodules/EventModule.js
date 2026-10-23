import { Module } from '../Module.js';

export class EventModule extends Module {
  constructor() {
    super('events', { name:'Event Module', type:'core' });
    this.listeners = new Map();
  }
  on(type, handler) {
    if (!this.listeners.has(type)) this.listeners.set(type, new Set());
    this.listeners.get(type).add(handler);
    return () => this.off(type, handler);
  }
  off(type, handler) { this.listeners.get(type)?.delete(handler); }
  emit(type, payload) {
    const event = { type, payload, timestamp: Date.now() };
    for (const handler of this.listeners.get(type) ?? []) handler(event);
  }
}
