function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SizeUpdater-BYaq7n-e.js","assets/index-CAaapDFl.js","assets/index-CxvD6Os5.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-CAaapDFl.js";async function o(t,a=!0){await t.addParticleUpdater("size",async()=>{const{SizeUpdater:e}=await r(()=>import("./SizeUpdater-BYaq7n-e.js"),__vite__mapDeps([0,1,2]));return new e},a)}export{o as loadSizeUpdater};
