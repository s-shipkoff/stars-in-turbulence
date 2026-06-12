"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const IMAGES = [
  { src: "/hero-images/cosmic_cliffs.png",          alt: "Cosmic Cliffs" },
  { src: "/hero-images/crab_nebula2.jpg",           alt: "Crab Nebula" },
  { src: "/hero-images/helix_nebula.jpg",           alt: "Helix Nebula" },
  { src: "/hero-images/messier58.jpg",              alt: "Messier 58" },
  { src: "/hero-images/ngc3627.jpg",                alt: "NGC 3627" },
  { src: "/hero-images/ngc4254.png",                alt: "NGC 4254" },
  { src: "/hero-images/ngc4449.jpg",                alt: "NGC 4449" },
  { src: "/hero-images/ngc602.jpg",                 alt: "NGC 602" },
  { src: "/hero-images/ngc604.jpg",                 alt: "NGC 604" },
  { src: "/hero-images/pillars_of_creation2.png",   alt: "Pillars of Creation" },
  { src: "/hero-images/rho_ophiuchi.jpg",           alt: "Rho Ophiuchi" },
  { src: "/hero-images/sagittarius.jpg",            alt: "Sagittarius" },
  { src: "/hero-images/serpens_nebula.png",          alt: "Serpen's Nebula" },
];

export default function HeroBanner() {
  const [img, setImg] = useState(null);

  useEffect(() => {
    setImg(IMAGES[Math.floor(Math.random() * IMAGES.length)]);
  }, []);

  return (
    <div className="relative h-56 sm:h-72 md:h-80 overflow-hidden">
      {img && (
        <Image
          src={img.src}
          alt={img.alt}
          fill
          className="object-cover object-center"
          priority
        />
      )}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-space" />
    </div>
  );
}
