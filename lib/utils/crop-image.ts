/**
 * Cropped area in pixels (from react-easy-crop onCropComplete croppedAreaPixels).
 */
export type CroppedAreaPixels = {
  x: number;
  y: number;
  width: number;
  height: number;
};

const OUTPUT_WIDTH = 500;
const OUTPUT_HEIGHT = 620;

/**
 * Renders the cropped region onto a fixed-size canvas and returns a JPEG blob.
 */
export async function getCroppedImageBlob(
  imageSrc: string,
  cropPixels: CroppedAreaPixels,
  mimeType: string = "image/jpeg",
  quality: number = 0.9
): Promise<Blob> {
  const image = await createImage(imageSrc);
  const canvas = document.createElement("canvas");
  canvas.width = OUTPUT_WIDTH;
  canvas.height = OUTPUT_HEIGHT;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas 2d context not available");

  const { x: sx, y: sy, width: sWidth, height: sHeight } = cropPixels;

  ctx.drawImage(
    image,
    sx,
    sy,
    sWidth,
    sHeight,
    0,
    0,
    OUTPUT_WIDTH,
    OUTPUT_HEIGHT
  );

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => (blob ? resolve(blob) : reject(new Error("toBlob failed"))),
      mimeType,
      quality
    );
  });
}

function createImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new window.Image();
    image.crossOrigin = "anonymous";
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = url;
  });
}
