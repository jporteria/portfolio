function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CircleDrawer-WK4MN9bF.js","assets/index-C4C0k3ZW.js","assets/index-s2osDVnS.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-C4C0k3ZW.js";async function o(a,e=!0){const{CircleDrawer:r}=await i(()=>import("./CircleDrawer-WK4MN9bF.js"),__vite__mapDeps([0,1,2]));await a.addShape("circle",new r,e)}export{o as loadCircleShape};
