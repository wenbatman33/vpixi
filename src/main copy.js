// eslint-disable-next-line no-unused-vars
import PIXI from 'pixi';
import App from './App';
import load from './load';
import sprite from './sprite';

const Hook = {
  async create() {
    const app = new App('body');
    await load();
    return app;
  },
  async mounted() {
    const x = sprite({ name: 'bg' });
    this.stage.addChild(x);
  },
};
const init = async () => {
  const app = Hook.create();
  await Hook.mounted.call(app);
};

window.onload = init();
