import { Context, Router } from "https://deno.land/x/oak@v9.0.0/mod.ts";
const routes = new Router(); 
// 
import { listActionCtrl } from "./controller/list.ts"; 
routes.get("/", async (ctx: Context) => await listActionCtrl(ctx)); 
//
import { addActionCtrl } from "./controller/add.ts";
routes.post("/",async (ctx: Context) => await addActionCtrl(ctx) )

export { routes }
