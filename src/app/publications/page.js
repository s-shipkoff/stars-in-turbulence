import PublicationThumbs from "@/components/publication-thumbs";
import { ADS_SEARCH } from "@/lib/site";

export const metadata = {
  title: "Publications — Paolo Padoan",
  description:
    "Selected publications by Paolo Padoan. Browse the complete list on NASA ADS.",
};

export default function Publications() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <header className="mb-12 text-center">
        <h1 className="font-display text-4xl font-bold">
          <span className="text-gradient">Publications</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted">
          A selection of papers on supersonic turbulence, the interstellar
          medium, and star and planet formation.
        </p>
      </header>

      <PublicationThumbs count={18} />

      <div className="mt-12 text-center">
        <a
          href={ADS_SEARCH}
          target="_blank"
          rel="noreferrer"
          className="card card-link inline-flex items-center gap-2 bg-gradient-to-r from-nebula/20 to-stellar/10 px-6 py-3 font-display font-semibold"
        >
          All Publications
          <span className="text-stellar">↗</span>
        </a>
      </div>
    </main>
  );
}
