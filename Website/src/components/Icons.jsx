/* ============================================================
   All artwork is inline SVG — no external images anywhere.
   Palette: brand #1E7F39 · deep #14592A · band #0E3D1D
            lime #8CC63E · surface #F1F5EF · ink #182119
   ============================================================ */

/* ---------- Brand marks ---------- */

/* The recycling loop: one arrow, repeated at 120° and 240°. */
function ArrowLoop({ color = '#8CC63E', highlight = 'rgba(255,255,255,.5)' }) {
  return (
    <>
      {[0, 120, 240].map((angle) => (
        <g key={angle} transform={`rotate(${angle} 100 100)`}>
          <path
            d="M 56.77,84.27 A 46,46 0 0 1 123.00,60.16"
            fill="none"
            stroke={color}
            strokeWidth="14"
          />
          <path d="M 136.9,68.2 L 114.8,70.4 L 127.8,47.9 Z" fill={color} />
          <path
            d="M 62.4,82.5 A 41.5,41.5 0 0 1 114.2,61.0"
            fill="none"
            stroke={highlight}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
      ))}
    </>
  )
}

/* The leaf rosette at the centre of the mark. */
const LEAF = 'M 0,0 C -10.5,-9 -10,-23 0,-31 C 10,-23 10.5,-9 0,0 Z'

function LeafCluster({ colors = ['#3FB24A', '#8CC63E', '#2F9E3E'] }) {
  const leaves = [
    { angle: -50, scale: 1, fill: colors[0] },
    { angle: 35, scale: 0.9, fill: colors[1] },
    { angle: 140, scale: 0.78, fill: colors[2] },
  ]
  return (
    <g transform="translate(100,103)">
      {leaves.map(({ angle, scale, fill }) => (
        <g key={angle} transform={`rotate(${angle}) scale(${scale})`}>
          <path d={LEAF} fill={fill} />
          <path d="M 0,-4 L 0,-25" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" opacity=".45" />
        </g>
      ))}
    </g>
  )
}

/* Full badge: green disc, arched wordmark, recycling loop, leaves. */
export function LogoMark() {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true">
      <defs>
        <path id="llw-arc-top" d="M 30,100 A 70,70 0 0 1 170,100" />
        <path id="llw-arc-bottom" d="M 8,100 A 92,92 0 0 0 192,100" />
      </defs>

      <circle cx="100" cy="100" r="99" fill="#13A538" />

      <text
        fill="#fff"
        fontSize="34"
        fontWeight="800"
        letterSpacing="3"
        textAnchor="middle"
        fontFamily="'Noto Sans', system-ui, sans-serif"
      >
        <textPath href="#llw-arc-top" startOffset="50%">
          LOCAL
        </textPath>
      </text>
      <text
        fill="#fff"
        fontSize="33"
        fontWeight="800"
        letterSpacing="2"
        textAnchor="middle"
        fontFamily="'Noto Sans', system-ui, sans-serif"
      >
        <textPath href="#llw-arc-bottom" startOffset="50%">
          LOW WASTE
        </textPath>
      </text>

      <circle cx="20" cy="88" r="8.5" fill="#8CC63E" />
      <circle cx="180" cy="88" r="8.5" fill="#8CC63E" />

      <ArrowLoop />
      <LeafCluster />
    </svg>
  )
}

/* Monochrome version for the dark footer */
export function LogoMarkMono() {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true">
      <defs>
        <path id="llw-arc-top-mono" d="M 30,100 A 70,70 0 0 1 170,100" />
        <path id="llw-arc-bottom-mono" d="M 8,100 A 92,92 0 0 0 192,100" />
      </defs>

      <circle cx="100" cy="100" r="98" fill="none" stroke="#fff" strokeWidth="2.5" />

      <text
        fill="#fff"
        fontSize="34"
        fontWeight="800"
        letterSpacing="3"
        textAnchor="middle"
        fontFamily="'Noto Sans', system-ui, sans-serif"
      >
        <textPath href="#llw-arc-top-mono" startOffset="50%">
          LOCAL
        </textPath>
      </text>
      <text
        fill="#fff"
        fontSize="33"
        fontWeight="800"
        letterSpacing="2"
        textAnchor="middle"
        fontFamily="'Noto Sans', system-ui, sans-serif"
      >
        <textPath href="#llw-arc-bottom-mono" startOffset="50%">
          LOW WASTE
        </textPath>
      </text>

      <circle cx="20" cy="88" r="8.5" fill="#8CC63E" />
      <circle cx="180" cy="88" r="8.5" fill="#8CC63E" />

      <ArrowLoop color="#fff" highlight="rgba(19,165,56,.45)" />
      <LeafCluster colors={['#8CC63E', '#fff', '#8CC63E']} />
    </svg>
  )
}

