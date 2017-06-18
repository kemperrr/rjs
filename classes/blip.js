const Entity = require("./entity")

module.exports = class Blip extends Entity {

  /**
   * models: https://wiki.gtanet.work/index.php?title=Blips
   * @param {native|String} native native or model
   * @param position
   * @param range
   * @param dimension
   */
  constructor(native, position, range, dimension=0){
    if(typeof native === "string"){
      let newBlip = mp.blips.new(position, range, dimension)
      newBlip.model = native
      return super(newBlip)
    }
    else if(native.type === "blip")return super(native)
    else throw new Error("Init a Blip with a non native blip")
  }

  static get pool() {
    return mp.blips
  }

  /**
   * call routeFor of native
   */
  routeFor(...args) {
    this.native.routeFor.apply(this.native, args)
  }

  /**
   * call unrouteFor of native
   */
  unrouteFor(...args) {
    this.native.unrouteFor.apply(this.native, args)
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
   * name property setter of native
   * @param {*} name
   */
  set name(name) {
    this.native.name = name
  }

  /**
   * name property getter of the native property
   * @returns {*}
   */
  get name() {
    return this.native.name
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

}