/** Static asset paths (under public/). Profile image is S3-driven via admin. */
export const ASSET_PATHS = {
  WAVE_SVG: "/assets/wave.svg",
} as const;

/** Layout/dimension constants for consistent UI. */
export const LAYOUT = {
  FOOTER_WAVE_HEIGHT_PX: 250,
  PROFILE_IMAGE_WIDTH: 500,
  PROFILE_IMAGE_HEIGHT: 620,
  /** Aspect ratio for profile image (width/height). Lock cropper to this. */
  PROFILE_IMAGE_ASPECT: 500 / 620,
} as const;
