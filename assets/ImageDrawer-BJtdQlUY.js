import{r as h}from"./index-DWHBl27D.js";import{drawGif as f}from"./Utils-rrJUUdQk.js";import{c as d}from"./index-BxQLWY1X.js";const c=2,p=1,u=12,_=1;class y{constructor(o){this.loadImageShape=async e=>{if(!this._engine.loadImage)throw new Error(`${d} image shape not initialized`);await this._engine.loadImage({gif:e.gif,name:e.name,replaceColor:e.replaceColor??!1,src:e.src})},this._engine=o}addImage(o){this._engine.images||(this._engine.images=[]),this._engine.images.push(o)}draw(o){const{context:e,radius:t,particle:a,opacity:n}=o,i=a.image,r=i==null?void 0:i.element;if(i){if(e.globalAlpha=n,i.gif&&i.gifData)f(o);else if(r){const s=i.ratio,g={x:-t,y:-t},l=t*c;e.drawImage(r,g.x,g.y,l,l/s)}e.globalAlpha=p}}getSidesCount(){return u}async init(o){const e=o.actualOptions;if(!(!e.preload||!this._engine.loadImage))for(const t of e.preload)await this._engine.loadImage(t)}loadShape(o){if(o.shape!=="image"&&o.shape!=="images")return;this._engine.images||(this._engine.images=[]);const e=o.shapeData;if(!e)return;this._engine.images.find(a=>a.name===e.name||a.source===e.src)||this.loadImageShape(e).then(()=>{this.loadShape(o)})}particleInit(o,e){if(e.shape!=="image"&&e.shape!=="images")return;this._engine.images||(this._engine.images=[]);const t=this._engine.images,a=e.shapeData;if(!a)return;const n=e.getFillColor(),i=t.find(s=>s.name===a.name||s.source===a.src);if(!i)return;const r=a.replaceColor??i.replaceColor;if(i.loading){setTimeout(()=>{this.particleInit(o,e)});return}(async()=>{let s;i.svgData&&n?s=await h(i,a,n,e):s={color:n,data:i,element:i.element,gif:i.gif,gifData:i.gifData,gifLoopCount:i.gifLoopCount,loaded:!0,ratio:a.width&&a.height?a.width/a.height:i.ratio??_,replaceColor:r,source:a.src},s.ratio||(s.ratio=1);const g=a.fill??e.shapeFill,l=a.close??e.shapeClose,m={image:s,fill:g,close:l};e.image=m.image,e.shapeFill=m.fill,e.shapeClose=m.close})()}}export{y as ImageDrawer};
