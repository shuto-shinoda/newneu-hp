"use client";

import { useState } from "react";
import type { GalleryItem } from "@/lib/data";

type GalleryProps = {
  items: GalleryItem[];
  limit?: number;
};

export default function Gallery({ items, limit }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const displayItems = limit ? items.slice(0, limit) : items;

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {displayItems.map((item) => (
          <button
            key={item.id}
            className="group relative aspect-square overflow-hidden rounded cursor-pointer"
            onClick={() => setSelectedImage(item)}
            aria-label={`View: ${item.alt}`}
          >
            <div
              className="absolute inset-0 placeholder-img group-hover:scale-110 transition-transform duration-500"
              role="img"
              aria-label={item.alt}
            >
              <span className="text-[10px]">PHOTO</span>
            </div>
            <div className="absolute inset-0 bg-dark-950/0 group-hover:bg-dark-950/40 transition-colors duration-300" />
          </button>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-dark-950/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <button
            className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div
            className="max-w-4xl max-h-[80vh] aspect-video placeholder-img rounded-lg"
            role="img"
            aria-label={selectedImage.alt}
            onClick={(e) => e.stopPropagation()}
          >
            <span>{selectedImage.alt}</span>
          </div>
        </div>
      )}
    </>
  );
}
