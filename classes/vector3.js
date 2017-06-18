module.exports = mp.Vector3
class Vector3{

  constructor(x, y, z){
    this.native = new mp.Vector3(x, y, z)
  }

  /**
   * native property setter
   * @param {*} native
   */
  set native(native) {
    this._native = native
  }

  /**
   * native property getter
   * @returns {*}
   */
  get native() {
    return this._native
  }

  /**
   * x property setter of native
   * @param {*} x
   */
  set x(x) {
    this.native.x = x
  }

  /**
   * x property getter of the native property
   * @returns {*}
   */
  get x() {
    return this.native.x
  }

  /**
   * y property setter of native
   * @param {*} y
   */
  set y(y) {
    this.native.y = y
  }

  /**
   * y property getter of the native property
   * @returns {*}
   */
  get y() {
    return this.native.y
  }

  /**
   * z property setter of native
   * @param {*} z
   */
  set z(z) {
    this.native.z = z
  }

  /**
   * z property getter of the native property
   * @returns {*}
   */
  get z() {
    return this.native.z
  }

}