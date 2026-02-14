import eventsData from "@/data/events.json";
import djsData from "@/data/djs.json";
import galleryData from "@/data/gallery.json";
import faqData from "@/data/faq.json";
import siteData from "@/data/site.json";
import newsData from "@/data/news.json";

export type Ticket = {
  type: string;
  price: number;
  status: string;
};

export type LineupEntry = {
  name: string;
  role: string;
  djSlug: string;
};

export type Venue = {
  name: string;
  address: string;
  mapUrl: string;
};

export type Event = {
  slug: string;
  title: string;
  date: string;
  dayOfWeek: string;
  openTime: string;
  closeTime: string;
  venue: Venue;
  flyerImage: string;
  description: string;
  lineup: LineupEntry[];
  ticketUrl: string;
  tickets: Ticket[];
  status: "upcoming" | "past";
  isFeatured: boolean;
  tags: string[];
};

export type Social = {
  instagram: string;
  twitter: string;
  soundcloud: string;
  mixcloud?: string;
};

export type DJ = {
  slug: string;
  name: string;
  photo: string;
  role: string;
  genre: string[];
  bio: string;
  social: Social;
  isResident: boolean;
};

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  eventSlug: string;
  type: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type NewsItem = {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  link: string;
};

export function getEvents(): Event[] {
  return eventsData as Event[];
}

export function getUpcomingEvents(): Event[] {
  return getEvents().filter((e) => e.status === "upcoming");
}

export function getPastEvents(): Event[] {
  return getEvents().filter((e) => e.status === "past");
}

export function getFeaturedEvent(): Event | undefined {
  return getEvents().find((e) => e.isFeatured);
}

export function getEventBySlug(slug: string): Event | undefined {
  return getEvents().find((e) => e.slug === slug);
}

export function getDJs(): DJ[] {
  return djsData as DJ[];
}

export function getResidentDJs(): DJ[] {
  return getDJs().filter((dj) => dj.isResident);
}

export function getDJBySlug(slug: string): DJ | undefined {
  return getDJs().find((dj) => dj.slug === slug);
}

export function getGallery(): GalleryItem[] {
  return galleryData as GalleryItem[];
}

export function getFAQ(): FAQItem[] {
  return faqData as FAQItem[];
}

export function getSiteData() {
  return siteData;
}

export function getNews(): NewsItem[] {
  return newsData as NewsItem[];
}