/* ---------- UI glyphs ---------- */

export function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M16.5 16.5 L21.5 21.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M3 12h18M12 3c2.6 3.2 2.6 14.8 0 18M12 3c-2.6 3.2-2.6 14.8 0 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  )
}

export function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 3.2 L22.4 12.4 H19.2 V20.8 H14 V15.2 H10 V20.8 H4.8 V12.4 H1.6 Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 20.8 C 4.6 15.9 2 12.9 2 9.5 C 2 6.5 4.3 4.4 7 4.4 c 1.9 0 3.6 1 5 2.8 c 1.4 -1.8 3.1 -2.8 5 -2.8 c 2.7 0 5 2.1 5 5.1 c 0 3.4 -2.6 6.4 -10 11.3 Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 5 L19 19 M19 5 L5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

/* ---------- Social / contact brand marks ---------- */

/* Gmail — the envelope with its signature M fold */
export function GmailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M1.8 6.55c0-1.02 1.16-1.6 1.98-.99L12 11.9l8.22-6.34c.82-.61 1.98-.03 1.98.99V18.2c0 .72-.58 1.3-1.3 1.3h-2.6V10.4L12 15.1 5.7 10.4v9.1H3.1c-.72 0-1.3-.58-1.3-1.3V6.55z" />
    </svg>
  )
}

/* Facebook — the f knocked out of a solid disc */
export function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.49 0-1.95.93-1.95 1.88v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z" />
    </svg>
  )
}

/* Instagram — rounded square, lens, flash dot */
export function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="2.6"
        y="2.6"
        width="18.8"
        height="18.8"
        rx="5.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="4.4" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.6" cy="6.4" r="1.35" fill="currentColor" />
    </svg>
  )
}

/* TikTok — the music note */
export function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.6 2.6 0 0 1-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3c-.53 0-2.22-.02-3.24-1.48z" />
    </svg>
  )
}

/* ---------- Programme tile icons ---------- */

export function EducationIcon() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" fill="none">
      <rect x="5" y="7" width="30" height="21" stroke="currentColor" strokeWidth="2.2" />
      <path d="M5 13h30" stroke="currentColor" strokeWidth="2.2" />
      <path d="M11 19.5h13M11 24h9" stroke="#8CC63E" strokeWidth="2.2" strokeLinecap="round" />
      <path
        d="M16 28v4M24 28v4M11 33h18"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function UpcycleIcon() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
        <path d="M10 15 A 12 12 0 0 1 25 8.5" />
        <path d="M32 21 A 12 12 0 0 1 20 33" />
      </g>
      <g fill="#8CC63E">
        <path d="M24 3.5 L31.5 10 L22.5 13 Z" />
        <path d="M20 36.5 L12.5 30 L21.5 27 Z" />
      </g>
    </svg>
  )
}

export function CommunityIcon() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" fill="none">
      <circle cx="14" cy="12" r="4.8" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="27" cy="14" r="4" stroke="#8CC63E" strokeWidth="2.2" />
      <path
        d="M5.5 31c0-4.7 3.8-7.6 8.5-7.6s8.5 2.9 8.5 7.6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M24 24.2c1-.5 2-.7 3-.7 4 0 7.5 2.5 7.5 6.8"
        stroke="#8CC63E"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function LowWasteIcon() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" fill="none">
      <path
        d="M8.5 12h23l-2.2 22.5a1.5 1.5 0 0 1-1.5 1.3H12.2a1.5 1.5 0 0 1-1.5-1.3L8.5 12z"
        stroke="currentColor"
        strokeWidth="2.2"
      />
      <path d="M5.5 12h29" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M15 12V7.5h10V12" stroke="currentColor" strokeWidth="2.2" />
      <path
        d="M20 30c-5-3.5-5-9.5 0-13 5 3.5 5 9.5 0 13z"
        fill="#8CC63E"
      />
    </svg>
  )
}

