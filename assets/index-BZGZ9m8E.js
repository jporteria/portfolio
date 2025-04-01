function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ParallaxMover-C_QM60Eb.js","assets/index-C4C0k3ZW.js","assets/index-s2osDVnS.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-C4C0k3ZW.js";async function l(a,r=!0){await a.addMover("parallax",async()=>{const{ParallaxMover:o}=await t(()=>import("./ParallaxMover-C_QM60Eb.js"),__vite__mapDeps([0,1,2]));return new o},r)}export{l as loadParallaxMover};
