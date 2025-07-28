import { Model, type Val, type Str } from 'spinal-core-connectorjs';
export declare class SpinalURL extends Model {
    date: Val;
    URL: Str;
    name: Str;
    constructor();
    constructor(name: string, url: string);
}