export function LeadershipIcon() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" fill="none">
      <circle cx="17" cy="13" r="5.4" stroke="currentColor" strokeWidth="2.2" />
      <path
        d="M6 34c0-6.1 4.9-10 11-10s11 3.9 11 10"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path d="M31 4.5l2 5.2 5.2.4-4 3.4 1.3 5-4.5-2.8-4.5 2.8 1.3-5-4-3.4 5.2-.4z" fill="#8CC63E" />
    </svg>
  )
}

export function PolicyIcon() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <rect x="6" y="21" width="6.5" height="11" fill="currentColor" />
      <rect x="16.75" y="13" width="6.5" height="19" fill="#8CC63E" />
      <rect x="27.5" y="7" width="6.5" height="25" fill="currentColor" />
      <path
        d="M4 35.5h32"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

/* ---------- Hero: full-bleed Vientiane riverbank ---------- */

export function HeroArt() {
  return (
    <svg
      viewBox="0 0 1600 700"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Illustration of the Vientiane riverbank with waste sorting bins and volunteers"
    >
      {/* sky */}
      <rect width="1600" height="700" fill="#E6EFE3" />
      <circle cx="1290" cy="150" r="90" fill="#8CC63E" opacity=".45" />
      <circle cx="1290" cy="150" r="130" fill="#8CC63E" opacity=".18" />

      {/* distant tree line */}
      <g fill="#1E7F39" opacity=".22">
        <circle cx="70" cy="330" r="60" />
        <circle cx="150" cy="345" r="45" />
        <circle cx="1480" cy="335" r="55" />
        <circle cx="1400" cy="350" r="40" />
        <rect x="0" y="340" width="1600" height="40" />
      </g>

      {/* That Luang style stupa */}
      <g fill="#14592A" opacity=".55">
        <rect x="1020" y="300" width="120" height="80" />
        <path d="M1050 300 L1080 210 L1110 300 Z" />
        <rect x="1073" y="170" width="14" height="45" />
      </g>

      {/* Patuxai style monument */}
      <g fill="#14592A" opacity=".75">
        <rect x="700" y="250" width="180" height="130" />
        <rect x="735" y="195" width="110" height="60" />
        <rect x="770" y="150" width="40" height="50" />
        <rect x="745" y="300" width="40" height="80" fill="#E6EFE3" opacity=".55" />
        <rect x="800" y="300" width="40" height="80" fill="#E6EFE3" opacity=".55" />
      </g>

      {/* near trees */}
      <g fill="#1E7F39">
        <circle cx="210" cy="300" r="66" />
        <rect x="198" y="300" width="24" height="86" />
        <circle cx="320" cy="332" r="46" />
        <rect x="312" y="332" width="16" height="58" />
      </g>

      {/* grass bank */}
      <path
        d="M0 380 C 260 350, 520 412, 820 378 C 1080 348, 1340 392, 1600 362 L1600 700 L0 700 Z"
        fill="#8CC63E"
        opacity=".45"
      />
      <path d="M0 430 H1600 V700 H0 Z" fill="#BFD6C0" />

      {/* Mekong */}
      <path
        d="M0 500 C 280 470, 520 528, 840 496 C 1120 468, 1340 512, 1600 486 L1600 700 L0 700 Z"
        fill="#1E7F39"
        opacity=".5"
      />
      <path
        d="M0 560 C 320 534, 600 588, 920 558 C 1200 532, 1380 572, 1600 548 L1600 700 L0 700 Z"
        fill="#14592A"
        opacity=".55"
      />
      <g stroke="#F1F5EF" strokeWidth="4" opacity=".45" strokeLinecap="round">
        <path d="M180 600 h90" />
        <path d="M330 640 h70" />
        <path d="M1180 606 h90" />
        <path d="M1330 646 h70" />
      </g>

      {/* three sorting bins */}
      <g>
        <rect x="1140" y="392" width="76" height="98" fill="#1E7F39" stroke="#14592A" strokeWidth="3" />
        <rect x="1140" y="392" width="76" height="16" fill="#14592A" />
        <rect x="1228" y="392" width="76" height="98" fill="#8CC63E" stroke="#14592A" strokeWidth="3" />
        <rect x="1228" y="392" width="76" height="16" fill="#14592A" />
        <rect x="1316" y="392" width="76" height="98" fill="#F1F5EF" stroke="#14592A" strokeWidth="3" />
        <rect x="1316" y="392" width="76" height="16" fill="#14592A" />
        <g
          transform="translate(1266,444)"
          fill="none"
          stroke="#14592A"
          strokeWidth="3.4"
          strokeLinecap="round"
        >
          <path d="M -13 -9 A 15 15 0 0 1 4 -16" />
          <path d="M 8 13 A 15 15 0 0 1 -11 7" />
          <path d="M 10 -6 A 15 15 0 0 1 8 10" />
        </g>
      </g>

      {/* volunteers */}
      <g fill="#14592A">
        <g transform="translate(470,372)">
          <circle cx="0" cy="0" r="17" />
          <rect x="-14" y="18" width="28" height="58" />
          <rect x="-24" y="26" width="13" height="44" transform="rotate(16 -24 26)" />
          <rect x="11" y="26" width="13" height="44" transform="rotate(-26 11 26)" />
          <rect x="24" y="60" width="34" height="42" fill="#8CC63E" stroke="#14592A" strokeWidth="3" />
        </g>
        <g transform="translate(590,392)">
          <circle cx="0" cy="0" r="15" />
          <rect x="-12" y="16" width="24" height="52" />
          <rect x="-21" y="23" width="11" height="40" transform="rotate(-18 -21 23)" />
          <rect x="10" y="23" width="11" height="40" transform="rotate(22 10 23)" />
        </g>
      </g>

      {/* floating bottle being picked up */}
      <g transform="translate(700,470)" fill="#F1F5EF" stroke="#14592A" strokeWidth="2">
        <rect x="0" y="0" width="16" height="30" />
        <rect x="5" y="-8" width="6" height="9" />
      </g>
    </svg>
  )
}

