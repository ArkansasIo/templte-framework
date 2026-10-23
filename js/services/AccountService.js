import {AuthStore} from '../auth/AuthStore.js';
export class AccountService{constructor(store=new AuthStore()){this.store=store}profile(){return this.store.get()?.user||null}updateProfile(profile){const session=this.store.get();if(!session)throw new Error('Not authenticated');return this.store.set({...session,user:{...session.user,...profile}})}signOut(){this.store.clear()}}
