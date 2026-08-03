import type { SectionTitleProps } from "@/lib/types";

export function SectionTitle({ label }: SectionTitleProps) {
  return (
    <div className="mb-10 text-center">
      <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
        {label}
      </h2>
      <div className="mx-auto mt-4 h-px w-16 bg-[#00d8ff]/70" />
    </div>
  );
}
