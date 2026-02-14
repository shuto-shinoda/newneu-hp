import Link from "next/link";
import type { Event } from "@/lib/data";

type HeroProps = {
  event: Event;
};

export default function Hero({ event }: HeroProps) {
  const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background - placeholder for video/image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-950/60 to-dark-950 z-10" />
        <div
          className="absolute inset-0 placeholder-img"
          role="img"
          aria-label={`${event.title} flyer image`}
        >
          {/* Replace with <Image> or <video> when assets are ready */}
          <span className="text-zinc-600 text-lg">HERO IMAGE / VIDEO</span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-5xl px-4 text-center">
        {/* Event label */}
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neon-cyan">
          Next Event
        </p>

        {/* Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black tracking-tight text-white leading-none">
          synapse<span className="text-neon-cyan">.</span>
        </h1>
        <p className="mt-3 text-lg sm:text-2xl font-light text-zinc-300">
          {event.title}
        </p>

        {/* Date & Venue */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-zinc-400">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-neon-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
            <span className="text-sm sm:text-base font-medium">
              {formattedDate} {event.dayOfWeek}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-neon-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <span className="text-sm sm:text-base font-medium">
              {event.venue.name}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-neon-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm sm:text-base font-medium">
              OPEN {event.openTime}
            </span>
          </div>
        </div>

        {/* Lineup preview */}
        <div className="mt-8">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-3">
            Lineup
          </p>
          <p className="text-lg sm:text-xl text-zinc-300 font-light">
            {event.lineup.map((dj) => dj.name).join(" / ")}
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={`/events/${event.slug}`}
            className="inline-flex items-center gap-2 rounded bg-gradient-to-r from-neon-cyan to-neon-magenta px-8 py-4 text-base font-bold text-dark-950 hover:opacity-90 transition-opacity"
          >
            GET TICKETS
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <Link
            href={`/events/${event.slug}`}
            className="text-sm text-zinc-400 hover:text-white transition-colors underline underline-offset-4"
          >
            View Details
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <svg className="h-6 w-6 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
