import {Module} from '../Module.js';
import {AuthStore} from '../../auth/AuthStore.js';
export class AuthModule extends Module{constructor(){super('auth',{name:'Authentication Module',type:'core'});this.store=new AuthStore()}start(engine){this.engine=engine;engine.authStore=this.store;document.querySelectorAll('[data-require-auth]').forEach(el=>{if(!this.store.isAuthenticated())el.hidden=true})}}
