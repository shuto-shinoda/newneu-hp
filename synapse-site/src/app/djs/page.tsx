import type { Metadata } from "next";
import DJCard from "@/components/DJCard";
import SectionHeading from "@/components/SectionHeading";
import { getDJs } from "@/lib/data";

export const metadata: Metadata = {
  title: "DJs",
  description: "synapse. に出演するDJ/アーティスト一覧。レジデントDJからゲストまで。",
};

export default function DJsPage() {
  const djs = getDJs();
  const residents = djs.filter((dj) => dj.isResident);
  const guests = djs.filter((dj) => !dj.isResident);

  return (
    <div className="pt-24 pb-20">
      {/* Residents */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Resident DJs"
            title="レジデント"
            description="synapse. のサウンドを形作るコアメンバー"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {residents.map((dj) => (
              <DJCard key={dj.slug} dj={dj} showBio />
            ))}
          </div>
        </div>
      </section>

      {/* Guests */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 bg-dark-900">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Guest DJs"
            title="ゲスト"
            description="synapse. に出演したゲストアーティスト"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {guests.map((dj) => (
              <DJCard key={dj.slug} dj={dj} showBio />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
