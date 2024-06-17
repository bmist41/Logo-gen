# Logo-Generator-M10
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Table of Contents
* [Installation](#installation)
* [Description](#description)
* [Usage](#usage)
* [License](#license)
* [Tests](#tests)
    
## Installation
To install, please clone this repository to your computer using the following steps:

1. Click the "Code" dropdown menu and copy the SSH URL.
2. Open your terminal and navigate to the directory you would like to clone this repository into.
3. Type "git clone <paste SSH URL>", replacing <paste SSH URL> with your copied SSH URL. You can substitute an SSH URL with an HTTPS URL.
4. Press enter.

## Description
This is a node-based program that generates an SVG logo based on user input into the command line. It utilizes [Inquirer](https://www.npmjs.com/package/inquirer/v/8.2.4) for input collection, and [Jest](https://www.npmjs.com/package/jest) for unit testing.

The program allows the user to input a 3 character text, a color, and a shape. For the shape, the user can pick between a triangle, circle, and square.

An SVG file based on the user's input is then generated in the "examples" folder.

## Usage
To run the program, navigate to the SVG-Logo-Generator folder and enter "node index.js" into your local terminal. Follow the steps as prompted.

![Screenshot](assets/screenshots/logo_generated.png)

Once all the prompts have been answered, a message will be displayed stating the SVG file has been generated. It will also display the pathway to the subdirectory "examples" where your program was generated.

![Screenshot](assets/screenshots/tests.png)


[Please see this video demo.](https://drive.google.com/file/d/1mHmUWHEdJ1jYjVXDOQl4cDH_aVDZi3eM/view?usp=drive_link)


## License
This project is licensed under the MIT License. For more information, please see the [MIT License](https://opensource.org/licenses/MIT).

## Credits
This program was created by Barrett Mistele

## Tests
I conducted unit tests for specific shapes.