/* ---------- News card scenes (16:10) ---------- */

function Frame({ children, label }) {
  return (
    <svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" role="img" aria-label={label}>
      {children}
    </svg>
  )
}

export function CleanupScene() {
  return (
    <Frame label="Volunteers collecting waste along the riverbank">
      <rect width="400" height="250" fill="#E6EFE3" />
      <circle cx="330" cy="46" r="28" fill="#8CC63E" opacity=".5" />
      <g fill="#1E7F39" opacity=".25">
        <circle cx="40" cy="118" r="30" />
        <circle cx="86" cy="128" r="22" />
        <circle cx="360" cy="124" r="26" />
      </g>
      <path
        d="M0 140 C 90 128, 170 156, 250 140 C 310 128, 355 146, 400 136 L400 250 L0 250 Z"
        fill="#8CC63E"
        opacity=".45"
      />
      <path d="M0 175 H400 V250 H0 Z" fill="#1E7F39" opacity=".35" />
      <path
        d="M0 196 C 100 182, 180 214, 280 196 C 330 187, 365 202, 400 194 L400 250 L0 250 Z"
        fill="#14592A"
        opacity=".6"
      />
      <g fill="#14592A">
        <g transform="translate(120,128)">
          <circle cx="0" cy="0" r="11" />
          <rect x="-9" y="12" width="18" height="36" />
          <rect x="-16" y="17" width="8" height="28" transform="rotate(18 -16 17)" />
          <rect x="8" y="17" width="8" height="28" transform="rotate(-24 8 17)" />
          <rect x="16" y="38" width="22" height="26" fill="#8CC63E" stroke="#14592A" strokeWidth="2" />
        </g>
        <g transform="translate(212,140)">
          <circle cx="0" cy="0" r="10" />
          <rect x="-8" y="11" width="16" height="32" />
          <rect x="-14" y="15" width="7" height="25" transform="rotate(-20 -14 15)" />
          <rect x="7" y="15" width="7" height="25" transform="rotate(24 7 15)" />
        </g>
      </g>
      <g fill="#F1F5EF" stroke="#14592A" strokeWidth="1.6">
        <rect x="286" y="182" width="11" height="20" />
        <rect x="289" y="177" width="5" height="6" />
      </g>
    </Frame>
  )
}

