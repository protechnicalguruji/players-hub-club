import { Badge } from "@/components/ui/badge";
import { PHONE_DISPLAY, WHATSAPP_LINK, cn } from "@/lib/utils";
import {
  Award,
  Check,
  Gamepad,
  Gamepad2,
  Joystick,
  MessageCircle,
  Package,
  Phone,
  Users,
  Wrench,
} from "lucide-react";
import { motion } from "motion/react";

/* ── data ──────────────────────────────────────────────────────── */

const VIDEO_GAMES_LIST = [
  "FIFA",
  "Call of Duty",
  "WWE",
  "GTA V",
  "Tekken",
  "Blur",
  "Black Ops",
  "God of War",
  "Spider-Man",
];

const snookerFeatures = [
  "Imported professional grade table",
  "Tournament-standard cloth",
  "Professional quality cushions",
  "Proper spotting and marking",
  "All equipment provided",
  "Expert staff assistance",
];

const poolFeatures = [
  "Imported professional pool table",
  "Premium quality cloth",
  "Full set of pool balls provided",
  "Pool cues of multiple weights",
  "Chalk and accessories provided",
  "Expert staff assistance",
];

const bookingSteps = [
  "Choose your table type (Snooker or Pool)",
  "Contact us via phone or WhatsApp",
  "Confirm your preferred time slot",
  "Show up and play — no upfront payment required",
];

const groupBenefits = [
  { icon: Users, label: "Dedicated Staff" },
  { icon: Award, label: "Reserved Tables" },
  { icon: Package, label: "Priority Scheduling" },
  { icon: Wrench, label: "Custom Arrangements" },
];

const qualityPoints = [
  {
    title: "Imported Professional Grade",
    body: "Our tables are imported from leading manufacturers, meeting international snooker and pool standards.",
  },
  {
    title: "Maintained to Tournament Standard",
    body: "Regular re-clothing and servicing ensures every shot plays exactly as it should.",
  },
  {
    title: "Complete Equipment Provided",
    body: "Professional cues, balls, rests, and all accessories included in the hourly rate.",
  },
];

const faqs = [
  {
    q: "Is there a minimum booking time?",
    a: "There is no strict minimum — you pay per hour, and partial hours are rounded up to the nearest 30 minutes.",
  },
  {
    q: "Are group discounts available?",
    a: "Yes! For groups of 4+ or corporate/tournament bookings, reach out via WhatsApp for a custom package.",
  },
  {
    q: "Is equipment included in the hourly rate?",
    a: "Absolutely. Cues, balls, chalk, rests — everything you need is included. Just walk in and play.",
  },
];

const CONSOLES = [
  {
    label: "PlayStation 5 (PS5)",
    Icon: Gamepad2,
    iconColor: "oklch(var(--accent))",
  },
  {
    label: "PlayStation 4 (PS4)",
    Icon: Gamepad,
    iconColor: "oklch(var(--accent))",
  },
  {
    label: "Xbox",
    Icon: Joystick,
    iconColor: "rgb(74,222,128)",
  },
];

function VideoGamingCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="relative flex flex-col rounded-2xl border p-8 transition-all duration-300 gaming-card-glow"
      style={{
        background:
          "linear-gradient(135deg, #0a1a0e 0%, #0d2218 60%, oklch(var(--background)) 100%)",
        borderColor: "rgba(15,61,46,0.55)",
      }}
      data-ocid="gaming-card"
    >
      {/* Green glow overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(15,61,46,0.15) 0%, transparent 60%)",
        }}
      />
      {/* Green top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
        style={{
          background: "linear-gradient(90deg, #0F3D2E, #1a6b3c, #0F3D2E)",
        }}
      />

      {/* Top row */}
      <div className="relative mb-6 flex items-start justify-between gap-3">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl"
          style={{
            border: "1px solid rgba(15,61,46,0.7)",
            background: "rgba(15,61,46,0.3)",
          }}
        >
          <Gamepad2 size={22} style={{ color: "rgb(74,222,128)" }} />
        </div>
        <div className="flex flex-col items-end gap-1.5">
          {/* Multiplayer badge — gold */}
          <span
            className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-body text-xs font-semibold"
            style={{
              background: "rgba(212,175,55,0.12)",
              borderColor: "rgba(212,175,55,0.35)",
              color: "oklch(var(--accent))",
            }}
            data-ocid="multiplayer-badge"
          >
            <Gamepad2 size={10} />
            Multiplayer Gaming Available
          </span>
          <span className="rounded-full border border-border/60 bg-muted px-3 py-0.5 font-body text-xs text-muted-foreground">
            Premium Gaming Lounge
          </span>
        </div>
      </div>

      {/* Title & Subtitle */}
      <h3
        className="font-display text-2xl font-bold"
        style={{ color: "oklch(var(--accent))" }}
      >
        Video Gaming Zone
      </h3>
      <p className="mt-1 font-body text-sm text-muted-foreground">
        Premium Multiplayer Gaming Experience
      </p>

      {/* ── Pricing — matches snooker/pool card position ──────── */}
      <div className="mb-8 mt-6 flex items-end gap-1.5">
        <span
          className="font-display text-5xl font-bold leading-none"
          style={{ color: "oklch(var(--accent))" }}
        >
          ₹200
        </span>
        <div className="mb-1 flex flex-col leading-tight">
          <span className="font-body text-base text-muted-foreground">/hr</span>
          <span className="font-body text-xs text-muted-foreground">
            per screen
          </span>
        </div>
      </div>

      {/* Gold divider */}
      <div
        className="mb-6 h-px w-full"
        style={{ background: "rgba(212,175,55,0.20)" }}
      />

      {/* ── Consoles ─────────────────────────── */}
      <div
        className="mb-4 rounded-xl p-4"
        style={{
          background: "rgba(15,61,46,0.22)",
          border: "1px solid rgba(212,175,55,0.18)",
        }}
      >
        <p
          className="mb-4 font-body text-xs font-semibold uppercase tracking-widest"
          style={{ color: "oklch(var(--accent))" }}
        >
          Consoles Available
        </p>
        <div className="flex flex-col gap-3">
          {CONSOLES.map(({ label, Icon, iconColor }) => (
            <div
              key={label}
              className="flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-2.5">
                <Icon
                  size={16}
                  style={{ color: iconColor }}
                  aria-hidden="true"
                />
                <span className="font-body text-sm text-foreground/85">
                  {label}
                </span>
              </div>
              <span
                className="rounded-full px-2 py-0.5 font-body text-xs font-semibold"
                style={{
                  background: "rgba(74,222,128,0.12)",
                  border: "1px solid rgba(74,222,128,0.3)",
                  color: "rgb(74,222,128)",
                }}
              >
                Available
              </span>
            </div>
          ))}
        </div>
      </div>
      <p className="mb-6 font-body text-xs italic text-muted-foreground">
        Multiple controllers can be used on a single screen for multiplayer
        gaming.
      </p>

      {/* Gold divider */}
      <div
        className="mb-6 h-px w-full"
        style={{ background: "rgba(212,175,55,0.20)" }}
      />

      {/* ── Games Grid ───────────────────────── */}
      <div className="mb-8">
        <p
          className="mb-4 font-body text-xs font-semibold uppercase tracking-widest"
          style={{ color: "oklch(var(--accent))" }}
        >
          Available Games
        </p>
        <div className="grid grid-cols-3 gap-2">
          {VIDEO_GAMES_LIST.map((game) => (
            <span
              key={game}
              className="truncate rounded-lg py-2 px-2 text-center font-body text-xs font-medium transition-colors duration-200"
              style={{
                background: "rgba(212,175,55,0.08)",
                border: "1px solid rgba(212,175,55,0.18)",
                color: "oklch(var(--accent) / 0.80)",
              }}
              data-ocid={`game-badge-${game.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {game}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="book-gaming-cta"
        className="mt-auto flex items-center justify-center gap-2 rounded-xl border px-6 py-3.5 font-body text-sm font-semibold tracking-wide transition-smooth hover:bg-[rgba(15,61,46,0.35)]"
        style={{
          borderColor: "rgba(26,107,60,0.5)",
          color: "rgb(74,222,128)",
        }}
      >
        <Gamepad2 size={16} />
        Book Gaming Zone
      </a>
    </motion.div>
  );
}

/* ── sub-components ─────────────────────────────────────────────── */

function FeatureItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2.5">
      <Check
        size={16}
        className="mt-0.5 shrink-0 text-accent"
        aria-hidden="true"
      />
      <span className="text-sm text-foreground/80 font-body">{text}</span>
    </li>
  );
}

function PricingCard({
  featured,
  badge,
  title,
  subtitle,
  price,
  features,
  tableCount,
  ctaLabel,
  delay,
}: {
  featured?: boolean;
  badge?: string;
  title: string;
  subtitle: string;
  price: string;
  features: string[];
  tableCount: string;
  ctaLabel: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={cn(
        "relative flex flex-col rounded-2xl border p-8 glow-hover",
        featured
          ? "border-accent/60 bg-gradient-to-b from-card to-background"
          : "border-border/50 bg-card",
      )}
      style={
        featured
          ? { boxShadow: "0 0 40px -8px oklch(var(--accent) / 0.25)" }
          : undefined
      }
      data-ocid={featured ? "snooker-card" : "pool-card"}
    >
      {/* Featured glow ring */}
      {featured && (
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            background:
              "linear-gradient(135deg, oklch(var(--accent) / 0.08) 0%, transparent 60%)",
          }}
        />
      )}

      {/* Top row */}
      <div className="relative mb-6 flex items-start justify-between gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/30 text-2xl">
          {featured ? "🎱" : "🎳"}
        </div>
        <div className="flex flex-col items-end gap-1.5">
          {badge && (
            <Badge
              className="border-accent/40 bg-accent/10 font-body text-xs font-semibold tracking-wide text-accent"
              data-ocid="popular-badge"
            >
              {badge}
            </Badge>
          )}
          <span className="rounded-full border border-border/60 bg-muted px-3 py-0.5 font-body text-xs text-muted-foreground">
            {tableCount}
          </span>
        </div>
      </div>

      {/* Title */}
      <h3 className="font-display text-2xl font-semibold text-foreground">
        {title}
      </h3>
      <p className="mb-6 mt-1 font-body text-sm text-muted-foreground">
        {subtitle}
      </p>

      {/* Price */}
      <div className="mb-8 flex items-end gap-1.5">
        <span
          className="font-display text-5xl font-bold"
          style={{ color: "oklch(var(--accent))" }}
        >
          {price}
        </span>
        <span className="mb-2 font-body text-base text-muted-foreground">
          /hour
        </span>
      </div>

      {/* Divider */}
      <div
        className="mb-6 h-px w-full"
        style={{ background: "oklch(var(--border) / 0.6)" }}
      />

      {/* Features */}
      <ul className="mb-8 flex flex-col gap-3">
        {features.map((f) => (
          <FeatureItem key={f} text={f} />
        ))}
      </ul>

      {/* CTA */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        data-ocid={featured ? "book-snooker-cta" : "book-pool-cta"}
        className={cn(
          "mt-auto flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-body text-sm font-semibold tracking-wide transition-smooth",
          featured
            ? "text-background glow-gold"
            : "border border-accent/40 text-accent hover:bg-accent/10",
        )}
        style={featured ? { background: "oklch(var(--accent))" } : undefined}
      >
        <MessageCircle size={16} />
        {ctaLabel}
      </a>
    </motion.div>
  );
}

/* ── main page ──────────────────────────────────────────────────── */

export default function TablesPage() {
  return (
    <div className="min-h-screen bg-background font-body">
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section
        className="relative flex min-h-[42vh] flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-16 text-center"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.10 0.03 140) 0%, oklch(var(--background)) 100%)",
        }}
      >
        {/* Decorative gold line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 h-px w-24 origin-left rounded-full"
          style={{ background: "oklch(var(--accent))" }}
        />

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-block rounded-full border border-accent/30 px-4 py-1 font-body text-xs font-semibold uppercase tracking-widest text-accent"
        >
          Players Hub Club
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl font-bold text-foreground md:text-6xl"
        >
          Tables &amp; Pricing
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 max-w-xl font-body text-base text-muted-foreground md:text-lg"
        >
          Professional imported tables at prices that respect your game
        </motion.p>

        {/* Decorative gold dots */}
        <div className="mt-8 flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: i === 1 ? 1 : 0.4 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="h-1.5 rounded-full"
              style={{
                width: i === 1 ? "2rem" : "0.375rem",
                background: "oklch(var(--accent))",
              }}
            />
          ))}
        </div>
      </section>

      {/* ── Pricing Cards ─────────────────────────────────────── */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14 text-center"
          >
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Choose Your Game
            </h2>
            <p className="mt-3 font-body text-muted-foreground">
              Two world-class options. Both imported. Both outstanding.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <PricingCard
              featured
              badge="Most Popular"
              title="Snooker Table"
              subtitle="Full-size professional snooker"
              price="₹240"
              features={snookerFeatures}
              tableCount="4 Tables Available"
              ctaLabel="Book Snooker Table"
              delay={0}
            />
            <PricingCard
              title="Pool Table"
              subtitle="American pool — 8-ball style"
              price="₹120"
              features={poolFeatures}
              tableCount="4 Tables Available"
              ctaLabel="Book Pool Table"
              delay={0.15}
            />
            <VideoGamingCard />
          </div>
        </div>
      </section>

      {/* ── How to Book ──────────────────────────────────────── */}
      <section
        className="px-6 py-20"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.12 0.02 140 / 0.5) 0%, oklch(var(--background)) 100%)",
        }}
      >
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-accent/20 bg-card p-8 md:p-10"
            style={{
              boxShadow: "0 0 60px -20px oklch(var(--accent) / 0.15)",
            }}
            data-ocid="booking-info-box"
          >
            <h2 className="mb-8 font-display text-2xl font-bold text-foreground md:text-3xl">
              How to Book
            </h2>

            {/* Steps */}
            <ol className="mb-10 flex flex-col gap-5">
              {bookingSteps.map((step, i) => (
                <li key={step} className="flex items-start gap-4">
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-body text-xs font-bold text-background"
                    style={{ background: "oklch(var(--accent))" }}
                  >
                    {i + 1}
                  </span>
                  <span className="pt-0.5 font-body text-sm text-foreground/80">
                    {step}
                  </span>
                </li>
              ))}
            </ol>

            {/* Contact methods */}
            <div
              className="mb-6 h-px w-full"
              style={{ background: "oklch(var(--border) / 0.5)" }}
            />
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`}
                data-ocid="book-call-link"
                className="flex flex-1 items-center gap-3 rounded-xl border border-border/60 bg-muted px-5 py-3.5 transition-smooth hover:border-accent/40"
              >
                <Phone size={18} className="text-accent" />
                <div>
                  <p className="font-body text-xs text-muted-foreground">
                    Call
                  </p>
                  <p className="font-body text-sm font-semibold text-foreground">
                    {PHONE_DISPLAY}
                  </p>
                </div>
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="book-whatsapp-link"
                className="flex flex-1 items-center gap-3 rounded-xl border border-border/60 bg-muted px-5 py-3.5 transition-smooth hover:border-accent/40"
              >
                <MessageCircle size={18} className="text-accent" />
                <div>
                  <p className="font-body text-xs text-muted-foreground">
                    WhatsApp
                  </p>
                  <p className="font-body text-sm font-semibold text-foreground">
                    wa.me/917772006449
                  </p>
                </div>
              </a>
            </div>

            <p className="mt-5 font-body text-xs italic text-muted-foreground">
              Walk-ins are always welcome — book to guarantee your table.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Group & Tournament Bookings ───────────────────────── */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl border border-accent/25 p-10 md:p-14"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.15 0.04 140) 0%, oklch(0.10 0.01 270) 100%)",
            }}
            data-ocid="group-booking-section"
          >
            {/* Gold accent corner */}
            <div
              className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-bl-full opacity-10"
              style={{ background: "oklch(var(--accent))" }}
            />

            <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <span className="mb-3 inline-block font-body text-xs font-semibold uppercase tracking-widest text-accent">
                  Special Packages
                </span>
                <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
                  Group &amp; Tournament Bookings
                </h2>
                <p className="mt-4 font-body text-sm leading-relaxed text-muted-foreground">
                  For large groups, corporate events, or tournament bookings,
                  Players Hub offers special arrangements tailored to your
                  needs. Elevate your event with our premium facilities.
                </p>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="group-booking-cta"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl px-6 py-3 font-body text-sm font-semibold text-background transition-smooth glow-gold hover:opacity-90"
                  style={{ background: "oklch(var(--accent))" }}
                >
                  <MessageCircle size={16} />
                  Contact for Custom Pricing
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {groupBenefits.map(({ icon: Icon, label }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.4 }}
                    className="flex flex-col items-center gap-2 rounded-xl border border-accent/20 bg-background/30 p-5 text-center"
                  >
                    <Icon
                      size={22}
                      className="text-accent"
                      aria-hidden="true"
                    />
                    <span className="font-body text-xs font-semibold text-foreground/80">
                      {label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Why Our Tables Are Different ─────────────────────── */}
      <section
        className="px-6 py-20"
        style={{
          background:
            "linear-gradient(180deg, oklch(var(--background)) 0%, oklch(0.11 0.02 140 / 0.4) 50%, oklch(var(--background)) 100%)",
        }}
      >
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14 text-center"
          >
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Why Our Tables Are Different
            </h2>
            <p className="mt-3 font-body text-sm text-muted-foreground">
              The difference is in the details — and you'll feel it on your
              first shot.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {qualityPoints.map(({ title, body }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="card-luxury rounded-2xl p-7"
                data-ocid={`quality-point-${i + 1}`}
              >
                <div
                  className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl font-display text-lg font-bold text-background"
                  style={{ background: "oklch(var(--accent))" }}
                >
                  {i + 1}
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                  {title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
              Pricing FAQ
            </h2>
          </motion.div>

          <div className="flex flex-col gap-4" data-ocid="faq-section">
            {faqs.map(({ q, a }, faqIdx) => (
              <motion.div
                key={q}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: faqIdx * 0.1, duration: 0.4 }}
                className="rounded-xl border border-border/50 bg-card p-6"
              >
                <p className="mb-2 flex items-start gap-2 font-display text-base font-semibold text-foreground">
                  <span
                    className="mt-0.5 shrink-0 font-body text-sm font-bold"
                    style={{ color: "oklch(var(--accent))" }}
                  >
                    Q
                  </span>
                  {q}
                </p>
                <p className="ml-5 font-body text-sm leading-relaxed text-muted-foreground">
                  {a}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 flex flex-col items-center gap-4 text-center"
          >
            <p className="font-body text-sm text-muted-foreground">
              Ready to play? Walk in anytime — or book ahead to secure your
              table.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="bottom-whatsapp-cta"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 font-body text-sm font-semibold text-background transition-smooth glow-gold hover:opacity-90"
                style={{ background: "oklch(var(--accent))" }}
              >
                <MessageCircle size={15} />
                WhatsApp Booking
              </a>
              <a
                href="tel:7772006449"
                data-ocid="bottom-call-cta"
                className="inline-flex items-center gap-2 rounded-xl border border-accent/40 px-5 py-2.5 font-body text-sm font-semibold text-accent transition-smooth hover:bg-accent/10"
              >
                <Phone size={15} />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
