import type { Metadata } from "next";
import EventCard from "@/components/EventCard";
import SectionHeading from "@/components/SectionHeading";
import { getUpcomingEvents, getPastEvents } from "@/lib/data";

export const metadata: Metadata = {
  title: "Events",
  description: "synapse. のイベント一覧。今後のイベントと過去のアーカイブをチェック。",
};

export default function EventsPage() {
  const upcoming = getUpcomingEvents();
  const past = getPastEvents();

  return (
    <div className="pt-24 pb-20">
      {/* Upcoming Events */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Upcoming"
            title="今後のイベント"
          />
          {upcoming.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcoming.map((event) => (
                <EventCard key={event.slug} event={event} />
              ))}
            </div>
          ) : (
            <p className="text-center text-zinc-500 py-12">
              現在予定されているイベントはありません。
            </p>
          )}
        </div>
      </section>

      {/* Past Events */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 bg-dark-900">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Archive"
            title="過去のイベント"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {past.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
