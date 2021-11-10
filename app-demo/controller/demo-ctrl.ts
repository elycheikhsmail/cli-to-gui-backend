import { Context } from "https://deno.land/x/oak@v9.0.0/mod.ts"; 
// deno-lint-ignore require-await
export async function demoCtrl(ctx: Context) { 
  ctx.response.body = "<h1>demo app </h1>";
  ctx.response.headers.append(
    "content-type",
    "text/html",
  );
}
