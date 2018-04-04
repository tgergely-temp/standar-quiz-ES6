# Standard Quiz ES6

Simple standard quiz for sponsored articles within the Telegraph website.

## Prerequisites

For development, you will only need Node.js installed on your environement.
And please use the appropriate [Editorconfig](http://editorconfig.org/) plugin for your Editor (not mandatory).

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v0.10.24

    $ npm --version
    1.3.21

## Installing
* Clone the master branch in you local machine: `git clone https://github.com/sparkdigitaldev/standar-quiz-ES6.git`
* `cd standard-quiz-ES6`
* Within the project folder, install dependencies running `npm install` on your terminal.

## Development
Run `npm start` to start the local server in your machine and watch changes in your files. This is a static connect server with livereload.
Open `localhost:3000` in your browser

## Deployment

Open `package.json` and edit 'homepage' property to the final URL of the quiz.
Run `npm run build`

## Update sources

Some packages usages might change so you should run `npm prune` & `npm install` often.
A common way to update is by doing

    $ git pull
    $ npm prune
    $ npm install
