import { Context, Router } from "https://deno.land/x/oak@v9.0.0/mod.ts";
const routes = new Router(); 
// 
import { listCtrl } from "./controller/list.ts"; 
routes.get("/", async (ctx: Context) => await listCtrl(ctx)); 
//
import { addCtrl} from "./controller/add.ts"; 
routes.post("/", async (ctx: Context) => await addCtrl(ctx)); 
//
 
export { routes }
