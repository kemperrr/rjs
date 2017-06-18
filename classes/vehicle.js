const Entity = require("./entity")

module.exports = class Vehicle extends Entity {

  /**
   * models: https://wiki.gtanet.work/index.php?title=Vehicle_Models
   * colors: https://wiki.gtanet.work/index.php?title=Vehicle_Colors
   * flags: https://wiki.gtanet.work/index.php?title=Vehicle_Flags
   * mods: https://wiki.gtanet.work/index.php?title=Vehicle_Mods
   * classes: https://wiki.gtanet.work/index.php?title=Vehicle_Classes
   * @param {native|String} native native or hash string
   * @param position
   * @param heading
   * @param dimension=0
   */
  constructor(native, position, heading, dimension=0) {
    if(typeof native === "string")return super(mp.vehicles.new(mp.joaat(native), position, heading, dimension))
    else if(native.type === "vehicle")return super(native)
    else throw new Error("Init a Vehicle with a non native vehicle")
  }

  static get pool(){
    return mp.vehicles
  }

  /**
   * call repair of native
   */
  repair(...args) {
    this.native.repair.apply(this.native, args)
  }

  /**
   * call setNeonColour of native
   */
  setNeonColour(...args) {
    this.native.setNeonColour.apply(this.native, args)
  }

  /**
   * call getNeonColour of native
   */
  getNeonColour(...args) {
    this.native.getNeonColour.apply(this.native, args)
  }

  /**
   * call setMod of native
   */
  setMod(...args) {
    this.native.setMod.apply(this.native, args)
  }

  /**
   * call getMod of native
   */
  getMod(...args) {
    this.native.getMod.apply(this.native, args)
  }

  /**
   * call setColour of native
   */
  setColour(...args) {
    this.native.setColour.apply(this.native, args)
  }

  /**
   * call setColourRGB of native
   *setColourRGB/
   (...args) {
   native setColourRGBthis...apply(this.native, args)
  }
   /**
   * call setPaint of native
   */
  setPaint(...args) {
    this.native.setPaint.apply(this.native, args)
  }

  /**
   * call getColour of native
   */
  getColour(...args) {
    this.native.getColour.apply(this.native, args)
  }

  /**
   * call getColourRGB of native
   */
  getColourRGB(...args) {
    this.native.getColourRGB.apply(this.native, args)
  }

  /**
   * call getPaint of native
   */
  getPaint(...args) {
    this.native.getPaint.apply(this.native, args)
  }

  /**
   * call getOccupant of native
   */
  getOccupant(...args) {
    this.native.getOccupant.apply(this.native, args)
  }

  /**
   * call setOccupant of native
   */
  setOccupant(...args) {
    this.native.setOccupant.apply(this.native, args)
  }

  /**
   * call getOccupants of native
   */
  getOccupants(...args) {
    this.native.getOccupants.apply(this.native, args)
  }

  /**
   * call explode of native
   */
  explode(...args) {
    this.native.explode.apply(this.native, args)
  }

  /**
   * call spawn of native
   */
  spawn(...args) {
    this.native.spawn.apply(this.native, args)
  }

  /**
   * velocity property setter of native
   * @param {*} velocity
   */
  set velocity(velocity) {
    this.native.velocity = velocity
  }

  /**
   * velocity property getter of the native property
   * @returns {*}
   */
  get velocity() {
    return this.native.velocity
  }

  /**
   * siren property setter of native
   * @param {*} siren
   */
  set siren(siren) {
    this.native.siren = siren
  }

  /**
   * siren property getter of the native property
   * @returns {*}
   */
  get siren() {
    return this.native.siren
  }

  /**
   * horn property setter of native
   * @param {*} horn
   */
  set horn(horn) {
    this.native.horn = horn
  }

  /**
   * horn property getter of the native property
   * @returns {*}
   */
  get horn() {
    return this.native.horn
  }

  /**
   * engine property setter of native
   * @param {*} engine
   */
  set engine(engine) {
    this.native.engine = engine
  }

  /**
   * engine property getter of the native property
   * @returns {*}
   */
  get engine() {
    return this.native.engine
  }

  /**
   * highbeams property setter of native
   * @param {*} highbeams
   */
  set highbeams(highbeams) {
    this.native.highbeams = highbeams
  }

  /**
   * highbeams property getter of the native property
   * @returns {*}
   */
  get highbeams() {
    return this.native.highbeams
  }

  /**
   * engineHealth property setter of native
   * @param {*} engineHealth
   */
  set engineHealth(engineHealth) {
    this.native.engineHealth = engineHealth
  }

  /**
   * engineHealth property getter of the native property
   * @returns {*}
   */
  get engineHealth() {
    return this.native.engineHealth
  }

  /**
   * bodyHealth property setter of native
   * @param {*} bodyHealth
   */
  set bodyHealth(bodyHealth) {
    this.native.bodyHealth = bodyHealth
  }

  /**
   * bodyHealth property getter of the native property
   * @returns {*}
   */
  get bodyHealth() {
    return this.native.bodyHealth
  }

  /**
   * steerAngle property setter of native
   * @param {*} steerAngle
   */
  set steerAngle(steerAngle) {
    this.native.steerAngle = steerAngle
  }

  /**
   * steerAngle property getter of the native property
   * @returns {*}
   */
  get steerAngle() {
    return this.native.steerAngle
  }

  /**
   * rocketBoost property setter of native
   * @param {*} rocketBoost
   */
  set rocketBoost(rocketBoost) {
    this.native.rocketBoost = rocketBoost
  }

  /**
   * rocketBoost property getter of the native property
   * @returns {*}
   */
  get rocketBoost() {
    return this.native.rocketBoost
  }

  /**
   * brake property setter of native
   * @param {*} brake
   */
  set brake(brake) {
    this.native.brake = brake
  }

  /**
   * brake property getter of the native property
   * @returns {*}
   */
  get brake() {
    return this.native.brake
  }

  /**
   * locked property setter of native
   * @param {*} locked
   */
  set locked(locked) {
    this.native.locked = locked
  }

  /**
   * locked property getter of the native property
   * @returns {*}
   */
  get locked() {
    return this.native.locked
  }

  /**
   * numberPlate property setter of native
   * @param {*} numberPlate
   */
  set numberPlate(numberPlate) {
    this.native.numberPlate = numberPlate
  }

  /**
   * numberPlate property getter of the native property
   * @returns {*}
   */
  get numberPlate() {
    return this.native.numberPlate
  }

  /**
   * neonEnabled property setter of native
   * @param {*} neonEnabled
   */
  set neonEnabled(neonEnabled) {
    this.native.neonEnabled = neonEnabled
  }

  /**
   * neonEnabled property getter of the native property
   * @returns {*}
   */
  get neonEnabled() {
    return this.native.neonEnabled
  }

  /**
   * dead property setter of native
   * @param {*} dead
   */
  set dead(dead) {
    this.native.dead = dead
  }

  /**
   * dead property getter of the native property
   * @returns {*}
   */
  get dead() {
    return this.native.dead
  }

}