import * as PIXI from 'pixi.js'

const app = new PIXI.Application({
  width: 400, 
  height: 300, 
  backgroundColor: 0x1099bb, 

  // Retina顯示屏的屏幕2倍
  // resolution: window.devicePixelRatio || 1,
});

document.body.appendChild(app.view);

const texture = PIXI.Texture.from('/assets/img/bunny.png');
const bunny = new PIXI.Sprite(texture);
bunny.anchor.set(0.5);
bunny.x = 160
bunny.y = 160
app.stage.addChild(bunny);

app.ticker.add((delta) => {
  bunny.rotation -= 0.01 * delta;
});