function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CTNtOh5Y.js","assets/index-B0GVQeQv.js","assets/index-TyCvOJvC.css","assets/index-kBwo3C0M.js","assets/index-BX3iM01D.js","assets/index-B3uulId5.js","assets/index-L7Lk_nCv.js","assets/index-BGgbEskD.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-B0GVQeQv.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-CTNtOh5Y.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-kBwo3C0M.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-BX3iM01D.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-B3uulId5.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-L7Lk_nCv.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-BGgbEskD.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
