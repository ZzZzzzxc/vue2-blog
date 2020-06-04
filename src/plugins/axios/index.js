import service from "./axios";

const Axios = {
  install(Vue, options) {
    if (!options) {
      return;
    }
    Object.defineProperty(Vue.prototype, `$${options.name}`, {
      get() {
        return service;
      }
    });
  }
};

export default Axios;
