import {
  ADDRESS_LINE1,
  ADDRESS_LINE2,
  CLUB_NAME,
  INSTAGRAM_LINK,
  PHONE,
  PHONE_DISPLAY,
  WHATSAPP_LINK,
} from "@/lib/utils";
import {
  ChevronDown,
  ChevronUp,
  Clock,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const MAPS_LINK = "https://maps.app.goo.gl/tZoeQdUjiWETp94u9";

const faqs = [
  {
    q: "Is there parking nearby?",
    a: "Yes, parking is available near Hotel Shri Krishna in the Padav area.",
  },
  {
    q: "Can I walk in without booking?",
    a: "Yes! Walk-ins are always welcome. We're open 24×7 with tables usually available.",
  },
  {
    q: "Do you charge for equipment?",
    a: "No, all cues, balls, and accessories are included in the table rate.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left transition-smooth hover:bg-card"
        aria-expanded={open}
      >
        <span className="font-display font-semibold text-foreground">{q}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-accent shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-accent shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-5 text-muted-foreground font-body text-sm leading-relaxed border-t border-border bg-card">
          {a}
        </div>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ── Hero ── */}
      <section
        className="relative py-28 flex flex-col items-center justify-center text-center overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.08 0.01 270) 0%, oklch(0.14 0.06 140) 50%, oklch(0.08 0.01 270) 100%)",
        }}
      >
        {/* Decorative radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 40%, oklch(0.72 0.25 60 / 0.12) 0%, transparent 70%)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center gap-4"
        >
          <p className="font-body text-xs uppercase tracking-[0.3em] text-accent font-semibold">
            {CLUB_NAME}
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Visit Us
          </h1>
          <p className="font-body text-muted-foreground text-base md:text-lg mt-2 max-w-md">
            Players Hub Club — Hotel Shri Krishna, Gwalior
          </p>
          {/* Gold divider */}
          <div className="flex items-center gap-3 mt-4">
            <div
              className="h-px w-16"
              style={{ background: "oklch(0.72 0.25 60 / 0.5)" }}
            />
            <div className="w-2 h-2 rounded-full bg-accent" />
            <div
              className="h-px w-16"
              style={{ background: "oklch(0.72 0.25 60 / 0.5)" }}
            />
          </div>
        </motion.div>
      </section>

      {/* ── Contact Method Cards ── */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Call Us */}
          <motion.a
            href={`tel:+91${PHONE}`}
            data-ocid="contact-call-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-luxury glow-hover flex flex-col gap-4 p-8 rounded-xl border group no-underline"
            style={{ borderColor: "oklch(0.72 0.25 60 / 0.35)" }}
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center shrink-0"
              style={{ background: "oklch(0.72 0.25 60 / 0.15)" }}
            >
              <Phone className="w-6 h-6 text-accent" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-body text-xs uppercase tracking-widest text-accent font-semibold">
                Call Us
              </p>
              <h3 className="font-display text-xl font-bold text-foreground">
                Call to Book
              </h3>
              <p className="font-body text-2xl font-bold text-accent mt-1">
                {PHONE_DISPLAY}
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mt-2">
                Call us to book your table or get information about upcoming
                events
              </p>
            </div>
            <span
              className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-body font-semibold text-sm transition-smooth"
              style={{
                background: "oklch(0.72 0.25 60 / 0.18)",
                color: "oklch(0.72 0.25 60)",
                border: "1px solid oklch(0.72 0.25 60 / 0.4)",
              }}
            >
              <Phone className="w-4 h-4" /> Call Now
            </span>
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="contact-whatsapp-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-luxury flex flex-col gap-4 p-8 rounded-xl border group no-underline transition-smooth"
            style={{
              borderColor: "oklch(0.65 0.22 145 / 0.35)",
            }}
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center shrink-0"
              style={{ background: "oklch(0.65 0.22 145 / 0.15)" }}
            >
              <MessageCircle
                className="w-6 h-6"
                style={{ color: "oklch(0.72 0.28 145)" }}
              />
            </div>
            <div className="flex flex-col gap-1">
              <p
                className="font-body text-xs uppercase tracking-widest font-semibold"
                style={{ color: "oklch(0.72 0.28 145)" }}
              >
                WhatsApp
              </p>
              <h3 className="font-display text-xl font-bold text-foreground">
                WhatsApp Booking
              </h3>
              <p
                className="font-body text-2xl font-bold mt-1"
                style={{ color: "oklch(0.72 0.28 145)" }}
              >
                {PHONE_DISPLAY}
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mt-2">
                Send us a WhatsApp message to book a table or register for
                tournaments
              </p>
            </div>
            <span
              className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-body font-semibold text-sm transition-smooth"
              style={{
                background: "oklch(0.65 0.22 145 / 0.18)",
                color: "oklch(0.72 0.28 145)",
                border: "1px solid oklch(0.65 0.22 145 / 0.4)",
              }}
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </span>
          </motion.a>

          {/* Visit Us */}
          <motion.a
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="contact-visit-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-luxury glow-hover flex flex-col gap-4 p-8 rounded-xl border group no-underline"
            style={{ borderColor: "oklch(0.58 0.15 200 / 0.35)" }}
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center shrink-0"
              style={{ background: "oklch(0.58 0.15 200 / 0.15)" }}
            >
              <MapPin
                className="w-6 h-6"
                style={{ color: "oklch(0.68 0.2 200)" }}
              />
            </div>
            <div className="flex flex-col gap-1">
              <p
                className="font-body text-xs uppercase tracking-widest font-semibold"
                style={{ color: "oklch(0.68 0.2 200)" }}
              >
                Visit Us
              </p>
              <h3 className="font-display text-xl font-bold text-foreground">
                Walk-In Welcome
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mt-2">
                {ADDRESS_LINE1},<br />
                {ADDRESS_LINE2}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <Clock className="w-4 h-4 text-accent shrink-0" />
                <span className="font-body text-sm font-semibold text-accent">
                  Open 24×7
                </span>
              </div>
            </div>
            <span
              className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-body font-semibold text-sm transition-smooth"
              style={{
                background: "oklch(0.58 0.15 200 / 0.18)",
                color: "oklch(0.68 0.2 200)",
                border: "1px solid oklch(0.58 0.15 200 / 0.4)",
              }}
            >
              <MapPin className="w-4 h-4" /> Get Directions
            </span>
          </motion.a>
        </div>
      </section>

      {/* ── Location & Map ── */}
      <section
        className="py-16 px-4"
        style={{ background: "oklch(0.11 0.01 270)" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="font-body text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-3">
              Location
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Find Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Address card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="card-luxury rounded-xl p-8 flex flex-col gap-6 border"
              style={{ borderColor: "oklch(0.72 0.25 60 / 0.2)" }}
            >
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                  {CLUB_NAME}
                </h3>
                <div
                  className="h-px w-12 mt-2"
                  style={{ background: "oklch(0.72 0.25 60 / 0.6)" }}
                />
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body font-semibold text-foreground text-sm mb-0.5">
                      Address
                    </p>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed">
                      Hotel Shri Krishna, Padav, Lashkar
                      <br />
                      Gwalior, Madhya Pradesh 474002
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body font-semibold text-foreground text-sm mb-0.5">
                      Phone
                    </p>
                    <a
                      href={`tel:+91${PHONE}`}
                      className="font-body text-accent text-sm font-semibold hover:underline transition-smooth"
                      data-ocid="contact-phone-link"
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageCircle
                    className="w-5 h-5 shrink-0 mt-0.5"
                    style={{ color: "oklch(0.72 0.28 145)" }}
                  />
                  <div>
                    <p className="font-body font-semibold text-foreground text-sm mb-0.5">
                      WhatsApp
                    </p>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm font-semibold hover:underline transition-smooth"
                      style={{ color: "oklch(0.72 0.28 145)" }}
                      data-ocid="contact-whatsapp-link"
                    >
                      Send a Message
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body font-semibold text-foreground text-sm mb-0.5">
                      Opening Hours
                    </p>
                    <p className="font-body text-accent text-sm font-bold">
                      Open 24 Hours, 7 Days a Week
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Instagram className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body font-semibold text-foreground text-sm mb-0.5">
                      Instagram
                    </p>
                    <a
                      href={INSTAGRAM_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-accent text-sm hover:underline transition-smooth"
                      data-ocid="contact-instagram-link"
                    >
                      @playershub24
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="rounded-xl overflow-hidden border flex flex-col"
              style={{
                borderColor: "oklch(0.72 0.25 60 / 0.2)",
                minHeight: "400px",
              }}
            >
              <iframe
                title="Players Hub Club Location"
                src="https://maps.google.com/maps?q=Hotel+Shri+Krishna+Padav+Lashkar+Gwalior+MP+474002&output=embed"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  minHeight: "400px",
                  display: "block",
                  filter: "invert(90%) hue-rotate(180deg)",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                data-ocid="contact-map-embed"
              />
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 font-body text-sm font-semibold text-accent transition-smooth hover:underline"
                style={{ background: "oklch(0.12 0.01 270)" }}
                data-ocid="contact-directions-btn"
              >
                <MapPin className="w-4 h-4" /> Open in Google Maps
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Quick Booking CTA ── */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6"
        >
          <p className="font-body text-xs uppercase tracking-[0.3em] text-accent font-semibold">
            Instant Booking
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Book Your Table Now
          </h2>
          <p className="font-body text-muted-foreground text-base max-w-sm">
            No online form needed — just call or message us directly. Available
            24×7, no advance payment required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
            <a
              href={`tel:+91${PHONE}`}
              data-ocid="booking-call-btn"
              className="glow-hover flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-body font-bold text-base transition-smooth"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.72 0.25 60), oklch(0.62 0.22 55))",
                color: "oklch(0.08 0.01 270)",
              }}
            >
              <Phone className="w-5 h-5" /> Call {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="booking-whatsapp-btn"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-body font-bold text-base transition-smooth hover:opacity-90"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.65 0.22 145), oklch(0.55 0.2 145))",
                color: "#fff",
              }}
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp Us
            </a>
          </div>

          <p className="font-body text-xs text-muted-foreground">
            ✓ Available 24×7 &nbsp;·&nbsp; ✓ No advance payment required
            &nbsp;·&nbsp; ✓ Walk-ins welcome
          </p>
        </motion.div>
      </section>

      {/* ── How to Find Us ── */}
      <section
        className="py-16 px-4"
        style={{ background: "oklch(0.11 0.01 270)" }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <p className="font-body text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-3">
              Directions
            </p>
            <h2 className="font-display text-4xl font-bold text-foreground">
              How to Find Us
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="card-luxury rounded-xl p-8 border flex flex-col gap-5"
            style={{ borderColor: "oklch(0.72 0.25 60 / 0.2)" }}
          >
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                style={{ background: "oklch(0.72 0.25 60 / 0.15)" }}
              >
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-display text-xl font-bold text-foreground">
                  Located at Hotel Shri Krishna, Padav
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  Players Hub Club is conveniently located in the Padav area —
                  one of Gwalior's central localities. Near Hotel Shri Krishna
                  on the main road in Lashkar.
                </p>
                <div
                  className="rounded-lg px-4 py-3 mt-1 font-body text-sm flex items-start gap-2"
                  style={{
                    background: "oklch(0.72 0.25 60 / 0.08)",
                    border: "1px solid oklch(0.72 0.25 60 / 0.2)",
                  }}
                >
                  <span className="text-accent mt-0.5">💡</span>
                  <span className="text-muted-foreground">
                    <span className="text-foreground font-semibold">Tip:</span>{" "}
                    Ask for Hotel Shri Krishna in Padav — locals know the area
                    well.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <p className="font-body text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-3">
              Quick Answers
            </p>
            <h2 className="font-display text-4xl font-bold text-foreground">
              Common Questions
            </h2>
          </motion.div>

          <div className="flex flex-col gap-3" data-ocid="contact-faq">
            {faqs.map((item, i) => (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <FaqItem q={item.q} a={item.a} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
