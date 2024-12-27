function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CrL-8QFc.js","assets/index-4rys9AEj.js","assets/index-CTpBdXjM.css","assets/index-BUnVPyS6.js","assets/index-ursg8L1v.js","assets/index-BxojVSDt.js","assets/index-BS_dVN8Z.js","assets/index-CuRnAK8k.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-4rys9AEj.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-CrL-8QFc.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-BUnVPyS6.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-ursg8L1v.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BxojVSDt.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BS_dVN8Z.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-CuRnAK8k.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
