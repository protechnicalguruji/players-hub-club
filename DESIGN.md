# Design Brief: Players Hub Club

## Purpose & Tone
Premium luxury snooker and pool club website. Elite, professional sports club atmosphere with youthful hangout energy. Cinematic, immersive, exclusive.

## Differentiation
Hover glow effects on interactive elements, gradient gold text accents, glassmorphic card layers with backdrop blur, smooth fade-in animations on scroll, luxury shadow hierarchy with gold luminance.

## Color Palette
| Token | OKLCH | Purpose |
| --- | --- | --- |
| primary | 0.72 0.25 60 (gold) | Accent highlights, CTAs, hover states |
| secondary | 0.32 0.12 140 (emerald green) | Snooker table reference, secondary accents |
| accent | 0.78 0.28 62 (bright gold) | Premium highlights, glows |
| background | 0.08 0.01 270 (deep black) | Page background |
| card | 0.12 0.01 270 (darker black) | Card/surface layers |
| muted | 0.22 0.02 280 (charcoal) | Disabled, secondary text |
| foreground | 0.92 0.01 270 (white) | Primary text |
| border | 0.18 0.01 280 (dark grey) | Subtle dividers, card borders |

## Typography
| Role | Font | Scale |
| --- | --- | --- |
| Display | Lora (serif) | 3.5rem–2rem, 600–700 weight |
| Body | Plus Jakarta Sans (sans) | 1rem–0.875rem, 400–500 weight |
| Mono | JetBrains Mono | 0.875rem, 400 weight |

## Elevation & Depth
- **Level 0**: Dark background `bg-background`
- **Level 1**: Card surfaces `bg-card/60 backdrop-blur-sm`
- **Level 2**: Elevated cards `bg-card/80 border-accent/30`
- **Level 3**: Luxury shadows `shadow-luxury` (gold-tinted, 20px blur)

## Structural Zones
| Zone | Background | Border | Accent |
| --- | --- | --- | --- |
| Header/Nav | `bg-card/40 backdrop-blur` | `border-border/10` | None (minimal) |
| Hero | `bg-background` gradient overlay | None | Centered gold text, animated stats |
| Content sections | Alternate `bg-card/60` and `bg-background` | `border-border/20` | Secondary accents at section starts |
| Cards/interactive | `bg-card/60 backdrop-blur-sm` | `border-border/20` hover:`border-accent/30` | Hover gold glow, `shadow-luxury` |
| Footer | `bg-card/40` | `border-t border-border/10` | Gold links on hover |

## Spacing & Rhythm
- Base unit: 4px (Tailwind default). Tight density in cards (16–24px padding), generous in sections (48–72px).
- Alternating card/section backgrounds for visual rhythm.
- Smooth fade-in animations stagger by 100–200ms per element.

## Component Patterns
- **Buttons**: `bg-accent text-accent-foreground px-6 py-3 rounded-lg glow-hover` — full color, gold on hover glow
- **Cards**: `card-luxury` utility — glass effect, gold border/shadow on hover
- **Text accents**: `text-gradient` for premium headlines mixing gold/green
- **Interactive**: `transition-smooth` applied universally, `glow-pulse` for premium CTAs

## Motion & Animation
- Entrance: `animate-fade-in 0.6s` on scroll, staggered per section
- Hover: `glow-hover` for 0.3s smooth shadow/border shift to gold
- Ambient: `animate-glow-pulse` (3s infinite) on premium stat boxes
- Floating: `animate-float` (3s infinite) on hero decorative elements

## Constraints
- No harsh shadows; gold tinting for depth perception.
- All interactive elements use OKLCH token colors, never hardcoded hex.
- Dark mode is default and sole theme (no light mode).
- Animations respect prefers-reduced-motion via Tailwind defaults.

## Signature Detail
Gold glow effect on hover—cards and buttons emit a soft gold shadow that brightens on interaction, reinforcing luxury and premium interaction feedback.

