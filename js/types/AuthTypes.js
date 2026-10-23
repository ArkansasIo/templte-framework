/** @typedef {{id:string,username:string,email?:string,roles:string[],status:'active'|'disabled'|'pending'}} UserDefinition */
/** @typedef {{authenticated:boolean,user?:UserDefinition,roles:string[],expiresAt?:number}} SessionDefinition */
export const AccountStatus=Object.freeze({ACTIVE:'active',DISABLED:'disabled',PENDING:'pending'});
export const Role=Object.freeze({USER:'user',ADMIN:'administrator',SUPER_ADMIN:'super-admin'});
