function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-BTMmKll8.js","assets/index-DZJBMwcr.js","assets/index-s2osDVnS.css","assets/index-BiU5x78K.js","assets/index-BF-Rp_ar.js","assets/index-CaM1K8mx.js","assets/index-BkEoGitx.js","assets/index-BelaySM_.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DZJBMwcr.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-BTMmKll8.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-BiU5x78K.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-BF-Rp_ar.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CaM1K8mx.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BkEoGitx.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-BelaySM_.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
