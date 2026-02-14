import type { Metadata } from "next";
import DJCard from "@/components/DJCard";
import SectionHeading from "@/components/SectionHeading";
import { getSiteData, getResidentDJs } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: "synapse. のコンセプト、ミッション、そして私たちについて。",
};

export default function AboutPage() {
  const site = getSiteData();
  const residents = getResidentDJs();

  return (
    <div className="pt-24 pb-20">
      {/* Concept */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-neon-cyan mb-6">
            About
          </p>
          <h1 className="text-5xl sm:text-7xl font-black text-white tracking-tight mb-8">
            synapse<span className="text-neon-cyan">.</span>
          </h1>
          <p className="text-lg text-zinc-300 leading-relaxed mb-6">
            {site.tagline}
          </p>
          <div className="h-px w-16 mx-auto bg-gradient-to-r from-neon-cyan to-neon-magenta mb-8" />
          <p className="text-base text-zinc-400 leading-relaxed">
            {site.about.concept}
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-dark-900">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            label="Mission"
            title="ミッション"
          />
          <p className="text-center text-zinc-400 leading-relaxed">
            {site.about.mission}
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="rounded-lg bg-dark-800 border border-white/5 p-6 text-center">
              <p className="text-3xl font-black text-neon-cyan">4+</p>
              <p className="mt-1 text-sm text-zinc-500">Events</p>
            </div>
            <div className="rounded-lg bg-dark-800 border border-white/5 p-6 text-center">
              <p className="text-3xl font-black text-neon-magenta">7+</p>
              <p className="mt-1 text-sm text-zinc-500">Artists</p>
            </div>
            <div className="rounded-lg bg-dark-800 border border-white/5 p-6 text-center">
              <p className="text-3xl font-black text-neon-purple">2024</p>
              <p className="mt-1 text-sm text-zinc-500">Founded</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resident DJs */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Residents"
            title="レジデントDJ"
            description="synapse. のサウンドを支えるコアメンバー"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {residents.map((dj) => (
              <DJCard key={dj.slug} dj={dj} showBio />
            ))}
          </div>
        </div>
      </section>

      {/* Organizer */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-dark-900">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            label="Organizer"
            title="主催"
          />
          <div className="rounded-lg bg-dark-800 border border-white/5 p-8">
            <h3 className="text-2xl font-bold text-white">{site.about.organizer}</h3>
            <p className="mt-3 text-sm text-zinc-500 leading-relaxed">
              東京を拠点に、クラブイベント「synapse.」を主催。テクノ・ハウスミュージックの魅力を、
              高品質なサウンドと空間演出を通じて発信する。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
