function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-iiM5LLJ1.js","assets/index-C0zfUXYt.js","assets/index-s2osDVnS.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-C0zfUXYt.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-iiM5LLJ1.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
