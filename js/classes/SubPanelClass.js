import {PanelClass} from './PanelClass.js';
export class SubPanelClass extends PanelClass{constructor(id,options={}){super(id,{...options,className:options.className||'subpanel'})}}
