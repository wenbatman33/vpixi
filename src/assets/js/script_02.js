const app = new PIXI.Application({
  width: 200,
  height: 200,
});
// transparent 透明
// const app = new PIXI.Application(800, 600, { transparent: true });
document.body.appendChild(app.view);


const container = new PIXI.Container();
container.rotation  = 90 * (Math.PI / 180); // 角度轉弧度

var testGraphics = new PIXI.Graphics();
testGraphics.beginFill(0xff0000);
testGraphics.drawRect(0, 0, 100, 100); //畫一個紅色方塊
testGraphics.endFill(); 
// app.stage.addChildAt(testGraphics,1);

const sprite = PIXI.Sprite.from('./assets/img/flowerTop.png');
sprite.buttonMode = true;
sprite.interactive = true;
// 資源庫可累加
const loader = new PIXI.loaders.Loader();
loader.add('bunny','./assets/img/front.gif')
// 載入事件
loader.onProgress.add((event) => {console.log('onProgress')});
loader.onError.add((target,event,error) => {console.log('onError')});
loader.onLoad.add((target) => {console.log('onLoad')});
loader.onComplete.add(() => {console.log('onComplete')}); 
loader.load(); 

sprite.addListener('pointertap', () => {
  alert('Hola');
});

// 全螢幕設定
// app.renderer.view.style.position = "absolute";
// app.renderer.view.style.display = "block";
app.renderer.autoResize = false;
// app.renderer.resize(window.innerWidth, window.innerHeight);



function resize() {
  app.renderer.view.style.position = 'absolute';
  app.renderer.view.style.left = ((window.innerWidth - app.renderer.width) >> 1) + 'px';
  console.log((window.innerWidth - app.renderer.width) >> 1)
  app.renderer.view.style.top = ((window.innerHeight - app.renderer.height) >> 1) + 'px';
} 
resize();
window.addEventListener('resize', resize);

app.stage.addChild(sprite);
app.stage.addChildAt(testGraphics,1);
// app.stage.setChildIndex(testGraphics, 1); 