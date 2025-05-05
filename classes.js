class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speakDog() {
    console.log(`${this.name} the ${this.breed} barks!`);
  }
}

const dog = new Dog("Rex", "German Shepherd");
dog.speak();
dog.speakDog();