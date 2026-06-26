import { INSTAGRAM_LINK, cn } from "@/lib/utils";
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  Instagram,
  X,
  ZoomIn,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";

type GalleryCategory = "All" | "Tables" | "Players" | "Lounge" | "Tournaments";

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  category: Exclude<GalleryCategory, "All">;
  gradient: string;
  accentColor: string;
  tall?: boolean;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: "The Main Hall",
    description: "Professional snooker tables under precision lighting",
    category: "Tables",
    gradient: "linear-gradient(135deg, #0F3D2E 0%, #071e15 50%, #000000 100%)",
    accentColor: "#4ade80",
    tall: true,
  },
  {
    id: 2,
    title: "Snooker Balls",
    description: "Jewel-toned precision balls on the baize",
    category: "Tables",
    gradient: "linear-gradient(135deg, #7f1d1d 0%, #b45309 40%, #1c1c1c 100%)",
    accentColor: "#fbbf24",
  },
  {
    id: 3,
    title: "Player in Action",
    description: "A focused player executing the perfect shot",
    category: "Players",
    gradient:
      "radial-gradient(ellipse at 30% 40%, #2a2a2a 0%, #0a0a0a 60%, #000 100%)",
    accentColor: "#d4af37",
    tall: true,
  },
  {
    id: 4,
    title: "Lounge Area",
    description: "Plush seating with warm amber ambiance",
    category: "Lounge",
    gradient: "linear-gradient(145deg, #3d2000 0%, #1a0e00 50%, #0d0700 100%)",
    accentColor: "#f59e0b",
  },
  {
    id: 5,
    title: "Pool Table View",
    description: "Imported pool tables in all their glory",
    category: "Tables",
    gradient: "linear-gradient(135deg, #1a0a2e 0%, #0f1a2e 40%, #0a1a14 100%)",
    accentColor: "#a78bfa",
  },
  {
    id: 6,
    title: "Night Session",
    description: "Ambient lighting transforms the arena after dark",
    category: "Lounge",
    gradient: "linear-gradient(135deg, #0f0f2e 0%, #1a0a3e 50%, #070714 100%)",
    accentColor: "#818cf8",
    tall: true,
  },
  {
    id: 7,
    title: "Tournament Day",
    description: "The arena buzzes during championship play",
    category: "Tournaments",
    gradient: "linear-gradient(135deg, #3d0505 0%, #2d1200 60%, #0a0a0a 100%)",
    accentColor: "#ef4444",
  },
  {
    id: 8,
    title: "Cue Rack Detail",
    description: "Premium cues lined up, ready for battle",
    category: "Tables",
    gradient: "linear-gradient(145deg, #2d1a00 0%, #1a0f00 50%, #0a0700 100%)",
    accentColor: "#d97706",
  },
  {
    id: 9,
    title: "Reception Area",
    description: "Gold and black luxury welcomes every guest",
    category: "Lounge",
    gradient: "linear-gradient(135deg, #1a1500 0%, #2a1f00 40%, #0d0d0d 100%)",
    accentColor: "#d4af37",
    tall: true,
  },
  {
    id: 10,
    title: "Table Corner Detail",
    description: "Flawless green felt — the finest surface in Gwalior",
    category: "Tables",
    gradient: "linear-gradient(135deg, #0c2e1e 0%, #071a11 60%, #030e09 100%)",
    accentColor: "#34d399",
  },
  {
    id: 11,
    title: "Players Competing",
    description: "High-intensity competition under the spotlight",
    category: "Players",
    gradient:
      "radial-gradient(ellipse at 60% 30%, #1e1e1e 0%, #050505 70%, #000 100%)",
    accentColor: "#d4af37",
  },
  {
    id: 12,
    title: "Private Lounge",
    description: "Exclusive VIP space for elite players",
    category: "Lounge",
    gradient: "linear-gradient(135deg, #1a003d 0%, #2a1000 50%, #0a0a0a 100%)",
    accentColor: "#c084fc",
    tall: true,
  },
];

