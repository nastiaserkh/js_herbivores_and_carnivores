'use strict';

class Animal {
  static alive = [];

  constructor(name, health = null) {
    this.name = name;
    this.health = health ?? 100;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health = null) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = null) {
    super(name, health);
  }

  bite(animal) {
    if (animal.hidden === false && animal instanceof Herbivore) {
      animal.health -= 50;
    }

    Animal.alive = Animal.alive.filter((a) => a.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
