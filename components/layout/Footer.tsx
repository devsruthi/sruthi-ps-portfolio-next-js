import { ASSET_PATHS, LAYOUT } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative">
      <div
        className="absolute bottom-0 left-0 w-full bg-cover bg-no-repeat"
        style={{
          height: `${LAYOUT.FOOTER_WAVE_HEIGHT_PX}px`,
          backgroundImage: `url(${ASSET_PATHS.WAVE_SVG})`,
        }}
        aria-hidden
      />
    </footer>
  );
}
