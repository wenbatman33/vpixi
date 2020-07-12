import * as PIXI from 'pixi.js';

const app = new PIXI.Application();
document.body.appendChild(app.view);
const container = new PIXI.Container();
const texture = PIXI.Texture.from('/static/bunny.png');
const bunny = new PIXI.Sprite(texture);
container.addChild(bunny);
app.stage.addChild(container);
