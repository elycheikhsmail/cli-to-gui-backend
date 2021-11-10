import { Context } from "https://deno.land/x/oak@v9.0.0/mod.ts";
import { ActionParamsAdd } from "../../dbServices/action-params/add.ts";
export async function addCtrl(ctx: Context) {
    const ap = new ActionParamsAdd()
    let message = ""
    // deno-lint-ignore no-unused-vars
    let isErrore = false

    if (ctx.request.hasBody) {
        const dataOak = ctx.request.body()
        if (dataOak.type == "json") {
            let { key , dataType } = await dataOak.value
            console.log({ key, dataType })
            if (key && dataType) {
                 key = String(key);
                const dataTypeStr = String(dataType)
                dataType = parseInt(dataTypeStr)
                ap.add({
                    actionId: 1,
                    key,
                    dataType
                })
                message = "action params is add succefully"

            } else {
                // stus 400
                message = "you must give name for action"
                isErrore = true

            }

        } else {
            message = "invalide json"
            isErrore = true

        }

    }
    ctx.response.body = {
        message
    }
}