import { DbBase } from "../db_base.ts";
import {
    IAction
} from "../../interfaces.ts";

export class ActionAdd extends DbBase{
    constructor() {
        super();
    }

    add(data: IAction) {
        let sql = `INSERT INTO  action `;
        sql += `( name , desc ) `;
        sql += ` VALUES `;
        sql += `(?, ? ) `;
        const args = [1, data.name, data.desc];
        this.db.query(sql, args);
    }
}