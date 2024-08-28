// Task 1
class Shape {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getArea() {
    throw new Error("Method not implemented");
  }

  getPerimeter() {
    throw new Error("Method not implemented");
  }
}

class Square extends Shape {
  constructor(sideLength) {
    super("Square");
    this.sideLength = sideLength;
  }

  getArea() {
    return this.sideLength ** 2;
  }

  getPerimeter() {
    return this.sideLength * 4;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super("Rectangle");
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

class Triangle extends Shape {
  constructor(a, b, c) {
    super("Triangle");
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea() {
    const s = (this.a + this.b + this.c) / 2;
    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }

  getPerimeter() {
    return this.a + this.b + this.c;
  }
}

// Example usage
const shapes = [new Square(5), new Rectangle(4, 7), new Triangle(3, 4, 5)];

shapes.forEach((shape) => {
  console.log(`Name: ${shape.getName()}`);
  console.log(`Area: ${shape.getArea()}`);
  console.log(`Perimeter: ${shape.getPerimeter()}`);
});
