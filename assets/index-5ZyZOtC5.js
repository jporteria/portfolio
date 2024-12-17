function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-DZ9G_Fj0.js","assets/index-Bcc-uCgk.js","assets/index-CTpBdXjM.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-Bcc-uCgk.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-DZ9G_Fj0.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{_ as loadBaseMover};
