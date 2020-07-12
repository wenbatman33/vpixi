import bg from './static/bunny.png';

const { loader } = window.PIXI;

loader.add('bg', bg);

export default () => new Promise((resolve) => {
  loader.load((loader, resource) => resolve());
});
