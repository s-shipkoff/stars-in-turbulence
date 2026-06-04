// Shared site content and external links.

export const ADS_SEARCH =
  "https://ui.adsabs.harvard.edu/search/fq=%7B!type%3Daqp%20v%3D%24fq_database%7D&fq_database=(database%3Aastronomy%20OR%20database%3Aphysics)&q=%20author%3A%22Padoan%2C%20P%22&sort=date%20desc%2C%20bibcode%20desc&p_=0";

export const YOUTUBE_CHANNEL =
  "https://www.youtube.com/@StellarOriginsAstronomyU-ni5yx";

export const EMAIL = "ppadoan@icc.ub.edu";

// Outreach videos featured on the Home and Outreach pages.
export const VIDEOS = [
  { id: "tSf1OpE2kl8", title: "Stellar Origins — How stars are born" },
  { id: "aV0z7NL0rpM", title: "Turbulence in the interstellar medium" },
  { id: "HYeycRw6rFk", title: "From clouds to stars and planets" },
];

// Research areas. The `slug` doubles as the anchor id on the Research page,
// so the Home page panels can deep-link to each section.
export const RESEARCH_AREAS = [
  {
    slug: "star-formation",
    title: "Star Formation",
    blurb:
      "How turbulence and gravity concentrate gas into filaments, hubs, and collapsing regions; when and where collapse begins; and how gas is transported to forming stars.",
  },
  {
    slug: "ism-turbulence",
    title: "ISM Turbulence",
    blurb:
      "The structure and statistics of supersonic turbulence, the role of magnetic fields, and how turbulent flows regulate density fluctuations, fragmentation, and star-formation efficiency.",
  },
  {
    slug: "planet-formation",
    title: "Planet Formation",
    blurb:
      "How protoplanetary disks are assembled and sustained around young stars; whether they are finite remnants of core collapse or are continually fed by accretion from the surrounding cloud; how mass and angular momentum are delivered, redistributed, and lost; and how disk structure, turbulence, magnetic fields, and inflow regulate fragmentation, dust growth, and the efficiency and timescale of planet formation.",
  },
];
