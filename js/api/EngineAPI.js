export class EngineAPI {
  constructor(engine) { this.engine = engine; }
  get status() { return { state:this.engine.state, modules:[...this.engine.modules.keys()] }; }
  getModule(id) { return this.engine.modules.get(id); }
  registerModule(module) { return this.engine.register(module); }
  start() { return this.engine.start(); }
  stop() { return this.engine.stop(); }
}
