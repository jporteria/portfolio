function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ParallaxMover-BDkxpmf0.js","assets/index-17HhwABf.js","assets/index-VuizC9EQ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-17HhwABf.js";async function l(a,r=!0){await a.addMover("parallax",async()=>{const{ParallaxMover:o}=await t(()=>import("./ParallaxMover-BDkxpmf0.js"),__vite__mapDeps([0,1,2]));return new o},r)}export{l as loadParallaxMover};
