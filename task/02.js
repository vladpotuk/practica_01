// Task 2
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  printInfo() {
    console.log(
      `Name: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`
    );
  }
}

class Book extends Product {
  constructor(name, price, quantity, author) {
    super(name, price, quantity);
    this.author = author;
  }

  printInfo() {
    console.log(
      `Book: ${this.name}, Author: ${this.author}, Price: ${this.price}, Quantity: ${this.quantity}`
    );
  }
}

class Phone extends Product {
  constructor(name, price, quantity, brand) {
    super(name, price, quantity);
    this.brand = brand;
  }

  printInfo() {
    console.log(
      `Phone: ${this.name}, Brand: ${this.brand}, Price: ${this.price}, Quantity: ${this.quantity}`
    );
  }
}

class Fridge extends Product {
  constructor(name, price, quantity, capacity) {
    super(name, price, quantity);
    this.capacity = capacity;
  }

  printInfo() {
    console.log(
      `Fridge: ${this.name}, Capacity: ${this.capacity}L, Price: ${this.price}, Quantity: ${this.quantity}`
    );
  }
}

// Example usage
const products = [
  new Book("JavaScript Basics", 25, 3, "John Doe"),
  new Phone("iPhone 12", 999, 10, "Apple"),
  new Fridge("Samsung 300L", 600, 5, 300),
];

products.forEach((product) => product.printInfo());
