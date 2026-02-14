import Link from "next/link";
import Hero from "@/components/Hero";
import EventCard from "@/components/EventCard";
import DJCard from "@/components/DJCard";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import NewsSection from "@/components/NewsSection";
import SectionHeading from "@/components/SectionHeading";
import {
  getFeaturedEvent,
  getEvents,
  getDJs,
  getGallery,
  getFAQ,
  getNews,
} from "@/lib/data";

export default function HomePage() {
  const featuredEvent = getFeaturedEvent();
  const events = getEvents();
  const djs = getDJs();
  const gallery = getGallery();
  const faq = getFAQ();
  const news = getNews();

  return (
    <>
      {/* Hero Section */}
      {featuredEvent && <Hero event={featuredEvent} />}

      {/* Lineup Section */}
      {featuredEvent && (
        <section className="py-20 px-4 sm:px-6 lg:px-8" id="lineup">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              label="Lineup"
              title="出演アーティスト"
              description={`${featuredEvent.title} のラインナップ`}
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {featuredEvent.lineup.map((entry) => {
                const djData = djs.find((d) => d.slug === entry.djSlug);
                if (!djData) return null;
                return <DJCard key={djData.slug} dj={djData} />;
              })}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/djs"
                className="text-sm text-zinc-400 hover:text-neon-cyan transition-colors underline underline-offset-4"
              >
                View All DJs
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Events Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-900" id="events">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Events"
            title="イベント"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/events"
              className="text-sm text-zinc-400 hover:text-neon-cyan transition-colors underline underline-offset-4"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="gallery">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Gallery"
            title="ギャラリー"
            description="過去イベントのフォトアーカイブ"
          />
          <Gallery items={gallery} limit={8} />
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-900" id="news">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="News"
            title="ニュース"
          />
          <div className="mx-auto max-w-3xl">
            <NewsSection items={news} />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="faq">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            label="FAQ"
            title="よくある質問"
          />
          <FAQ items={faq} />
        </div>
      </section>

      {/* Access Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-900" id="access">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            label="Access"
            title="会場アクセス"
          />
          <div className="rounded-lg bg-dark-800 border border-white/5 p-8">
            <h3 className="text-xl font-bold text-white">WOMB</h3>
            <p className="mt-2 text-sm text-zinc-400">
              〒150-0044 東京都渋谷区円山町2-16
            </p>
            <p className="mt-1 text-sm text-zinc-500">
              JR渋谷駅 ハチ公口より徒歩約10分 / 京王井の頭線 神泉駅より徒歩約5分
            </p>
            <div className="mt-6">
              <a
                href="https://maps.google.com/?q=WOMB+Shibuya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-neon-cyan hover:underline"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Google Maps で開く
              </a>
            </div>
            {/* Map embed placeholder */}
            <div className="mt-6 aspect-video rounded bg-dark-700 placeholder-img">
              <span className="text-zinc-600 text-sm">MAP EMBED</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
