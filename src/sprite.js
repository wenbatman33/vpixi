export default (option) => {
  const { name } = option;
  let Sprite;
  if (name) {
    // eslint-disable-next-line no-undef
    Sprite = new PIXI.Sprite(PIXI.loader.resource[name].texture);
  }
  return Sprite;
};
