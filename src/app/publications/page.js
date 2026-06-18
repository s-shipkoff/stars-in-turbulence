import PublicationThumbs from "@/components/publication-thumbs";
import { ADS_SEARCH } from "@/lib/site";

export const metadata = {
  title: "Publications — Paolo Padoan",
  description:
    "View my research publications.",
};

export default function Publications() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <header className="mb-8 text-center">
        <h1 className="font-display text-4xl font-bold text-white">
          Publications
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted">
          A selection of papers. To see the complete list, click the link below.
        </p>
      </header>

      <div className="mt-4 mb-12 text-center">
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
        {
          img: "/thumbnail/2023-07.png",
          href: "https://ui.adsabs.harvard.edu/abs/2023MNRAS.522.3548P/abstract",
          title: "Will ALMA reveal the true core mass function of protoclusters?",
        },
        {
          img: "/thumbnail/2021-06.png",
          href: "https://ui.adsabs.harvard.edu/abs/2021MNRAS.504.1219P/abstract",
          title: "From the CMF to the IMF: beyond the core-collapse model",
        },
        {
          img: "/thumbnail/2020-09.png",
          href: "https://ui.adsabs.harvard.edu/abs/2020ApJ...900...82P/abstract",
          title: "The Origin of Massive Stars: The Inertial-inflow Model",
        },
        {
          img: "/thumbnail/2018-02.png",
          href: "https://ui.adsabs.harvard.edu/abs/2018ApJ...854...35H/abstract",
          title: "The Stellar IMF from Isothermal MHD Turbulence",
        },
        {
          img: "/thumbnail/2017-05.png",
          href: "https://ui.adsabs.harvard.edu/abs/2017ApJ...840...48P/abstract",
          title: "Supernova Driving. IV. The Star-formation Rate of Molecular Clouds",
        },
        {
          img: "/thumbnail/2016-05.png",
          href: "https://ui.adsabs.harvard.edu/abs/2016ApJ...822...11P/abstract",
          title: "Supernova Driving. I. The Origin of Molecular Cloud Turbulence",
        },
        {
          img: "/thumbnail/2014-12.png",
          href: "https://ui.adsabs.harvard.edu/abs/2014ApJ...797...32P/abstract",
          title: "Infall-driven Protostellar Accretion and the Solution to the Luminosity Problem",
        },
        {
          img: "/thumbnail/2014-01.png",
          href: "https://ui.adsabs.harvard.edu/abs/2014prpl.conf...77P/abstract",
          title: "The Star Formation Rate of Molecular Clouds",
        },
        {
          img: "/thumbnail/2012-11.png",
          href: "https://ui.adsabs.harvard.edu/abs/2012ApJ...759L..27P/abstract",
          title: "A Simple Law of Star Formation",
        },
        {
          img: "/thumbnail/2011-10.png",
          href: "https://ui.adsabs.harvard.edu/abs/2011ApJ...740....6P/abstract",
          title: "Turbulent Clustering of Protoplanetary Dust and Planetesimal Formation",
        },
        {
          img: "/thumbnail/2011-03.png",
          href: "https://ui.adsabs.harvard.edu/abs/2011ApJ...730...40P/abstract",
          title: "The Star Formation Rate of Supersonic Magnetohydrodynamic Turbulence",
        },
        {
          img: "/thumbnail/2007-08.png",
          href: "https://ui.adsabs.harvard.edu/abs/2007ApJ...665..416K/abstract",
          title: "The Statistics of Supersonic Isothermal Turbulence",
        },
        {
          img: "/thumbnail/2005-03.png",
          href: "https://ui.adsabs.harvard.edu/abs/2005ApJ...622L..61P/abstract",
          title: "A Solution to the Pre-Main-Sequence Accretion Problem",
        },
        {
          img: "/thumbnail/2004-12.png",
          href: "https://ui.adsabs.harvard.edu/abs/2004ApJ...617..559P/abstract",
          title: 'The "Mysterious" Origin of Brown Dwarfs',
        },
        {
          img: "/thumbnail/2002-09.png",
          href: "https://ui.adsabs.harvard.edu/abs/2002ApJ...576..870P/abstract",
          title: "The Stellar Initial Mass Function from Turbulent Fragmentation",
        },
        {
          img: "/thumbnail/2002-07.png",
          href: "https://ui.adsabs.harvard.edu/abs/2002PhRvL..89c1102B/abstract",
          title: "Supersonic Turbulence and Structure of Interstellar Molecular Clouds",
        },
        {
          img: "/thumbnail/2002-07-2.png",
          href: "https://ui.adsabs.harvard.edu/abs/2002ApJ...573..678B/abstract",
          title: "Scaling Relations of Supersonic Turbulence in Star-forming Molecular Clouds",
        },
        {
          img: "/thumbnail/2001-05.png",
          href: "https://ui.adsabs.harvard.edu/abs/2001ApJ...553..227P/abstract",
          title: "The Turbulent Shock Origin of Proto-Stellar Cores",
        },
        {
          img: "/thumbnail/1999-11.png",
          href: "https://ui.adsabs.harvard.edu/abs/1999ApJ...526..279P/abstract",
          title: "A Super-Alfvénic Model of Dark Clouds",
        },
        {
          img: "/thumbnail/1999-01.png",
          href: "https://ui.adsabs.harvard.edu/abs/1999intu.conf..218N/abstract",
          title: "The Density PDFs of Supersonic Random Flows",
        },
      ]} />
    </main>
  );
}
