function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-XJALVYBw.js","assets/index-CAaapDFl.js","assets/index-CxvD6Os5.css","assets/index-BqOMHV2Y.js","assets/index-CYXMX5vr.js","assets/index-Cfl96QlJ.js","assets/index-Cbc323nf.js","assets/index-DiWfE3g-.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CAaapDFl.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-XJALVYBw.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-BqOMHV2Y.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-CYXMX5vr.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-Cfl96QlJ.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-Cbc323nf.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DiWfE3g-.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
