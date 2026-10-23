import { Module } from '../Module.js';

export class UIModule extends Module {
  constructor() { super('ui', { name:'UI Module', type:'ui' }); }
  start(engine) {
    document.querySelectorAll('[data-action="boot"]').forEach(button => {
      button.addEventListener('click', () => engine.events.emit('engine:booted', { state:engine.state }));
    });
  }
}
