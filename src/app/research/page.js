import { RESEARCH_AREAS } from "@/lib/site";

export const metadata = {
  title: "Research — Paolo Padoan",
  description:
    "Star formation in the turbulent, magnetized interstellar medium: star formation, ISM turbulence, and planet formation.",
};

export default function Research() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <header className="text-center">
        <h1 className="font-display text-4xl font-bold text-white">
          Research
        </h1>
        <div className="mx-auto mt-6 max-w-2xl space-y-4 text-left text-base leading-relaxed text-muted">
          <p>
            My research focuses on how stars form in the turbulent, magnetized
            interstellar medium. Star-forming clouds are shaped by supersonic
            motions, shocks, gravity, and magnetic fields, producing a rich
            network of filaments and dense cores. Understanding how these
            structures arise and how they feed forming stars requires linking
            physics across a huge range of scales, from parsec-sized clouds down
            to the immediate environment of protostars.
          </p>
          <p>
            A central goal is to explain what sets the distribution of stellar
            masses (the initial mass function), including the formation of
            massive stars. I combine analytical ideas with large-scale numerical
            simulations of supersonic (often MHD) turbulence and self-gravitating
            gas, and I compare simulation outputs to observations through
            synthetic observations and statistical diagnostics.
          </p>
        </div>
      </header>

      <div className="mt-16 space-y-6">
        {RESEARCH_AREAS.map((area, i) => (
          <section
            key={area.slug}
            id={area.slug}
            className="anchor card scroll-mt-24 p-7 sm:p-9"
          >
            <div className="flex items-baseline gap-4">
              <span className="font-display text-2xl font-bold text-white/20">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="font-display text-2xl font-bold">{area.title}</h2>
            </div>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {area.blurb}
            </p>
          </section>
        ))}
      </div>
    </main>
  );
}
