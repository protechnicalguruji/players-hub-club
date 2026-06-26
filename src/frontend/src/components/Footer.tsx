import { Link } from "@tanstack/react-router";
import { Clock, Instagram, MapPin, Phone } from "lucide-react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";
import {
  ADDRESS_LINE1,
  ADDRESS_LINE2,
  CLUB_NAME,
  CLUB_TAGLINE,
  INSTAGRAM_LINK,
  NAV_LINKS,
  PHONE_DISPLAY,
  WHATSAPP_LINK,
} from "../lib/utils";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="bg-card border-t border-accent/10" data-ocid="footer">
      {/* Gold divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="container mx-auto px-4 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h3 className="font-display text-xl font-bold text-gradient">
                {CLUB_NAME}
              </h3>
              <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] mt-1">
                {CLUB_TAGLINE}
              </p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              The premier snooker and pool destination in Gwalior. Professional
              tables, luxury atmosphere, elite experience.
            </p>
            <div className="flex gap-3">
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-border/30 rounded-md text-muted-foreground hover:text-accent hover:border-accent/40 transition-smooth hover:bg-accent/5"
                aria-label="Instagram"
                data-ocid="footer-instagram"
              >
                <SiInstagram className="h-4 w-4" />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-border/30 rounded-md text-muted-foreground hover:text-accent hover:border-accent/40 transition-smooth hover:bg-accent/5"
                aria-label="WhatsApp"
                data-ocid="footer-whatsapp"
              >
                <SiWhatsapp className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-accent transition-smooth flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-px bg-accent/40 group-hover:w-3 group-hover:bg-accent transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-accent/70 mt-0.5 shrink-0" />
                <span>
                  {ADDRESS_LINE1}, {ADDRESS_LINE2}
                </span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-accent/70 shrink-0" />
                <a
                  href="tel:7772006449"
                  className="hover:text-accent transition-smooth"
                >
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <Instagram className="h-4 w-4 text-accent/70 shrink-0" />
                <a
                  href={INSTAGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-smooth"
                >
                  @playershub24
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
              Opening Hours
            </h4>
            <div className="flex items-center gap-2.5 mb-3">
              <Clock className="h-4 w-4 text-accent/70 shrink-0" />
              <span className="text-2xl font-display font-bold text-accent">
                24×7
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We never close. Visit Players Hub Club any time — day or night,
              weekdays or weekends.
            </p>
            <div className="mt-4 p-3 bg-accent/5 border border-accent/10 rounded-md">
              <p className="text-xs text-accent font-semibold tracking-wide uppercase">
                Always Open
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                365 Days a Year
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="h-px bg-gradient-to-r from-transparent via-border/40 to-transparent mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>
            © {year} {CLUB_NAME}. All Rights Reserved.
          </p>
          <p>
            Built with love using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-smooth underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
