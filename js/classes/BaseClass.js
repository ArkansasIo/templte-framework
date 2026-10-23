export class BaseClass {
  constructor(id, options = {}) {
    this.id = id;
    this.options = { ...options };
    this.createdAt = Date.now();
  }
  configure(options = {}) { Object.assign(this.options, options); return this; }
  destroy() {}
}
