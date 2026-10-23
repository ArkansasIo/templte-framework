import test from 'node:test';
import assert from 'node:assert/strict';
import { Registry } from '../../js/engine/Registry.js';
test('registry stores and retrieves items',()=>{const r=new Registry();r.register('x',{ok:true});assert.deepEqual(r.get('x'),{ok:true});assert.equal(r.has('x'),true)});