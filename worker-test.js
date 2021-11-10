

self.onmessage = (e) => {
    if (e.data == "start") {
        console.log("worker start")
        //Deno.chdir("./server")
        console.log("worcker test directory : ", Deno.cwd())
        const cmd = [Deno.execPath(), "test", "--allow-all", "test/v-current/app-action/list.test.ts"]

        const p = Deno.run({
            cmd,
            stdout: "piped",
            stderr: "piped",
        });
        p.close()
        self.postMessage("test-done")

    }
    if (e.data == "stop") {

        console.log("worker test will stopped ")
        self.close();
    }

};

// deno run  --allow-all --unstable server/app.ts

// deno run  --allow-all --unstable app.ts