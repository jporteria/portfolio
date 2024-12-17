function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SizeUpdater-DW7rUb9x.js","assets/index-Bcc-uCgk.js","assets/index-CTpBdXjM.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-Bcc-uCgk.js";async function o(t,a=!0){await t.addParticleUpdater("size",async()=>{const{SizeUpdater:e}=await r(()=>import("./SizeUpdater-DW7rUb9x.js"),__vite__mapDeps([0,1,2]));return new e},a)}export{o as loadSizeUpdater};
