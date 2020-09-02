class Point {
  constructor(px, py) {
    this.px = px;
    this.py = py;
  }

  draw(context) {
    context.fill = 'black';
    context.beginPath();
    context.arc(px, py, 4, 0, 2 * Math.PI);
    context.stroke();
  }
}
