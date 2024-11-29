function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CircleDrawer-xYqknEW-.js","assets/index-CvWqQ_iG.js","assets/index-Dq2UTJ7Z.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-CvWqQ_iG.js";async function o(a,e=!0){const{CircleDrawer:r}=await i(()=>import("./CircleDrawer-xYqknEW-.js"),__vite__mapDeps([0,1,2]));await a.addShape("circle",new r,e)}export{o as loadCircleShape};
