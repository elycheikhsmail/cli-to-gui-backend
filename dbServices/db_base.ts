import { DB } from "https://deno.land/x/sqlite@v3.1.1/mod.ts";

export class SqliteConstante {
    dbPathDefault = "denoCliLess.sqlite3"
    dbPathTest = "denoCliLessTest.sqlite3"
    _dbPath = "denoCliLess.sqlite3"
    setDbPath(dbPath: string) {
        this._dbPath = dbPath
    }
    _sqlfileStatementPath = "denoCliLess.sql"
    setSqlfileStatementPath(sqlfileStatementPath: string) {
        this._sqlfileStatementPath = sqlfileStatementPath
    }

}

export class DbBase extends SqliteConstante {
    db: DB;
    setDb() {
        this.db = new DB(this._dbPath);
    }

    constructor() {
        super()
        // read DB_PATH from env var 
        const mode = Deno.env.get("mode")
        if (mode && mode == "test") {
            this.setDbPath(this.dbPathTest)
        } else {
            this.setDbPath(this.dbPathDefault)
        }
        this.db = new DB(this._dbPath);
    }














}