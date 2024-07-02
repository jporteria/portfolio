function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-Bwg15W1x.js","assets/index-CHqFclhX.js","assets/index-BuVCt6t1.css","assets/index-6WTMgliQ.js","assets/index-DXrKekMX.js","assets/index-CR2HG_4t.js","assets/index-CDUi7OFJ.js","assets/index-DoIfgmbF.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CHqFclhX.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-Bwg15W1x.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-6WTMgliQ.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-DXrKekMX.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CR2HG_4t.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CDUi7OFJ.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DoIfgmbF.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
