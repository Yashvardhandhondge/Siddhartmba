import Link from "next/link"

export default function SIMSLogo({ size = "default" }: { size?: "small" | "default" | "large" }) {
  const sizes = {
    small: { shield: "h-10 w-10", text: "text-[10px]", subtitle: "text-[6px]", simsSize: "text-sm" },
    default: { shield: "h-14 w-14 md:h-16 md:w-16", text: "text-xs md:text-sm", subtitle: "text-[7px] md:text-[8px]", simsSize: "text-base md:text-lg" },
    large: { shield: "h-20 w-20", text: "text-sm", subtitle: "text-[9px]", simsSize: "text-xl" },
  }
  const s = sizes[size]

  return (
    <Link href="/" className="flex items-center gap-3 group">
      {/* Shield Logo */}
      <div className={`${s.shield} relative flex-shrink-0`}>
        <svg viewBox="0 0 64 68" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="shieldBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#0A1628" }} />
              <stop offset="100%" style={{ stopColor: "#1a2d4a" }} />
            </linearGradient>
            <linearGradient id="goldText" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "#C9A84C" }} />
              <stop offset="50%" style={{ stopColor: "#E8D48B" }} />
              <stop offset="100%" style={{ stopColor: "#C9A84C" }} />
            </linearGradient>
          </defs>
          <path
            d="M32 2 L58 14 L58 36 C58 50 46 60 32 64 C18 60 6 50 6 36 L6 14 Z"
            fill="url(#shieldBg)"
            stroke="url(#goldText)"
            strokeWidth="2.5"
          />
          <text
            x="32"
            y="42"
            textAnchor="middle"
            fontFamily="Georgia, serif"
            fontWeight="bold"
            fontSize="18"
            fill="url(#goldText)"
          >
            SIMS
          </text>
        </svg>
      </div>
      {/* Text */}
      <div className="flex flex-col">
        <span className={`font-heading font-bold text-navy-500 dark:text-gold-400 ${s.simsSize} leading-tight tracking-wide`}>
          SIMS
        </span>
        <span className={`${s.text} font-semibold text-navy-400 dark:text-gray-300 leading-tight`}>
          Siddharth Institute of
        </span>
        <span className={`${s.text} font-semibold text-navy-400 dark:text-gray-300 leading-tight`}>
          Management Science
        </span>
      </div>
    </Link>
  )
}
