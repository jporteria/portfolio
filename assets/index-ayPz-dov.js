function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-DzyyY5QU.js","assets/index-C4C0k3ZW.js","assets/index-s2osDVnS.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-C4C0k3ZW.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-DzyyY5QU.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{_ as loadBaseMover};
