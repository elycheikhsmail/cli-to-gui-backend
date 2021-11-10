const worker = new Worker(new URL("./worker.js", import.meta.url).href, {
    type: "module",
    deno: {
      namespace: true,
      permissions: {
        env: false,
        hrtime: false,
        net: "inherit",
        ffi: false,
        read: false,
        run: false,
        write: false,
      },
    },
  });