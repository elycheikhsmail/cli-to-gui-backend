import { w } from "./run.js";
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
// deno "test", "--allow-all", "test/v-current/app-action/list.test.ts"
app.addEventListener("listen", ({ hostname, port, secure }) => {
    w.postMessage("start")
    // run test-worker 
    w.onmessage =(e)=>{
        console.log("e.data : ", e.data)
        if(e.data == "test-done"){
            w.postMessage("stop")
        }

    }
    

    const _p = Deno.run({
        cmd: [Deno.execPath(), "test",  "--allow-all",  "test/v-current/app-action/list.test.ts"]
    });
     
  });

await app.listen({ port });

 
// deno run --allow-all --unstable appTest.ts

