function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CjhJcWYi.js","assets/index-DKRP5Bqq.js","assets/index-BuVCt6t1.css","assets/index-vap-3Rv8.js","assets/index-sOLiCbmQ.js","assets/index-Cm_CTY8_.js","assets/index-CFyYQej1.js","assets/index-NsfMriom.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DKRP5Bqq.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-CjhJcWYi.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-vap-3Rv8.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-sOLiCbmQ.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-Cm_CTY8_.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CFyYQej1.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-NsfMriom.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
