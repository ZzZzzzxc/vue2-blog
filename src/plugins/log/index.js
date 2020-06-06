import Log from "./log";

const Storage = {
  install(Vue, options) {
    if (!options) {
      return;
    }
    const log = new Log();
    Object.defineProperty(Vue.prototype, `$${options.name}`, {
      get() {
        return log;
      }
    });
  }
};

export default Storage;
