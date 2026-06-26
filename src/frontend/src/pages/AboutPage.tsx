import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import {
  Briefcase,
  GraduationCap,
  Heart,
  Star,
  Trophy,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const AUDIENCE = [
  {
    Icon: GraduationCap,
    title: "College Students",
    description:
      "Perfect break between lectures. Challenge your friends or improve your game in a premium environment.",
  },
  {
    Icon: Trophy,
    title: "Snooker Professionals",
    description:
      "Tournament-standard imported tables to keep your game sharp. The best practice facility in Gwalior.",
  },
  {
    Icon: Users,
    title: "Friends & Groups",
    description:
      "Make every outing memorable. Players Hub is the ultimate hangout for groups who want something different.",
  },
  {
    Icon: Briefcase,
    title: "Corporate Players",
    description:
      "Corporate outings, team bonding, and business networking in a premium lounge setting.",
  },
];

const TABLE_STATS = [
  { value: "4", label: "Snooker Tables" },
  { value: "4", label: "Pool Tables" },
  { value: "100%", label: "Imported Professional Grade" },
  { value: "★", label: "Tournament Standard" },
];

const VALUES = [
  {
    Icon: Star,
    title: "Excellence",
    description:
      "We invest in the best equipment so every game feels premium — from the cloth to the cues.",
  },
  {
    Icon: Users,
    title: "Community",
    description:
      "Building Gwalior's snooker community one game at a time. Every player is welcome here.",
  },
  {
    Icon: Heart,
    title: "Passion",
    description:
      "Our team lives and breathes the game — and it shows in everything we do, every single day.",
  },
];

function GoldDivider({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <div
        className="h-px flex-1"
        style={{
          background:
            "linear-gradient(to right, transparent, oklch(var(--accent) / 0.6), transparent)",
        }}
      />
      <div
        className="w-2 h-2 rotate-45 border"
        style={{ borderColor: "oklch(var(--accent) / 0.7)" }}
      />
      <div
        className="h-px flex-1"
        style={{
          background:
            "linear-gradient(to right, transparent, oklch(var(--accent) / 0.6), transparent)",
        }}
      />
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── Hero Section ── */}
      <section
        className="relative py-28 md:py-36 overflow-hidden flex flex-col items-center justify-center text-center px-4"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.07 0.01 270) 0%, oklch(0.12 0.04 140) 50%, oklch(0.07 0.01 270) 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, oklch(0.32 0.12 140 / 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 20%, oklch(0.72 0.25 60 / 0.2) 0%, transparent 40%)",
          }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 mb-4"
        >
          <span
            className="inline-block text-xs font-body font-semibold tracking-[0.3em] uppercase px-4 py-1.5 rounded-full border"
            style={{
              color: "oklch(var(--accent))",
              borderColor: "oklch(var(--accent) / 0.35)",
              background: "oklch(var(--accent) / 0.08)",
            }}
          >
            Our Story
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative z-10 font-display text-5xl md:text-7xl font-bold leading-tight max-w-3xl"
        >
          Born from a <span className="text-gradient">passion</span> for the
          game
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative z-10 font-body text-lg md:text-xl mt-5 max-w-xl text-muted-foreground"
        >
          Built for Gwalior. Designed for champions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="relative z-10 w-full max-w-md mt-10"
        >
          <GoldDivider />
        </motion.div>
      </section>

      {/* ── Who We Are + Quote ── */}
      <section
        className="py-20 md:py-28 px-4"
        style={{ background: "oklch(0.09 0.01 270)" }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Left — Who We Are */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <span
              className="text-xs font-semibold tracking-widest uppercase font-body"
              style={{ color: "oklch(var(--accent))" }}
            >
              Who We Are
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-6 leading-snug text-foreground">
              Gwalior's Premier Snooker Destination
            </h2>
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed text-base">
              <p>
                Players Hub Club was created with a single mission: to bring a
                truly high-quality snooker experience to the heart of Gwalior.
                We saw a city full of passionate players with nowhere to match
                their ambition — so we built it ourselves.
              </p>
              <p>
                Our club features professional imported snooker and pool tables,
                maintained to the exacting standards of international play.
                Every surface, every cue, every element of the room has been
                curated for the serious player.
              </p>
              <p>
                Whether you're picking up a cue for the very first time or
                you've spent years mastering your break — Players Hub Club is
                your home. We've built a space that's welcoming to beginners and
                demanding enough for seasoned professionals.
              </p>
            </div>
          </motion.div>

          {/* Right — Quote Block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="relative pl-8 py-6"
          >
            <div
              className="absolute left-0 top-0 bottom-0 w-1 rounded-full"
              style={{
                background:
                  "linear-gradient(to bottom, oklch(var(--accent) / 0.8), oklch(var(--accent) / 0.2))",
              }}
            />
            <blockquote>
              <p className="font-display text-xl md:text-2xl font-medium italic leading-relaxed text-foreground">
                "We created Players Hub Club to give Gwalior a snooker
                destination worthy of the game."
              </p>
              <footer
                className="mt-6 font-body text-sm"
                style={{ color: "oklch(var(--accent))" }}
              >
                — The Founders, Players Hub Club
              </footer>
            </blockquote>

            <div
              className="mt-10 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-display font-bold border-2"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.32 0.12 140), oklch(0.18 0.04 140))",
                borderColor: "oklch(var(--accent) / 0.4)",
                color: "oklch(var(--accent))",
              }}
            >
              8
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Full Brand Narrative ── */}
      <section
        className="py-20 md:py-24 px-4"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.10 0.02 140 / 0.3) 0%, oklch(0.08 0.01 270) 100%)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <GoldDivider className="mb-10" />
          <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
            Players Hub Club was founded with a vision to elevate snooker
            culture in Gwalior — to create a space where the sport is treated
            with the respect it deserves. We brought together professional-grade
            imported tables and a luxury lounge environment to build something
            the city had never seen before.
          </p>
          <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mt-6">
            This is a place for everyone — from complete beginners learning
            their very first shot, to seasoned professionals honing their game
            before a tournament. But Players Hub is more than just a snooker
            club. It is a destination where sportsmanship meets style, and
            competition meets camaraderie.
          </p>
          <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mt-6">
            The atmosphere here is unlike anywhere else in the city. We've
            combined the focus and intensity of professional sports with the
            warmth and comfort of a premium lounge — a place where you can
            arrive as a player and leave as part of a community.
          </p>
          <GoldDivider className="mt-10" />
        </motion.div>
      </section>

      {/* ── Who Plays Here ── */}
      <section
        className="py-20 md:py-28 px-4"
        style={{ background: "oklch(0.09 0.01 270)" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span
              className="text-xs font-semibold tracking-widest uppercase font-body"
              style={{ color: "oklch(var(--accent))" }}
            >
              Community
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 text-foreground">
              Who Plays Here
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AUDIENCE.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="card-luxury glow-hover p-6 rounded-xl flex flex-col gap-4"
                data-ocid={`audience-card-${item.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{
                    background: "oklch(var(--accent) / 0.12)",
                    color: "oklch(var(--accent))",
                  }}
                >
                  <item.Icon size={22} />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Tables ── */}
      <section
        className="py-20 md:py-28 px-4 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.10 0.04 140) 0%, oklch(0.07 0.01 270) 60%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 60% 50% at 70% 50%, oklch(var(--accent) / 0.3) 0%, transparent 60%)",
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <span
                className="text-xs font-semibold tracking-widest uppercase font-body"
                style={{ color: "oklch(var(--accent))" }}
              >
                Equipment
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-6 leading-tight text-foreground">
                Professional Imported Tables
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed text-base mb-8">
                Every table at Players Hub Club has been sourced from
                international suppliers and meets the standards expected at
                professional tournaments. From the precision slate beds to the
                competition-grade cloth, nothing has been compromised. When you
                play here, you play on the best.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Imported Professional",
                  "Tournament Standard",
                  "Maintained Daily",
                  "8 Total Tables",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-3 py-1 rounded-full text-xs font-body font-medium border"
                    style={{
                      borderColor: "oklch(var(--accent) / 0.35)",
                      color: "oklch(var(--accent))",
                      background: "oklch(var(--accent) / 0.08)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {TABLE_STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="card-luxury glow-hover rounded-xl p-6 text-center flex flex-col items-center justify-center gap-2"
                  data-ocid={`table-stat-${i}`}
                >
                  <span
                    className="font-display text-4xl font-bold"
                    style={{ color: "oklch(var(--accent))" }}
                  >
                    {stat.value}
                  </span>
                  <span className="font-body text-xs text-muted-foreground text-center leading-tight">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section
        className="py-20 md:py-28 px-4"
        style={{ background: "oklch(0.09 0.01 270)" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span
              className="text-xs font-semibold tracking-widest uppercase font-body"
              style={{ color: "oklch(var(--accent))" }}
            >
              What Drives Us
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 text-foreground">
              Our Values
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {VALUES.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="card-luxury glow-hover rounded-xl p-8 flex flex-col gap-4 text-center"
                data-ocid={`value-card-${val.title.toLowerCase()}`}
              >
                <div
                  className="w-14 h-14 rounded-full mx-auto flex items-center justify-center"
                  style={{
                    background: "oklch(var(--accent) / 0.1)",
                    color: "oklch(var(--accent))",
                    boxShadow: "0 0 20px oklch(var(--accent) / 0.15)",
                  }}
                >
                  <val.Icon size={24} />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  {val.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {val.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section
        className="py-24 md:py-32 px-4 text-center relative overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.12 0.05 140) 0%, oklch(0.07 0.01 270) 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, oklch(var(--accent) / 0.25) 0%, transparent 55%)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-2xl mx-auto"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Ready to Experience{" "}
            <span className="text-gradient">Players Hub?</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg mt-5 mb-10">
            Book a table or come visit us anytime — we're open 24×7.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-body font-semibold text-sm transition-smooth glow-gold"
              style={{
                background:
                  "linear-gradient(135deg, oklch(var(--accent)), oklch(0.62 0.22 55))",
                color: "oklch(0.08 0.01 270)",
              }}
              data-ocid="cta-visit-us"
            >
              Visit Us Today
            </Link>
            <Link
              to="/tables"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-body font-semibold text-sm border transition-smooth"
              style={{
                borderColor: "oklch(var(--accent) / 0.5)",
                color: "oklch(var(--accent))",
                background: "oklch(var(--accent) / 0.08)",
              }}
              data-ocid="cta-view-tables"
            >
              View Tables &amp; Pricing
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
