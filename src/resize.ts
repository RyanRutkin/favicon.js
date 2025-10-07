class Resize {
  constructor(canvas: HTMLCanvasElement) {
    this._canvas = canvas;
  }

  private _canvas: HTMLCanvasElement;

  /**
   * Resize the canvas by halving the width and height. This produces better
   * sampling and the image quality is generally better.
   */
  generate(width: number, height: number) {
    while (this._canvas.width / 2 >= width) {
      this._resize(this._canvas.width / 2, this._canvas.height / 2);
    }

    if (this._canvas.width > width) {
      this._resize(width, height);
    }

    return this._canvas;
  }

  /**
   * Simple resize of a canvas element.
   */
  _resize(width: number, height: number) {
    let canvas = document.createElement("canvas");
    let resizedContext = canvas.getContext("2d");
    if (!resizedContext) {
      console.error("Failed to resize image. Invalid canvas data provided.");
      return;
    }
    const preCanvWidth = canvas.width;
    const preCanvHeight = canvas.height;
    const calcWidth = preCanvWidth > preCanvHeight ? width : (preCanvWidth/preCanvHeight)*width;
    const calcHeight = preCanvHeight > preCanvWidth ? height : (preCanvHeight/preCanvWidth)*height;
    canvas.width = width;
    canvas.height = height;
    resizedContext.drawImage(
      this._canvas, 
      width > calcWidth ? (width-calcWidth)/2 : width,
      height > calcHeight ? (height-calcHeight)/2 : height,
      calcWidth, calcHeight
    );
    this._canvas = canvas;
  }
}

export default Resize;