export function WorkshopScene() {
  return (
    <Frame label="A waste sorting workshop in a classroom">
      <rect width="400" height="250" fill="#F1F5EF" />
      <rect x="0" y="0" width="400" height="160" fill="#E6EFE3" />
      {/* board */}
      <rect x="44" y="30" width="150" height="100" fill="#fff" stroke="#1E7F39" strokeWidth="3" />
      <g
        transform="translate(119,80)"
        fill="none"
        stroke="#8CC63E"
        strokeWidth="6"
        strokeLinecap="round"
      >
        <path d="M -20 -8 A 22 22 0 0 1 5 -20" />
        <path d="M 10 22 A 22 22 0 0 1 -18 12" />
        <path d="M 15 -12 A 22 22 0 0 1 12 18" />
      </g>
      {/* teacher */}
      <g fill="#14592A" transform="translate(238,66)">
        <circle cx="0" cy="0" r="14" />
        <rect x="-12" y="15" width="24" height="46" />
        <rect x="-26" y="20" width="16" height="9" transform="rotate(-20 -26 20)" />
      </g>
      {/* desks + pupils */}
      <g fill="#1E7F39">
        <circle cx="90" cy="176" r="15" />
        <rect x="74" y="194" width="32" height="26" />
        <circle cx="185" cy="176" r="15" />
        <rect x="169" y="194" width="32" height="26" />
        <circle cx="280" cy="176" r="15" />
        <rect x="264" y="194" width="32" height="26" />
      </g>
      <rect x="0" y="216" width="400" height="10" fill="#14592A" opacity=".55" />
    </Frame>
  )
}

export function MarketScene() {
  return (
    <Frame label="A pop-up upcycling market stall">
      <rect width="400" height="250" fill="#E6EFE3" />
      {/* canopy */}
      <path d="M40 90 L200 40 L360 90 Z" fill="#1E7F39" />
      <g fill="#8CC63E">
        <path d="M120 66 L160 51 L178 90 L138 90 Z" />
        <path d="M222 51 L262 66 L262 90 L222 90 Z" />
      </g>
      <rect x="40" y="90" width="320" height="12" fill="#14592A" />
      {/* posts */}
      <rect x="48" y="102" width="10" height="110" fill="#14592A" />
      <rect x="342" y="102" width="10" height="110" fill="#14592A" />
      {/* table */}
      <rect x="70" y="160" width="260" height="14" fill="#14592A" />
      <rect x="86" y="174" width="10" height="42" fill="#14592A" />
      <rect x="304" y="174" width="10" height="42" fill="#14592A" />
      {/* upcycled goods */}
      <g stroke="#14592A" strokeWidth="2">
        <rect x="96" y="128" width="22" height="32" fill="#8CC63E" />
        <rect x="128" y="136" width="18" height="24" fill="#F1F5EF" />
        <rect x="158" y="122" width="26" height="38" fill="#1E7F39" />
        <rect x="196" y="134" width="20" height="26" fill="#8CC63E" />
        <rect x="228" y="126" width="24" height="34" fill="#F1F5EF" />
        <rect x="264" y="138" width="20" height="22" fill="#1E7F39" />
      </g>
      {/* shopper */}
      <g fill="#14592A" transform="translate(360,150)">
        <circle cx="0" cy="0" r="13" />
        <rect x="-11" y="14" width="22" height="44" />
      </g>
      <rect x="0" y="216" width="400" height="34" fill="#BFD6C0" />
    </Frame>
  )
}

