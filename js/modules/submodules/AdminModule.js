import {Module} from '../Module.js';
import {Roles} from '../../auth/RoleGuard.js';
export class AdminModule extends Module{constructor(){super('admin',{name:'Administrator Module',type:'core'});this.requiredRole=Roles.ADMIN}start(engine){this.engine=engine;document.querySelectorAll('[data-admin-only]').forEach(el=>{if(!engine.auth?.store?.hasRole(this.requiredRole))el.hidden=true})}}
