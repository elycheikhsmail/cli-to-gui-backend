import { Context } from "https://deno.land/x/oak@v9.0.0/mod.ts"; 
import { ActionList } from "../../dbServices/action/list.ts";
// deno-lint-ignore require-await
export async function listActionCtrl(ctx: Context) { 
    const a =  new ActionList( )
    const actionList = a.getList()
  ctx.response.body =  [...actionList]
  
}
