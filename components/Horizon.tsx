/**
 * Telephone poles against a big sky — the film's most repeated frame,
 * drawn as an original minimal silhouette. Rendered in currentColor so
 * the parent section decides whether it reads as noon glare or dusk.
 */
export default function Horizon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 170"
      preserveAspectRatio="xMidYMax meet"
      aria-hidden="true"
      className={className}
    >
      <g stroke="currentColor" fill="none" strokeLinecap="round">
        {/* ground line */}
        <line x1="0" y1="167" x2="1200" y2="167" strokeWidth="2.5" />

        {/* poles — slight height drift, like driving past them */}
        <g strokeWidth="3">
          <line x1="90" y1="167" x2="90" y2="42" />
          <line x1="400" y1="167" x2="400" y2="48" />
          <line x1="720" y1="167" x2="720" y2="44" />
          <line x1="1030" y1="167" x2="1030" y2="50" />
        </g>

        {/* crossarms */}
        <g strokeWidth="2.5">
          <line x1="62" y1="54" x2="118" y2="54" />
          <line x1="70" y1="72" x2="110" y2="72" />
          <line x1="372" y1="60" x2="428" y2="60" />
          <line x1="380" y1="78" x2="420" y2="78" />
          <line x1="692" y1="56" x2="748" y2="56" />
          <line x1="700" y1="74" x2="740" y2="74" />
          <line x1="1002" y1="62" x2="1058" y2="62" />
          <line x1="1010" y1="80" x2="1050" y2="80" />
        </g>

        {/* sagging wires */}
        <g strokeWidth="1.25" opacity="0.85">
          <path d="M -40 60 Q 25 66 62 54" />
          <path d="M 118 54 Q 245 78 372 60" />
          <path d="M 428 60 Q 560 74 692 56" />
          <path d="M 748 56 Q 875 80 1002 62" />
          <path d="M 1058 62 Q 1150 72 1240 64" />
          <path d="M -40 78 Q 15 82 70 72" />
          <path d="M 110 72 Q 245 94 380 78" />
          <path d="M 420 78 Q 560 92 700 74" />
          <path d="M 740 74 Q 875 96 1010 80" />
          <path d="M 1050 80 Q 1150 90 1240 82" />
        </g>
      </g>
    </svg>
  );
}
