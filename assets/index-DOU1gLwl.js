function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-D7KDAv0i.js","assets/index-B0GVQeQv.js","assets/index-TyCvOJvC.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-B0GVQeQv.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-D7KDAv0i.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
