import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export const CLUB_NAME = "Players Hub Club";
export const CLUB_TAGLINE = "Premium Snooker Experience in Gwalior";
export const PHONE = "7772006449";
export const PHONE_DISPLAY = "+91 77720 06449";
export const WHATSAPP_LINK = "https://wa.me/917772006449";
export const INSTAGRAM_LINK = "https://www.instagram.com/playershub24/";
export const ADDRESS_LINE1 = "Hotel Shri Krishna, Padav, Lashkar";
export const ADDRESS_LINE2 = "Gwalior, Madhya Pradesh 474002";

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Tables & Pricing", path: "/tables" },
  { label: "Tournaments", path: "/tournaments" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];
