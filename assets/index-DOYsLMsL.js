function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-b4jyApJd.js","assets/index-Bcc-uCgk.js","assets/index-CTpBdXjM.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-Bcc-uCgk.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-b4jyApJd.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
