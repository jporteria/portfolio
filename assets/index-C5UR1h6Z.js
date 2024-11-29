function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-BlWDkjqq.js","assets/index-CvWqQ_iG.js","assets/index-Dq2UTJ7Z.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-CvWqQ_iG.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-BlWDkjqq.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
