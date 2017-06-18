const Entity = require("./entity")

module.exports = class Checkpoint extends Entity {


  constructor(){
    super()
  }

  static get pool() {
    return mp.checkpoints
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
   * radius property setter of native
   * @param {*} radius
   */
  set radius(radius) {
    this.native.radius = radius
  }

  /**
   * radius property getter of the native property
   * @returns {*}
   */
  get radius() {
    return this.native.radius
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
   * destination property setter of native
   * @param {*} destination
   */
  set destination(destination) {
    this.native.destination = destination
  }

  /**
   * destination property getter of the native property
   * @returns {*}
   */
  get destination() {
    return this.native.destination
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