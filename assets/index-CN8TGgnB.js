function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-BJ7kKM2K.js","assets/index-BGJa8aaO.js","assets/index-BU1EBjZy.css","assets/index-gqqiTvPy.js","assets/index-BTnyzSTr.js","assets/index-CU0FOHMO.js","assets/index-7TLbQWOs.js","assets/index-DYj7CD9y.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-BGJa8aaO.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-BJ7kKM2K.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-gqqiTvPy.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-BTnyzSTr.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CU0FOHMO.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-7TLbQWOs.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DYj7CD9y.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
