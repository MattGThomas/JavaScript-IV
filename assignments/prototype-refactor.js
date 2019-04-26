/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
class GameObject{
    constructor(gameAttribute){
    this.createdAt = gameAttribute.createdAt;
    this.name = gameAttribute.name;
    this.dimensions = gameAttribute.dimensions;
}
destroy() {
    return `${this.name} was removed from the game.`
  }
}
class CharacterStats extends GameObject{ 
    constructor(statsAttribute) {
        super(statsAttribute);
        this.healthPoints = statsAttribute.healthPoints;
    }
    takeDamage() {
    return `${this.name} took damage`
  }
}
class Humanoid extends CharacterStats{
    constructor(humanoidAttribute) {
        super(humanoidAttribute);
        this.team = humanoidAttribute.team;
        this.weapons = humanoidAttribute.weapons;
        this.language = humanoidAttribute.language;
    }
    greet() {
    return `${this.name} offers a greeting in ${this.language}`
  } 
}
class Villain extends Humanoid{
    constructor(villainAttribute) {
        super(villainAttribute);
    }
    breatheDragonFire() {
        return `${this.name} used dragon fire to deal damage`
    };
}
class Hero extends Humanoid{
    constructor(heroAttribute) {
        super(heroAttribute) 
    }
    getInTheRobot() {
        return `${this.name} used Eva Unit 1 to deal minimal damage`
    };
}

  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  const shinji1 = new Hero({
    createdAt: new Date(),
    dimension: {
      length: 5,
      width: 3,
      height: 2,
    },
    healthPoints: 60,
    name: 'Shinji',
    team: 'Nerv',
    weapons: [
      'Eva Unit 01'
    ],
    language: 'Japanese'
  });

  const titanSlayer = new Villain({
    createdAt: new Date(),
    dimension: {
      length: 3,
      width: 1,
      height: .5
    },
    healthPoints: 30,
    name: 'Armin Artlett',
    team: 'The Scouts',
    weapons: [
      'titan transformation',
      'ODM gear'
    ],
    language: 'Nerd-Speak'
  })

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  console.log(titanSlayer.breatheDragonFire());
  console.log(shinji1.getInTheRobot());