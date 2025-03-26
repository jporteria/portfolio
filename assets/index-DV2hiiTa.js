function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-B-ehaE1p.js","assets/index-17HhwABf.js","assets/index-VuizC9EQ.css","assets/index-DJx2Q1xy.js","assets/index-D9-WpRTB.js","assets/index-D6C4juRD.js","assets/index-ByX2tMnj.js","assets/index-DEvpf321.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-17HhwABf.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-B-ehaE1p.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DJx2Q1xy.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-D9-WpRTB.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-D6C4juRD.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-ByX2tMnj.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DEvpf321.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
