function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-UF2ZZ1NY.js","assets/index-CHqFclhX.js","assets/index-BuVCt6t1.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-CHqFclhX.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-UF2ZZ1NY.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
