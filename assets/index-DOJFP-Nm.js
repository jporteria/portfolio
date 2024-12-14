function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-BFemT7Dl.js","assets/index-CMaD1vi-.js","assets/index-C2Vb2J9E.css","assets/index-BMJ-Zsfc.js","assets/index-66-wx1UK.js","assets/index-C9OsNa6y.js","assets/index-CnQ7q1Xr.js","assets/index-7R3ttD0b.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CMaD1vi-.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-BFemT7Dl.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-BMJ-Zsfc.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-66-wx1UK.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-C9OsNa6y.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CnQ7q1Xr.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-7R3ttD0b.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
