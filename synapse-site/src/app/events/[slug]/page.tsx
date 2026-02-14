import type { Metadata } from "next";
import Link from "next/link";
import { getEventBySlug, getEvents, getDJBySlug } from "@/lib/data";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const events = getEvents();
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return {};

  return {
    title: event.title,
    description: event.description,
    openGraph: {
      title: event.title,
      description: event.description,
      images: [event.flyerImage],
    },
  };
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  const formattedDate = new Date(event.date).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/events"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors mb-8"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Events
        </Link>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Flyer */}
          <div className="lg:col-span-2">
            <div className="sticky top-24">
              <div
                className="aspect-[3/4] rounded-lg overflow-hidden placeholder-img"
                role="img"
                aria-label={`${event.title} flyer`}
              >
                <span>FLYER</span>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-3 space-y-8">
            {/* Status */}
            <span
              className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                event.status === "upcoming"
                  ? "bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30"
                  : "bg-dark-700 text-zinc-500 border border-white/10"
              }`}
            >
              {event.status === "upcoming" ? "UPCOMING" : "PAST"}
            </span>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              {event.title}
            </h1>

            {/* Date/Time/Venue */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-zinc-300">
                <svg className="h-5 w-5 text-neon-cyan shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                <span>{formattedDate}（{event.dayOfWeek}）</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-300">
                <svg className="h-5 w-5 text-neon-cyan shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>OPEN {event.openTime} / CLOSE {event.closeTime}</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-300">
                <svg className="h-5 w-5 text-neon-cyan shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>
                  <a
                    href={event.venue.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-neon-cyan transition-colors"
                  >
                    {event.venue.name}
                  </a>
                  <span className="text-zinc-500 text-sm ml-2">{event.venue.address}</span>
                </span>
              </div>
            </div>

            {/* Description */}
            <div>
              <p className="text-zinc-400 leading-relaxed">
                {event.description}
              </p>
            </div>

            {/* Lineup */}
            <div>
              <h2 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">
                Lineup
              </h2>
              <div className="space-y-3">
                {event.lineup.map((entry) => {
                  const djInfo = getDJBySlug(entry.djSlug);
                  return (
                    <div
                      key={entry.djSlug}
                      className="flex items-center gap-4 rounded-lg bg-dark-800 border border-white/5 p-4"
                    >
                      <div
                        className="h-12 w-12 rounded-full placeholder-img shrink-0"
                        role="img"
                        aria-label={`${entry.name} photo`}
                      >
                        <span className="text-[8px]">DJ</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-white">{entry.name}</p>
                        <p className="text-xs text-zinc-500">{entry.role}</p>
                      </div>
                      {djInfo && (
                        <div className="flex gap-2">
                          {djInfo.social.instagram && (
                            <a
                              href={djInfo.social.instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-zinc-600 hover:text-neon-cyan transition-colors"
                              aria-label={`${entry.name} Instagram`}
                            >
                              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                              </svg>
                            </a>
                          )}
                          {djInfo.social.soundcloud && (
                            <a
                              href={djInfo.social.soundcloud}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-zinc-600 hover:text-neon-cyan transition-colors"
                              aria-label={`${entry.name} SoundCloud`}
                            >
                              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c-.009-.06-.05-.1-.1-.1z" />
                              </svg>
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tickets */}
            {event.tickets.length > 0 && (
              <div>
                <h2 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">
                  Tickets
                </h2>
                <div className="space-y-2">
                  {event.tickets.map((ticket) => (
                    <div
                      key={ticket.type}
                      className="flex items-center justify-between rounded-lg bg-dark-800 border border-white/5 px-5 py-3"
                    >
                      <span className="text-sm text-zinc-300">{ticket.type}</span>
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-bold text-white">
                          &yen;{ticket.price.toLocaleString()}
                        </span>
                        <span
                          className={`text-xs font-semibold px-2 py-1 rounded ${
                            ticket.status === "SOLD OUT"
                              ? "bg-red-500/20 text-red-400"
                              : ticket.status === "ON SALE"
                              ? "bg-green-500/20 text-green-400"
                              : "bg-zinc-700 text-zinc-400"
                          }`}
                        >
                          {ticket.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                {event.ticketUrl && event.status === "upcoming" && (
                  <a
                    href={event.ticketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded bg-gradient-to-r from-neon-cyan to-neon-magenta px-8 py-4 text-base font-bold text-dark-950 hover:opacity-90 transition-opacity"
                  >
                    GET TICKETS
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            )}

            {/* Notes */}
            <div className="rounded-lg bg-dark-800 border border-white/5 p-6">
              <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-3">
                注意事項
              </h2>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li>・20歳未満の方はご入場いただけません。入場時にID確認を行います。</li>
                <li>・お車でのご来場はご遠慮ください。</li>
                <li>・前売り券は完売次第、販売を終了いたします。</li>
                <li>・イベント内容は予告なく変更になる場合がございます。</li>
                <li>・チケットの転売は固くお断りいたします。</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
