// Types and contracts for the engine.
// JavaScript JSDoc types keep the engine usable without a TypeScript build step.

/** @typedef {'core'|'ui'|'data'|'network'|'storage'|'plugin'} ModuleType */
/** @typedef {'booting'|'ready'|'paused'|'stopped'|'error'} EngineState */
/** @typedef {{id:string,name:string,type:ModuleType,version:string,enabled:boolean}} ModuleDefinition */
/** @typedef {{type:string,payload:unknown,timestamp:number}} EngineEvent */
export const EngineTypes = Object.freeze({
  ModuleType: Object.freeze({ CORE:'core', UI:'ui', DATA:'data', NETWORK:'network', STORAGE:'storage', PLUGIN:'plugin' }),
  EngineState: Object.freeze({ BOOTING:'booting', READY:'ready', PAUSED:'paused', STOPPED:'stopped', ERROR:'error' })
});
