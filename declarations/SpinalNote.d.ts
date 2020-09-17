import { Model } from "spinal-core-connectorjs_type";
export interface ViewStateInterface {
    viewState: string;
    objectState: string;
    [key: string]: any;
}
export declare class SpinalNote extends Model {
    constructor(username: string, message: string, userId: string, type?: string, file?: any, viewPoint?: ViewStateInterface);
}
