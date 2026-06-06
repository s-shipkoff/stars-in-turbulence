export const metadata = {
  title: "About — Paolo Padoan",
  description:
    "Paolo Padoan is an astrophysicist studying how stars form in the turbulent, magnetized interstellar medium.",
};

export default function About() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <header className="text-center">
        <h1 className="font-display text-4xl font-bold text-white">
          About
        </h1>
      </header>

      <div className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted">
        <p>
          I&rsquo;m Paolo Padoan, an astrophysicist studying how stars form in
          the turbulent, magnetized interstellar medium. My work combines theory
          and large-scale numerical simulations to connect the physics of
          supersonic turbulence and gravity to the properties of star-forming
          clouds, stellar clusters, and the stellar initial mass function.
        </p>
      </div>
    </main>
  );
}
