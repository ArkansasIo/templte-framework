import {EngineClass} from '../classes/EngineClass.js';
import {EngineAPI} from '../api/EngineAPI.js';
import {PageAPI} from '../api/PageAPI.js';
import {ModuleAPI} from '../api/ModuleAPI.js';
import {EventAPI} from '../api/EventAPI.js';
import {AuthAPI} from '../auth/AuthAPI.js';
import {NavigationAPI} from '../api/NavigationAPI.js';
import {StorageAPI} from '../api/StorageAPI.js';
import {Router} from './Router.js';
import {EventModule} from '../modules/submodules/EventModule.js';
import {UIModule} from '../modules/submodules/UIModule.js';
import {MenuModule} from '../modules/submodules/MenuModule.js';
import {NavigationModule} from '../modules/submodules/NavigationModule.js';
import {PageModule} from '../modules/submodules/PageModule.js';
import {FormModule} from '../modules/submodules/FormModule.js';
import {TableModule} from '../modules/submodules/TableModule.js';
import {PanelModule} from '../modules/submodules/PanelModule.js';
import {AuthModule} from '../modules/submodules/AuthModule.js';
import {AdminModule} from '../modules/submodules/AdminModule.js';

export function createEngine(options={}){
 const engine=new EngineClass(options.id||'html5-engine',options); engine.router=new Router(options.routes||{}); engine.events=new EventModule(); engine.register(engine.events);
 [new UIModule(),new MenuModule(),new NavigationModule(),new PageModule(),new FormModule(),new TableModule(),new PanelModule(),new AuthModule(),new AdminModule()].forEach(m=>engine.register(m));
 engine.api=new EngineAPI(engine); engine.pageAPI=new PageAPI(engine); engine.moduleAPI=new ModuleAPI(engine); engine.eventAPI=new EventAPI(engine); engine.navigationAPI=new NavigationAPI(engine); engine.storageAPI=new StorageAPI(); engine.auth=new AuthAPI(engine); return engine;
}
