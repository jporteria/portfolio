function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-CcA04Sww.js","assets/index-CAaapDFl.js","assets/index-CxvD6Os5.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-CAaapDFl.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-CcA04Sww.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
