import { Context } from "https://deno.land/x/oak@v9.0.0/mod.ts";  
import { ActionParamsList } from "../../dbServices/action-params/list.ts";
// deno-lint-ignore require-await
export async function listCtrl(ctx: Context) { 
    const a =  new ActionParamsList()
    const actionList = a.getList(1)
  ctx.response.body =  [...actionList]
  
}
