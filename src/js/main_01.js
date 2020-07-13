import * as PIXI from 'pixi.js'
import { TweenMax } from 'gsap';
import * as dat from 'dat.gui';

const app = new PIXI.Application({
  width: 800, 
  height: 300,
  backgroundColor: 0x1099bb
});

let sceneNum = 0;
const scenes = {};
const scenesOptions = [
  {
    name:"scene1",
    x:0,
    y:0,
    width:400,
    height:300,
    backgroundColor: 0xff9900, 
  },
  {
    name:"scene2",
    x:400,
    y:0,
    width:400,
    height:300,
    backgroundColor: 0xff0000, 
  }
];
function initScenes(){ // 初始化场景
  for (let i = scenesOptions.length-1; i >= 0 ; i--) {
    scenes[scenesOptions[i].name] = new PIXI.Container({
      width:scenesOptions[i].width,
      height:scenesOptions[i].height
    });
    scenes[scenesOptions[i].name].x = scenesOptions[i].x;
    app.stage.addChild(scenes[scenesOptions[i].name]);
  }
}

const rect= new PIXI.Graphics();
rect.lineStyle(2, 0x0000FF, 1);
rect.beginFill(0xFF700B, 1);
rect.drawRect(0, 0, 120, 120);

const rect2= new PIXI.Graphics();
rect2.lineStyle(2, 0x0000FF, 1);
rect2.beginFill(0xFF9900, 1);
rect2.drawRect(0, 0, 120, 120);

scenes.scene1 = new PIXI.Container(scenesOptions[0]);
scenes.scene2 = new PIXI.Container(scenesOptions[1]);




// scenes.scene1.addChild(rect);
// scenes.scene2.addChild(rect2);

app.stage.addChild(scenes.scene1);
app.stage.addChild(scenes.scene2);



// initScenes();

document.body.appendChild(app.view);
const texture = PIXI.Texture.from('/assets/img/bunny.png');
const bunny = new PIXI.Sprite(texture);
const bunny2 = new PIXI.Sprite(texture);
const bunny3 = new PIXI.Sprite(texture);
bunny2.interactive = true; // 設定可以互動
bunny2.buttonMode = true;
bunny.anchor.set(0.5);
bunny.x = 160
bunny.y = 160
app.stage.addChild(bunny);


const text = new PIXI.Text('機哩瓜啦')
const gui = new dat.GUI();
gui.add(text, 'x', 5);

scenes.scene1.addChild(bunny2);

scenes.scene2.addChild(bunny2);
scenes.scene2.addChild(text);

TweenMax.to(scenes.scene2, 10, {x:100});

app.ticker.add((delta) => {
  bunny.x += 0.05 * delta;
});

function changeNum(){
  if(sceneNum===0) {
    sceneNum=1
    scenes.scene1.x =0
    scenes.scene2.x =400
  } else{
    sceneNum=0
    scenes.scene2.x =0
    scenes.scene1.x =400
  }
  console.log(sceneNum)
}
window.addEventListener("click", changeNum);
