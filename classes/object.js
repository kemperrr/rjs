const Entity = require("./entity")

module.exports = class Object extends Entity{

  constructor(native, position, rotation, dimension=0){
    if(typeof native === "string")return super(mp.objects.new(mp.joaat(native), position, rotation, dimension))
    else if(native.type === "object")return super(native)
    else throw new Error("Init an Object with a non native object")
  }

  static get pool(){
    return mp.objects
  }

}