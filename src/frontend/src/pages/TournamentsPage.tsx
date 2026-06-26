import { INSTAGRAM_LINK, WHATSAPP_LINK, cn } from "@/lib/utils";
import {
  Calendar,
  ChevronRight,
  Clock,
  Instagram,
  MessageCircle,
  Phone,
  Shield,
  Star,
  Target,
  Trophy,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const PHONE_LINK = "tel:+917772006449";
const WA_LINK = WHATSAPP_LINK;

interface Tournament {
  id: string;
  name: string;
  schedule: string;
  format: string;
  category: string;
  entry: string;
  prize: string;
  status: string;
  statusColor: "gold" | "blue" | "red" | "green";
  icon: React.ReactNode;
}

const TOURNAMENTS: Tournament[] = [
  {
    id: "weekly-snooker",
    name: "Weekly Snooker Championship",
    schedule: "Every Sunday",
    format: "Knockout Round Robin",
    category: "Open to all skill levels",
    entry: "Contact via WhatsApp or Call",
    prize: "Prize money varies with event",
    status: "Registrations Open",
    statusColor: "gold",
    icon: <Trophy className="w-6 h-6" />,
  },
  {
    id: "pool-tournament",
    name: "Pool Tournament",
    schedule: "Every Saturday",
    format: "8-Ball Pool Format",
    category: "Open category",
    entry: "WhatsApp or Call to register",
    prize: "Prize money varies with event",
    status: "Upcoming",
    statusColor: "blue",
    icon: <Target className="w-6 h-6" />,
  },
  {
    id: "monthly-grand-prix",
    name: "Monthly Grand Snooker Prix",
    schedule: "Last Sunday of every month",
    format: "Full Professional Format — Frames",
    category: "Experienced players preferred",
    entry: "Limited spots — register early",
    prize: "Grand prize — varies with event",
    status: "Limited Spots",
    statusColor: "red",
    icon: <Star className="w-6 h-6" />,
  },
  {
    id: "inter-college",
    name: "Inter-College Snooker Cup",
    schedule: "Special events (announced on Instagram)",
    format: "Team Format",
    category: "College students",
    entry: "Team registration via WhatsApp",
    prize: "Trophy + Prize money",
    status: "Announced on Instagram",
    statusColor: "green",
    icon: <Users className="w-6 h-6" />,
  },
];

const STATUS_STYLES: Record<string, string> = {
  gold: "bg-[oklch(0.72_0.25_60/0.2)] text-[oklch(0.82_0.25_62)] border-[oklch(0.72_0.25_60/0.4)]",
  blue: "bg-[oklch(0.55_0.2_250/0.2)] text-[oklch(0.72_0.2_250)] border-[oklch(0.55_0.2_250/0.4)]",
  red: "bg-[oklch(0.55_0.22_25/0.2)] text-[oklch(0.72_0.22_25)] border-[oklch(0.55_0.22_25/0.4)]",
  green:
    "bg-[oklch(0.55_0.18_150/0.2)] text-[oklch(0.72_0.18_150)] border-[oklch(0.55_0.18_150/0.4)]",
};

const GUIDELINES = [
  {
    icon: <Calendar className="w-5 h-5" />,
    text: "All players must register before the day of the tournament",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    text: "Players must arrive 15 minutes before their scheduled match time",
  },
  {
    icon: <Target className="w-5 h-5" />,
    text: "Official tournament balls and cues are provided by the club",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    text: "Players Hub staff decisions are final during all matches",
  },
];

function StatusBadge({ status, color }: { status: string; color: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border tracking-wide uppercase",
        STATUS_STYLES[color],
      )}
    >
      {status}
    </span>
  );
}

function TournamentCard({
  tournament,
  index,
}: {
  tournament: Tournament;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="card-luxury glow-hover p-6 flex flex-col gap-4"
      data-ocid={`tournament-card-${tournament.id}`}
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-3">
          <div
            className="flex items-center justify-center w-10 h-10 rounded-lg"
            style={{
              background: "oklch(var(--accent) / 0.15)",
              color: "oklch(var(--accent))",
            }}
          >
            {tournament.icon}
          </div>
          <div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground font-body mb-0.5">
              <Calendar className="w-3 h-3" />
              {tournament.schedule}
            </div>
            <StatusBadge
              status={tournament.status}
              color={tournament.statusColor}
            />
          </div>
        </div>
      </div>

      {/* Name */}
      <h3 className="font-display text-xl font-semibold text-foreground leading-tight">
        {tournament.name}
      </h3>

      {/* Details */}
      <div className="flex flex-col gap-2 text-sm font-body">
        <div className="flex items-start gap-2">
          <span className="text-muted-foreground min-w-[72px]">Format</span>
          <span className="text-foreground">{tournament.format}</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-muted-foreground min-w-[72px]">Category</span>
          <span className="text-foreground">{tournament.category}</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-muted-foreground min-w-[72px]">Entry</span>
          <span className="text-foreground">{tournament.entry}</span>
        </div>
      </div>

      {/* Prize note */}
      <div
        className="flex items-center gap-2 px-3 py-2 rounded-md text-xs font-body"
        style={{
          background: "oklch(var(--accent) / 0.08)",
          color: "oklch(var(--accent) / 0.9)",
        }}
      >
        <Trophy className="w-3.5 h-3.5 shrink-0" />
        {tournament.prize}
      </div>

      {/* CTA buttons */}
      <div className="flex gap-3 mt-auto pt-2">
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          data-ocid={`tournament-whatsapp-${tournament.id}`}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold font-body transition-smooth"
          style={{
            background: "oklch(0.48_0.17_150 / 0.2)",
            color: "oklch(0.72_0.2_150)",
            border: "1px solid oklch(0.48_0.17_150 / 0.4)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background =
              "oklch(0.48_0.17_150 / 0.35)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background =
              "oklch(0.48_0.17_150 / 0.2)";
          }}
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>
        <a
          href={PHONE_LINK}
          data-ocid={`tournament-call-${tournament.id}`}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold font-body transition-smooth border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
        >
          <Phone className="w-4 h-4" />
          Call
        </a>
      </div>
    </motion.div>
  );
}

