import {createEngine} from './Engine.js';
import {PanelAPI} from '../api/PanelAPI.js';

const routes={
  '/':'index.html','/login':'pages/auth/login.html','/register':'pages/auth/register.html','/application':'pages/application/index.html','/tasks':'pages/application/tasks.html','/reports':'pages/application/reports.html','/profile':'pages/application/profile.html','/security':'pages/application/security.html','/admin':'pages/admin/index.html','/admin/users':'pages/admin/users.html','/admin/roles':'pages/admin/roles.html','/admin/audit':'pages/admin/audit.html','/admin/system':'pages/admin/system.html','/dashboard':'pages/subpages/dashboard.html','/settings':'pages/subpages/settings.html'
};
const engine=createEngine({routes});
engine.panelAPI=new PanelAPI(document);
engine.events.on('engine:booted',event=>console.info('HTML5 Engine booted',event));
engine.events.on('page:ready',event=>document.documentElement.dataset.page=event.payload.current);
window.HTML5Engine=Object.freeze({engine,api:engine.api,pageAPI:engine.pageAPI,moduleAPI:engine.moduleAPI,eventAPI:engine.eventAPI,auth:engine.auth,panelAPI:engine.panelAPI});
engine.start();
