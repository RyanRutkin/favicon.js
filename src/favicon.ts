import Bundle from "./bundle.js";
import Ico from "./ico.js";
import Png from "./png.js";
import Resize from "./resize.js";

class FaviconJS {
  constructor(canvas: HTMLCanvasElement) {
    this._canvas = canvas;
  }

  private _canvas: HTMLCanvasElement;

  bundle() {
    return new Bundle(this._canvas).generate();
  }

  ico(sizes) {
    return new Ico(this._canvas).generate(sizes);
  }

  png(size) {
    return new Png(this._canvas).generate(size);
  }

  resize(size) {
    return new Resize(this._canvas).generate(size, size);
  }
}

export default FaviconJS;
