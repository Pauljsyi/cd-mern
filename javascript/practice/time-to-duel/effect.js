const { Unit, RedBeltNinja, BlackBeltNinja } = require("./unit.js");

class Effect {
  constructor(effectName) {
    this.effectName = effectName;
  }
}

class HardAlgorithm extends Effect {
  constructor(effectName) {
    super(effectName);
    this.effectName = effectName;
    this.cost = 2;
    this.text = "increase target's resilience by 3";
    // this.stat = target.resilience;
    this.magnitude = +3;
  }

  play(target) {
    console.log(
      `${target.unitName}'s resilience => ${target.resilience} before ${this.effectName}`
    );
    if (target instanceof Unit) {
      console.log(this.text);
      target.resilience += this.magnitude;
      console.log(
        `${target.unitName}'s resilience => ${target.resilience} after ${this.effectName}`
      );
    } else {
      throw new Error("Target must be a unit!");
    }
  }
}

class UnhandledPromiseRejection extends Effect {
  constructor(effectName) {
    super(effectName);
    this.effectName = effectName;
    this.cost = 1;
    this.text = "reduce target's resilience by 2";
    // this.stat = target.resilience;
    this.magnitude = -2;
  }
  play(target) {
    console.log(
      `${target.unitName}'s resilience => ${target.resilience} before ${this.effectName}`
    );
    if (target instanceof Unit) {
      console.log(this.text);
      target.resilience += this.magnitude;
      console.log(
        `${target.unitName}'s resilience => ${target.resilience} after ${this.effectName}`
      );
    } else {
      throw new Error("Target must be a unit!");
    }
  }
}

class PairProgramming extends Effect {
  constructor(effectName) {
    super(effectName);
    this.effectName = effectName;
    this.cost = 3;
    this.text = "increase target's power by 2";
    this.magnitude = +2;
  }
  play(target) {
    console.log(
      `${target.unitName}'s resilience => ${target.resilience} before ${this.effectName}`
    );
    if (target instanceof Unit) {
      console.log(this.text);
      target.power += this.magnitude;
      console.log(
        `${target.unitName}'s resilience => ${target.resilience} before ${this.effectName}`
      );
    } else {
      throw new Error("Target must be a unit!");
    }
  }
}

module.exports = {
  Effect,
  HardAlgorithm,
  UnhandledPromiseRejection,
  PairProgramming,
};
