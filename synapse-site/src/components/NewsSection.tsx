import Link from "next/link";
import type { NewsItem } from "@/lib/data";

type NewsSectionProps = {
  items: NewsItem[];
};

export default function NewsSection({ items }: NewsSectionProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <Link
          key={item.id}
          href={item.link}
          className="group block rounded-lg bg-dark-800 border border-white/5 hover:border-neon-cyan/20 p-5 transition-all duration-300"
        >
          <p className="text-xs text-neon-cyan font-medium tracking-wider mb-1">
            {item.date}
          </p>
          <h3 className="text-base font-semibold text-zinc-200 group-hover:text-white transition-colors">
            {item.title}
          </h3>
          <p className="mt-1 text-sm text-zinc-500">
            {item.excerpt}
          </p>
        </Link>
      ))}
    </div>
  );
}
