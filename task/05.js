// Task 5
class Car {
  constructor(make, model, year, enginePower) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.enginePower = enginePower;
  }

  printInfo() {
    console.log(
      `Car: ${this.make} ${this.model}, Year: ${this.year}, Engine Power: ${this.enginePower} HP`
    );
  }
}

class Sedan extends Car {
  constructor(make, model, year, enginePower) {
    super(make, model, year, enginePower);
  }

  printInfo() {
    console.log(
      `Sedan: ${this.make} ${this.model}, Year: ${this.year}, Engine Power: ${this.enginePower} HP`
    );
  }
}

class Truck extends Car {
  constructor(make, model, year, enginePower) {
    super(make, model, year, enginePower);
  }

  printInfo() {
    console.log(
      `Truck: ${this.make} ${this.model}, Year: ${this.year}, Engine Power: ${this.enginePower} HP`
    );
  }
}

class Bus extends Car {
  constructor(make, model, year, enginePower) {
    super(make, model, year, enginePower);
  }

  printInfo() {
    console.log(
      `Bus: ${this.make} ${this.model}, Year: ${this.year}, Engine Power: ${this.enginePower} HP`
    );
  }
}

// Example usage
const cars = [
  new Sedan("Toyota", "Camry", 2022, 200),
  new Truck("Ford", "F-150", 2021, 400),
  new Bus("Mercedes", "Sprinter", 2020, 180),
];

cars.forEach((car) => car.printInfo());
