import { DbBase } from "../db_base.ts";
import {
    IAction
} from "../../interfaces.ts";

export class ActionList extends DbBase {
    constructor() {
        super();
    }
    getList(): IAction[] {
        const query = this.db.prepareQuery<[number, string, string]>(
            `SELECT id, name, desc FROM  action ORDER BY id DESC`,
        );
        const actionArray: IAction[] = [];
        for (const [id, name, desc] of query.iter()) {
            actionArray.push({ id, name, desc });
        }
        query.finalize(); 
        return actionArray;
    }
}