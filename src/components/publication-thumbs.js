function Tile({ index, href, title, img }) {
  const label = title ?? `Publication ${index + 1}`;

  const thumbnail = (
    <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-t-2xl bg-gradient-to-br from-nebula/20 via-stellar/10 to-transparent">
      {img ? (
        <img
          src={img}
          alt={label}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <>
          <span className="font-display text-3xl font-bold text-white/25">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="absolute right-3 top-3 inline-block h-1.5 w-1.5 rounded-full bg-star/70" />
        </>
      )}
    </div>
  );

  const titleEl = (
    <p className="px-4 py-3 text-sm font-medium text-muted group-hover:text-ink">
      {label}
    </p>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="card card-link group block">
        {thumbnail}
        {titleEl}
      </a>
    );
  }

  return (
    <div className="card group block">
      {thumbnail}
      {titleEl}
    </div>
  );
}

export default function PublicationThumbs({ count = 8, items, cols }) {
  const entries =
    items ?? Array.from({ length: count }, () => ({ href: undefined }));

  const gridClass =
    cols === 3 ? "grid-cols-3" :
    cols === 2 ? "grid-cols-2" :
    "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4";

  return (
    <div className={`grid gap-4 ${gridClass}`}>
      {entries.map((entry, i) => (
        <Tile key={i} index={i} href={entry.href} title={entry.title} img={entry.img} />
      ))}
    </div>
  );
}
