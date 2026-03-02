export default function Navbar() {
  return (
    <nav className="w-full p-4 border-b flex justify-between">
      <h2 className="font-semibold text-lg">Stars In Turbulence</h2>
      <div className="space-x-4">
        <a href="/">Home</a>
        <a href="/research">Research</a>
        <a href="/ormas">ORMAS</a>
        <a href="/publications">Publications</a>
        <a href="/outreach">Outreach</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
}