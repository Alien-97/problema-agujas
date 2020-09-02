let ClassLine;
if (typeof require !== 'undefined') {
  ClassLine = require('./line.js').Line;
} else {
  ClassLine = Line;
}
class Executor {
  constructor() {
    // create canvas
    this.canvas = document.createElement('canvas');
    this.canvas.width = window.innerWidth * 0.7;
    this.canvas.height = window.innerHeight * 0.6;

    console.log('EL ANCHO DEL CANVAS ' + this.canvas.width);
    console.log('EL ALTO DEL CANVAS ' + this.canvas.height);

    /*this.canvas.width = parseInt(window.innerWidth * 0.7);
    this.canvas.height = parseInt(window.innerHeight * 0.);*/
    document.body.appendChild(this.canvas);
    // draw two horizontal lines
    // mitad altura browser - 30
    this.context = this.canvas.getContext('2d');

    console.log('Hola, estoy ejecutando');
    let px, py1, py2;
    px = 0;
    py1 = this.canvas.height * 0.33;
    py2 = this.canvas.height * 0.66;
    // mitad altura browser + 30
    let hLine1 = new ClassLine(px, py1, this.canvas.width);
    let hLine2 = new ClassLine(px, py2, this.canvas.width);

    hLine1.draw(this.context);
    hLine2.draw(this.context);
  }

  getCanvasWidth() {
    return this.canvas.width;
  }

  getCanvasHeight() {
    return this.canvas.height;
  }
}

let ex1 = new Executor();

let canvasWidth = ex1.getCanvasWidth();
let canvasHeight = ex1.getCanvasHeight();

let form1 = document.getElementById('drop1');

form1.addEventListener('click', function () {
  let numberOfPoints = 1;
  for (let i = 0; i < numberOfPoints; i++) {
    //Math.floor(Math.random() * 10) + 1;  // returns a random integer from 1 to 10

    let px = Math.floor(Math.random() * canvasWidth) + 1;
    let py = Math.floor(Math.random() * canvasHeight) + 1;
    let point = new Point();
  }
});
