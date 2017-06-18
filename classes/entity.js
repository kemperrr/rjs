module.exports = class Entity{

  constructor(native){
    let types = ["player", "vehicle", "object", "blip", "marker", "pickup"]
    if(!types.includes(native.type))throw new Error(`Native entity type isn't valid, "${native.type}"`)
    if(native.__entity__)return native.__entity__
    if(this.constructor === Entity){
      const typeConstructor = require(`./${native.type}`)
      return new typeConstructor(native)
    }
    this.native = native
    this.native.__entity__ = this
  }

  static at(id){
    let native = this.pool.at(id)
    return native.__entity__ ? native.__entity__ : new this(native)
  }

  static toArray(){
    let array = []
    let poolArray = this.pool.toArray()
    for(let i in poolArray){
      let native = poolArray[i]
      if(native.__entity__){
        array.push(native.__entity__)
      }
      else{
        array.push(new this(native))
      }
    }
    return array
  }

  /**
   * id property setter of the native property
   * @param {*} id
   */
  set id(id) {
    this.native.id = id
  }

  /**
   * id property getter of the native property
   * @returns {*}
   */
  get id() {
    return this.native.id
  }

  /**
   * dimension property setter of the native property
   * @param {*} dimension
   */
  set dimension(dimension) {
    this.native.dimension = dimension
  }

  /**
   * dimension property getter of the native property
   * @returns {*}
   */
  get dimension() {
    return this.native.dimension
  }

  /**
   * type property setter of the native property
   * @param {*} type
   */
  set type(type) {
    this.native.type = type
  }

  /**
   * type property getter of the native property
   * @returns {*}
   */
  get type() {
    return this.native.type
  }

  /**
   * position property setter of the native property
   * @param {*} position
   */
  set position(position) {
    this.native.position = position
  }

  /**
   * position property getter of the native property
   * @returns {*}
   */
  get position() {
    return this.native.position
  }

  /**
   * model property setter of the native property
   * @param {*} model
   */
  set model(model) {
    this.native.model = model
  }

  /**
   * model property getter of the native property
   * @returns {*}
   */
  get model() {
    return this.native.model
  }

  /**
   * alpha property setter of the native property
   * @param {*} alpha
   */
  set alpha(alpha) {
    this.native.alpha = alpha
  }

  /**
   * alpha property getter of the native property
   * @returns {*}
   */
  get alpha() {
    return this.native.alpha
  }

  /**
   * rotation property setter of the native property
   * @param {*} rotation
   */
  set rotation(rotation) {
    this.native.rotation = rotation
  }

  /**
   * rotation property getter of the native property
   * @returns {*}
   */
  get rotation() {
    return this.native.rotation
  }

  /**
   * call destroy of native
   */
  destroy(...args) {
    this.native.destroy.apply(this.native, args)
  }

}