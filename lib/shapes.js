class Shape {
  constructor() {
    this.color = "";
    this.text = "";
  }

  setColor(color) {
    this.color = color;
  }

  setText(text) {
    this.text = text;
  }
}

class Circle extends Shape {
  render() {
    return `
<svg width="450" height="300" xmlns="http://www.w3.org/2000/svg">
    <circle cx="225" cy="150" r="120" fill="${this.color}" />
    <text x="225" y="172.5" font-size="60" text-anchor="middle" fill="white">${this.text}</text>
</svg>`.trim();
  }
}

class Square extends Shape {
  render() {
    return `
<svg width="450" height="300" xmlns="http://www.w3.org/2000/svg">
    <rect x="75" y="75" width="300" height="300" fill="${this.color}" />
    <text x="225" y="225" font-size="60" text-anchor="middle" fill="white">${this.text}</text>
</svg>`.trim();
  }
}


class Triangle extends Shape {
  render() {
    return `
<svg width="450" height="300" xmlns="http://www.w3.org/2000/svg">
    <polygon points="225,15 435,285 15,285" fill="${this.color}" />
    <text x="225" y="225" font-size="60" text-anchor="middle" fill="white">${this.text}</text>
</svg>`.trim();
  }
}


module.exports = { Circle, Square, Triangle };