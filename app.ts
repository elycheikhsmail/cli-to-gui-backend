import { getSpaBuildPath } from "./config/settings.ts";
const p = getSpaBuildPath()
console.log("getSpaBuildPath : ",p)
 
import { parse } from "https://deno.land/std@0.105.0/flags/mod.ts";

 import { app } from "./server_routes/add_routes.ts";
 console.log("app server cwd :", Deno.cwd())

const { args } = Deno;
const DEFAULT_PORT = 3200; 
const argPort = parse(args).port; 
const port = argPort ? Number(argPort) : DEFAULT_PORT;
console.log({ port });
console.log("=====================================================================================")

app.addEventListener("listen", ({ hostname, port, secure }) => {
    console.log(
      `Listening on: ${secure ? "https://" : "http://"}${hostname ??
        "localhost"}:${port}`,
    );
    // run test-worker 
  });

await app.listen({ port });

 
// deno run --allow-all --unstable app.ts

