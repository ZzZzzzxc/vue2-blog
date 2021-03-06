import localStorage from "./localStorage";

const Storage = {
  install(Vue, options) {
    if (!options) {
      return;
    }
    const ls = new localStorage();
    Object.defineProperty(Vue.prototype, `$${options.name}`, {
      get() {
        return ls;
      }
    });
  }
};

export default Storage;
