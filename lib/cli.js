const fs = require('fs');
const path = require('path');
const { Triangle, Circle, Square } = require('./shapes');

class CLI {
    constructor() {
        this.shape = null;
        this.color = '';
        this.text = '';
    }
    
    async run() {
        const inquirer = await import('inquirer');
        return inquirer.default
            .prompt([
                {
                    type: 'input',
                    name: 'text',
                    message: 'Please enter characters for your logo (3 characters max)',
                    validate: (input) => input.length <= 3 || '3 characters MAX Plese.'
                },
                {
                    type: 'input',
                    name: 'color',
                    message: 'Please enter a color for your logo',
                    validate: (input) => /^#[0-9A-F]{6}$/i.test(input) || /^[a-zA-Z]+$/.test(input) || 'Please enter a valid color keyword or hexadecimal number.'
                },
                {
                    type: 'list',
                    name: 'shape',
                    message: 'Please choose a shape for your logo',
                    choices: ['Square', 'Circle', 'Triangle'],
                }
            ])
            .then((answers) => {
                this.text = answers.text;
                this.color = answers.color;
                switch(answers.shape) {
                    case 'Circle':
                        this.shape = new Circle();
                        break;
                    case 'Square':
                        this.shape = new Square();
                        break;
                    case 'Triangle':
                         this.shape = new Triangle();
                         break;
                }
                if (this.shape) {
                    this.shape.setColor(this.color);
                    this.shape.setText(this.text);
                    this.createSVG();
                } else {
                    console.error('Error: No shape selected');
                }
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    }

    createSVG() {
        const svgShape = this.shape.render();
        const outputPath = path.join(__dirname, '..', 'examples', 'logo.svg');
        fs.writeFile(outputPath, svgShape, (err) => {
            if (err) {
                console.error("Error writing a SVG", err);
            } else {
                console.log(`SVG file created at ${outputPath}`);
            }
        });
    }
}

module.exports = CLI;