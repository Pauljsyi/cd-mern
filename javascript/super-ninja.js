class Ninja {
  constructor(nameParam, health) {
    this.name = nameParam;
    this.health = health;
    this.speed = 3;
    this.strength = 3;
  }
  sayName() {
    console.log(this.name);
  }
  showStats() {
    console.log(
      "name: " +
        this.name +
        "\nstrength: " +
        this.strength +
        "\nspeed: " +
        this.speed +
        "\nhealth: " +
        this.health
    );
  }
  drinkSake() {
    this.health += 10;
    console.log(this.health);
  }
}

// const ninja1 = new Ninja("Hyabusa", 100);
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();

class Sensei extends Ninja {
  constructor(nameParam, health) {
    super(nameParam, health);
    this.strength = 100;
    this.speed = 1000;
    this.wisdom = 10;
  }
  speakWisdom() {
    console.log(
      "What one programmer can do in one month, two programmers can do in two months."
    );
  }
}

// example output
const superSensei = new Sensei("Master Splinter", 100);
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
