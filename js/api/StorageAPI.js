import {storage} from '../utils/storage.js';
export class StorageAPI{get(key,fallback=null){return storage.get(key,fallback)}set(key,value){return storage.set(key,value)}remove(key){return storage.remove(key)}}
