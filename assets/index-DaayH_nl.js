function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-DnHzNTXZ.js","assets/index-CvWqQ_iG.js","assets/index-Dq2UTJ7Z.css","assets/index-Doe--2a5.js","assets/index-BNnZkZeq.js","assets/index-BHssOzje.js","assets/index-B3inVBO9.js","assets/index-DvucV7lt.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CvWqQ_iG.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-DnHzNTXZ.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-Doe--2a5.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-BNnZkZeq.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BHssOzje.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-B3inVBO9.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DvucV7lt.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
