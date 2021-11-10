import { DbBase } from "../db_base.ts";
import {
    //IAction,
    IActionParamsShow
} from "../../interfaces.ts";

export class ActionParamsList extends DbBase {
    constructor() {
        super();
    }

    getList(actionId: number) {
        const sqlArray = [
            "SELECT ",
            // col start
            " a.key ,",
            " d.typeName , ",
            " a.id AS idA , ",
            " a.dataType ,  ",
            " a.action_id   ",
            // col end
            " FROM actionParams AS a INNER JOIN dataTypes  AS d  ",
            "  ON ( a.dataType = d.id  )   ",
            "  WHERE a.action_id = ? ",
            "ORDER BY idA DESC"
        ]

        const sql = sqlArray.join(" ")
        const query = this.db.prepareQuery<[string, string, number]>(sql);
        const actionParamsArray: IActionParamsShow[] = [];
        for (const [key, typeName, id] of query.iter([actionId])) {
            //console.log(key,typeName)
            actionParamsArray.push({ key, typeName, id });
        }
        query.finalize();
        console.log(actionParamsArray);
        return actionParamsArray;
    }



}