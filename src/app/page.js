import Link from "next/link";
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
    <main className="mx-auto max-w-6xl px-6">
      {/* Hero: intro text (left) | research entry points (right) */}
      <section className="grid items-start gap-12 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-stellar">
            Stars In Turbulence
          </p>
          <h1 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
            <span className="text-gradient">The origin of stars</span>
          </h1>
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
          <h2 className="font-display text-2xl font-bold">Research</h2>
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
          A selection of recent publications. Browse the full, up-to-date list
          on NASA ADS.
        </p>
        <PublicationThumbs count={8} />
      </section>

      {/* Outreach */}
      <section className="py-12">
        <SectionHeading href={YOUTUBE_CHANNEL}>Outreach</SectionHeading>
        <p className="mb-8 max-w-2xl text-sm text-muted">
          Short, visual explanations of how stars are born in turbulent
          interstellar clouds. Watch more on the Stellar Origins channel.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {VIDEOS.map((video) => (
            <YouTubeEmbed key={video.id} id={video.id} title={video.title} />
          ))}
        </div>
      </section>
    </main>
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
