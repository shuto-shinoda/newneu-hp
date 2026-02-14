import Link from "next/link";
import type { Event } from "@/lib/data";

type EventCardProps = {
  event: Event;
};

export default function EventCard({ event }: EventCardProps) {
  const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link
      href={`/events/${event.slug}`}
      className="group block rounded-lg overflow-hidden bg-dark-800 border border-white/5 hover:border-neon-cyan/30 transition-all duration-300"
    >
      {/* Flyer Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <div
          className="absolute inset-0 placeholder-img group-hover:scale-105 transition-transform duration-500"
          role="img"
          aria-label={`${event.title} flyer`}
        >
          <span className="text-xs">FLYER</span>
        </div>
        {/* Status badge */}
        <div className="absolute top-3 left-3">
          <span
            className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
              event.status === "upcoming"
                ? "bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30"
                : "bg-dark-700 text-zinc-500 border border-white/10"
            }`}
          >
            {event.status === "upcoming" ? "UPCOMING" : "PAST"}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <p className="text-xs text-neon-cyan font-medium tracking-wider mb-1">
          {formattedDate} {event.dayOfWeek}
        </p>
        <h3 className="text-lg font-bold text-white group-hover:text-neon-cyan transition-colors leading-tight">
          {event.title}
        </h3>
        <p className="mt-2 text-sm text-zinc-500">
          @ {event.venue.name}
        </p>
        <p className="mt-2 text-sm text-zinc-400">
          {event.lineup
            .slice(0, 3)
            .map((dj) => dj.name)
            .join(", ")}
          {event.lineup.length > 3 && ` +${event.lineup.length - 3}`}
        </p>
      </div>
    </Link>
  );
}
