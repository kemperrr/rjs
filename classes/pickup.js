const Entity = require("./entity")

module.exports = class Pickup extends Entity {

  /**
   * https://wiki.gtanet.work/index.php?title=Pickups
   * @param {native|Int} native native or Int
   * @param pos
   * @param rot
   * @param vehicle
   * @param respawnTime
   * @param dimension
   * @returns {*}
   */
  constructor(native, pos, rot, vehicle, respawnTime, dimension = 0){
    if(typeof native === "number")return super(mp.pickups.new(native, pos, rot, vehicle, respawnTime, dimension))
    else if(native.type === "pickup")return super(native)
    else throw new Error("Init a Pickup with a non native pickup")
  }

  static get pool() {
    return mp.pickups
  }

  /**
   * pickupHash property setter of native
   * @param {*} pickupHash
   */
  set pickupHash(pickupHash) {
    this.native.pickupHash = pickupHash
  }

  /**
   * pickupHash property getter of the native property
   * @returns {*}
   */
  get pickupHash() {
    return this.native.pickupHash
  }

}