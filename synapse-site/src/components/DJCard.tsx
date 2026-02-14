import type { DJ } from "@/lib/data";

type DJCardProps = {
  dj: DJ;
  showBio?: boolean;
};

export default function DJCard({ dj, showBio = false }: DJCardProps) {
  return (
    <div className="group rounded-lg overflow-hidden bg-dark-800 border border-white/5 hover:border-neon-purple/30 transition-all duration-300">
      {/* Photo */}
      <div className="relative aspect-square overflow-hidden">
        <div
          className="absolute inset-0 placeholder-img group-hover:scale-105 transition-transform duration-500"
          role="img"
          aria-label={`${dj.name} photo`}
        >
          <span className="text-xs">PHOTO</span>
        </div>
        {/* Role badge */}
        {dj.isResident && (
          <div className="absolute top-3 right-3">
            <span className="inline-block px-2 py-1 text-[10px] font-semibold tracking-wider rounded bg-neon-purple/20 text-neon-purple border border-neon-purple/30">
              RESIDENT
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-white group-hover:text-neon-purple transition-colors">
          {dj.name}
        </h3>
        <p className="mt-1 text-xs text-zinc-500 tracking-wider">
          {dj.genre.join(" / ")}
        </p>

        {showBio && (
          <p className="mt-3 text-sm text-zinc-400 leading-relaxed line-clamp-3">
            {dj.bio}
          </p>
        )}

        {/* Social links */}
        <div className="mt-4 flex gap-3">
          {dj.social.instagram && (
            <a
              href={dj.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-neon-cyan transition-colors"
              aria-label={`${dj.name} Instagram`}
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          )}
          {dj.social.twitter && (
            <a
              href={dj.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-neon-cyan transition-colors"
              aria-label={`${dj.name} X (Twitter)`}
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          )}
          {dj.social.soundcloud && (
            <a
              href={dj.social.soundcloud}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-neon-cyan transition-colors"
              aria-label={`${dj.name} SoundCloud`}
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c-.009-.06-.05-.1-.1-.1zm-.899.828c-.06 0-.091.037-.104.094L0 14.479l.172 1.282c.013.06.045.094.104.094.057 0 .09-.035.104-.094l.2-1.282-.2-1.332c-.014-.057-.047-.094-.104-.094zm1.788-1.136c-.065 0-.11.05-.116.11l-.213 2.451.213 2.36c.006.06.051.11.116.11.063 0 .11-.05.115-.11l.24-2.36-.24-2.451c-.005-.06-.052-.11-.115-.11zm.899-.418c-.074 0-.126.057-.131.126l-.193 2.985.193 2.88c.005.07.057.125.131.125.07 0 .125-.055.129-.125l.218-2.88-.218-2.985c-.004-.07-.059-.126-.129-.126zm.899-.247c-.08 0-.138.064-.142.14l-.173 3.35.173 3.27c.004.076.062.14.142.14.078 0 .138-.064.14-.14l.195-3.27-.195-3.35c-.002-.076-.062-.14-.14-.14zm.901-.186c-.09 0-.148.07-.153.155l-.152 3.655.152 3.55c.005.085.063.155.153.155.088 0 .148-.07.152-.155l.173-3.55-.173-3.655c-.004-.085-.064-.155-.152-.155zm.899-.115c-.099 0-.164.078-.167.17l-.131 3.886.131 3.716c.003.093.068.17.167.17.096 0 .164-.077.166-.17l.15-3.716-.15-3.886c-.002-.092-.07-.17-.166-.17zm.901-.03c-.104 0-.176.085-.178.185l-.111 4.031.111 3.83c.002.1.074.185.178.185.103 0 .176-.085.178-.185l.125-3.83-.125-4.031c-.002-.1-.075-.185-.178-.185zm.9.042c-.112 0-.187.091-.189.198l-.091 3.904.091 3.906c.002.107.077.198.189.198.11 0 .187-.091.189-.198l.103-3.906-.103-3.904c-.002-.107-.079-.198-.189-.198zm.898.12c-.12 0-.199.098-.2.212l-.071 3.782.071 3.836c.001.114.08.212.2.212.118 0 .199-.098.2-.212l.081-3.836-.081-3.782c-.001-.114-.082-.212-.2-.212zm2.707-1.535c-.285 0-.555.055-.81.156a4.708 4.708 0 00-4.425-3.116c-.348 0-.694.044-1.026.13-.121.033-.162.068-.164.133v7.842c.002.068.051.126.118.135h6.307A2.86 2.86 0 0024 14.324a2.86 2.86 0 00-2.83-2.876z" />
              </svg>
            </a>
          )}
          {dj.social.mixcloud && (
            <a
              href={dj.social.mixcloud}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-neon-cyan transition-colors"
              aria-label={`${dj.name} Mixcloud`}
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.462 8.596C1.102 8.596 0 9.69 0 11.049v1.903c0 1.358 1.102 2.452 2.462 2.452s2.461-1.094 2.461-2.452V11.05c0-1.358-1.101-2.453-2.461-2.453zm8.923 0c-1.36 0-2.462 1.094-2.462 2.453v1.903c0 1.358 1.102 2.452 2.462 2.452.694 0 1.32-.288 1.768-.75l.004.003.93-.929.002-.003c.335-.335.798-.542 1.311-.542.513 0 .976.207 1.313.544l.928.928.004.003c.447.46 1.072.746 1.764.746 1.36 0 2.462-1.094 2.462-2.452V11.05c0-1.358-1.102-2.453-2.462-2.453-.694 0-1.32.288-1.768.75l-.004-.003-.928.929-.004.003a1.852 1.852 0 01-1.311.542c-.513 0-.976-.207-1.313-.544l-.928-.928-.004-.003a2.451 2.451 0 00-1.764-.746z" />
              </svg>
            </a>
          )}
        </div>

        {/* SoundCloud/Mixcloud embed placeholder */}
        {(dj.social.soundcloud || dj.social.mixcloud) && showBio && (
          <div className="mt-4 p-3 rounded bg-dark-700 border border-white/5 text-center">
            <p className="text-xs text-zinc-600">
              Embed Player Placeholder
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
