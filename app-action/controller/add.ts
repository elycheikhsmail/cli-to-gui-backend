import { Context } from "https://deno.land/x/oak@v9.0.0/mod.ts";
import { ActionAdd } from "../../dbServices/action/add.ts";
// import {
//     IAction
// } from "../../interfaces.ts";

export async function addActionCtrl(ctx: Context) {
    const a = new ActionAdd()
    // let name: string | null = null
    // let desc: string | null = ""
    let message = ""
    let isErrore = false



    if (ctx.request.hasBody) {
        const dataOak = ctx.request.body()
        if (dataOak.type == "json") {
            let { name, desc } = await dataOak.value
            console.log({ name, desc })
            if (!name || !desc) {
                message = "you must give name for action"
                isErrore = true
                desc = ""
            } else {
                // save 
                a.add({ name, desc })


            }


        }

    }
    ctx.response.body = {

    }
}