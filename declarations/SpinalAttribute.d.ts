import { Model, type Str, type Val } from 'spinal-core-connectorjs';
export declare class SpinalAttribute extends Model {
    label: Str;
    value: Str;
    lastModificationDate: Val;
    type?: Str;
    unit?: Str;
    constructor();
    constructor(label: string, value: string, type?: string, unit?: string);
}
