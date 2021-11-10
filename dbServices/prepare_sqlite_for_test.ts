 import { SqliteConstante } from "./db_base.ts";

export class PrepareSqliteForTest extends SqliteConstante{
    constructor(){
        super()
    }


    removeDbTestFileStorage(){
        // remove denoCliLessTest.sqlite3 if exist
       // let isRemoved = false
        try {
            Deno.remove(this.dbPathTest) 
            // console.log(" ")
            // console.log("sqlite file storage for test is removed, and will be replaced by fresh one ")
            // console.log(" ")
        } catch (_error) {
            console.log(" file : ",this.dbPathTest, " dosn't exist but processus will continue without any pb ")
        } 

    }

    saveDbDefaultFileAsDbTestFileStorage(){
        try {
            Deno.copyFile(this.dbPathDefault,this.dbPathTest)
            console.log("copy fresh sqlite file for test ")
        } catch (_error) {
            console.log(_error)
        }
    }





}
