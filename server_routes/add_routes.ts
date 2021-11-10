// import { getSpaBuildPath } from "../config/settings.ts";
// import { Context, send } from "https://deno.land/x/oak@v9.0.0/mod.ts";

import { app } from "./init_app.ts";
//
import { routes as demoRoutes } from "../app-demo/routes.ts";
app.use(demoRoutes.prefix("/api/demo").routes());
app.use(demoRoutes.allowedMethods());
//
import { routes as ActionRoutes } from "../app-action/routes.ts";
app.use( ActionRoutes.prefix("/api/v1/action").routes())
app.use(ActionRoutes.allowedMethods())
//
import { routes as ActionParamsRoutes } from "../app-action-params/routes.ts";
app.use( ActionParamsRoutes.prefix("/api/v1/action-params").routes())
app.use( ActionParamsRoutes.allowedMethods())


// app.use(
//     async (ctx: Context) => {
//         await send(
//             ctx,
//             ctx.request.url.pathname,
//             {
//                 root: getSpaBuildPath(),
//                 index: "index.html"
//             }
//         )
//     }
// )


export { app }