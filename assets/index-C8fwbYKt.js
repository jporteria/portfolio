function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-ayPz-dov.js","assets/index-C4C0k3ZW.js","assets/index-s2osDVnS.css","assets/index-67EMlcNB.js","assets/index-BhQZdII_.js","assets/index-BhQEZiJy.js","assets/index-BnoiEM_u.js","assets/index-DARO5Zv9.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-C4C0k3ZW.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-ayPz-dov.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-67EMlcNB.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-BhQZdII_.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BhQEZiJy.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BnoiEM_u.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DARO5Zv9.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
