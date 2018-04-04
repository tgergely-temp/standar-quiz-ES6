# Standard Quiz ES6

Simple standard quiz for sponsored articles within the Telegraph website.

## Prerequisites

For development, on your environment you will only need Node.js installed.
And please use the appropriate [Editorconfig](http://editorconfig.org/) plugin for your Editor (not mandatory).

### Node

Install [NodeJS](http://nodejs.org/), this should include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v0.10.24

    $ npm --version
    1.3.21

## Installing
* Clone the master branch onto your local machine: `git clone https://github.com/sparkdigitaldev/standar-quiz-ES6.git`
* `cd standard-quiz-ES6`
* Within the project folder, install the dependencies by running `npm install` on your terminal.

## Development
Run `npm start` to start the local server on your machine. This is a static connect server with livereload.
Open `localhost:3000` in your browser

## Deployment

In `package.json` change the 'homepage' property to reflect the deployment URL.
Run `npm run build` to generate deployment files.
