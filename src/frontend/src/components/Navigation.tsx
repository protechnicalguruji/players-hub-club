import { Link, useRouter } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import { NAV_LINKS, PHONE, WHATSAPP_LINK, cn } from "../lib/utils";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const currentPath = router.state.location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path: string) =>
    path === "/" ? currentPath === "/" : currentPath.startsWith(path);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-card/80 backdrop-blur-xl border-b border-accent/10 shadow-luxury"
          : "bg-gradient-to-b from-background/90 to-transparent backdrop-blur-sm",
      )}
      data-ocid="nav"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center group"
          aria-label="Players Hub Club"
        >
          <img
            src="/assets/logo.jpeg"
            alt="Players Hub Club"
            className="h-10 w-auto object-contain transition-smooth group-hover:opacity-90"
          />
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden lg:flex items-center gap-6"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium tracking-wide transition-all duration-200 relative group",
                isActive(link.path)
                  ? "text-accent"
                  : "text-foreground/70 hover:text-accent",
              )}
            >
              {link.label}
              <span
                className={cn(
                  "absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-300",
                  isActive(link.path) ? "w-full" : "w-0 group-hover:w-full",
                )}
              />
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${PHONE}`}
            className="hidden md:flex items-center gap-2 text-sm text-accent border border-accent/30 px-3 py-1.5 rounded-md hover:bg-accent/10 transition-smooth glow-hover"
            aria-label="Call us"
            data-ocid="nav-call"
          >
            <Phone className="h-3.5 w-3.5" />
            <span className="font-medium tracking-wide">Book Now</span>
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 text-sm bg-accent text-accent-foreground px-3 py-1.5 rounded-md font-semibold hover:bg-accent/90 transition-smooth shadow-luxury"
            aria-label="WhatsApp booking"
            data-ocid="nav-whatsapp"
          >
            <SiWhatsapp className="h-3.5 w-3.5" />
            <span>WhatsApp</span>
          </a>
          <button
            className="lg:hidden p-2 text-foreground/80 hover:text-accent transition-smooth"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            data-ocid="nav-mobile-toggle"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "lg:hidden transition-all duration-300 overflow-hidden border-t border-border/20",
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="bg-card/95 backdrop-blur-xl px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "py-3 px-4 rounded-md text-sm font-medium transition-smooth",
                isActive(link.path)
                  ? "text-accent bg-accent/10 border-l-2 border-accent"
                  : "text-foreground/70 hover:text-accent hover:bg-accent/5",
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-2 mt-2 pt-2 border-t border-border/20">
            <a
              href={`tel:${PHONE}`}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-accent/30 rounded-md text-sm text-accent hover:bg-accent/10 transition-smooth"
              data-ocid="nav-mobile-call"
            >
              <Phone className="h-4 w-4" /> Call
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-accent text-accent-foreground rounded-md text-sm font-semibold hover:bg-accent/90 transition-smooth"
              data-ocid="nav-mobile-whatsapp"
            >
              <SiWhatsapp className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
