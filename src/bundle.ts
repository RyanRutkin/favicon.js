import Ico from "./ico.js";
import Png from "./png.js";

class Bundle {
  constructor(canvas: HTMLCanvasElement) {
    this._canvas = canvas;
  }

  private _canvas: HTMLCanvasElement;

  generate() {
    const ico = new Ico(this._canvas);
    const png = new Png(this._canvas);

    return {
      ico: ico.generate([16, 32, 48]),
      png16: png.generate(16),
      png32: png.generate(32),
      png150: png.generate(150),
      png180: png.generate(180),
      png192: png.generate(192),
      png512: png.generate(512),
    };
  }
}

export default Bundle;
