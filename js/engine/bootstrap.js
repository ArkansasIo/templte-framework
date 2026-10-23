import { EngineClass } from '../classes/EngineClass.js';
import { EngineAPI } from '../api/EngineAPI.js';
import { EventModule } from '../modules/submodules/EventModule.js';
import { UIModule } from '../modules/submodules/UIModule.js';
import { create } from '../utils/dom.js';

const engine = new EngineClass('html5-engine');
engine.events = new EventModule();
engine.register(engine.events);
engine.register(new UIModule());

const api = new EngineAPI(engine);
engine.api = api;

engine.events.on('engine:booted', event => {
  console.info('Engine event:', event);
  renderModuleCards();
});

function renderModuleCards() {
  const target = document.querySelector('#modules');
  if (!target) return;
  target.replaceChildren(...[...engine.modules.values()].map(module => {
    const card = create('article', { class:'card' });
    card.innerHTML = `<h3>${module.definition.name}</h3>
      <p class="muted">Type: ${module.definition.type}</p>
      <p>Version: ${module.definition.version}</p>
      <p class="status-ok">Enabled: ${module.definition.enabled}</p>`;
    return card;
  }));
}

document.querySelector('[data-menu-toggle]')?.addEventListener('click', () => {
  document.querySelector('[data-sidebar]')?.classList.toggle('open');
});

window.HTML5Engine = Object.freeze({ engine, api });
engine.start();
renderModuleCards();
