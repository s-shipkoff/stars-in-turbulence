"use client";

import { useState } from "react";
import Image from "next/image";

const PHOTOS = [
  {
    src: "/about/barcelona2017.jpeg",
    alt: "Barcelona 2017",
    caption:
      "Barcelona 2017, with Bernard Jones",
  },
  {
    src: "/about/cargese2000.jpg",
    alt: "Cargese 2000",
    caption:
      "Cargese 2000, with Fréderique Motte",
  },
  {
    src: "/about/epos2012.jpg",
    alt: "EPOS 2012",
    caption:
      "EPoS 2012, with several colleagues (I normally enjoy Mark's presentations...must have been a bit sleepy)",
  },
  {
    src: "/about/gava2014.JPG",
    alt: "Gava 2014",
    caption:
      "Gava 2014, sunrise",
  },
  {
    src: "/about/ringberg2013.jpg",
    alt: "Ringberg 2013",
    caption:
      "Regulation of Star Formation, Ringberg 2013, with Charlie Lada",
  },
  {
    src: "/about/tuscany2004.JPG",
    alt: "Tuscany 2004",
    caption:
      "IMF@50, Tuscany 2004, with Frank Shu (Salpeter in the background)",
  },
];

export default function AboutCarousel() {
  const [current, setCurrent] = useState(0);
  const count = PHOTOS.length;

  const prev = () => setCurrent((current - 1 + count) % count);
  const next = () => setCurrent((current + 1) % count);

  const leftIdx = (current - 1 + count) % count;
  const rightIdx = (current + 1) % count;

  return (
    <section className="mt-10">
      <div className="relative">
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-nebula bg-space text-white transition-colors hover:bg-nebula"
          aria-label="Previous photo"
        >
          &#8592;
        </button>

        <div className="flex items-center gap-3 px-14">
          <div
            className="min-w-0 flex-[22] cursor-pointer opacity-40 transition-opacity hover:opacity-60"
            onClick={prev}
          >
            <div className="relative h-[320px] w-full overflow-hidden rounded-lg">
              <Image
                src={PHOTOS[leftIdx].src}
                alt={PHOTOS[leftIdx].alt}
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="min-w-0 flex-[56]">
            <div className="relative h-[480px] w-full overflow-hidden rounded-lg shadow-2xl">
              <Image
                src={PHOTOS[current].src}
                alt={PHOTOS[current].alt}
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div
            className="min-w-0 flex-[22] cursor-pointer opacity-40 transition-opacity hover:opacity-60"
            onClick={next}
          >
            <div className="relative h-[320px] w-full overflow-hidden rounded-lg">
              <Image
                src={PHOTOS[rightIdx].src}
                alt={PHOTOS[rightIdx].alt}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-nebula bg-space text-white transition-colors hover:bg-nebula"
          aria-label="Next photo"
        >
          &#8594;
        </button>
      </div>

      <div className="mx-auto mt-4 max-w-xl rounded-xl border border-nebula/40 bg-space-2 px-6 py-4 text-center">
        <p className="text-base leading-relaxed text-ink">
          {PHOTOS[current].caption}
        </p>
      </div>
    </section>
  );
}
