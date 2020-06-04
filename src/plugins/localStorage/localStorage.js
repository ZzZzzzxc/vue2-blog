class Localstorage {
  constructor() {
    this.data = window.localStorage;
  }

  /**
   * Get item
   *
   * @param {string} key
   * @returns {*}
   */
  get(key) {
    let res = null;
    const item = this.data.getItem(key);
    if (item !== null) {
      try {
        const data = JSON.parse(item);
        if (data.expire === null) {
          return data.value;
        }

        if (data.expire >= new Date().getTime()) {
          return data.value;
        }

        this.remove(key);
      } catch (err) {
        return res;
      }
    }
    return res;
  }

  /**
   * Set item
   *
   * @param {string} key
   * @param {*} value
   * @param {number} expire
   * @returns {*}
   */
  set(key, value, expire) {
    const stringifyValue = JSON.stringify({
      value,
      expire: expire !== null ? new Date().getTime() + expire : null,
    });
    this.data.setItem(key, stringifyValue);
  }

  /**
   * Remove item
   *
   * @param {string} key
   * @returns {*}
   */
  remove(key) {
    this.data.removeItem(key);
  }

  /**
   * Clear Storage
   */
  clear() {
    this.data.clear();
  }
}

export default Localstorage;
