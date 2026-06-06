// Lightweight in-page YouTube player. Pass a video `id` and a `title`.
export default function YouTubeEmbed({ id, title }) {
  return (
    <div className="card overflow-hidden">
      <div className="relative aspect-video">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      {/* title && (
        <p className="px-4 py-3 text-sm font-medium text-muted">{title}</p>
      ) */}
      {/* title -> short description below the video, can add later if necessary */}
    </div>
  );
}
