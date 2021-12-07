const assert = require('chai').assert;

const Airport = require('../Airport');
const MilitaryPlane = require('../planes/MilitaryPlane');
const PassengerPlane = require('../planes/PassengerPlane');
const ExperimentalPlane = require('../planes/ExperimentalPlane');
const MilitaryType = require('../models/militaryType');
const ExperimentalTypes = require('../models/ExperimentalTypes');
const ClassificationLevel = require('../models/classificationLevel');

describe('Airport: ', () => {
  const planes = [
    new PassengerPlane('Boeing-737', 900, 12000, 60500, 164),
    new PassengerPlane('Boeing-737-800', 940, 12300, 63870, 192),
    new PassengerPlane('Boeing-747', 980, 16100, 70500, 242),
    new PassengerPlane('Airbus A320', 930, 11800, 65500, 188),
    new PassengerPlane('Airbus A330', 990, 14800, 80500, 222),
    new PassengerPlane('Embraer 190', 870, 8100, 30800, 64),
    new PassengerPlane('Sukhoi Superjet 100', 870, 11500, 50500, 140),
    new PassengerPlane('Bombardier CS300', 920, 11000, 60700, 196),
    new MilitaryPlane('B-1B Lancer', 1050, 21000, 80000, MilitaryType.BOMBER),
    new MilitaryPlane('B-2 Spirit', 1030, 22000, 70000, MilitaryType.BOMBER),
    new MilitaryPlane('B-52 Stratofortress', 1000, 20000, 80000, MilitaryType.BOMBER),
    new MilitaryPlane('F-15', 1500, 12000, 10000, MilitaryType.FIGHTER),
    new MilitaryPlane('F-22', 1550, 13000, 11000, MilitaryType.FIGHTER),
    new MilitaryPlane('C-130 Hercules', 650, 5000, 110000, MilitaryType.TRANSPORT),
    new ExperimentalPlane("Bell X-14", 277, 482, 500, ExperimentalTypes.HIGH_ALTITUDE, ClassificationLevel.SECRET),
    new ExperimentalPlane("Ryan X-13 Vertijet", 560, 307, 500, ExperimentalTypes.VTOL, ClassificationLevel.TOP_SECRET)
  ];

  let airport;
  beforeEach(() => {
    airport = new Airport(planes);
  });

  it('should have military planes with transport type', () => {
    assert.isTrue(airport.getTransportMilitaryPlanes().length > 0);
  });

  it('should have military planes with bomber type', () => {
    assert.isTrue(airport.getBomberMilitaryPlanes().length > 0);
  });

  it('should return passenger plane with max capacity', () => {
    assert.equal(airport.getPassengerPlaneWithMaxPassengersCapacity().passengersCapacity, 242);
  });

  it('should sort planes by max load capacity', () => {
    const sortedPlanes = airport.sortByMaxLoadCapacity().getPlanes();
    assert.equal(sortedPlanes[sortedPlanes.length - 1].getMaxLoadCapacity(), 110000);
  });

  it('should check that experimental planes has classification level higher than unclassified', () => {
    assert.isTrue(
      airport
        .getExperimentalPlanes()
        .every(experimentalPlane => experimentalPlane.classificationLevel !== ClassificationLevel.UNCLASSIFIED)
    );
  });
});
