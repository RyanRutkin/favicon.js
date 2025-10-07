import Resize from "./resize.js";

export default class Png {
  constructor(canvas: HTMLCanvasElement) {
    this._canvas = canvas;
  }

  private _canvas: HTMLCanvasElement;

  generate(size: number) {
    return new Resize(this._canvas).generate(size, size).toDataURL();
  }
}
