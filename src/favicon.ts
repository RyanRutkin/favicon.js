import Bundle from "./bundle.js";
import Ico from "./ico.js";
import Png from "./png.js";
import Resize from "./resize.js";

class FaviconJS {
  constructor(elem: HTMLCanvasElement | HTMLImageElement) {
    if (elem instanceof HTMLImageElement) {
      this._initializedWithImage = true;
      this._image = elem;
      this._canvas = this._convertImageToCanvas();
    } else {
      this._canvas = elem;
    }
  }

  private _canvas: HTMLCanvasElement;
  private _image: HTMLImageElement | null = null;
  private _initializedWithImage: boolean = false;

  private _convertImageToCanvas(): HTMLCanvasElement {
    const canvas = document.createElement('canvas');
    const rect = this._image?.getBoundingClientRect();
    if (!rect?.width || !rect?.height) {
      console.error('Failed to initialize FaviconJS. Image has not been rendered with full dimensions. Attempt using a timeout after the image has loaded.');
      return canvas;
    }
    console.log(`FaviconJS initialized with image - width: ${rect.width}; height: ${rect.height}`);
    canvas.width = rect.width;
    canvas.height = rect.height;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Unable to use FaviconJS. DOM restrictions in place');
      return canvas;
    }
    ctx.drawImage(this._image!, 0, 0, rect.width, rect.height);
    return canvas;
  }

  bundle() {
    if (this._initializedWithImage) {
      this._canvas = this._convertImageToCanvas();
    }
    return new Bundle(this._canvas).generate();
  }

  ico(sizes: number[] = [16, 32, 48]) {
    if (this._initializedWithImage) {
      this._canvas = this._convertImageToCanvas();
    }
    return new Ico(this._canvas).generate(sizes);
  }

  png(size: number) {
    if (this._initializedWithImage) {
      this._canvas = this._convertImageToCanvas();
    }
    return new Png(this._canvas).generate(size);
  }

  resize(size: number) {
    if (this._initializedWithImage) {
      this._canvas = this._convertImageToCanvas();
    }
    return new Resize(this._canvas).generate(size, size);
  }
}

export default FaviconJS;
