function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CDyypRIq.js","assets/index-DgxzPjfa.js","assets/index-z2gIgogv.css","assets/index-Dat3m6iP.js","assets/index-CtuZs-p2.js","assets/index-DjRLCKuL.js","assets/index-CRE7RZDH.js","assets/index-96q1zxMh.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DgxzPjfa.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-CDyypRIq.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-Dat3m6iP.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-CtuZs-p2.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-DjRLCKuL.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CRE7RZDH.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-96q1zxMh.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
