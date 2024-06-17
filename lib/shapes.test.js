const { Triangle, Circle, Square } = require("./shapes.js");

describe("Shape classes", () => {
  test("Triangle renders correctly with specified color", () => {
    const triangleShape = new Triangle();
    triangleShape.setColor("blue");
    triangleShape.setText("A");
    expect(triangleShape.render()).toEqual(
`<svg width="450" height="300" xmlns="http://www.w3.org/2000/svg">
    <polygon points="225,15 435,285 15,285" fill="blue" />
    <text x="225" y="225" font-size="60" text-anchor="middle" fill="white">A</text>
</svg>`
    );
  });

  test("Circle renders correctly with specified color", () => {
    const circleShape = new Circle();
    circleShape.setColor("red");
    circleShape.setText("B");
    expect(circleShape.render()).toEqual(
`<svg width="450" height="300" xmlns="http://www.w3.org/2000/svg">
    <circle cx="225" cy="150" r="120" fill="red" />
    <text x="225" y="172.5" font-size="60" text-anchor="middle" fill="white">B</text>
</svg>`
    );
  });

  test("Square renders correctly with specified color", () => {
    const squareShape = new Square();
    squareShape.setColor("green");
    squareShape.setText("C");
    console.log(squareShape.render());
    expect(squareShape.render()).toEqual(
`<svg width="450" height="300" xmlns="http://www.w3.org/2000/svg">
    <rect x="75" y="75" width="300" height="300" fill="green" />
    <text x="225" y="225" font-size="60" text-anchor="middle" fill="white">C</text>
</svg>`
    );
  });
});