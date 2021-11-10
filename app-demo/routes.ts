import { Context, Router } from "https://deno.land/x/oak@v9.0.0/mod.ts";
const routes = new Router(); 
// 

import { demoCtrl } from "./controller/demo-ctrl.ts";
routes.get("/", async (ctx: Context) => await demoCtrl(ctx)); 

export { routes }
