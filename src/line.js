class Line {
  constructor(px, py, canvasWidth) {
    this.px = px;
    this.py = py;
    this.canvasWidth = canvasWidth;
  }

  draw(context) {
    //context.moveTo
    //context.lineTo
    //context.closePath
    //context.stroke
    console.log('Hola, voy a dibujar la linea');
    console.log('this.px ' + this.px);
    console.log('this.py ' + this.py);
    console.log('window.innerWidth ' + window.innerWidth);
    //context.fillStyle = 'black';
    //context.lineCap = 10;

    context.beginPath();
    context.moveTo(this.px, this.py);
    context.lineTo(this.canvasWidth, this.py);
    context.stroke();
    /*context.beginPath();
    context.moveTo(this.px, this.py);
    context.lineTo(window.innerWidth, this.py);
    context.closePath();
    //context.moveTo(this.px, this.py);
    //context.lineTo(document.documentElement.clientWidth, this.py);
    context.stroke();
    //context.fill();*/
  }
}

if (typeof exports !== 'undefined') {
  exports.Line = Line;
}
