import Image from "next/image";
import AboutCarousel from "@/components/about-carousel";

export const metadata = {
  title: "About — Paolo Padoan",
  description:
    "I am an astrophysicist studying how stars form in the turbulent, magnetized interstellar medium.",
};

function BulletList({ items }) {
  return (
    <ul className="space-y-2 pl-1 mt-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-1 shrink-0 text-stellar">—</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function About() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <header className="text-center">
        <h1 className="font-display text-4xl font-bold text-white">
          About Me
        </h1>
      </header>

      {/* Image + bio */}
      <div className="ml-5 mt-10 flex flex-col gap-8 md:flex-row md:items-start md:gap-10 mr-5">
        <div className="flex-shrink-0">
          <Image
            src="/about/large_image.png"
            alt="Paolo Padoan"
            width={280}
            height={360}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="text-base leading-relaxed text-muted mt-4">
          <p>
            I am Paolo Padoan, an astrophysicist studying how stars form in
            the turbulent, magnetized interstellar medium. My work combines
            theory and large-scale numerical simulations to connect the physics
            of supersonic turbulence and gravity to the properties of
            star-forming clouds, stellar clusters, and the stellar initial mass
            function.
          </p>
          <div className="mt-6">
            <h2 className="font-display text-lg font-semibold text-white">
              Research Interests
            </h2>
            <BulletList
              items={[
                "Star formation and molecular clouds",
                "Interstellar turbulence and magnetic fields",
                "Stellar clusters and the stellar initial mass function",
              ]}
            />
          </div>
        </div>
      </div>

      <div className="mt-14 space-y-6">
        {/* Academic Background */}
        <section className="card p-7 sm:p-9">
          <h2 className="font-display text-2xl font-bold">
            Academic Background
          </h2>
          <div className="mt-4 space-y-3 text-muted">
            <div className="flex items-baseline justify-between gap-4">
              <span>PhD in Astrophysics, Niels Bohr Institute, University of Copenhagen</span>
              <span className="flex-shrink-0 text-muted">1997</span>
            </div>
            <div className="flex items-baseline justify-between gap-4">
              <span>Degree in Astronomy, Università degli Studi di Padova</span>
              <span className="flex-shrink-0 text-muted">1992</span>
            </div>
          </div>
        </section>

        {/* Postdoctoral Fellowships */}
        <section className="card p-7 sm:p-9">
          <h2 className="font-display text-2xl font-bold">
            Postdoctoral Fellowships
          </h2>
          <div className="mt-4 space-y-3 text-muted">
            <div className="flex items-baseline justify-between gap-4">
              <span>National Research Council Associate, JPL, NASA/Caltech</span>
              <span className="flex-shrink-0 text-muted">2001–2003</span>
            </div>
            <div className="flex items-baseline justify-between gap-4">
              <span>Postdoctoral Fellow, Harvard University</span>
              <span className="flex-shrink-0 text-muted">1999–2001</span>
            </div>
            <div className="flex items-baseline justify-between gap-4">
              <span>CONACYT Fellow, INAOE, Puebla, Mexico</span>
              <span className="flex-shrink-0 text-muted">1998–1999</span>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="card p-7 sm:p-9">
          <h2 className="font-display text-2xl font-bold">
            Professional Experience
          </h2>
          <div className="mt-4 space-y-3 text-muted">
            <div className="flex items-baseline justify-between gap-4">
              <span>Research Professor at Dartmouth College</span>
              <span className="flex-shrink-0 text-muted">2024–Present</span>
            </div>
            <div className="flex items-baseline justify-between gap-4">
              <span>ICREA Research Professor at the University of Barcelona</span>
              <span className="flex-shrink-0 text-muted">2010–Present</span>
            </div>
            <div className="flex items-baseline justify-between gap-4">
              <span>Associate Professor (tenured) at the University of California, San Diego</span>
              <span className="flex-shrink-0 text-muted">2007–2010</span>
            </div>
            <div className="flex items-baseline justify-between gap-4">
              <span>Assistant Professor at the University of California, San Diego</span>
              <span className="flex-shrink-0 text-muted">2003–2007</span>
            </div>
          </div>
        </section>
      </div>

      <AboutCarousel />
    </main>
  );
}
