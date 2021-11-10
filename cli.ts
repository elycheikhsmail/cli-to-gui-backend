// deno run --allow-all cli.ts

import { PrepareSqliteForTest } from "./dbServices/prepare_sqlite_for_test.ts";
const p = new PrepareSqliteForTest()
p.removeDbTestFileStorage()
p.saveDbDefaultFileAsDbTestFileStorage()