const FILTER_TABS: GalleryCategory[] = [
  "All",
  "Tables",
  "Players",
  "Lounge",
  "Tournaments",
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [lightboxVisible, setLightboxVisible] = useState(false);

  const filteredItems =
    activeFilter === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const openLightbox = useCallback((item: GalleryItem) => {
    const idx = GALLERY_ITEMS.findIndex((g) => g.id === item.id);
    setLightboxIndex(idx);
    setLightboxVisible(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxVisible(false);
    setTimeout(() => setLightboxIndex(null), 300);
  }, []);

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev === null ? 0 : (prev + 1) % GALLERY_ITEMS.length,
    );
  }, [lightboxIndex]);

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev === null
        ? 0
        : (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length,
    );
  }, [lightboxIndex]);

  useEffect(() => {
    if (!lightboxVisible) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxVisible, closeLightbox, goNext, goPrev]);

  const currentItem =
    lightboxIndex !== null ? GALLERY_ITEMS[lightboxIndex] : null;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-36">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, oklch(0.32 0.12 140 / 0.35) 0%, transparent 65%), linear-gradient(180deg, oklch(0.08 0.01 270) 0%, oklch(0.1 0.01 270) 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4af37' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 text-xs font-body tracking-widest uppercase"
            style={{
              borderColor: "oklch(var(--accent) / 0.4)",
              color: "oklch(var(--accent))",
              background: "oklch(var(--accent) / 0.06)",
            }}
          >
            <Camera size={12} />
            Photo Gallery
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-5 leading-tight">
            <span className="text-gradient">Gallery</span>
          </h1>
          <p
            className="font-body text-lg md:text-xl max-w-xl mx-auto"
            style={{ color: "oklch(var(--muted-foreground))" }}
          >
            Step inside Players Hub Club — where luxury meets the felt
          </p>
        </motion.div>
      </section>

      {/* Filter Tabs */}
      <section className="px-6 pb-8">
        <div className="max-w-6xl mx-auto">
          <div
            className="flex flex-wrap gap-2 justify-center"
            data-ocid="gallery-filter-tabs"
          >
            {FILTER_TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveFilter(tab)}
                data-ocid={`filter-tab-${tab.toLowerCase()}`}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-body font-medium transition-smooth border",
                  activeFilter === tab
                    ? "border-transparent text-background"
                    : "text-muted-foreground border-border hover:border-accent/40",
                )}
                style={
                  activeFilter === tab
                    ? {
                        background: "oklch(var(--accent))",
                        color: "oklch(var(--accent-foreground))",
                      }
                    : {}
                }
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            layout
            className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-0"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.88 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="break-inside-avoid mb-4"
                >
                  <GalleryCard item={item} onOpen={openLightbox} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 text-muted-foreground font-body"
            >
              No items in this category yet.
            </motion.div>
          )}
        </div>
      </section>

      {/* Instagram CTA */}
      <section
        className="py-20 px-6 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.12 0.04 60 / 0.25) 0%, oklch(0.1 0.01 270) 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, oklch(var(--accent) / 0.08) 0%, transparent 65%)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-xl mx-auto text-center"
        >
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
            style={{
              background: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)",
            }}
          >
            <Instagram size={28} className="text-white" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3 text-foreground">
            See More on Instagram
          </h2>
          <p
            className="font-body mb-2"
            style={{ color: "oklch(var(--accent))" }}
          >
            @playershub24
          </p>
          <p
            className="font-body text-sm mb-8"
            style={{ color: "oklch(var(--muted-foreground))" }}
          >
            Follow for daily updates, match highlights, and tournament moments
          </p>
          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="instagram-follow-btn"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-body font-semibold text-sm transition-smooth glow-hover"
            style={{
              background: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)",
              color: "#fff",
            }}
          >
            <Instagram size={16} />
            Follow on Instagram
          </a>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxVisible && currentItem && (
          <Lightbox
            item={currentItem}
            index={lightboxIndex!}
            total={GALLERY_ITEMS.length}
            onClose={closeLightbox}
            onNext={goNext}
            onPrev={goPrev}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Gallery Card ─── */
interface GalleryCardProps {
  item: GalleryItem;
  onOpen: (item: GalleryItem) => void;
}

function GalleryCard({ item, onOpen }: GalleryCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative rounded-xl overflow-hidden cursor-pointer group"
      style={{
        aspectRatio: item.tall ? "3 / 4" : "4 / 3",
        boxShadow: hovered
          ? "0 0 32px 0 oklch(var(--accent) / 0.35), 0 8px 32px 0 oklch(0 0 0 / 0.5)"
          : "0 4px 16px 0 oklch(0 0 0 / 0.4)",
        transition:
          "box-shadow 0.35s cubic-bezier(0.4, 0, 0.2, 1), transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: hovered ? "scale(1.025)" : "scale(1)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onOpen(item)}
      data-ocid={`gallery-item-${item.id}`}
    >
      {/* CSS gradient "image" */}
      <div className="absolute inset-0" style={{ background: item.gradient }} />

      {/* Texture overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 70%, ${item.accentColor}22 0%, transparent 50%), radial-gradient(circle at 80% 20%, ${item.accentColor}11 0%, transparent 40%)`,
        }}
      />

      {/* Center icon */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center transition-smooth"
          style={{
            background: `${item.accentColor}22`,
            border: `1.5px solid ${item.accentColor}55`,
            transform: hovered ? "scale(1.15)" : "scale(1)",
          }}
        >
          <Camera size={22} style={{ color: item.accentColor }} />
        </div>
        <p
          className="font-display font-semibold text-sm text-center px-4"
          style={{ color: item.accentColor, letterSpacing: "0.05em" }}
        >
          {item.title.toUpperCase()}
        </p>
      </div>

      {/* Category badge */}
      <div className="absolute top-3 left-3">
        <span
          className="px-2.5 py-1 rounded-full text-xs font-body font-semibold"
          style={{
            background: "oklch(0.08 0.01 270 / 0.75)",
            color: item.accentColor,
            border: `1px solid ${item.accentColor}44`,
            backdropFilter: "blur(6px)",
          }}
        >
          {item.category}
        </span>
      </div>

      {/* Hover overlay */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="absolute inset-0 flex flex-col items-center justify-end pb-6 px-4"
        style={{
          background:
            "linear-gradient(0deg, oklch(0.05 0.01 270 / 0.92) 0%, transparent 55%)",
        }}
      >
        <div className="flex items-center gap-2 mb-1">
          <ZoomIn size={14} style={{ color: "oklch(var(--accent))" }} />
          <span
            className="font-body text-xs uppercase tracking-widest"
            style={{ color: "oklch(var(--accent))" }}
          >
            View Full
          </span>
        </div>
        <p className="font-display text-base font-bold text-foreground text-center">
          {item.title}
        </p>
        <p
          className="font-body text-xs text-center mt-1"
          style={{ color: "oklch(var(--muted-foreground))" }}
        >
          {item.description}
        </p>
      </motion.div>
    </motion.div>
  );
}

/* ─── Lightbox ─── */
interface LightboxProps {
  item: GalleryItem;
  index: number;
  total: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

function Lightbox({
  item,
  index,
  total,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        background: "oklch(0.03 0.005 270 / 0.96)",
        backdropFilter: "blur(12px)",
      }}
      onClick={onClose}
      data-ocid="lightbox-overlay"
    >
      {/* Modal container */}
      <motion.div
        initial={{ scale: 0.88, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.88, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-4xl rounded-2xl overflow-hidden"
        style={{
          border: "1px solid oklch(var(--accent) / 0.2)",
          boxShadow:
            "0 0 80px 0 oklch(var(--accent) / 0.15), 0 32px 64px 0 oklch(0 0 0 / 0.7)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Large gradient image */}
        <div
          className="w-full"
          style={{
            aspectRatio: "16 / 9",
            background: item.gradient,
            position: "relative",
          }}
        >
          {/* Texture */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 30% 60%, ${item.accentColor}33 0%, transparent 55%), radial-gradient(circle at 75% 25%, ${item.accentColor}1a 0%, transparent 45%)`,
            }}
          />
          {/* Center content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center"
              style={{
                background: `${item.accentColor}22`,
                border: `2px solid ${item.accentColor}66`,
              }}
            >
              <Camera size={32} style={{ color: item.accentColor }} />
            </div>
            <p
              className="font-display text-2xl font-bold tracking-wide"
              style={{ color: item.accentColor }}
            >
              {item.title.toUpperCase()}
            </p>
          </div>
        </div>

        {/* Info bar */}
        <div
          className="px-6 py-5 flex items-start justify-between gap-4"
          style={{ background: "oklch(var(--card))" }}
        >
          <div>
            <h3 className="font-display text-xl font-bold text-foreground mb-1">
              {item.title}
            </h3>
            <p
              className="font-body text-sm"
              style={{ color: "oklch(var(--muted-foreground))" }}
            >
              {item.description}
            </p>
          </div>
          <span
            className="shrink-0 px-3 py-1 rounded-full text-xs font-body font-semibold"
            style={{
              background: "oklch(var(--accent) / 0.12)",
              color: "oklch(var(--accent))",
              border: "1px solid oklch(var(--accent) / 0.3)",
            }}
          >
            {item.category}
          </span>
        </div>
      </motion.div>

      {/* Counter */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full font-body text-sm"
        style={{
          background: "oklch(0.1 0.01 270 / 0.8)",
          color: "oklch(var(--muted-foreground))",
          border: "1px solid oklch(var(--border))",
          backdropFilter: "blur(8px)",
        }}
        data-ocid="lightbox-counter"
      >
        {index + 1} / {total}
      </div>

      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        data-ocid="lightbox-close"
        className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-smooth"
        style={{
          background: "oklch(0.12 0.01 270 / 0.9)",
          border: "1px solid oklch(var(--border))",
          color: "oklch(var(--muted-foreground))",
        }}
      >
        <X size={18} />
      </button>

      {/* Prev */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        data-ocid="lightbox-prev"
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-smooth glow-hover"
        style={{
          background: "oklch(0.12 0.01 270 / 0.9)",
          border: "1px solid oklch(var(--border))",
          color: "oklch(var(--foreground))",
        }}
      >
        <ChevronLeft size={22} />
      </button>

      {/* Next */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        data-ocid="lightbox-next"
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-smooth glow-hover"
        style={{
          background: "oklch(0.12 0.01 270 / 0.9)",
          border: "1px solid oklch(var(--border))",
          color: "oklch(var(--foreground))",
        }}
      >
        <ChevronRight size={22} />
      </button>
    </motion.div>
  );
}
