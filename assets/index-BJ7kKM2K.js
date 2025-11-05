function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-CvfSNU0l.js","assets/index-BGJa8aaO.js","assets/index-BU1EBjZy.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-BGJa8aaO.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-CvfSNU0l.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{_ as loadBaseMover};
