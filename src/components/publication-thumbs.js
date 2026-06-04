// Placeholder publication thumbnails laid out in a responsive grid.
//
// Each tile is an anchor so real publications can be dropped in later by
// giving the matching entry an `href` (and eventually a `title`/`img`).
// Pass `items` to render specific entries, or `count` for blank placeholders.

function Tile({ index, href, title }) {
  const label = title ?? `Publication ${index + 1}`;
  const Wrapper = href ? "a" : "div";
  const wrapperProps = href
    ? { href, target: "_blank", rel: "noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`card group block ${href ? "card-link" : ""}`}
    >
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-t-2xl bg-gradient-to-br from-nebula/20 via-stellar/10 to-transparent">
        {/* Decorative placeholder glyph */}
        <span className="font-display text-3xl font-bold text-white/25">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="absolute right-3 top-3 inline-block h-1.5 w-1.5 rounded-full bg-star/70" />
      </div>
      <p className="truncate px-4 py-3 text-sm font-medium text-muted group-hover:text-ink">
        {label}
      </p>
    </Wrapper>
  );
}

export default function PublicationThumbs({ count = 8, items }) {
  const entries =
    items ?? Array.from({ length: count }, () => ({ href: undefined }));

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {entries.map((entry, i) => (
        <Tile key={i} index={i} href={entry.href} title={entry.title} />
      ))}
    </div>
  );
}
