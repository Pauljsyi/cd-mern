class Unit {
  constructor(unitName) {
    this.unitName = unitName;
  }
}

class RedBeltNinja extends Unit {
  constructor(unitName) {
    super(unitName);
    this.cost = 3;
    this.power = 3;
    this.resilience = 4;
  }
}

class BlackBeltNinja extends Unit {
  constructor(unitName) {
    super(unitName);
    this.cost = 4;
    this.power = 5;
    this.resilience = 4;
  }
}

module.exports = { Unit, RedBeltNinja, BlackBeltNinja };
