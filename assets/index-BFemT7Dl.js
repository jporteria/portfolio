function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-DhleDind.js","assets/index-CMaD1vi-.js","assets/index-C2Vb2J9E.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-CMaD1vi-.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-DhleDind.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{_ as loadBaseMover};
