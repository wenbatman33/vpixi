export default class App {
  constructor(el) {
    this.el = el;
    // eslint-disable-next-line no-undef
    this.PIXI = new PIXI.Application({
      width: 400, height: 300, backgroundColor: 0x1099bb, resolution: window.devicePixelRatio || 1,
    });
    return this.render(this.el);
  }

  render(el) {
    document.querySelector(el).appendChild(this.PIXI.view);
    return this.PIXI;
  }
}
