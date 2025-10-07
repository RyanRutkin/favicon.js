# Shoutout to the developer

- This is a fork of the original [favicon.js](https://github.com/johnsorrentino/favicon.js) library published by John Sorrentino. John didn't create an npm package for this, so I forked it and created an NPM package.
- The Favicon class can now be initialized with an image instead of just a canvas element.

## Updates

I've converted this code to Typescript from the original Javascript. Though this library will not work in Node.js, I provided compilation through CJS as well as ESM.

# Favicon.js

Favicon.js is a lightweight library that allows you to create ICO and PNG formatted favicons from a canvas element.

## Examples

```
yarn install
yarn examples
```

### Generate ICO

Generate an ICO file from a `<canvas>` element. Initialize a `Favicon.Ico` object with a canvas element. The canvas should be square for best results. Pass the generate method an array of sizes that the (layered) ICO file should contain.

```JavaScript
const favicon = new FaviconJS(canvas);
const dataurl = favicon.ico([16, 32, 48]);
```

### Generate PNG

Generate a PNG file from a `canvas` element. Initialize a `Favicon.Png` object with a canvas element. The canvas should be square for best results. Pass the generate method the size that should be generated.

```JavaScript
const favicon = new FaviconJS(canvas);
const dataurl = favicon.png(32);
```

### Generate Bundle

Generate multiple favicon format based on current best practices.

```JavaScript
const favicon = new FaviconJS(canvas);
const package = favicon.bundle();
```

The bundle will contain the follow keys which map to common favicon formats.

- `ico` - favicon.ico
- `png16` - favicon-16x16.png
- `png32` - favicon-32x32.png
- `png180` - apple-touch-icon.png
- `png192` - android-chrome-192x192.png
- `png512` - android-chrome-512x512.png

### Example

The example below will generate an ICO formatted favicon that includes 3 sizes: 16x16, 32x32, and 48x48 pixels. The full example can be found [here](./examples/ico.html).

![Preview](./examples/preview.png)

```JavaScript
// Setup canvas
const canvas = document.getElementById("canvas");
canvas.width = 128;
canvas.height = 128;
const context = canvas.getContext("2d");

// Draw background
context.fillStyle = "#d85537";
context.fillRect(0, 0, canvas.width, canvas.height);

// Draw text
context.fillStyle = "#FFFFFF";
context.font = "100px Helvetica";
context.textBaseline = "middle";
context.textAlign = "center";
const x = canvas.width / 2;
const y = canvas.height / 2;
context.fillText("F", x, y);

// Create favicon.ico dataurl
const favicon = new FaviconJS(canvas);
const dataurl = favicon.ico([16, 32, 48]);

// Activate the download button
const download = document.getElementById("download");
download.href = dataurl;
download.setAttribute("download", "favicon.ico");
```
