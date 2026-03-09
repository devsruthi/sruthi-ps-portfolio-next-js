import { HERO, THEME } from "@/lib/constants";

export type HeroProps = {
  name: string;
  intro: string;
};

export function Hero({ name, intro }: HeroProps) {
  return (
    <section className="flex min-h-screen max-w-[700px] flex-col items-center justify-center px-4 text-center leading-relaxed">
      <h1
        className="text-[60px] max-[1100px]:text-4xl"
        style={{ textShadow: THEME.HERO_TITLE_SHADOW }}
      >
        {HERO.title} <span style={{ color: THEME.COLORS.ACCENT }}>{name}</span>
      </h1>
      <p className="text-[21px] opacity-70">{intro}</p>
    </section>
  );
}
