const { Circle, Square, Triangle } = require("./shapes.js");

test('Shape setColor and setText methods should set the correct values', () => {
  const triangle = new Triangle();
  triangle.setColor('red');
  triangle.setText('Hey');
  expect(triangle.color).toBe('red');
  expect(triangle.text).toBe('Hey');

  const circle = new Circle();
  circle.setColor('blue');
  circle.setText('Hi');
  expect(circle.color).toBe('blue');
  expect(circle.text).toBe('Hi');

  const square = new Square();
  square.setColor('green');
  square.setText('Yo');
  expect(square.color).toBe('green');
  expect(square.text).toBe('Yo');
});
