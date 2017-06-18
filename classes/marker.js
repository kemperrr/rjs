const Entity = require("./entity")

module.exports = class Marker extends Entity {

  /**
   * models: https://wiki.gtanet.work/index.php?title=Markers
   * @param {native|Int} native native or Int
   * @param {Vector3} position
   * @param {Vector3} rotation
   * @param {Vector3} direction
   * @param radius
   * @param r 0-255
   * @param g 0-255
   * @param b 0-255
   * @param a 0-255
   * @param dimension
   */
  constructor(native, position, rotation, direction, radius, r, g, b, a, dimension = 0) {
    if (typeof native === "number")return super(mp.markers.new(native, position, rotation, direction, radius, r, g, b, a, dimension))
    else if (native.type === "marker")return super(native)
    else throw new Error("Init a Marker with a non native marker")
  }

  static get pool() {
    return mp.markers
  }

  /**
   * call showFor of native
   */
  showFor(...args) {
    this.native.showFor.apply(this.native, args)
  }

  /**
   * call hideFor of native
   */
  hideFor(...args) {
    this.native.hideFor.apply(this.native, args)
  }

  /**
   * call getColour of native
   */
  getColour(...args) {
    this.native.getColour.apply(this.native, args)
  }

  /**
   * call setColour of native
   */
  setColour(...args) {
    this.native.setColour.apply(this.native, args)
  }

  /**
   * scale property setter of native
   * @param {*} scale
   */
  set scale(scale) {
    this.native.scale = scale
  }

  /**
   * scale property getter of the native property
   * @returns {*}
   */
  get scale() {
    return this.native.scale
  }

  /**
   * colour property setter of native
   * @param {*} colour
   */
  set colour(colour) {
    this.native.colour = colour
  }

  /**
   * colour property getter of the native property
   * @returns {*}
   */
  get colour() {
    return this.native.colour
  }

  /**
   * direction property setter of native
   * @param {*} direction
   */
  set direction(direction) {
    this.native.direction = direction
  }

  /**
   * direction property getter of the native property
   * @returns {*}
   */
  get direction() {
    return this.native.direction
  }

  /**
   * visible property setter of native
   * @param {*} visible
   */
  set visible(visible) {
    this.native.visible = visible
  }

  /**
   * visible property getter of the native property
   * @returns {*}
   */
  get visible() {
    return this.native.visible
  }

}