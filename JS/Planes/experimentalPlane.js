const Plane = require('./Plane');

class ExperimentalPlane extends Plane {
  constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity, type, classificationLevel) {
    super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
    this._type = type;
    this._classificationLevel = classificationLevel;
  }

  get type() {
    return this._type;
  }

  set type(type) {
    this._type = type;
  }

  get classificationLevel() {
    return this._classificationLevel;
  }

  set classificationLevel(classificationLevel) {
    this._classificationLevel = classificationLevel;
  }
}

module.exports = ExperimentalPlane
