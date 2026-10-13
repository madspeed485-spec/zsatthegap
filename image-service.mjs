import sharpService from 'astro/assets/services/sharp';

function targetSize(options) {
  const src = options.src;
  const aspect = src.width / src.height;
  let width = options.width;
  let height = options.height;
  if (height && !width) width = Math.round(height * aspect);
  else if (width && !height) height = Math.round(width / aspect);
  else if (!width && !height) {
    width = src.width;
    height = src.height;
  }
  return { width, height };
}

export default {
  ...sharpService,
  // Default Astro drops srcset widths above the source size. The hero is 1200px
  // and should still offer 1600/1920/2400 (upscaled) for full-bleed displays.
  getSrcSet(options) {
    const { width: targetWidth, height: targetHeight } = targetSize(options);
    const aspectRatio = targetWidth / targetHeight;
    const widths = [...new Set((options.widths ?? []).slice().sort((a, b) => a - b))];
    const { width: _width, height: _height, ...rest } = options;
    const format = options.format ?? 'webp';
    return widths.map((width) => ({
      transform: { ...rest, width, height: Math.round(width / aspectRatio) },
      descriptor: `${width}w`,
      attributes: { type: `image/${format}` },
    }));
  },
};
