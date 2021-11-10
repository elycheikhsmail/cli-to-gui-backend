export const w = new Worker(new URL("./worker-test.js", import.meta.url).href, {
    type: "module",
    deno: {
      namespace: true,
      permissions: {
        env: true,
        hrtime: false,
        net: true,
        ffi: false,
        read: true,
        run: true,
        write: false,
      },
    },
  });

 
 


//   deno run --allow-read --allow-run --allow-net --allow-env --unstable run.js

//   deno run --allow-all  --unstable run.js

 
 