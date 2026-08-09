import type { Achievement } from "@/lib/types";

export const ACHIEVEMENTS: readonly Achievement[] = [
  {
    id: "statekitjs-creator",
    kind: "open-source",
    title: "Creator of StateKitJS",
    org: "Open Source · npm",
    description:
      "Built and published StateKitJS — a React UI state component library for loading, empty, and error screens, with docs, live demos, and a public npm package.",
    highlight: "Open source",
    href: "/projects/statekitjs",
    hrefLabel: "View project →",
  },
  {
    id: "ustar-collaborate",
    kind: "award",
    title: "USTAR Recognition — Collaborate",
    org: "UST Global",
    description:
      "Recognized for excellent individual contribution and team collaboration, with high-quality deliverables that earned strong customer appreciation.",
    highlight: "Collaborate",
    image: "/images/achievements/ustar-collaborate.png",
  },
  {
    id: "ustar-agility",
    kind: "award",
    title: "USTAR Recognition — Agility",
    org: "UST Global",
    description:
      "Appreciated for dedication and support that helped drive project success through agile delivery and reliable collaboration.",
    highlight: "Agility",
    image: "/images/achievements/ustar-agility.png",
  },
  {
    id: "nissan-chargeback",
    kind: "recognition",
    title: "Nissan Digital — Chargeback Project",
    org: "Nissan Digital",
    description:
      "Thanked for being an integral part of the Chargeback Project success story — patience, teamwork, and relentless effort over 1.5 years that made a lasting difference.",
    highlight: "1.5 years",
    image: "/images/achievements/nissan-chargeback.png",
  },
] as const;
