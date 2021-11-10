import * as path from "https://deno.land/std@0.113.0/path/mod.ts";
export function getSpaBuildPath() {
    // const baseDir = path.dirname(Deno.cwd())
    // console.log(baseDir)
    const frontendDir = path.join(Deno.cwd(),
        //"server",
        "dist")
    console.log(frontendDir)
    return frontendDir

}
