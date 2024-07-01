function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-3I207bUn.js","assets/index-BxQLWY1X.js","assets/index-BuVCt6t1.css","assets/index-BZldtwhF.js","assets/index-COiSafaO.js","assets/index-D--7-BlY.js","assets/index-dEnqWpBh.js","assets/index-CMbQmD02.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-BxQLWY1X.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-3I207bUn.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-BZldtwhF.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-COiSafaO.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-D--7-BlY.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-dEnqWpBh.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-CMbQmD02.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
