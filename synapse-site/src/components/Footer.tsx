import Link from "next/link";
import { getSiteData } from "@/lib/data";

export default function Footer() {
  const site = getSiteData();

  return (
    <footer className="bg-dark-900 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-bold tracking-wider text-white">
              synapse<span className="text-neon-cyan">.</span>
            </Link>
            <p className="mt-3 text-sm text-zinc-500 leading-relaxed">
              {site.tagline}
            </p>
            <div className="mt-4 flex gap-4">
              {site.social.instagram && (
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-neon-cyan transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              )}
              {site.social.twitter && (
                <a
                  href={site.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-neon-cyan transition-colors"
                  aria-label="X (Twitter)"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              )}
              {site.social.soundcloud && (
                <a
                  href={site.social.soundcloud}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-neon-cyan transition-colors"
                  aria-label="SoundCloud"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c-.009-.06-.05-.1-.1-.1zm-.899.828c-.06 0-.091.037-.104.094L0 14.479l.172 1.282c.013.06.045.094.104.094.057 0 .09-.035.104-.094l.2-1.282-.2-1.332c-.014-.057-.047-.094-.104-.094zm1.788-1.136c-.065 0-.11.05-.116.11l-.213 2.451.213 2.36c.006.06.051.11.116.11.063 0 .11-.05.115-.11l.24-2.36-.24-2.451c-.005-.06-.052-.11-.115-.11zm.899-.418c-.074 0-.126.057-.131.126l-.193 2.985.193 2.88c.005.07.057.125.131.125.07 0 .125-.055.129-.125l.218-2.88-.218-2.985c-.004-.07-.059-.126-.129-.126zm.899-.247c-.08 0-.138.064-.142.14l-.173 3.35.173 3.27c.004.076.062.14.142.14.078 0 .138-.064.14-.14l.195-3.27-.195-3.35c-.002-.076-.062-.14-.14-.14zm.901-.186c-.09 0-.148.07-.153.155l-.152 3.655.152 3.55c.005.085.063.155.153.155.088 0 .148-.07.152-.155l.173-3.55-.173-3.655c-.004-.085-.064-.155-.152-.155zm.899-.115c-.099 0-.164.078-.167.17l-.131 3.886.131 3.716c.003.093.068.17.167.17.096 0 .164-.077.166-.17l.15-3.716-.15-3.886c-.002-.092-.07-.17-.166-.17zm.901-.03c-.104 0-.176.085-.178.185l-.111 4.031.111 3.83c.002.1.074.185.178.185.103 0 .176-.085.178-.185l.125-3.83-.125-4.031c-.002-.1-.075-.185-.178-.185zm.9.042c-.112 0-.187.091-.189.198l-.091 3.904.091 3.906c.002.107.077.198.189.198.11 0 .187-.091.189-.198l.103-3.906-.103-3.904c-.002-.107-.079-.198-.189-.198zm.898.12c-.12 0-.199.098-.2.212l-.071 3.782.071 3.836c.001.114.08.212.2.212.118 0 .199-.098.2-.212l.081-3.836-.081-3.782c-.001-.114-.082-.212-.2-.212zm2.707-1.535c-.285 0-.555.055-.81.156a4.708 4.708 0 00-4.425-3.116c-.348 0-.694.044-1.026.13-.121.033-.162.068-.164.133v7.842c.002.068.051.126.118.135h6.307A2.86 2.86 0 0024 14.324a2.86 2.86 0 00-2.83-2.876z" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Events", href: "/events" },
                { label: "DJs", href: "/djs" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-500 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 mb-4">
              Contact
            </h3>
            <a
              href={`mailto:${site.contact.email}`}
              className="text-sm text-zinc-500 hover:text-neon-cyan transition-colors"
            >
              {site.contact.email}
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} synapse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
