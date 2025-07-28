import { Model, type Str } from 'spinal-core-connectorjs';
export declare class SpinalFile extends Model {
    id: Str;
    name: Str;
    constructor();
    constructor(id: string, name: string);
}
