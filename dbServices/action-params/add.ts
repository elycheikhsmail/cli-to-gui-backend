import { DbBase } from "../db_base.ts";
import { 
    IActionParams
} from "../../interfaces.ts";

export class ActionParamsAdd extends DbBase{
    constructor() {
        super();
    }
    add(data: IActionParams) {
        let sql = `INSERT INTO  actionParams `;
        sql += `( action_id, key , dataType) `;
        sql += ` VALUES `;
        sql += `(?, ?, ? ) `;
        const args = [data.actionId, data.key, data.dataType];
        this.db.query(sql, args);
      }
    
}