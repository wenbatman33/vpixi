var renderer = PIXI.autoDetectRenderer(800, 600, { transparent: true });
document.body.appendChild(renderer.view);

// create the root of the scene graph
var stage = new PIXI.Container();


// var texture =  PIXI.Texture.from("./mv.mp4");
var texture = PIXI.Texture.from("./mv.mp4");
var videoSprite = new PIXI.Sprite(texture);

var videoControler = videoSprite.texture.baseTexture.source;
videoSprite.loop = 'loop'; 

stage.addChild(videoSprite);
window.addEventListener("click", clickHandle);
animate();

function clickHandle(){
    console.log('clickHandle');    
    videoControler.play
}
function animate(){
    // render the stage
    renderer.render(stage);
    requestAnimationFrame(animate);
}