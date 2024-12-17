function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-5ZyZOtC5.js","assets/index-Bcc-uCgk.js","assets/index-CTpBdXjM.css","assets/index-D1Zu3UKd.js","assets/index-DUgdT5tA.js","assets/index-BQz4YLGO.js","assets/index-BStEBOXX.js","assets/index-xagiGCgx.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-Bcc-uCgk.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-5ZyZOtC5.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-D1Zu3UKd.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-DUgdT5tA.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BQz4YLGO.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BStEBOXX.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-xagiGCgx.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
