import Link from "next/link";
import { ADS_SEARCH, YOUTUBE_CHANNEL, EMAIL } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-base font-semibold">Paolo Padoan</p>
            <p className="mt-1 text-sm text-muted">
              Department of Physics &amp; Astronomy, Dartmouth College
            </p>
            <p className="mt-1 text-sm text-muted">
              Institute of Cosmos Sciences, University of Barcelona
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            <Link href="/research" className="hover:text-ink">
              Research
            </Link>
            <Link href="/ormas" className="hover:text-ink">
              ORMAS
            </Link>
            <a href={ADS_SEARCH} className="hover:text-ink">
              Publications
            </a>
            <a href={YOUTUBE_CHANNEL} className="hover:text-ink">
              YouTube
            </a>
            <a href={`mailto:${EMAIL}`} className="hover:text-ink">
              Contact
            </a>
          </div>
        </div>
        <p className="mt-8 text-xs text-muted/70">
          © {new Date().getFullYear()} Paolo Padoan.
        </p>
      </div>
    </footer>
  );
}