export function DataScene() {
  return (
    <Frame label="Waste data collected across Vientiane districts">
      <rect width="400" height="250" fill="#F1F5EF" />
      {/* city silhouette */}
      <g fill="#1E7F39" opacity=".2">
        <rect x="20" y="96" width="40" height="120" />
        <rect x="70" y="60" width="34" height="156" />
        <rect x="300" y="80" width="38" height="136" />
        <rect x="348" y="110" width="32" height="106" />
      </g>
      {/* data panel */}
      <rect x="118" y="52" width="170" height="130" fill="#fff" stroke="#D3DCD0" strokeWidth="2" />
      <rect x="118" y="52" width="170" height="16" fill="#14592A" />
      <g>
        <rect x="138" y="128" width="20" height="38" fill="#1E7F39" />
        <rect x="168" y="106" width="20" height="60" fill="#8CC63E" />
        <rect x="198" y="88" width="20" height="78" fill="#1E7F39" />
        <rect x="228" y="116" width="20" height="50" fill="#8CC63E" />
      </g>
      <path d="M130 166 h146" stroke="#55655A" strokeWidth="2" />
      {/* magnifier */}
      <g transform="translate(272,150)">
        <circle cx="0" cy="0" r="26" fill="none" stroke="#14592A" strokeWidth="6" />
        <path d="M19 19 L38 38" stroke="#14592A" strokeWidth="8" strokeLinecap="round" />
      </g>
      <rect x="0" y="216" width="400" height="34" fill="#BFD6C0" />
    </Frame>
  )
}

/* ---------- Feature story: waste flow diagram ---------- */

