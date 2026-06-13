import Link from "next/link";
import HeroBanner from "@/components/hero-banner";
import YouTubeEmbed from "@/components/youtube-embed";
import PublicationThumbs from "@/components/publication-thumbs";
import {
  ADS_SEARCH,
  YOUTUBE_CHANNEL,
  VIDEOS,
  RESEARCH_AREAS,
} from "@/lib/site";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <main className="mx-auto max-w-6xl px-6">
      {/* Hero: intro text (left) | research entry points (right) */}
      <section className="grid items-start gap-12 py-12 md:grid-cols-2 md:py-24">
        <div>
          <h1 className="mb-3 font-display text-4xl font-bold leading-tight sm:text-5xl text-white">
            Paolo Padoan
          </h1>
          <p className="ml-0.5 text-sm font-semibold uppercase tracking-[0.2em] text-stellar">
            Stars in Turbulence
          </p>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
            <p>
              A major goal of my research is to understand the origin of stars.
              Star formation is a central problem in galaxy evolution and
              cosmology. Stars are a dominant energy source to the interstellar
              medium of galaxies and control their chemical enrichment; the
              first massive stars in the universe contributed to its
              re-ionization.
            </p>
            <p>
              Because star-forming gas is highly turbulent, understanding star
              formation requires understanding supersonic, self-gravitating,
              magnetized turbulence. I use large-scale numerical simulations to
              connect the physics of turbulent flows to the properties of
              star-forming regions and young stellar populations.
            </p>
          </div>
        </div>

        <div>
          <h2 className="mt-5 font-display text-2xl font-bold">My Research</h2>
          <div className="mt-5 space-y-3">
            {RESEARCH_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/research#${area.slug}`}
                className="card card-link group flex items-center justify-between gap-4 px-5 py-4"
              >
                <span className="font-display text-lg font-semibold">
                  {area.title}
                </span>
                <span className="text-stellar transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            ))}
          </div>

          <Link
            href="/ormas"
            className="card card-link group mt-4 flex items-center justify-between gap-4 bg-gradient-to-r from-nebula/20 to-stellar/10 px-5 py-4"
          >
            <span>
              <span className="block font-display text-lg font-semibold">
                ORMAS
              </span>
              <span className="text-sm text-muted">
                The Origin of Massive Stars · NSF AST-2408023
              </span>
            </span>
            <span className="text-star transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </section>

      {/* Recent Work */}
      <section className="anchor py-12">
        <SectionHeading href={ADS_SEARCH}>Recent Work</SectionHeading>
        <p className="mb-8 max-w-2xl text-sm text-muted">
          A list of recent publications. Browse the full list
          on ADS.
        </p>
        <PublicationThumbs items={[
          {
            img: "/thumbnail/2026-06v2.png",
            href: "https://ui.adsabs.harvard.edu/abs/2026ApJ..1003L..38P/abstract",
            title: "Compact H II Regions as Clocks of Massive-star Formation: Evidence for Long Formation Timescales",
          },
          {
            img: "/thumbnail/2025-11v2.png",
            href: "https://ui.adsabs.harvard.edu/abs/2025MNRAS.544..483G/abstract",
            title: "Globular cluster formation from inertial inflows: accreting extremely massive stars as the origin of abundance anomalies",
          },
          {
            img: "/thumbnail/2025-06.png",
            href: "https://ui.adsabs.harvard.edu/abs/2025NatAs...9..862P/abstract",
            title: "The formation of protoplanetary disks through pre-main-sequence Bondi-Hoyle accretion",
          },
          {
            img: "/thumbnail/2026-04.png",
            href: "https://ui.adsabs.harvard.edu/abs/2026arXiv260404501Z/abstract",
            title: "Random gas motions inside sub-parsec scale supercritical filaments",
          },
        ]} />
      </section>

      {/* Outreach */}
      <section className="py-12">
        <SectionHeading href={YOUTUBE_CHANNEL}>Outreach</SectionHeading>
        <p className="mb-8 max-w-2xl text-sm text-muted">
          Short, visual lessons about stars.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {VIDEOS.map((video) => (
            <YouTubeEmbed key={video.id} id={video.id} title={video.title} />
          ))}
        </div>
      </section>
      </main>
    </>
  );
}

// Left-aligned section header whose text links out to an external resource.
function SectionHeading({ href, children }) {
  return (
    <h2 className="mb-2 font-display text-2xl font-bold">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="group inline-flex items-center gap-2 hover:text-stellar"
      >
        {children}
        <span className="text-base text-muted transition-transform group-hover:translate-x-1 group-hover:text-stellar">
          ↗
        </span>
      </a>
    </h2>
  );
}
