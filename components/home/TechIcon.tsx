type TechIconProps = {
  icon: string;
  className?: string;
};

export function TechIcon({ icon, className = "size-8" }: TechIconProps) {
  switch (icon) {
    case "js":
      return (
        <svg viewBox="0 0 32 32" className={className} aria-hidden>
          <rect width="32" height="32" rx="6" fill="#F7DF1E" />
          <text
            x="16"
            y="22"
            textAnchor="middle"
            fontSize="14"
            fontWeight="700"
            fill="#0a0b10"
            fontFamily="ui-monospace, monospace"
          >
            JS
          </text>
        </svg>
      );
    case "ts":
      return (
        <svg viewBox="0 0 32 32" className={className} aria-hidden>
          <rect width="32" height="32" rx="6" fill="#3178C6" />
          <text
            x="16"
            y="22"
            textAnchor="middle"
            fontSize="13"
            fontWeight="700"
            fill="#fff"
            fontFamily="ui-monospace, monospace"
          >
            TS
          </text>
        </svg>
      );
    case "react":
    case "rn":
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden>
          <circle cx="16" cy="16" r="3" fill="#61DAFB" />
          <ellipse cx="16" cy="16" rx="12" ry="5" stroke="#61DAFB" strokeWidth="1.5" />
          <ellipse
            cx="16"
            cy="16"
            rx="12"
            ry="5"
            stroke="#61DAFB"
            strokeWidth="1.5"
            transform="rotate(60 16 16)"
          />
          <ellipse
            cx="16"
            cy="16"
            rx="12"
            ry="5"
            stroke="#61DAFB"
            strokeWidth="1.5"
            transform="rotate(120 16 16)"
          />
        </svg>
      );
    case "next":
      return (
        <svg viewBox="0 0 32 32" className={className} aria-hidden>
          <circle cx="16" cy="16" r="14" fill="#fff" />
          <path
            d="M20.5 22.5L12 9.5h2.2l8.5 13h-2.2zm-1.2-1.8a7.5 7.5 0 11-6.6-12.5"
            fill="#0a0b10"
          />
        </svg>
      );
    case "redux":
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden>
          <path
            d="M10 20c-2.5-1.2-3.5-3.2-3.5-5.2C6.5 11 9.5 8.5 13.2 8.5c1.8 0 3.4.6 4.5 1.7"
            stroke="#764ABC"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M22 12c2.5 1.2 3.5 3.2 3.5 5.2 0 3.8-3 6.3-6.7 6.3-1.8 0-3.4-.6-4.5-1.7"
            stroke="#764ABC"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="10" cy="20" r="2.2" fill="#764ABC" />
          <circle cx="22" cy="12" r="2.2" fill="#764ABC" />
          <circle cx="16" cy="22.5" r="2.2" fill="#764ABC" />
        </svg>
      );
    case "git":
      return (
        <svg viewBox="0 0 32 32" className={className} aria-hidden>
          <path
            fill="#F05032"
            d="M29.4 14.6L17.4 2.6a2 2 0 00-2.8 0L12 5.2l3.5 3.5a2.3 2.3 0 012.9 2.9l3.4 3.4a2.3 2.3 0 11-1.3 1.3l-3.2-3.2v8.4a2.3 2.3 0 11-1.9.1V13a2.3 2.3 0 01-.6-3.8L10.7 5.7 2.6 13.8a2 2 0 000 2.8l12 12a2 2 0 002.8 0l11.9-12a2 2 0 000-2.8z"
          />
        </svg>
      );
    case "html":
      return (
        <svg viewBox="0 0 32 32" className={className} aria-hidden>
          <path fill="#E44D26" d="M5 3h22l-2 22-9 3-9-3L5 3z" />
          <path fill="#F16529" d="M16 6v20.5l7.2-2.1L25 6H16z" />
          <path
            fill="#EBEBEB"
            d="M16 13.5H11.8l.3 3H16v-3zm0 6.5v3.2l-.05.01-3.9-1.1-.25-2.8H8.7l.5 5.5L16 27v-3.5l.05-.02 3.95-1.1.4-4.4H16z"
          />
        </svg>
      );
    case "css":
      return (
        <svg viewBox="0 0 32 32" className={className} aria-hidden>
          <path fill="#264DE4" d="M5 3h22l-2 22-9 3-9-3L5 3z" />
          <path fill="#2965F1" d="M16 6v20.5l7.2-2.1L25 6H16z" />
          <path
            fill="#EBEBEB"
            d="M16 13.5H11.8l.3 3H16v-3zm0 6.5v3.2l-.05.01-3.9-1.1-.25-2.8H8.7l.5 5.5L16 27v-3.5l.05-.02 3.95-1.1.4-4.4H16z"
          />
        </svg>
      );
    case "sass":
      return (
        <svg viewBox="0 0 32 32" className={className} aria-hidden>
          <rect width="32" height="32" rx="6" fill="#CD6799" />
          <text
            x="16"
            y="21"
            textAnchor="middle"
            fontSize="11"
            fontWeight="700"
            fill="#fff"
            fontFamily="ui-sans-serif, system-ui, sans-serif"
          >
            SASS
          </text>
        </svg>
      );
    default:
      return (
        <span
          className={`inline-flex items-center justify-center rounded-lg bg-[#00d8ff]/15 text-xs font-bold text-[#00d8ff] ${className}`}
          aria-hidden
        >
          {icon.slice(0, 2).toUpperCase()}
        </span>
      );
  }
}
