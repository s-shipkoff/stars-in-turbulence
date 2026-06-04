export const metadata = {
  title: "ORMAS — The Origin of Massive Stars",
  description:
    "ORMAS is an NSF-funded project (AST-2408023) at Dartmouth College studying how massive stars form in turbulent interstellar clouds.",
};

export default function Ormas() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <header className="text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-stellar">
          NSF-funded project
        </p>
        <h1 className="font-display text-4xl font-bold">
          <span className="text-gradient">ORMAS</span>
        </h1>
      </header>

      <div className="mx-auto mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-muted">
        <p>
          The Origin of Massive Stars (ORMAS) is an NSF-funded project to
          understand how massive stars form inside chaotic, turbulent
          interstellar clouds. Using high-resolution numerical simulations, we
          test how turbulence and gravity transport gas onto forming stars and
          how these processes shape the distribution of stellar masses (the
          initial mass function, IMF).
        </p>
        <p>
          This project is based in the Department of Physics and Astronomy at
          Dartmouth College (NSF award AST-2408023).
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-2xl gap-4 sm:grid-cols-3">
        {[
          { k: "Focus", v: "Massive star formation" },
          { k: "Method", v: "High-resolution simulations" },
          { k: "Award", v: "NSF AST-2408023" },
        ].map((item) => (
          <div key={item.k} className="card p-5 text-center">
            <p className="text-xs uppercase tracking-wider text-stellar">
              {item.k}
            </p>
            <p className="mt-2 font-display font-semibold">{item.v}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
