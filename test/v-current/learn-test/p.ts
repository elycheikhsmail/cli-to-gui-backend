import * as path from "https://deno.land/std@0.113.0/path/mod.ts";
console.log("test")
const p = path.dirname(Deno.cwd())
console.log(p)
const p2 = path.join(p,"sidi")
console.log(p2)

// deno run --allow-read p.ts