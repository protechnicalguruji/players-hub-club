import { Link } from "@tanstack/react-router";
import {
  AirVent,
  ChevronDown,
  ChevronDown as ChevronDownIcon,
  Cigarette,
  Coffee,
  Droplets,
  Gamepad2,
  Instagram,
  MapPin,
  MessageCircle,
  Music,
  Phone,
  Sofa,
  Star,
  Trophy,
  Tv,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import {
  ADDRESS_LINE1,
  ADDRESS_LINE2,
  INSTAGRAM_LINK,
  PHONE,
  WHATSAPP_LINK,
  cn,
} from "../lib/utils";

/* ─── Shared Hooks ─────────────────────────────────────────────── */

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function useCountUp(target: number, duration = 1800, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
}

/* ─── Section Title ────────────────────────────────────────────── */

function SectionTitle({
  title,
  subtitle,
}: { title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-12">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
        {title}
        <span
          className="block w-16 h-0.5 mx-auto mt-3"
          style={{ background: "oklch(var(--accent))" }}
        />
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mt-3">
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ─── HERO ─────────────────────────────────────────────────────── */

function StatCounter({
  value,
  label,
  prefix = "",
  suffix = "",
}: {
  value: number | string;
  label: string;
  prefix?: string;
  suffix?: string;
}) {
  const { ref, visible } = useInView(0.1);
  const numericValue = typeof value === "number" ? value : 0;
  const count = useCountUp(numericValue, 1600, visible);
  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-1 px-4 md:px-8 border-r border-accent/20 last:border-0"
    >
      <span
        className="font-display text-3xl md:text-4xl font-bold"
        style={{ color: "oklch(var(--accent))" }}
      >
        {prefix}
        {typeof value === "number" ? count : value}
        {suffix}
      </span>
      <span className="text-xs md:text-sm text-muted-foreground tracking-wider text-center uppercase">
        {label}
      </span>
    </div>
  );
}

const HERO_SLIDES = ["/assets/hero-slide-1.jpg", "/assets/hero-slide-2.png"];

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const scrollDown = () => {
    const next = document.getElementById("highlights");
    next?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0B0B0B 0%, #0d1a10 30%, #0B0B0B 60%, #111008 100%)",
      }}
      data-ocid="hero"
    >
      {/* Hero background image slider */}
      {HERO_SLIDES.map((src, index) => (
        <div
          key={src}
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url('${src}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: currentSlide === index ? 0.45 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        />
      ))}
      {/* Cinematic gradient overlays */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(15,61,46,0.55) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 40% 40% at 20% 80%, rgba(212,175,55,0.04) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 40% 40% at 80% 10%, rgba(212,175,55,0.04) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(11,11,11,0.65) 0%, transparent 30%, transparent 60%, rgba(11,11,11,0.90) 100%)",
        }}
      />

      {/* Decorative floating billiard balls */}
      <div
        className="absolute top-1/4 left-8 w-4 h-4 rounded-full opacity-20 animate-float"
        style={{ background: "oklch(var(--accent))", animationDelay: "0s" }}
      />
      <div
        className="absolute top-1/3 right-12 w-3 h-3 rounded-full opacity-15 animate-float"
        style={{ background: "#e03b3b", animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-1/3 left-16 w-5 h-5 rounded-full opacity-10 animate-float"
        style={{
          background: "oklch(var(--secondary))",
          animationDelay: "0.5s",
        }}
      />
      <div
        className="absolute top-1/2 right-20 w-4 h-4 rounded-full opacity-15 animate-float"
        style={{ background: "#1a6b3c", animationDelay: "2s" }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center gap-8 py-24">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold tracking-[0.25em] uppercase animate-fade-in"
          style={{
            borderColor: "oklch(var(--accent) / 0.4)",
            color: "oklch(var(--accent))",
            background: "oklch(var(--accent) / 0.07)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-glow-pulse"
            style={{ background: "oklch(var(--accent))" }}
          />
          Gwalior&apos;s Premier Snooker Club
        </div>

        {/* Logo + Headline */}
        <div className="flex flex-col items-center gap-5 animate-fade-in">
          {/* Players Hub Club logo */}
          <img
            src="/assets/logo-new.png"
            alt="Players Hub Club"
            className="h-20 w-auto object-contain mx-auto drop-shadow-lg"
          />

          {/* Static headline */}
          <h1
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight"
            style={{ color: "oklch(0.98 0 0)" }}
          >
            Players Hub Club
          </h1>
        </div>

        {/* Gold divider */}
        <div
          className="w-24 h-0.5"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(var(--accent)), transparent)",
          }}
        />

        {/* Subtext */}
        <p
          className="text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          Experience premium snooker and pool at Players Hub Club. With imported
          professional tables, a luxury lounge atmosphere, and a vibrant gaming
          environment, Players Hub Club is the ultimate destination for snooker
          enthusiasts in Gwalior.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap justify-center gap-3 animate-fade-in"
          style={{ animationDelay: "1s" }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-sm tracking-wide transition-smooth glow-hover"
            style={{
              background: "oklch(var(--accent))",
              color: "oklch(var(--accent-foreground))",
            }}
            data-ocid="hero-book-cta"
          >
            <Trophy className="h-4 w-4" /> Book a Table
          </Link>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-sm tracking-wide border transition-smooth"
            style={{
              borderColor: "oklch(var(--accent) / 0.4)",
              color: "oklch(var(--accent))",
            }}
            data-ocid="hero-call-cta"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-sm tracking-wide border transition-smooth"
            style={{
              borderColor: "rgba(34,197,94,0.4)",
              color: "rgb(74,222,128)",
            }}
            data-ocid="hero-whatsapp-cta"
          >
            <SiWhatsapp className="h-4 w-4" /> WhatsApp
          </a>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-sm tracking-wide border border-border/40 text-muted-foreground hover:text-foreground transition-smooth"
            data-ocid="hero-gallery-cta"
          >
            View Gallery
          </Link>
        </div>

        {/* Stats */}
        <div
          className="mt-4 flex flex-wrap justify-center items-center gap-0 rounded-xl border border-border/30 px-4 py-5 backdrop-blur-sm"
          style={{ background: "oklch(var(--card) / 0.35)" }}
        >
          <StatCounter value={8} label="Professional Tables" />
          <StatCounter value="24×7" label="Always Open" />
          <StatCounter value="Premium" label="Lounge Experience" />
          <StatCounter value="Top" label="Snooker Destination" />
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-accent transition-smooth animate-float"
        aria-label="Scroll down"
        data-ocid="hero-scroll"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="h-5 w-5" />
      </button>
    </section>
  );
}

/* ─── HIGHLIGHTS ────────────────────────────────────────────────── */

const HIGHLIGHTS = [
  {
    icon: Trophy,
    title: "Professional Imported Tables",
    desc: "Our 4 snooker and 4 pool tables are imported to international standards — the same quality used in professional tournaments.",
  },
  {
    icon: Sofa,
    title: "Luxury Lounge Atmosphere",
    desc: "Not just a club — a premium destination with luxury ambiance, mood lighting, and a refined atmosphere.",
  },
  {
    icon: Coffee,
    title: "Perfect Hangout for Friends",
    desc: "Great for groups, casual games, and social evenings. The perfect destination for unforgettable nights.",
  },
  {
    icon: AirVent,
    title: "Open 24×7",
    desc: "Play at dawn, play at midnight — we never close. Your premium snooker experience is always available.",
  },
];

function HighlightsSection() {
  const { ref, visible } = useInView();
  return (
    <section
      id="highlights"
      className="py-20 px-4"
      style={{ background: "#111111" }}
      ref={ref}
    >
      <div className="container mx-auto">
        <SectionTitle title="Why Players Hub?" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {HIGHLIGHTS.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={cn(
                "card-luxury glow-hover p-6 rounded-xl flex flex-col gap-4 border-t-2 transition-all duration-500",
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8",
              )}
              style={{
                borderTopColor: "oklch(var(--accent))",
                transitionDelay: `${i * 100}ms`,
              }}
              data-ocid={`highlight-card-${i}`}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: "oklch(var(--accent) / 0.12)" }}
              >
                <Icon
                  className="h-5 w-5"
                  style={{ color: "oklch(var(--accent))" }}
                />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  {title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FACILITIES ────────────────────────────────────────────────── */

const FACILITIES = [
  {
    icon: AirVent,
    title: "Air Conditioned",
    desc: "Stay comfortable year-round",
  },
  { icon: Coffee, title: "Cafe & Snacks", desc: "Refreshments available" },
  { icon: Droplets, title: "Cold Beverages", desc: "Ice-cold drinks served" },
  { icon: Music, title: "Premium Soundtrack", desc: "Curated ambient music" },
  { icon: Gamepad2, title: "Gaming Zone", desc: "Additional gaming options" },
  { icon: Cigarette, title: "Smoking Area", desc: "Designated smoking zone" },
  { icon: Tv, title: "Live Matches on TV", desc: "Watch live sport events" },
  { icon: Sofa, title: "Private Lounge", desc: "Exclusive lounge space" },
];

function FacilitiesSection() {
  const { ref, visible } = useInView();
  return (
    <section className="py-20 px-4" style={{ background: "#0B0B0B" }} ref={ref}>
      <div className="container mx-auto">
        <SectionTitle
          title="World-Class Facilities"
          subtitle="Everything you need for the perfect game"
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {FACILITIES.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={cn(
                "card-luxury glow-hover p-5 rounded-xl flex flex-col items-center text-center gap-3 transition-all duration-500",
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6",
              )}
              style={{ transitionDelay: `${i * 60}ms` }}
              data-ocid={`facility-card-${i}`}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ background: "oklch(var(--accent) / 0.1)" }}
              >
                <Icon
                  className="h-6 w-6"
                  style={{ color: "oklch(var(--accent))" }}
                />
              </div>
              <div>
                <p className="font-semibold text-sm text-foreground">{title}</p>
                <p className="text-xs text-muted-foreground mt-1">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PRICING PREVIEW ───────────────────────────────────────────── */

const VIDEO_GAMES = [
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

function PricingSection() {
  const { ref, visible } = useInView();
  return (
    <section className="py-20 px-4" style={{ background: "#111111" }} ref={ref}>
      <div className="container mx-auto">
        <SectionTitle title="Choose Your Game" />
        <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-4xl mx-auto">
          {[
            {
              type: "Snooker Table",
              price: "₹240",
              unit: "/ hour",
              tables: "4 Tables",
              quality: "Imported Professional",
              featured: true,
            },
            {
              type: "Pool Table",
              price: "₹120",
              unit: "/ hour",
              tables: "4 Tables",
              quality: "Imported Professional",
              featured: false,
            },
          ].map(({ type, price, unit, tables, quality, featured }, i) => (
            <div
              key={type}
              className={cn(
                "flex-1 rounded-2xl p-7 flex flex-col gap-4 border transition-all duration-500 relative overflow-hidden glow-hover",
                featured ? "border-accent/40" : "border-border/30",
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8",
              )}
              style={{
                background: featured
                  ? "oklch(var(--card) / 0.8)"
                  : "oklch(var(--card) / 0.5)",
                transitionDelay: `${i * 150}ms`,
              }}
              data-ocid={`pricing-card-${i}`}
            >
              {featured && (
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{ background: "oklch(var(--accent))" }}
                />
              )}
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
                  {tables} • {quality}
                </p>
                <h3 className="font-display text-xl font-bold text-foreground">
                  {type}
                </h3>
              </div>
              <div className="flex items-baseline gap-1">
                <span
                  className="font-display text-4xl font-bold"
                  style={{ color: "oklch(var(--accent))" }}
                >
                  {price}
                </span>
                <span className="text-muted-foreground text-sm">{unit}</span>
              </div>
              <Link
                to="/contact"
                className="mt-auto inline-flex items-center justify-center py-2.5 rounded-lg text-sm font-semibold transition-smooth"
                style={
                  featured
                    ? {
                        background: "oklch(var(--accent))",
                        color: "oklch(var(--accent-foreground))",
                      }
                    : {
                        border: "1px solid oklch(var(--accent) / 0.3)",
                        color: "oklch(var(--accent))",
                      }
                }
                data-ocid={`pricing-book-${i}`}
              >
                Book Now
              </Link>
            </div>
          ))}

          {/* Video Gaming Zone card */}
          <div
            className={cn(
              "flex-1 rounded-2xl p-7 flex flex-col gap-4 border transition-all duration-500 relative overflow-hidden gaming-card-glow",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
            style={{
              background:
                "linear-gradient(135deg, #0a1a0e 0%, #0d2218 60%, #0B0B0B 100%)",
              borderColor: "rgba(15,61,46,0.55)",
              transitionDelay: "300ms",
            }}
            data-ocid="pricing-card-gaming"
          >
            {/* Green accent top bar */}
            <div
              className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
              style={{ background: "linear-gradient(90deg, #0F3D2E, #1a6b3c)" }}
            />
            {/* Multiplayer badge */}
            <div className="absolute top-3 right-4">
              <span
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase"
                style={{
                  background: "rgba(15,61,46,0.6)",
                  border: "1px solid rgba(26,107,60,0.6)",
                  color: "rgb(74,222,128)",
                }}
              >
                <Gamepad2 className="h-3 w-3" />
                Multiplayer
              </span>
            </div>

            <div className="mt-2">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
                Premium Gaming Lounge
              </p>
              <h3 className="font-display text-xl font-bold text-foreground">
                🎮 Video Gaming Zone
              </h3>
            </div>

            {/* Consoles */}
            <div
              className="flex flex-col gap-1.5 p-3 rounded-lg"
              style={{
                background: "rgba(15,61,46,0.18)",
                border: "1px solid rgba(15,61,46,0.3)",
              }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-wider mb-1"
                style={{ color: "rgb(74,222,128)" }}
              >
                Available Consoles
              </p>
              {[
                { label: "PlayStation 5 (PS5)", icon: "🎮" },
                { label: "PlayStation 4 (PS4)", icon: "🕹️" },
                { label: "Xbox", icon: "🎯" },
              ].map(({ label, icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <span className="text-base leading-none">{icon}</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>

            {/* Games grid */}
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-wider mb-2"
                style={{ color: "oklch(var(--accent))" }}
              >
                🎯 Available Games
              </p>
              <div className="grid grid-cols-3 gap-1.5">
                {VIDEO_GAMES.map((game) => (
                  <span
                    key={game}
                    className="text-center text-xs py-1 px-1 rounded-md font-medium truncate"
                    style={{
                      background: "rgba(212,175,55,0.07)",
                      border: "1px solid rgba(212,175,55,0.15)",
                      color: "oklch(var(--foreground) / 0.8)",
                    }}
                  >
                    {game}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-smooth"
              style={{
                border: "1px solid rgba(26,107,60,0.5)",
                color: "rgb(74,222,128)",
                background: "rgba(15,61,46,0.2)",
              }}
              data-ocid="pricing-book-gaming"
            >
              <Gamepad2 className="h-4 w-4" /> Book Gaming Zone
            </a>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link
            to="/tables"
            className="text-sm font-medium transition-smooth hover:opacity-80"
            style={{ color: "oklch(var(--accent))" }}
          >
            See full pricing details →
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── TOURNAMENT TEASER ─────────────────────────────────────────── */

function TournamentSection() {
  const { ref, visible } = useInView();
  return (
    <section
      className="py-20 px-4"
      style={{
        background:
          "linear-gradient(135deg, #0a1e14 0%, #0d2a1c 50%, #0a1a10 100%)",
      }}
      ref={ref}
    >
      <div className="container mx-auto">
        <SectionTitle title="Join the Competition" />
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10 text-base leading-relaxed">
          From weekly championships to grand monthly tournaments, Players Hub is
          the stage for Gwalior&apos;s best snooker talent.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center max-w-2xl mx-auto">
          {[
            {
              name: "Weekly Snooker Championship",
              when: "Every Sunday",
              tag: "SNOOKER",
            },
            {
              name: "Weekly Pool Tournament",
              when: "Every Saturday",
              tag: "POOL",
            },
          ].map(({ name, when, tag }, i) => (
            <div
              key={name}
              className={cn(
                "flex-1 rounded-xl p-6 border border-accent/20 flex flex-col gap-4 glow-hover transition-all duration-500",
                visible
                  ? "opacity-100 translate-x-0"
                  : i === 0
                    ? "opacity-0 -translate-x-6"
                    : "opacity-0 translate-x-6",
              )}
              style={{
                background: "oklch(var(--card) / 0.3)",
                transitionDelay: `${i * 150}ms`,
              }}
              data-ocid={`tournament-card-${i}`}
            >
              <div className="flex items-start justify-between">
                <h3 className="font-display text-lg font-bold text-foreground">
                  {name}
                </h3>
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-semibold"
                  style={{
                    background: "oklch(var(--accent) / 0.15)",
                    color: "oklch(var(--accent))",
                  }}
                >
                  {tag}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Trophy
                  className="h-4 w-4"
                  style={{ color: "oklch(var(--accent))" }}
                />
                {when}
              </div>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-smooth border border-accent/30 hover:bg-accent/10"
                style={{ color: "oklch(var(--accent))" }}
                data-ocid={`tournament-register-${i}`}
              >
                <SiWhatsapp className="h-4 w-4" /> Register Now
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/tournaments"
            className="text-sm font-medium transition-smooth hover:opacity-80"
            style={{ color: "oklch(var(--accent))" }}
          >
            View All Tournaments →
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── INSTAGRAM ─────────────────────────────────────────────────── */

function InstagramSection() {
  const { ref, visible } = useInView();
  const posts = Array.from({ length: 6 }, (_, i) => i + 1);
  return (
    <section className="py-20 px-4" style={{ background: "#0B0B0B" }} ref={ref}>
      <div className="container mx-auto">
        <SectionTitle
          title="Follow Our Journey"
          subtitle="@playershub24 on Instagram"
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-8">
          {posts.map((n, i) => (
            <a
              key={`post-${n}`}
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "aspect-square rounded-lg flex flex-col items-center justify-center gap-2 border transition-all duration-300 cursor-pointer group",
                visible ? "opacity-100 scale-100" : "opacity-0 scale-95",
              )}
              style={{
                background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
                borderColor: "oklch(var(--border))",
                transitionDelay: `${i * 60}ms`,
              }}
              aria-label={`Instagram post ${n}`}
              data-ocid={`instagram-post-${i}`}
            >
              <Instagram
                className="h-6 w-6 transition-smooth group-hover:scale-110"
                style={{ color: "oklch(var(--accent) / 0.7)" }}
              />
              <span className="text-xs text-muted-foreground">Post {n}</span>
            </a>
          ))}
        </div>
        <p className="text-center text-muted-foreground text-sm max-w-xl mx-auto mb-6">
          Follow{" "}
          <strong style={{ color: "oklch(var(--accent))" }}>
            @playershub24
          </strong>{" "}
          on Instagram for daily match highlights, tournament results, and club
          moments.
        </p>
        <div className="flex justify-center">
          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border transition-smooth glow-hover"
            style={{
              borderColor: "oklch(var(--accent) / 0.4)",
              color: "oklch(var(--accent))",
            }}
            data-ocid="instagram-follow-cta"
          >
            <Instagram className="h-4 w-4" /> Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── REVIEWS ───────────────────────────────────────────────────── */

const REVIEWS = [
  {
    name: "Rahul Sharma",
    initial: "R",
    text: "Best snooker club in Gwalior by far! The imported tables are amazing — every shot feels perfect. The lounge atmosphere is truly premium. Highly recommend!",
    stars: 5,
  },
  {
    name: "Priya Singh",
    initial: "P",
    text: "Me and my college friends come here every weekend. The vibe is incredible — like a luxury club! Staff is very helpful and the facilities are top-notch.",
    stars: 5,
  },
  {
    name: "Amit Kushwaha",
    initial: "A",
    text: "I play professionally and Players Hub has the best practice environment in the city. The table quality is truly international standard.",
    stars: 5,
  },
  {
    name: "Vikash Mishra",
    initial: "V",
    text: "Open 24×7 is a game-changer! Came for a late-night session at 2am and it was perfect. Love the atmosphere and the service.",
    stars: 5,
  },
  {
    name: "Shreya Dubey",
    initial: "S",
    text: "Took my corporate team here for a team-building event — everyone absolutely loved it! Great ambiance, professional setup, and excellent service.",
    stars: 5,
  },
  {
    name: "Rohan Tiwari",
    initial: "R",
    text: "The weekly tournaments are so well organized! Won my first trophy here last month. Players Hub is on another level compared to any other club in Gwalior.",
    stars: 5,
  },
];

function ReviewsSection() {
  const { ref, visible } = useInView();
  return (
    <section className="py-20 px-4" style={{ background: "#111111" }} ref={ref}>
      <div className="container mx-auto">
        <SectionTitle
          title="What Our Players Say"
          subtitle="Join thousands of satisfied players"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map(({ name, initial, text, stars }, i) => (
            <div
              key={name}
              className={cn(
                "card-luxury glow-hover p-6 rounded-xl flex flex-col gap-4 transition-all duration-500",
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6",
              )}
              style={{ transitionDelay: `${i * 80}ms` }}
              data-ocid={`review-card-${i}`}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                  style={{
                    background: "oklch(var(--accent) / 0.15)",
                    color: "oklch(var(--accent))",
                  }}
                >
                  {initial}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-sm text-foreground truncate">
                    {name}
                  </p>
                  <div className="flex gap-0.5 mt-0.5">
                    {(["one", "two", "three", "four", "five"] as const)
                      .slice(0, stars)
                      .map((s) => (
                        <Star
                          key={`${name}-star-${s}`}
                          className="h-3 w-3 fill-current"
                          style={{ color: "oklch(var(--accent))" }}
                        />
                      ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                &ldquo;{text}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── QUICK BOOKING CTA ─────────────────────────────────────────── */

function BookingCTASection() {
  return (
    <section
      className="py-24 px-4 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0d1e13 0%, #0a1a0e 50%, #111008 100%)",
      }}
      data-ocid="booking-cta"
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle, oklch(var(--accent)) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(15,61,46,0.3) 0%, transparent 70%)",
        }}
      />
      <div className="relative z-10 container mx-auto text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
          Ready to Play?
        </h2>
        <div
          className="w-16 h-0.5 mx-auto mb-6"
          style={{ background: "oklch(var(--accent))" }}
        />
        <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-8">
          Book your table now — no advance payment required. Just call or
          WhatsApp.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-base tracking-wide transition-smooth glow-hover"
            style={{
              background: "oklch(var(--accent))",
              color: "oklch(var(--accent-foreground))",
            }}
            data-ocid="booking-call-cta"
          >
            <Phone className="h-5 w-5" /> Call to Book
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-base tracking-wide border-2 transition-smooth"
            style={{
              borderColor: "rgba(34,197,94,0.5)",
              color: "rgb(74,222,128)",
              background: "rgba(34,197,94,0.05)",
            }}
            data-ocid="booking-whatsapp-cta"
          >
            <SiWhatsapp className="h-5 w-5" /> WhatsApp to Book
          </a>
        </div>
        <div className="flex flex-col items-center gap-1 text-muted-foreground">
          <div className="flex items-center gap-2 text-sm">
            <MapPin
              className="h-4 w-4"
              style={{ color: "oklch(var(--accent))" }}
            />
            <span>
              {ADDRESS_LINE1}, {ADDRESS_LINE2}
            </span>
          </div>
          <p
            className="text-xs tracking-widest uppercase"
            style={{ color: "oklch(var(--accent))" }}
          >
            Open 24×7 — Walk-ins Welcome
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── MENU ──────────────────────────────────────────────────────── */

const MENU_CATEGORIES = [
  {
    emoji: "🍜",
    name: "Noodles",
    items: [
      { name: "Plain Maggie", price: 40 },
      { name: "Veg Maggie", price: 60 },
      { name: "Veg Butter Maggie", price: 70 },
      { name: "Cheese Veg Maggie", price: 90 },
      { name: "Tandoori Maggie", price: 100 },
      { name: "Cheese Corn Maggie", price: 110 },
      { name: "Butter Paneer Maggie", price: 130 },
    ],
  },
  {
    emoji: "🍕",
    name: "Pizzas",
    items: [
      { name: "Margherita", price: 120 },
      { name: "Onion Capsicum", price: 140 },
      { name: "Capsicum Tomato", price: 140 },
      { name: "Farmhub Pizza", price: 180 },
      { name: "Sweet Corn Pizza", price: 170 },
      { name: "Paneer Tikka Pizza", price: 190 },
      { name: "Veggie Paneer Pizza", price: 190 },
    ],
  },
  {
    emoji: "🍟",
    name: "Fries & Nachos",
    items: [
      { name: "Nachos", price: 70 },
      { name: "Salted Nachos", price: 89 },
      { name: "Cheese Loaded Nachos", price: 100 },
      { name: "Peri Hub Nachos", price: 120 },
      { name: "Salted Fries", price: 70 },
      { name: "Peri Peri Fries", price: 100 },
      { name: "Cheese Loaded Fries", price: 130 },
      { name: "Tandoori Fries", price: 140 },
      { name: "Chili Potato", price: 160 },
    ],
  },
  {
    emoji: "🍔",
    name: "Burgers",
    items: [
      { name: "Veg Burger", price: 89 },
      { name: "Tandoori Burger", price: 100 },
      { name: "Tandoori Cheese Burger", price: 110 },
      { name: "Tandoori Paneer Burger", price: 130 },
      { name: "Makhani Burger", price: 150 },
    ],
  },
  {
    emoji: "🥟",
    name: "Patties",
    items: [
      { name: "Club Masala Patties", price: 40 },
      { name: "Stuffed Veg Patties", price: 50 },
      { name: "Cheese Patties", price: 70 },
      { name: "Sweet Corn Patties", price: 70 },
      { name: "Hub Special Pizza Patties", price: 100 },
    ],
  },
  {
    emoji: "🥪",
    name: "Sandwiches",
    items: [
      { name: "Plain Sandwich", price: 80 },
      { name: "Veg Grill Sandwich", price: 100 },
      { name: "Sweet Corn Sandwich", price: 120 },
      { name: "Veg Cheese Sandwich", price: 130 },
      { name: "Tandoori Paneer Sandwich", price: 150 },
      { name: "Grilled Paneer Sandwich", price: 150 },
      { name: "Cheese Chili Toast", price: 100 },
    ],
  },
  {
    emoji: "🍝",
    name: "Pastas",
    items: [
      { name: "Red Sauce Pasta", price: 140 },
      { name: "White Sauce Pasta", price: 160 },
      { name: "Pink Sauce Pasta", price: 190 },
    ],
  },
  {
    emoji: "🌯",
    name: "Rolls",
    items: [
      { name: "Veg Roll", price: 69 },
      { name: "Kathi Roll", price: 79 },
      { name: "Chili Paneer Roll", price: 99 },
      { name: "Egg Roll", price: 120 },
      { name: "Chicken Shawarma", price: 150 },
    ],
  },
  {
    emoji: "🧊",
    name: "Cold Beverages",
    items: [
      { name: "Classic Cold Coffee", price: 90 },
      { name: "Chocolate Coffee", price: 120 },
      { name: "KitKat Coffee", price: 130 },
      { name: "Oreo Cold Coffee", price: 130 },
      { name: "Cold Coffee with Ice Cream", price: 140 },
    ],
  },
  {
    emoji: "🥤",
    name: "Shakes",
    items: [
      { name: "Oreo Shake", price: 110 },
      { name: "Chocolate Shake", price: 120 },
      { name: "KitKat Shake", price: 120 },
      { name: "Strawberry Shake", price: 120 },
      { name: "Butterscotch Shake", price: 150 },
    ],
  },
  {
    emoji: "🍹",
    name: "Mocktails",
    items: [
      { name: "Mint Mojito", price: 99 },
      { name: "Blue Ocean", price: 99 },
      { name: "Watermelon Punch", price: 99 },
      { name: "Pan Crush", price: 99 },
      { name: "Kiwi Shooter", price: 99 },
    ],
  },
  {
    emoji: "🍞",
    name: "Garlic Breads",
    items: [
      { name: "Garlic Bread", price: 89 },
      { name: "Cheese Garlic Bread", price: 109 },
      { name: "Veg Garlic Bread", price: 130 },
      { name: "Farm Hub Garlic Bread", price: 150 },
    ],
  },
  {
    emoji: "🔥",
    name: "Combos",
    bestValue: true,
    items: [
      { name: "Pasta + Fries + Garlic Bread (2 pc)", price: 200 },
      { name: "Burger + Fries + Cold Drink", price: 230 },
      { name: "Pizza + Cold Drink / Mocktail", price: 250 },
      { name: "Pasta + Burger + Mocktail", price: 280 },
      { name: "Pizza + Burger + Fries + Cold Drink", price: 329 },
    ],
  },
];

function MenuCategoryCard({
  emoji,
  name,
  items,
  bestValue,
  visible,
  delay,
}: {
  emoji: string;
  name: string;
  items: { name: string; price: number }[];
  bestValue?: boolean;
  visible: boolean;
  delay: number;
}) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border p-5 flex flex-col gap-0 overflow-hidden menu-card",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
      )}
      style={{
        transition: visible
          ? `opacity 0.5s cubic-bezier(0.4,0,0.2,1) ${delay}ms, transform 0.5s cubic-bezier(0.4,0,0.2,1) ${delay}ms`
          : undefined,
        background: bestValue
          ? "linear-gradient(135deg, #1a1200 0%, #0f0c00 60%, #111111 100%)"
          : "#111111",
        borderColor: bestValue
          ? "rgba(212,175,55,0.55)"
          : "rgba(212,175,55,0.18)",
        boxShadow: bestValue
          ? "0 0 24px rgba(212,175,55,0.14), inset 0 1px 0 rgba(212,175,55,0.08)"
          : "inset 0 1px 0 rgba(212,175,55,0.04)",
      }}
      data-ocid={`menu-category-${name.toLowerCase().replace(/\s+/g, "-")}`}
    >
      {bestValue && (
        <div
          className="best-value-badge absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-xs font-bold tracking-wide uppercase"
          style={{ fontSize: "0.65rem", letterSpacing: "0.1em" }}
        >
          ✦ Best Value
        </div>
      )}
      <div className="text-4xl mb-3 leading-none menu-card-emoji">{emoji}</div>
      <h3
        className="font-display font-bold text-lg mb-3 leading-tight menu-card-title"
        style={{ color: "oklch(var(--accent))" }}
      >
        {name}
      </h3>
      <div
        className="w-full h-px mb-4 menu-divider-shimmer"
        style={{
          background:
            "linear-gradient(90deg, oklch(var(--accent) / 0.5) 0%, transparent 100%)",
        }}
      />
      <ul className="flex flex-col gap-0">
        {items.map(({ name: itemName, price }, idx) => (
          <li
            key={itemName}
            className={cn(
              "menu-item-row menu-item-fade flex items-center justify-between gap-2 py-2 text-sm",
              visible ? "visible" : "",
              idx < items.length - 1 ? "border-b border-dashed" : "",
            )}
            style={{
              borderColor:
                idx < items.length - 1 ? "rgba(212,175,55,0.1)" : undefined,
              transitionDelay: visible
                ? `${delay + 80 + idx * 40}ms`
                : undefined,
            }}
          >
            <span className="text-muted-foreground leading-snug flex-1 min-w-0 truncate pr-2">
              {itemName}
            </span>
            <span
              className="menu-item-price font-semibold tabular-nums flex-shrink-0"
              style={{ color: "oklch(var(--accent))" }}
            >
              ₹{price}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MenuSection() {
  const { ref, visible } = useInView(0.08);
  return (
    <section
      className="py-20 px-4 scroll-smooth"
      style={{ background: "#0B0B0B" }}
      ref={ref}
      id="menu"
    >
      <div className="container mx-auto">
        {/* Section heading with gold shimmer animation */}
        <div
          className={cn(
            "text-center mb-12 transition-all duration-700",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          )}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
            <span
              className={visible ? "menu-title-shimmer" : ""}
              style={!visible ? { color: "oklch(var(--accent))" } : undefined}
            >
              Food &amp; Beverages
            </span>
            <span
              className="block w-16 h-0.5 mx-auto mt-3"
              style={{ background: "oklch(var(--accent))" }}
            />
          </h2>
          <p
            className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mt-3"
            style={{ transitionDelay: "100ms" }}
          >
            Crafted for champions — fuel your game
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {MENU_CATEGORIES.map(({ emoji, name, items, bestValue }, i) => (
            <MenuCategoryCard
              key={name}
              emoji={emoji}
              name={name}
              items={items}
              bestValue={bestValue}
              visible={visible}
              delay={Math.min(i * 80, 600)}
            />
          ))}
        </div>
        <p
          className={cn(
            "text-center text-xs text-muted-foreground mt-10 tracking-wide transition-all duration-700",
            visible ? "opacity-60" : "opacity-0",
          )}
          style={{ transitionDelay: "700ms" }}
        >
          * Prices inclusive of all taxes. Menu subject to change.
        </p>
      </div>
    </section>
  );
}

/* ─── FAQ ───────────────────────────────────────────────────────── */

const FAQS = [
  {
    q: "What are your opening hours?",
    a: "Players Hub Club is open 24 hours a day, 7 days a week — 365 days a year. Come play anytime.",
  },
  {
    q: "Do you have professional snooker tables?",
    a: "Yes, we use imported professional-grade snooker and pool tables that meet international tournament standards.",
  },
  {
    q: "How can I book a table?",
    a: "Simply call us at 7772006449 or send a WhatsApp message to the same number. Walk-ins are always welcome too — no booking required if tables are available.",
  },
  {
    q: "Are tournaments organized regularly?",
    a: "Yes! We organize weekly snooker and pool tournaments every Saturday and Sunday. Monthly grand tournaments are also organized. Follow @playershub24 on Instagram for announcements.",
  },
  {
    q: "Is equipment provided?",
    a: "Yes, all cues, balls, chalk, rests, and accessories are included in the hourly table rate.",
  },
  {
    q: "Where are you located?",
    a: "We're located at Hotel Shri Krishna, Padav, Lashkar, Gwalior, MP 474002. Ask locals for Hotel Shri Krishna in Padav.",
  },
];

function FAQSection() {
  const { ref, visible } = useInView();
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-20 px-4" style={{ background: "#0B0B0B" }} ref={ref}>
      <div className="container mx-auto max-w-2xl">
        <SectionTitle title="Frequently Asked Questions" />
        <div
          className={cn(
            "flex flex-col gap-3 transition-all duration-500",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          )}
        >
          {FAQS.map(({ q, a }, i) => (
            <div
              key={q}
              className="rounded-xl border overflow-hidden transition-all duration-200"
              style={{
                borderColor:
                  open === i
                    ? "oklch(var(--accent) / 0.3)"
                    : "oklch(var(--border))",
                background: "oklch(var(--card) / 0.5)",
              }}
              data-ocid={`faq-item-${i}`}
            >
              <button
                type="button"
                className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:text-accent transition-smooth"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-semibold text-sm text-foreground">
                  {q}
                </span>
                <ChevronDownIcon
                  className="h-4 w-4 flex-shrink-0 transition-transform duration-300"
                  style={{
                    color: "oklch(var(--accent))",
                    transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>
              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: open === i ? "200px" : "0px" }}
              >
                <p className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">
                  {a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── MAIN PAGE ─────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <div className="bg-background text-foreground">
      <HeroSection />
      <HighlightsSection />
      <FacilitiesSection />
      <PricingSection />
      <MenuSection />
      <TournamentSection />
      <InstagramSection />
      <ReviewsSection />
      <BookingCTASection />
      <FAQSection />
    </div>
  );
}
