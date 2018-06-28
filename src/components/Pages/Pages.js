import React, { Component } from 'react';
import styles from './Pages.css';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

class Pages extends Component {
  constructor(props) {
    super(props);
    this.draw = this.draw.bind(this);
    this.resetCanvasSize = this.resetCanvasSize.bind(this);
  }

  draw(e, ctx) {
    if(!isDrawing) return;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue++;
    if(hue > 360) {
      hue = 0;
    }
    if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
      direction = !direction;
    }
    if (direction) {
      ctx.lineWidth++;
    } else {
      ctx.lineWidth--;
    }
  }

  resetCanvasSize() {
    const canvas = this.refs.canvas;
    canvas.width = 0;
    canvas.height = 0;
    canvas.width = this.refs.container.clientWidth;
    canvas.height = this.refs.container.clientHeight;
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = '#000';
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 1;
  }

  componentDidMount() {
    const canvas = this.refs.canvas;
    canvas.width = this.refs.container.clientWidth;
    canvas.height = this.refs.container.clientHeight;
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = '#000';
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 1;

    canvas.addEventListener('mousemove', (e) => this.draw(e, ctx));
    canvas.addEventListener('mousedown', (e) => {
      isDrawing = true;
      [lastX, lastY] = [e.offsetX, e.offsetY];
    });
    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mouseout', () => isDrawing = false);
    window.addEventListener('resize', this.resetCanvasSize);
  }

  render() {
    return (
      <div className={styles.pages}>
        <div className={styles.text}>
          This is a canvas playful ground. Simply start to draw with you mouse. You will be surprised.
        </div>
        <div ref='container' className={styles.container}>
          <canvas ref='canvas'/>
        </div>
      </div>
    );
  }
}

export default Pages;


