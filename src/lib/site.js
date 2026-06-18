// Shared site content and external links.

export const ADS_SEARCH =
  "https://ui.adsabs.harvard.edu/search/fq=%7B!type%3Daqp%20v%3D%24fq_database%7D&fq_database=(database%3Aastronomy%20OR%20database%3Aphysics)&q=%20author%3A%22Padoan%2C%20P%22&sort=date%20desc%2C%20bibcode%20desc&p_=0";

export const YOUTUBE_CHANNEL =
  "https://www.youtube.com/@StellarOriginsAstronomyU-ni5yx";

export const EMAIL = "ppadoan@icc.ub.edu";

// Outreach videos featured on the Home and Outreach pages.
export const VIDEOS = [
  { id: "tSf1OpE2kl8", title: "Learn about the origin of stars" },
  { id: "aV0z7NL0rpM", title: "How stars are born" },
  { id: "HYeycRw6rFk", title: "Learn about the life cycle of stars" },
];

// Research areas. The `slug` doubles as the anchor id on the Research page,
// so the Home page panels can deep-link to each section.
export const RESEARCH_AREAS = [
  {
    slug: "star-formation",
    title: "Star Formation",
    blurb:
      "The origin of stars is a fundamental problem of astrophysics. Stars are formed in cold interstellar clouds by the interaction of gravity, magnetic fields, and turbulence. A goal of my research is to explain the origin of their mass and formation rate.",
  },
  {
    slug: "ism-turbulence",
    title: "ISM Turbulence",
    blurb:
      "Because star-forming gas is highly turbulent, the study of star formation involves the study of turbulence as well. I carry out supercomputer simulations of supersonic, self-gravitating, magnetized turbulence to model observed star-forming regions.",
  },
  {
    slug: "planet-formation",
    title: "Planet Formation",
    blurb:
      "Observational evidence shows planet formation occurs rapidly during the earliest phases of circumstellar disk evolution. My research focuses on the study of these early phases of disk evolution, as they define the initial conditions for planet formation. ",
  },
];
