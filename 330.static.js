// static properties and methods
class Circle {
  static pi = 3.1415926535;
  // static propertie

  constructor(radius) {
    this.radius = radius;
  }
  getArea() {
    return this.radius * this.radius * Circle.pi;
  }
  getPerimeter() {
    return 2 * Circle.pi * this.radius;
  }

  static getAreaFormula() {
    console.log("r * r * 3.14");
  }
  // 對每個圓來說都是一樣的 就可以用 static(methods)
}

let c1 = new Circle(10);
console.log(c1.getPerimeter());
Circle.getAreaFormula();
