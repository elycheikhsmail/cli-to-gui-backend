import { Application } from "https://deno.land/x/oak@v9.0.0/mod.ts";  
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";

const app = new Application();
app.use(oakCors());
export { app };