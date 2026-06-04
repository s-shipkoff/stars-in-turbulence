import { EMAIL } from "@/lib/site";

export const metadata = {
  title: "Contact — Paolo Padoan",
  description: "Get in touch about research, collaboration, talks, and outreach.",
};

export default function Contact() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <p className="text-lg leading-relaxed text-muted">
          If you&rsquo;d like to get in touch about research, collaboration,
          talks, student opportunities, or outreach, please email me.
        </p>

        <div className="card p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-stellar">
            Email
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-3 inline-block font-display text-xl font-semibold hover:text-stellar"
          >
            {EMAIL}
          </a>
        </div>
      </div>
    </main>
  );
}