export default function TournamentsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ── HERO ── */}
      <section
        className="relative flex flex-col items-center justify-center text-center py-28 px-6 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.32_0.12_140 / 0.35) 0%, oklch(var(--background)) 70%)",
        }}
      >
        {/* decorative orb */}
        <div
          aria-hidden
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: "oklch(var(--accent))" }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 flex flex-col items-center gap-6"
        >
          {/* trophy icon ring */}
          <div
            className="flex items-center justify-center w-20 h-20 rounded-full mb-2"
            style={{
              background: "oklch(var(--accent) / 0.12)",
              border: "1px solid oklch(var(--accent) / 0.4)",
              boxShadow: "0 0 40px oklch(var(--accent) / 0.25)",
            }}
          >
            <Trophy
              className="w-9 h-9"
              style={{ color: "oklch(var(--accent))" }}
            />
          </div>

          <div>
            <p
              className="text-sm font-body font-semibold tracking-[0.25em] uppercase mb-3"
              style={{ color: "oklch(var(--accent))" }}
            >
              Players Hub Club
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight max-w-3xl">
              Tournaments &amp;{" "}
              <span className="text-gradient">Competitions</span>
            </h1>
          </div>

          <p className="font-body text-lg text-muted-foreground max-w-xl leading-relaxed">
            Test your skills. Win glory. Play at Players Hub.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-2">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="hero-register-whatsapp"
              className="flex items-center gap-2 px-7 py-3 rounded-full font-body font-semibold text-sm transition-smooth glow-gold"
              style={{
                background: "oklch(var(--accent))",
                color: "oklch(var(--accent-foreground))",
              }}
            >
              <MessageCircle className="w-4 h-4" />
              Register on WhatsApp
            </a>
            <a
              href={PHONE_LINK}
              data-ocid="hero-call-cta"
              className="flex items-center gap-2 px-7 py-3 rounded-full font-body font-semibold text-sm border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-smooth"
            >
              <Phone className="w-4 h-4" />
              Call to Register
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── UPCOMING TOURNAMENTS ── */}
      <section className="py-20 px-6 bg-background" data-ocid="upcoming-events">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <p
              className="text-sm font-body font-semibold tracking-[0.2em] uppercase mb-3"
              style={{ color: "oklch(var(--accent))" }}
            >
              Compete &amp; Conquer
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Upcoming Events
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TOURNAMENTS.map((t, i) => (
              <TournamentCard key={t.id} tournament={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW TO REGISTER ── */}
      <section
        className="py-20 px-6"
        style={{ background: "oklch(var(--card) / 0.4)" }}
        data-ocid="registration-section"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <p
              className="text-sm font-body font-semibold tracking-[0.2em] uppercase mb-3"
              style={{ color: "oklch(var(--accent))" }}
            >
              Join the Competition
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              How to Register
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* WhatsApp card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card-luxury glow-hover p-8 flex flex-col items-center text-center gap-5"
              data-ocid="register-whatsapp-card"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{
                  background: "oklch(0.48_0.17_150 / 0.15)",
                  color: "oklch(0.72_0.2_150)",
                }}
              >
                <MessageCircle className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  WhatsApp Registration
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Send us a message with your name and the tournament you want
                  to join. We'll confirm your spot instantly.
                </p>
              </div>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="whatsapp-register-btn"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-body font-semibold text-sm transition-smooth"
                style={{
                  background: "oklch(0.48_0.17_150 / 0.2)",
                  color: "oklch(0.72_0.2_150)",
                  border: "1px solid oklch(0.48_0.17_150 / 0.4)",
                }}
              >
                <MessageCircle className="w-4 h-4" />
                Register on WhatsApp
              </a>
            </motion.div>

            {/* Phone card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card-luxury glow-hover p-8 flex flex-col items-center text-center gap-5"
              data-ocid="register-phone-card"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{
                  background: "oklch(var(--accent) / 0.12)",
                  color: "oklch(var(--accent))",
                }}
              >
                <Phone className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  Phone Registration
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Call us to reserve your spot and get all tournament details
                  directly from our staff.
                </p>
              </div>
              <a
                href={PHONE_LINK}
                data-ocid="phone-register-btn"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-body font-semibold text-sm border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-smooth"
              >
                <Phone className="w-4 h-4" />
                Call to Register
              </a>
            </motion.div>
          </div>

          {/* Disclaimer */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center text-sm font-body text-muted-foreground max-w-xl mx-auto px-4"
            data-ocid="registration-disclaimer"
          >
            Tournament prizes vary depending on the event. All registered
            participants will receive full details via WhatsApp.
          </motion.p>
        </div>
      </section>

      {/* ── GUIDELINES ── */}
      <section
        className="py-20 px-6 bg-background"
        data-ocid="guidelines-section"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <p
              className="text-sm font-body font-semibold tracking-[0.2em] uppercase mb-3"
              style={{ color: "oklch(var(--accent))" }}
            >
              Fair Play
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Tournament Guidelines
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {GUIDELINES.map((g, i) => (
              <motion.div
                key={g.text.slice(0, 20)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="card-luxury p-5 flex items-start gap-4"
              >
                <div
                  className="mt-0.5 w-9 h-9 shrink-0 rounded-lg flex items-center justify-center"
                  style={{
                    background: "oklch(var(--accent) / 0.1)",
                    color: "oklch(var(--accent))",
                  }}
                >
                  {g.icon}
                </div>
                <p className="font-body text-sm text-foreground leading-relaxed">
                  {g.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HALL OF FAME ── */}
      <section
        className="py-20 px-6 text-center relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 50% 50%, oklch(0.32_0.12_140 / 0.2) 0%, oklch(var(--background)) 70%)",
        }}
        data-ocid="hall-of-fame"
      >
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 80%, oklch(var(--accent) / 0.04) 0%, transparent 50%), radial-gradient(circle at 80% 20%, oklch(0.48_0.17_120 / 0.05) 0%, transparent 50%)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6"
        >
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center"
            style={{
              background: "oklch(var(--accent) / 0.1)",
              border: "1px solid oklch(var(--accent) / 0.3)",
            }}
          >
            <Trophy
              className="w-9 h-9"
              style={{ color: "oklch(var(--accent))" }}
            />
          </div>
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Champions
            </h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed">
              Every tournament at Players Hub creates legends. Past champions
              are celebrated within our community — their victories inspire the
              next generation of players.
            </p>
            <p className="font-body text-base text-muted-foreground mt-3 leading-relaxed">
              Step up to the table, compete with the best, and leave your mark
              at{" "}
              <span className="text-foreground font-semibold">
                Players Hub Club
              </span>
              .
            </p>
          </div>
          <div
            className="flex items-center gap-2 text-sm font-body font-semibold"
            style={{ color: "oklch(var(--accent))" }}
          >
            <ChevronRight className="w-4 h-4" />
            Your name could be next
          </div>
        </motion.div>
      </section>

      {/* ── STAY UPDATED ── */}
      <section
        className="py-20 px-6"
        style={{ background: "oklch(var(--card) / 0.5)" }}
        data-ocid="stay-updated"
      >
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-luxury p-10 flex flex-col items-center text-center gap-6"
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{
                background: "oklch(0.55_0.2_290 / 0.15)",
                color: "oklch(0.72_0.2_290)",
                border: "1px solid oklch(0.55_0.2_290 / 0.3)",
              }}
            >
              <Instagram className="w-8 h-8" />
            </div>

            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                Never Miss a Tournament
              </h2>
              <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
                Follow{" "}
                <span className="text-foreground font-semibold">
                  @playershub24
                </span>{" "}
                on Instagram for the latest tournament announcements, live
                results, and prize details.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="instagram-follow-btn"
                className="flex items-center gap-2 px-6 py-3 rounded-full font-body font-semibold text-sm transition-smooth"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.62_0.22_30), oklch(0.55_0.2_290))",
                  color: "oklch(0.98_0.01_270)",
                }}
              >
                <Instagram className="w-4 h-4" />
                Follow @playershub24
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="whatsapp-notify-btn"
                className="flex items-center gap-2 px-6 py-3 rounded-full font-body font-semibold text-sm transition-smooth"
                style={{
                  background: "oklch(0.48_0.17_150 / 0.2)",
                  color: "oklch(0.72_0.2_150)",
                  border: "1px solid oklch(0.48_0.17_150 / 0.4)",
                }}
              >
                <MessageCircle className="w-4 h-4" />
                Get WhatsApp Alerts
              </a>
            </div>

            <p className="text-xs font-body text-muted-foreground">
              WhatsApp us to be added to our tournament notification list
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
