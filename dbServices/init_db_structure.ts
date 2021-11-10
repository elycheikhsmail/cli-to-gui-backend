import { DbBase } from "./db_base.ts";

export class InitDbStructure extends DbBase{
    constructor(){
        super();
    }
   
    createTable() { 
        const hugeTextSql = Deno.readTextFileSync("denoCliLess.sql")
        const sqlStatementArray = hugeTextSql.split(";").filter(
            v => v.trim().length > 0
        )

        for (const sql of sqlStatementArray) {
            try {
                console.log(sql)
                this.db.query(sql)

            } catch (_error) {
                console.log(_error)
                break

            }

        }
        this.db.close()

    }

}



// deno run --allow-all db.ts