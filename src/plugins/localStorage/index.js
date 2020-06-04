import localStorage from "./localStorage";

const Storage = {
  install(Vue, options) {
    const ls = new localStorage();
    Object.defineProperty(Vue.prototype, `$${options.name}`, {
      get() {
        return ls;
      },
    });
  },
};

export default Storage;
