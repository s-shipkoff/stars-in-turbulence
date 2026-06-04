import YouTubeEmbed from "@/components/youtube-embed";
import { VIDEOS, YOUTUBE_CHANNEL } from "@/lib/site";

export const metadata = {
  title: "Outreach — Paolo Padoan",
  description:
    "Visual explanations of how stars form in turbulent interstellar clouds, plus the energy footprint of large-scale computing.",
};

export default function Outreach() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <header className="mb-10 text-center">
        <h1 className="font-display text-4xl font-bold">
          <span className="text-gradient">Outreach</span>
        </h1>
      </header>

      <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-muted">
        A major goal of this project is to make the science of star formation
        accessible beyond the research community. Here you&rsquo;ll find short,
        visual explanations of how stars are born in turbulent interstellar
        clouds, along with classroom-friendly material and occasional videos. We
        also highlight an important practical topic behind modern research: the
        energy use and carbon footprint of large-scale computing, and why the
        transition to carbon-neutral data centers matters.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {VIDEOS.map((video) => (
          <YouTubeEmbed key={video.id} id={video.id} title={video.title} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href={YOUTUBE_CHANNEL}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-stellar hover:underline"
        >
          Visit the Stellar Origins channel ↗
        </a>
      </div>
    </main>
  );
}
