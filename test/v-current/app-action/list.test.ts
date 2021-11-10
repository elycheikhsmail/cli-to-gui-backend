// deno test --allow-all test/v-current/app-action/list.test.ts

import * as s from "https://cdn.skypack.dev/superstruct?dts";
import * as t from "https://deno.land/std@0.102.0/testing/asserts.ts";

import { fetchHepler } from "../libs/fetch-as-class.ts";
import { baseUrl } from "../baseUrl.ts";
fetchHepler.setBaseUrl(baseUrl); 

const ArticleOutSchema = s.object({
  id: s.number(),
  idDomaine: s.number(),
  idCategorie: s.number(),
  idLieu: s.number(),
  prix: s.number(),
  desc: s.string(),
});
 
 
Deno.test(
  "test getlist article",
  async () => {
    fetchHepler.setPathname("/api/v1/action");
    fetchHepler.setToken("");
    fetchHepler.setHeaders();
    const response = await fetchHepler.GET();

    const bodyAsJson = await response.json();
    t.assertEquals(response.status, 200);
    // const v = s.validate(bodyAsJson[0], ArticleOutSchema);
    // console.log({ v });
    // const b = s.is(bodyAsJson[0], ArticleOutSchema);
    // t.assertEquals(b, true);
    // array length
    t.assertEquals(bodyAsJson.length, 7);

  },
);