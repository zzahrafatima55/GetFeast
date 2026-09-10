// Brand marks redrawn as vectors from the supplied logo files.

export function GenFeatMark({ className = "h-9" }: { className?: string }) {
  // Red dotted swoosh rising to the right, followed by the "genfeat" wordmark.
  const rows = [
    { y: 40, count: 9, r: 4.4, x0: 4, dx: 11, rise: 2.1 },
    { y: 30, count: 9, r: 3.9, x0: 12, dx: 10.5, rise: 1.8 },
    { y: 21, count: 8, r: 3.2, x0: 24, dx: 10, rise: 1.5 },
    { y: 13, count: 6, r: 2.5, x0: 40, dx: 9.5, rise: 1.2 },
  ];
  return (
    <svg viewBox="0 0 340 62" className={className} role="img" aria-label="GenFeat">
      <g fill="#c8102e">
        {rows.map((row, ri) =>
          Array.from({ length: row.count }).map((_, i) => (
            <circle
              key={`${ri}-${i}`}
              cx={row.x0 + i * row.dx}
              cy={row.y - i * row.rise}
              r={row.r}
            />
          )),
        )}
      </g>
      <text
        x="146"
        y="48"
        fontFamily="'Segoe UI', Barlow, sans-serif"
        fontSize="40"
        fontWeight="600"
        letterSpacing="-1.2"
      >
        <tspan fill="#c8102e">gen</tspan>
        <tspan fill="#3b3b3b">feat</tspan>
      </text>
    </svg>
  );
}

export function MicrosoftMark({ className = "h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 23 23" className={className} role="img" aria-label="Microsoft">
      <rect x="0" y="0" width="10.5" height="10.5" fill="#f25022" />
      <rect x="12" y="0" width="10.5" height="10.5" fill="#7fba00" />
      <rect x="0" y="12" width="10.5" height="10.5" fill="#00a4ef" />
      <rect x="12" y="12" width="10.5" height="10.5" fill="#ffb900" />
    </svg>
  );
}

export function CopilotMark({ className = "h-7" }: { className?: string }) {
  // Multicoloured folded ribbon.
  return (
    <svg viewBox="0 0 64 48" className={className} role="img" aria-label="Microsoft Copilot">
      <defs>
        <linearGradient id="cpA" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffb900" />
          <stop offset="40%" stopColor="#f25022" />
          <stop offset="100%" stopColor="#e3008c" />
        </linearGradient>
        <linearGradient id="cpB" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00a4ef" />
          <stop offset="55%" stopColor="#7f4bf0" />
          <stop offset="100%" stopColor="#e3008c" />
        </linearGradient>
      </defs>
      <path
        d="M4 34c8 2 12-4 16-14 3-8 8-12 16-12 10 0 16 6 16 14 0 4-1 7-3 10-4-2-6-6-7-11-1-6-5-9-10-9-6 0-9 4-11 11-4 12-9 19-17 19-3 0-5-2-5-5 0-2 2-3 5-3z"
        fill="url(#cpB)"
      />
      <path
        d="M6 40c9 0 14-6 18-17 3-8 6-11 12-11 5 0 9 3 10 9-3-2-6-3-9-3-8 0-13 5-17 15-4 10-9 15-17 15-3 0-5-2-5-4s3-4 8-4z"
        fill="url(#cpA)"
        opacity="0.92"
      />
    </svg>
  );
}

export function FabricMark({ className = "h-7" }: { className?: string }) {
  // Green folded "F" ribbon.
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-label="Microsoft Fabric">
      <defs>
        <linearGradient id="fbA" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9ff0d0" />
          <stop offset="100%" stopColor="#1a8f74" />
        </linearGradient>
        <linearGradient id="fbB" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5fe0b4" />
          <stop offset="100%" stopColor="#0e6a55" />
        </linearGradient>
      </defs>
      <path d="M14 8h28l-9 11H14z" fill="url(#fbA)" />
      <path d="M14 22h20l-9 11H14z" fill="url(#fbB)" />
      <path d="M14 8v32c-5-2-8-6-8-11V13c0-3 3-5 8-5z" fill="url(#fbB)" opacity="0.7" />
    </svg>
  );
}

export function KlayytechMark({ className = "h-7" }: { className?: string }) {
  // Cyan hourglass chevron beside a solid blue chevron.
  return (
    <svg viewBox="0 0 64 44" className={className} role="img" aria-label="Klayytech">
      <path d="M4 4h24L16 22l12 18H4l12-18z" fill="#29aae2" />
      <path d="M60 4L34 22l26 18H44L26 22 44 4z" fill="#0069b4" />
    </svg>
  );
}
