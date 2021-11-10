// deno test --allow-all --location=http://localhost --unstable app.test.ts

import * as s from "https://cdn.skypack.dev/superstruct?dts";
import * as t from "https://deno.land/std@0.102.0/testing/asserts.ts";

import { fetchHepler } from "../libs/fetch-as-class.ts";
import { baseUrl } from "../baseUrl.ts";
fetchHepler.setBaseUrl(baseUrl); 
// data
import { data,dataArray  } from "./data.ts";

import { ArticleOutSchema,ArticleSchema,ArticleSchemaTs} from "./data-model.ts";




// deno test --allow-all --location=http://localhost --unstable app.test.ts
 


 

async function addArticle(data: ArticleSchemaTs) {
  fetchHepler.setPathname("/api/article/user"); 
  fetchHepler.setToken("");
  fetchHepler.setHeaders();
  const b = s.is(data, ArticleSchema);
  if (b) {
    const dataStr = JSON.stringify(data);
    const response = await fetchHepler.POST(dataStr);
    const bodyAsJson = await response.text();
    console.log(bodyAsJson);
    t.assertEquals(response.status, 201);
  } else {
    const x = 1;
    t.assertEquals(x, 2);
  }
}

Deno.test(
  "test add first article",
  async () => {
    await addArticle( dataArray[0]);
  },
);

Deno.test(
  "test add  second article",
  async () => {
    await addArticle( dataArray[1]);
     
  },
);

Deno.test(
  "test add  3 article",
  async () => {
    await addArticle( dataArray[2]);
    
  },
);
Deno.test(
  "test add  4 article",
  async () => {
    await addArticle( dataArray[3]);
 
  },
);
Deno.test(
  "test add  3 article",
  async () => {
    await addArticle( dataArray[4]);
   
  },
); 


 