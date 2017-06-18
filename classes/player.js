const Entity = require("./entity")

module.exports = class Player extends Entity {

  constructor(native) {
    return super(native)
  }

  static get pool() {
    return mp.players
  }

  /**
   * Send a websocket
   * @param {*} event 
   * @param {*} data 
   */
  send(event, data) {
    this.socket.send(JSON.stringify({event, data}))
  }

  /**
  * socket property setter
  * @param {*} socket
  */
  set socket(socket) {
    this._socket = socket
  }
  
  /**
  * socket property getter
  * @returns {*}
  */
  get socket() {
    return this._socket
  }

  /**
  * account property setter
  * @param {*} account
  */
  set account(account) {
      this._account = account
  }

  /**
  * account property getter
  * @returns {*}
  */
  get account() {
    return this._account
  }

  /**
  * data property setter
  * @param {*} data
  */
  set data(data) {
    this._data = data
  }
  
  /**
  * data property getter
  * @returns {*}
  */
  get data() {
    return this._data
  }

  /**
   * call broadcast of pool
   */
  static broadcast(...args) {
    this.pool.broadcast.apply(this.native, args)
  }

  /**
   * call broadcastInRange of pool
   */
  static broadcastInRange(...args) {
    this.pool.broadcastInRange.apply(this.native, args)
  }

  /**
   * call broadcastInDimension of pool
   */
  static broadcastInDimension(...args) {
    this.pool.broadcastInDimension.apply(this.native, args)
  }

  /**
   * call call of pool
   */
  static call(...args) {
    this.pool.call.apply(this.native, args)
  }

  /**
   * call callInRange of pool
   */
  static callInRange(...args) {
    this.pool.callInRange.apply(this.native, args)
  }

  /**
   * call callInDimension of pool
   */
  static callInDimension(...args) {
    this.pool.callInDimension.apply(this.native, args)
  }

  /**
   * call kick of native
   */
  kick(...args) {
    this.native.kick.apply(this.native, args)
  }

  /**
   * call ban of native
   */
  ban(...args) {
    this.native.ban.apply(this.native, args)
  }

  /**
   * call spawn of native
   */
  spawn(...args) {
    this.native.spawn.apply(this.native, args)
  }

  /**
   * call giveWeapon of native
   */
  giveWeapon(...args) {
    this.native.giveWeapon.apply(this.native, args)
  }

  /**
   * call outputChatBox of native
   */
  outputChatBox(...args) {
    this.native.outputChatBox.apply(this.native, args)
  }

  /**
   * call getClothes of native
   */
  getClothes(...args) {
    this.native.getClothes.apply(this.native, args)
  }

  /**
   * call setClothes of native
   */
  setClothes(...args) {
    this.native.setClothes.apply(this.native, args)
  }

  /**
   * call getProp of native
   */
  getProp(...args) {
    this.native.getProp.apply(this.native, args)
  }

  /**
   * call setProp of native
   */
  setProp(...args) {
    this.native.setProp.apply(this.native, args)
  }

  /**
   * call putIntoVehicle of native
   */
  putIntoVehicle(...args) {
    this.native.putIntoVehicle.apply(this.native, args)
  }

  /**
   * call removeFromVehicle of native
   */
  removeFromVehicle(...args) {
    this.native.removeFromVehicle.apply(this.native, args)
  }

  /**
   * call invoke of native
   */
  invoke(...args) {
    this.native.invoke.apply(this.native, args)
  }

  /**
   * call call of native
   */
  call(...args) {
    this.native.call.apply(this.native, args)
  }

  /**
   * call notify of native
   */
  notify(...args) {
    this.native.notify.apply(this.native, args)
  }

  /**
   * call getHeadBlend of native
   */
  getHeadBlend(...args) {
    this.native.getHeadBlend.apply(this.native, args)
  }

  /**
   * call setHeadBlend of native
   */
  setHeadBlend(...args) {
    this.native.setHeadBlend.apply(this.native, args)
  }

  /**
   * call updateHeadBlend of native
   */
  updateHeadBlend(...args) {
    this.native.updateHeadBlend.apply(this.native, args)
  }

  /**
   * call setFaceFeature of native
   */
  setFaceFeature(...args) {
    this.native.setFaceFeature.apply(this.native, args)
  }

  /**
   * call getFaceFeature of native
   */
  getFaceFeature(...args) {
    this.native.getFaceFeature.apply(this.native, args)
  }

  /**
   * call setHairColour of native
   */
  setHairColour(...args) {
    this.native.setHairColour.apply(this.native, args)
  }

  /**
   * action property setter of native
   * @param {*} action
   */
  set action(action) {
    this.native.action = action
  }

  /**
   * action property getter of the native property
   * @returns {*}
   */
  get action() {
    return this.native.action
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
   * heading property setter of native
   * @param {*} heading
   */
  set heading(heading) {
    this.native.heading = heading
  }

  /**
   * heading property getter of the native property
   * @returns {*}
   */
  get heading() {
    return this.native.heading
  }

  /**
   * health property setter of native
   * @param {*} health
   */
  set health(health) {
    this.native.health = health
  }

  /**
   * health property getter of the native property
   * @returns {*}
   */
  get health() {
    return this.native.health
  }

  /**
   * armour property setter of native
   * @param {*} armour
   */
  set armour(armour) {
    this.native.armour = armour
  }

  /**
   * armour property getter of the native property
   * @returns {*}
   */
  get armour() {
    return this.native.armour
  }

  /**
   * isJumping property setter of native
   * @param {*} isJumping
   */
  set isJumping(isJumping) {
    this.native.isJumping = isJumping
  }

  /**
   * isJumping property getter of the native property
   * @returns {*}
   */
  get isJumping() {
    return this.native.isJumping
  }

  /**
   * isInCover property setter of native
   * @param {*} isInCover
   */
  set isInCover(isInCover) {
    this.native.isInCover = isInCover
  }

  /**
   * isInCover property getter of the native property
   * @returns {*}
   */
  get isInCover() {
    return this.native.isInCover
  }

  /**
   * isClimbing property setter of native
   * @param {*} isClimbing
   */
  set isClimbing(isClimbing) {
    this.native.isClimbing = isClimbing
  }

  /**
   * isClimbing property getter of the native property
   * @returns {*}
   */
  get isClimbing() {
    return this.native.isClimbing
  }

  /**
   * isEnteringVehicle property setter of native
   * @param {*} isEnteringVehicle
   */
  set isEnteringVehicle(isEnteringVehicle) {
    this.native.isEnteringVehicle = isEnteringVehicle
  }

  /**
   * isEnteringVehicle property getter of the native property
   * @returns {*}
   */
  get isEnteringVehicle() {
    return this.native.isEnteringVehicle
  }

  /**
   * isLeavingVehicle property setter of native
   * @param {*} isLeavingVehicle
   */
  set isLeavingVehicle(isLeavingVehicle) {
    this.native.isLeavingVehicle = isLeavingVehicle
  }

  /**
   * isLeavingVehicle property getter of the native property
   * @returns {*}
   */
  get isLeavingVehicle() {
    return this.native.isLeavingVehicle
  }

  /**
   * vehicle property setter of native
   * @param {*} vehicle
   */
  set vehicle(vehicle) {
    this.native.vehicle = vehicle
  }

  /**
   * vehicle property getter of the native property
   * @returns {*}
   */
  get vehicle() {
    return this.native.vehicle
  }

  /**
   * seat property setter of native
   * @param {*} seat
   */
  set seat(seat) {
    this.native.seat = seat
  }

  /**
   * seat property getter of the native property
   * @returns {*}
   */
  get seat() {
    return this.native.seat
  }

  /**
   * weapon property setter of native
   * @param {*} weapon
   */
  set weapon(weapon) {
    this.native.weapon = weapon
  }

  /**
   * weapon property getter of the native property
   * @returns {*}
   */
  get weapon() {
    return this.native.weapon
  }

  /**
   * isAiming property setter of native
   * @param {*} isAiming
   */
  set isAiming(isAiming) {
    this.native.isAiming = isAiming
  }

  /**
   * isAiming property getter of the native property
   * @returns {*}
   */
  get isAiming() {
    return this.native.isAiming
  }

  /**
   * aimTarget property setter of native
   * @param {*} aimTarget
   */
  set aimTarget(aimTarget) {
    this.native.aimTarget = aimTarget
  }

  /**
   * aimTarget property getter of the native property
   * @returns {*}
   */
  get aimTarget() {
    return this.native.aimTarget
  }

  /**
   * ping property setter of native
   * @param {*} ping
   */
  set ping(ping) {
    this.native.ping = ping
  }

  /**
   * ping property getter of the native property
   * @returns {*}
   */
  get ping() {
    return this.native.ping
  }

  /**
   * ip property setter of native
   * @param {*} ip
   */
  set ip(ip) {
    this.native.ip = ip
  }

  /**
   * ip property getter of the native property
   * @returns {*}
   */
  get ip() {
    return this.native.ip
  }

  /**
   * eyeColour property setter of native
   * @param {*} eyeColour
   */
  set eyeColour(eyeColour) {
    this.native.eyeColour = eyeColour
  }

  /**
   * eyeColour property getter of the native property
   * @returns {*}
   */
  get eyeColour() {
    return this.native.eyeColour
  }

  /**
   * hairColour property setter of native
   * @param {*} hairColour
   */
  set hairColour(hairColour) {
    this.native.hairColour = hairColour
  }

  /**
   * hairColour property getter of the native property
   * @returns {*}
   */
  get hairColour() {
    return this.native.hairColour
  }

  /**
   * hairHighlightColour property setter of native
   * @param {*} hairHighlightColour
   */
  set hairHighlightColour(hairHighlightColour) {
    this.native.hairHighlightColour = hairHighlightColour
  }

  /**
   * hairHighlightColour property getter of the native property
   * @returns {*}
   */
  get hairHighlightColour() {
    return this.native.hairHighlightColour
  }

}