export function WasteFlowDiagram({ t }) {
  return (
    <svg
      viewBox="0 0 560 540"
      role="img"
      aria-label="Diagram of the waste cycle in Vientiane: households generate waste that is collected unsorted and buried at the KM32 landfill, with recycling shown as the alternative path"
      fontFamily="Noto Sans"
    >
      <defs>
        <linearGradient id="wfLandfill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#6E7D71" />
          <stop offset="1" stopColor="#4A5A4C" />
        </linearGradient>
        <marker id="arrowhead" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
          <path d="M0 0 L9 4.5 L0 9 Z" fill="#14592A" />
        </marker>
        <marker id="arrowhead-lime" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
          <path d="M0 0 L9 4.5 L0 9 Z" fill="#8CC63E" />
        </marker>
        <filter id="wfShadow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#14231a" floodOpacity="0.14" />
        </filter>
      </defs>

      <rect width="560" height="540" fill="#FFFFFF" />

      {/* center decoration */}
      <circle cx="280" cy="280" r="150" fill="#8CC63E" opacity="0.05" />
      <circle cx="280" cy="280" r="96" fill="none" stroke="#8CC63E" strokeWidth="1.5" strokeDasharray="3 6" opacity="0.35" />

      {/* sparkles */}
      <g fill="#8CC63E" opacity="0.55">
        <path d="M84 78 l3 8 8 3 -8 3 -3 8 -3 -8 -8 -3 8 -3 Z" />
        <path d="M478 96 l2.5 6.5 6.5 2.5 -6.5 2.5 -2.5 6.5 -2.5 -6.5 -6.5 -2.5 6.5 -2.5 Z" />
        <path d="M56 452 l2.5 6.5 6.5 2.5 -6.5 2.5 -2.5 6.5 -2.5 -6.5 -6.5 -2.5 6.5 -2.5 Z" />
      </g>

      {/* connecting arrows */}
      <path
        d="M108 250 C 62 288, 62 330, 108 356"
        stroke="#14592A"
        strokeWidth="3"
        fill="none"
        markerEnd="url(#arrowhead)"
      />
      <path
        d="M222 418 C 280 448, 340 448, 398 420"
        stroke="#14592A"
        strokeWidth="3"
        fill="none"
        markerEnd="url(#arrowhead)"
      />
      <path
        d="M196 348 C 250 300, 300 240, 358 202"
        stroke="#8CC63E"
        strokeWidth="3"
        strokeDasharray="7 6"
        fill="none"
        markerEnd="url(#arrowhead-lime)"
      />

      {/* Households (top-left) */}
      <circle cx="140" cy="165" r="90" fill="#EAF3E4" filter="url(#wfShadow)" />
      <g transform="translate(140,172)">
        <rect x="-16" y="-6" width="34" height="40" fill="#8CC63E" />
        <path d="M-22 -6 L1 -24 L24 -6 Z" fill="#14592A" />
        <rect x="-58" y="8" width="50" height="52" fill="#1E7F39" />
        <path d="M-64 8 L-33 -18 L-2 8 Z" fill="#14592A" />
        <rect x="-50" y="24" width="12" height="12" fill="#FFFFFF" />
        <rect x="-30" y="24" width="12" height="12" fill="#FFFFFF" />
        <rect x="-40" y="40" width="12" height="20" fill="#0E3D1D" />
      </g>
      <text x="140" y="45" textAnchor="middle" fontSize="15" fontWeight="700" fill="#182119">
        {t('ຄົວເຮືອນ', 'Households')}
      </text>

      {/* Recycle (top-right) — the alternative */}
      <circle cx="420" cy="165" r="90" fill="#E4F2CE" filter="url(#wfShadow)" />
      <g transform="translate(420,176)">
        <rect x="-33" y="-30" width="66" height="16" rx="5" fill="#14592A" />
        <rect x="-27" y="-14" width="54" height="54" rx="10" fill="#8CC63E" />
        <text x="0" y="28" fontSize="34" textAnchor="middle" fill="#FFFFFF">
          ♻
        </text>
      </g>
      <g transform="translate(478,108)">
        <circle r="16" fill="#8CC63E" />
        <path d="M-6 0 L-1 6 L8 -7" stroke="#0E3D1D" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <text x="420" y="45" textAnchor="middle" fontSize="15" fontWeight="700" fill="#14592A">
        {t('ໝູນວຽນ', 'Recycle')}
      </text>

      {/* Collection truck (bottom-left) */}
      <circle cx="140" cy="395" r="90" fill="#EAF3E4" filter="url(#wfShadow)" />
      <g transform="translate(140,400)">
        <rect x="-46" y="-6" width="76" height="36" rx="4" fill="#14592A" />
        <rect x="-42" y="-1" width="60" height="9" fill="#8CC63E" opacity=".6" />
        <rect x="30" y="6" width="24" height="24" rx="3" fill="#1E7F39" />
        <rect x="35" y="10" width="13" height="11" fill="#DCEAD5" />
        <circle cx="-30" cy="32" r="11" fill="#182119" />
        <circle cx="-30" cy="32" r="4.5" fill="#F1F5EF" />
        <circle cx="36" cy="32" r="11" fill="#182119" />
        <circle cx="36" cy="32" r="4.5" fill="#F1F5EF" />
      </g>
      <text x="140" y="508" textAnchor="middle" fontSize="15" fontWeight="700" fill="#182119">
        {t('ລົດເກັບຂີ້ເຫຍື້ອ', 'Collection truck')}
      </text>

      {/* KM32 landfill (bottom-right) */}
      <circle cx="420" cy="395" r="90" fill="#EAF3E4" filter="url(#wfShadow)" />
      <g transform="translate(420,405)">
        <path d="M-70 55 L-30 -35 L30 -35 L70 55 Z" fill="url(#wfLandfill)" />
        <path d="M-50 55 L-18 -15 L18 -15 L50 55 Z" fill="#182119" opacity=".18" />
        <g stroke="#DCEAD5" strokeWidth="1.5" opacity=".3">
          <path d="M-30 25 L-6 25" />
          <path d="M14 33 L42 33" />
          <path d="M-10 5 L12 5" />
        </g>
        <rect x="-4" y="-29" width="8" height="14" fill="#4C8FE0" opacity=".85" transform="rotate(-8 0 -22)" />
        <rect x="18" y="-23" width="10" height="10" rx="2" fill="#8FD0C9" opacity=".8" />
        <rect x="-24" y="-27" width="9" height="12" fill="#9AA79C" opacity=".85" transform="rotate(6 -20 -21)" />
        <g stroke="#55655A" strokeWidth="2" fill="none" opacity=".35" strokeLinecap="round">
          <path d="M-8 -35 q6 -12 0 -24 q-6 -12 0 -24" />
          <path d="M12 -35 q5 -10 0 -20 q-5 -10 0 -20" />
        </g>
      </g>
      <text x="420" y="508" textAnchor="middle" fontSize="15" fontWeight="700" fill="#182119">
        {t('ບ່ອນຖິ້ມ KM32', 'KM32 landfill')}
      </text>
    </svg>
  )
}
