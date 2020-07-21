var renderer = PIXI.autoDetectRenderer(800, 600,{backgroundColor : 0x1099bb});
document.body.appendChild(renderer.view);

// create the root of the scene graph
var stage = new PIXI.Container();

var sprite = PIXI.Sprite.fromImage('../../assets/img/bunny.png');
sprite.position.set(230,264);
sprite.interactive = true;
sprite.on('mousedown', onDown);
sprite.on('touchstart', onDown);

stage.addChild(sprite);

function onDown (e) {
    sprite.scale.x += 0.3;
    sprite.scale.y += 0.3;
}
// start animating

function animate() {
  requestAnimationFrame(animate);
  renderer.render(stage);
}
animate();
