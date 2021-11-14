const PassengerPlane = require('./planes/PassengerPlane');
const MilitaryPlane = require('./planes/MilitaryPlane');
const ExperimentalPlane = require('./planes/ExperimentalPlane');
const MilitaryType = require('./models/militaryType');

class Airport {
  static printPlanes(planes) {
    return JSON.stringify(planes);
  }

  constructor(planes) {
    this.planes = planes;
  }

  getPlanes() {
    return this.planes;
  }

  getPassengerPlanes() {
    return this.planes.filter(plane => plane instanceof PassengerPlane);
  }

  getMilitaryPlanes() {
    return this.planes.filter(plane => plane instanceof MilitaryPlane);
  }

  getExperimentalPlanes() {
    return this.planes.filter(plane => plane instanceof ExperimentalPlane);
  }

  getPassengerPlaneWithMaxPassengersCapacity() {
    const maxPassengersCapacity = Math.max(...this.getPassengerPlanes().map(passengerPlane => passengerPlane.passengersCapacity));
    return this.getPassengerPlanes().find(passengerPlane => passengerPlane.passengersCapacity === maxPassengersCapacity)
  }

  getTransportMilitaryPlanes() {
    return this.getMilitaryPlanes().filter(militaryPlane => militaryPlane.militaryType === MilitaryType.TRANSPORT);
  }

  getBomberMilitaryPlanes() {
    return this.getMilitaryPlanes().filter(militaryPlane => militaryPlane.militaryType === MilitaryType.BOMBER);
  }

  sortByMaxDistance() {
    this.planes.sort((firstPlane, secondPlane) => firstPlane.getMaxFlightDistance() - secondPlane.getMaxFlightDistance());
    return this;
  }

  sortByMaxSpeed() {
    this.planes.sort((firstPlane, secondPlane) => firstPlane.getMaxSpeed() - secondPlane.getMaxSpeed());
    return this;
  }

  sortByMaxLoadCapacity() {
    this.planes.sort((firstPlane, secondPlane) => firstPlane.getMaxLoadCapacity() - secondPlane.getMaxLoadCapacity());
    return this;
  }
}

module.exports = Airport;
