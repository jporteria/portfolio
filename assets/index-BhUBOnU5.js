function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CrDyZac3.js","assets/index-CzlLxZex.js","assets/index-Z62yQ691.css","assets/index-CH6iyGyT.js","assets/index-CqbX1Lru.js","assets/index-Bx4NBob8.js","assets/index-BekgIdKH.js","assets/index-DJFgnB-S.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CzlLxZex.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-CrDyZac3.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-CH6iyGyT.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-CqbX1Lru.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-Bx4NBob8.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BekgIdKH.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DJFgnB-S.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
