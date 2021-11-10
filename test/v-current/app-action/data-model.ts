
import * as s from "https://cdn.skypack.dev/superstruct?dts"; 
export const ArticleSchema = s.object({
    idDomaine: s.number(),
    idCategorie: s.number(),
    idLieu: s.number(),
    prix: s.number(),
    desc: s.string(),
  });
 export  interface ArticleSchemaTs {
    idDomaine: number;
    idCategorie: number;
    idLieu: number;
    prix: number;
    desc: string;
  }
  
  export const ArticleOutSchema = s.object({
    id: s.number(),
    idDomaine: s.number(),
    idCategorie: s.number(),
    idLieu: s.number(),
    prix: s.number(),
    desc: s.string(),
  });
  