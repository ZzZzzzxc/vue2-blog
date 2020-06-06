class Log {
  constructor() {}
  api(type, info, color = "pink") {
    console.log(`%c[API__${type}] %c ${info}`, `color:${color}`, "");
  }
  store(type, info, color = "green") {
    console.log(`%c[STORE__${type}] %c ${info}`, `color:${color}`, "");
  }
  router(type, info, color = "blue") {
    console.log(`%c[ROUTER__${type}] %c ${info}`, `color:${color}`, "");
  }
  file(info, color = "grey") {
    console.log(`%c[FILE] %c ${info}`, `color:${color}`, "");
  }
}

export default Log;
