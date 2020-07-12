const app = new PIXI.Application({
  width: 200,
  height: 200,
});
document.body.appendChild(app.view);

// 資源庫可累加
const loader = new PIXI.loaders.Loader();
loader.add('bunny','./assets/img/front.gif')
// 載入事件
loader.onProgress.add((event) => {console.log('onProgress')});
loader.onError.add((target,event,error) => {console.log('onError')});
loader.onLoad.add((target) => {console.log('onLoad')});
loader.onComplete.add(() => {console.log('onComplete')}); 
loader.load(); 


// 场景数据：定义每个场景的宽高,x/y距离
const scenesOptions = [ 
  {
    name:"scene1",
    x:1000,y:0,
    width:3554,height:750
  },
  {
    name:"scene2",
    x:1000,y:0,
    width:3554,height:750
  }
];

const scenes = {};  // 场景集合 - pixi对象

function initScenes(){ // 初始化场景
  for (let i = scenesOptions.length-1; i >= 0 ; i--) {
    scenes[scenesOptions[i].name] = new PIXI.Container({
      width:scenesOptions[i].width,
      height:scenesOptions[i].height
    });
    scenes[scenesOptions[i].name].x = scenesOptions[i].x;
    app.stage.addChild(scenes[scenesOptions[i].name]);
  }
  // 这句话如果不封装，其实很好理解就是这么几句话
  // const scenes = {}; 
  // scenes.scene1 = new PIXI.Container({
  //       width:1344,
  //       height:750
  // });
  // scenes.scene1.x = 0;
  // app.stage.addChild(scenes.scene1);把场景添加到舞台
}
// initScenes()

// const scenes = {}; 
scenes.scene1 = new PIXI.Container({
  width:1344,
  height:750
});
scenes.scene1.x = 0;
app.stage.addChild(scenes.scene1);

const sprite = PIXI.Sprite.from('./assets/img/flowerTop.png');
sprite.buttonMode = true;
sprite.interactive = true;

scenes.scene1.addChild(sprite);

function resize() {
  app.renderer.view.style.position = 'absolute';
  app.renderer.view.style.left = ((window.innerWidth - app.renderer.width) >> 1) + 'px';
  console.log((window.innerWidth - app.renderer.width) >> 1)
  app.renderer.view.style.top = ((window.innerHeight - app.renderer.height) >> 1) + 'px';
} 
resize();
window.addEventListener('resize', resize);
