import Image from "next/image";
import starFormationImg from "@/lib/250pc_star_formation_color.jpg";
import tenPcImgA from "@/lib/10pc_star_formation_a.jpg";
import tenPcImgB from "@/lib/10pc_star_formation_b.jpg";
import colDensity4pc from "@/lib/col_density_4pc.png";
import colDensityA from "@/lib/col_density_a.png";
import colDensityB from "@/lib/col_density_b.png";
import zoomIn from "@/lib/zoom_in.png";
import starFormation5 from "@/lib/250pc_formation5.png";
import c31CloudGif from "@/lib/C31_cloud.gif";
import lhNursery from "@/lib/LH_95_stellar_nursery.jpg";
import nhNature from "@/lib/NH_nature.jpg";
import dataCenter from "@/lib/data_center.jpg";

export const metadata = {
  title: "ORMAS — Paolo Padoan",
  description:
    "Origin of Massive Stars (NSF award AST-2408023) at Dartmouth College studies how massive stars form.",
};

function BulletList({ items }) {
  return (
    <ul className="space-y-2 pl-1">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-1 shrink-0 text-stellar">—</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function TechSubSection({ title, children }) {
  return (
    <div className="mt-8 first:mt-0">
      <h3 className="font-display text-lg font-semibold text-stellar mb-3">
        {title}
      </h3>
      <div className="space-y-3 text-base leading-relaxed text-muted">
        {children}
      </div>
    </div>
  );
}

// imgSide="left"  → media | text  (bar on left of text)
// imgSide="right" → text | media  (bar on right of text)
// media prop accepts any JSX — a single image, stacked images, video, etc.
function CollapsibleSection({ title, media, imgSide, children }) {
  return (
    <details className="mt-8 group">
      <summary className="cursor-pointer list-none">
        <div className="flex items-center justify-between rounded-lg border border-stellar/30 bg-space/40 px-6 py-4 hover:border-stellar/60 transition-colors">
          <h2 className="font-display text-xl font-semibold text-star">
            {title}
          </h2>
          <span className="text-stellar text-lg transition-transform duration-200 group-open:rotate-180">
            ▾
          </span>
        </div>
      </summary>

      <div className="mt-1 rounded-lg border border-stellar/20 bg-space/20 px-6 py-8">
        <div className="flex gap-8 items-stretch">
          {imgSide === "left" && (
            <div className="shrink-0 w-5/12 flex flex-col">
              {media}
            </div>
          )}
          <div
            className={`flex-1 space-y-4 text-base leading-relaxed text-muted ${
              imgSide === "left"
                ? "border-l-2 border-stellar/30 pl-6"
                : "border-r-2 border-stellar/30 pr-6"
            }`}
          >
            {children}
          </div>
          {imgSide === "right" && (
            <div className="shrink-0 w-5/12 flex flex-col">
              {media}
            </div>
          )}
        </div>
      </div>
    </details>
  );
}

export default function Ormas() {
  // Summary images — swap paths to use section-specific images later
  const summaryImg = starFormationImg;
  const summaryImgA = tenPcImgA;
  const summaryImgB = tenPcImgB;

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <header className="text-center mb-10">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-stellar">
          NSF Award AST-2408023
        </p>
        <h1 className="font-display text-4xl font-bold text-white">
          Origin of Massive Stars (ORMAS)
        </h1>
      </header>

      {/* Summary — image | text */}
      <div className="flex gap-8 items-stretch">
        <div className="shrink-0 w-5/12 flex flex-col rounded-lg overflow-hidden">
          <Image
            src={summaryImg}
            alt="250 pc star formation region"
            className="w-full h-auto"
          />
          <div className="flex flex-1 min-h-0">
            <div className="relative w-1/2">
              <Image
                src={summaryImgA}
                alt="10 pc star formation A"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-1/2">
              <Image
                src={summaryImgB}
                alt="10 pc star formation B"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 text-base leading-relaxed text-muted border-l-2 border-stellar/30 pl-6">
          <p>
            Massive stars are among the most influential objects in the universe.
            Although they are far less common than stars like the Sun, they produce
            most of the heavy elements found in galaxies, drive powerful stellar
            winds and supernova explosions, and shape the environments in which
            future generations of stars and planets form.
          </p>
          <p>
            The Origin of Massive Stars (ORMAS) project seeks to answer one of the
            major unsolved problems in astrophysics: what determines the mass of a
            star, and how do high-mass stars form?
          </p>
          <p>
            Using state-of-the-art supercomputer simulations, ORMAS follows the
            flow of gas from galactic scales down to the immediate surroundings of
            individual stars. By tracing how matter moves through turbulent
            interstellar clouds and into forming stellar systems, the project aims
            to uncover the physical processes that control stellar masses and the
            distribution of masses within stellar populations.
          </p>
        </div>
      </div>

      {/* Scientific Motivation — text | video (vertically centered) */}
      <CollapsibleSection
        title="Scientific Motivation"
        imgSide="right"
        media={
          <div className="flex flex-col flex-1 justify-center">
            {/* swap src to use a section-specific gif later */}
            <Image
              src={c31CloudGif}
              alt="C31 cloud star formation"
              unoptimized
              className="rounded-lg w-full h-auto"
            />
          </div>
        }
      >
        <p>
          Massive stars play a very large role in the evolution of the
          universe. Their intense radiation, stellar winds, and eventual supernova
          explosions inject enormous amounts of energy into their surroundings,
          influencing the structure and evolution of entire galaxies.
        </p>
        <p>
          These stars are also responsible for producing many of the heavy
          elements necessary for planets and life. Elements such as carbon,
          oxygen, and iron are created within stars and dispersed throughout
          galaxies when massive stars die. As a result, understanding how massive
          stars form is closely connected to understanding the origins of
          planetary systems, the chemical evolution of galaxies, and ultimately
          the conditions that make life possible.
        </p>
        <p>
          Despite their importance, the processes that determine the final masses
          of massive stars remain poorly understood. ORMAS is designed to address
          this fundamental question.
        </p>
      </CollapsibleSection>

      {/* Research Objectives — text | images (4pc on top, a+b below) */}
      <CollapsibleSection
        title="Research Objectives"
        imgSide="right"
        media={
          // swap image sources to use section-specific images later
          <div className="flex flex-col rounded-lg overflow-hidden flex-1">
            <Image
              src={colDensity4pc}
              alt="Column density at 4 pc"
              className="w-full h-auto"
            />
            <div className="flex flex-1 min-h-0">
              <div className="relative w-1/2">
                <Image
                  src={colDensityA}
                  alt="Column density A"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-1/2">
                <Image
                  src={colDensityB}
                  alt="Column density B"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        }
      >
        <p>ORMAS focuses on two central scientific questions:</p>
        <BulletList
          items={[
            "What determines the final mass of a massive star?",
            "How does this process produce the observed distribution of stellar masses?",
          ]}
        />
        <p>
          Traditional models often assume that massive stars form from the
          collapse of large, dense gas cores. However, recent observations and
          simulations increasingly suggest that massive stars may instead gather
          material from much larger reservoirs of gas distributed throughout
          filamentary structures within molecular clouds.
        </p>
        <p>
          ORMAS will test competing theories of massive-star formation by
          studying how gas is transported through turbulent interstellar
          environments and accreted onto growing stars. The project aims to
          identify the dominant physical mechanisms that control stellar growth
          and to develop a predictive model for the high-mass end of the stellar
          initial mass function (IMF).
        </p>
      </CollapsibleSection>

      {/* Computational Approach — images (zoom_in above, 250pc5 below) | text */}
      <CollapsibleSection
        title="Computational Approach"
        imgSide="left"
        media={
          // swap image sources to use section-specific images later
          <div className="rounded-lg overflow-hidden">
            <Image
              src={zoomIn}
              alt="Zoom-in simulation"
              className="w-full h-auto"
            />
            <Image
              src={starFormation5}
              alt="250 pc star formation"
              className="w-full h-auto"
            />
          </div>
        }
      >
        <p>
          The formation of massive stars is an inherently multi-scale problem.
          Gas motions on scales of hundreds of parsecs influence the evolution of
          structures that ultimately feed individual stars on scales smaller than
          1 AU.
        </p>
        <p>
          To capture this enormous range of scales, ORMAS uses a sequence of
          advanced three-dimensional magnetohydrodynamic simulations. The project
          begins with a realistic simulation of a 250 pc region of the
          interstellar medium in which turbulence is naturally driven by supernova
          explosions.
        </p>
        <p>
          From this large-scale environment, researchers perform progressively
          higher-resolution &ldquo;zoom-in&rdquo; simulations focused on the
          formation of a massive stellar cluster. These simulations allow the
          project to examine:
        </p>
        <BulletList
          items={[
            "Supersonic turbulence and turbulent fragmentation",
            "Magnetic fields and self-gravity",
            "Protostellar jets and outflows",
            "Ionizing radiation and stellar winds",
            "The growth histories of individual massive stars",
          ]}
        />
        <p>
          The simulations are performed using the DISPATCH
          computational framework, which enables efficient modeling across nearly
          nine orders of magnitude in spatial scale, from roughly 250 parsecs
          down to 0.1 astronomical units.
        </p>
      </CollapsibleSection>

      {/* Expected Scientific Impact — image (vertically centered) | text */}
      <CollapsibleSection
        title="Expected Scientific Impact"
        imgSide="left"
        media={
          // swap src to use a section-specific image later
          <div className="flex flex-col flex-1 justify-center">
            <Image
              src={lhNursery}
              alt="LH 95 stellar nursery"
              className="rounded-lg w-full h-auto"
            />
          </div>
        }
      >
        <p>
          The results of ORMAS will have implications across multiple areas of
          astrophysics. By improving our understanding of how massive stars form,
          the project will help researchers:
        </p>
        <BulletList
          items={[
            "Interpret observations of star-forming regions in the Milky Way and nearby galaxies.",
            "Understand the origin and evolution of the stellar initial mass function.",
            "Improve models of galaxy formation and evolution.",
            "Interpret observations of distant galaxies discovered by the James Webb Space Telescope.",
            "Better understand the progenitors of gravitational-wave sources such as merging black holes and neutron stars.",
          ]}
        />
        <p>
          ORMAS will also generate large libraries of synthetic observations that
          can be compared directly with observations from facilities such as ALMA
          and future observatories. These datasets will help bridge the gap
          between theoretical simulations and astronomical observations.
        </p>
      </CollapsibleSection>

      {/* Computing Sustainability Initiative — text | images (NH_nature above, data_center below) */}
      <CollapsibleSection
        title="Computing Sustainability Initiative"
        imgSide="right"
        media={
          // swap image sources to use section-specific images later
          <div className="rounded-lg overflow-hidden">
            <Image
              src={nhNature}
              alt="New Hampshire nature"
              className="w-full h-auto"
            />
            <Image
              src={dataCenter}
              alt="Data center"
              className="w-full h-auto"
            />
          </div>
        }
      >
        <p>
          Modern scientific discovery increasingly depends on large-scale
          computing. However, the growing use of supercomputers, artificial
          intelligence, and cloud infrastructure also carries significant energy
          and environmental costs.
        </p>
        <p>
          A unique aspect of ORMAS is its commitment to studying and reducing the
          carbon footprint of computational research. The project will track and
          publicly report the carbon emissions associated with its simulations,
          data analysis, and data storage.
        </p>
        <p>
          In addition to developing more computationally efficient methods, ORMAS
          will support outreach efforts focused on increasing public awareness of
          the environmental impact of data centers and the importance of
          transitioning toward carbon-neutral computing infrastructure.
        </p>
        <p>
          The project seeks to demonstrate that scientific progress and
          environmental responsibility can advance together.
        </p>
      </CollapsibleSection>

      {/* Technical Details — unchanged, no image/bar layout */}
      <details className="mt-8 group">
        <summary className="cursor-pointer list-none">
          <div className="flex items-center justify-between rounded-lg border border-stellar/30 bg-space/40 px-6 py-4 hover:border-stellar/60 transition-colors">
            <h2 className="font-display text-xl font-semibold text-star">
              Additional Information
            </h2>
            <span className="text-stellar text-lg transition-transform duration-200 group-open:rotate-180">
              ▾
            </span>
          </div>
        </summary>

        <div className="mt-1 rounded-lg border border-stellar/20 bg-space/20 px-6 py-8 space-y-0">
          <TechSubSection title="Competing Models of Massive-Star Formation">
            <p>
              A central goal of ORMAS is to distinguish between the leading
              theoretical models of massive-star formation and determine which
              physical mechanisms ultimately control stellar masses.
            </p>
            <p>Three primary scenarios currently dominate the field:</p>
            <div className="mt-4 space-y-5">
              {[
                {
                  label: "Turbulent-Core Model",
                  body: "Massive stars form from the collapse of massive, gravitationally bound prestellar cores that already contain most of the material needed to build the final star.",
                },
                {
                  label: "Competitive Accretion Model",
                  body: "Stars begin with relatively small masses and subsequently compete for gas from a shared cluster environment, with the most massive stars accreting the largest fraction of the available material.",
                },
                {
                  label: "Inertial-Inflow Model",
                  body: "Massive stars initially form within dense cores, but acquire most of their mass later through large-scale converging flows generated by the surrounding turbulent environment.",
                },
              ].map((model) => (
                <div key={model.label} className="pl-4 border-l border-stellar/30">
                  <p className="font-semibold text-star/90 mb-1">{model.label}</p>
                  <p>{model.body}</p>
                </div>
              ))}
            </div>
            <p>
              Recent observations have challenged the assumption that massive
              prestellar cores are the dominant pathway to massive-star
              formation, motivating a closer examination of large-scale accretion
              processes and filamentary mass transport.
            </p>
            <p>
              ORMAS will directly test the predictions of these competing models
              by measuring accretion histories, formation timescales, mass
              reservoirs, and flow geometries within realistic star-forming
              environments.
            </p>
          </TechSubSection>

          <TechSubSection title="Multi-Scale Simulation Program">
            <p>
              A defining feature of ORMAS is its ability to follow the growth of
              massive stars across nearly nine orders of magnitude in spatial
              scale.
            </p>
            <p>
              The project begins with an existing simulation of a
              supernova-driven interstellar medium spanning 250 parsecs. From
              this large-scale environment, a forming stellar cluster is selected
              for a sequence of increasingly detailed zoom-in simulations.
            </p>
            <p>
              The computational program is organized into three major phases:
            </p>
            <div className="mt-4 space-y-5">
              {[
                {
                  label: "Phase 1: Turbulence and Mass Transport",
                  body: "The first phase focuses on turbulent fragmentation and the transport of gas through molecular clouds. Extensive convergence studies will determine the numerical resolution required to obtain stable predictions for stellar mass distributions and cluster properties.",
                },
                {
                  label: "Phase 2: Self-Consistent Protostellar Jets",
                  body: "The second phase increases the local resolution around accreting stars to approximately 0.1 AU, allowing magneto-centrifugally driven protostellar jets to emerge directly from the simulations rather than being imposed through sub-grid prescriptions. These calculations will quantify how outflows alter accretion pathways and affect stellar growth.",
                },
                {
                  label: "Phase 3: Massive-Star Feedback",
                  body: "The final phase incorporates photoionization, HII region expansion, and line-driven stellar winds. By comparing the results of all three phases, ORMAS will isolate the relative importance of turbulence, jets, and radiative feedback in shaping the stellar initial mass function and regulating cluster evolution.",
                },
              ].map((phase) => (
                <div key={phase.label} className="pl-4 border-l border-stellar/30">
                  <p className="font-semibold text-star/90 mb-1">{phase.label}</p>
                  <p>{phase.body}</p>
                </div>
              ))}
            </div>
          </TechSubSection>

          <TechSubSection title="Advanced Computational Methods">
            <p>
              ORMAS relies on the DISPATCH framework, a task-based asynchronous
              simulation code designed specifically for extreme-scale
              astrophysical calculations.
            </p>
            <p>
              Unlike traditional domain-decomposition approaches, DISPATCH
              employs local time stepping and dynamic task scheduling. This
              architecture allows computational resources to be concentrated
              where physical activity is occurring, significantly improving
              performance for simulations that span enormous ranges of density,
              velocity, and spatial scale.
            </p>
            <p>
              To model stellar evolution consistently, ORMAS incorporates results
              from detailed calculations performed with the MESA stellar
              evolution code. Machine-learning models trained
              on large libraries of MESA simulations allow these stellar
              properties to be incorporated efficiently into large-scale
              calculations.
            </p>
          </TechSubSection>

          <TechSubSection title="Synthetic Observations and Model Validation">
            <p>
              Rather than comparing theoretical predictions directly to
              observational catalogs, ORMAS adopts a forward-modeling approach.
            </p>
            <p>
              Simulation outputs will be processed through radiative-transfer
              calculations to generate realistic dust-continuum and spectral-line
              observations. These synthetic datasets will then be analyzed using
              the same techniques applied to observations from facilities such as
              ALMA.
            </p>
            <p>
              This strategy enables direct comparisons between simulations and
              observations while minimizing biases introduced by differing
              analysis methods. The resulting catalogs of synthetic star-forming
              regions, protostellar objects, and young stellar clusters will also
              provide valuable resources for planning and interpreting future
              observational campaigns.
            </p>
          </TechSubSection>

          <TechSubSection title="Toward a Predictive Theory of the Initial Mass Function">
            <p>
              The ultimate scientific objective of ORMAS is to develop a
              physically motivated model for the high-mass end of the stellar
              initial mass function (IMF).
            </p>
            <p>
              Current IMF theories rely on assumptions that remain difficult to
              verify observationally and often produce conflicting predictions
              when tested against numerical simulations. By tracing the complete
              pathway through which gas is transported from turbulent molecular
              clouds to individual massive stars, ORMAS will provide some of the
              strongest tests to date of existing IMF theories.
            </p>
            <p>
              Whether the outcome is a new analytic model, a semi-analytic
              framework, or a set of empirical scaling relations, the project
              aims to establish a predictive connection between turbulent
              interstellar environments and the masses of the stars they produce.
            </p>
          </TechSubSection>
        </div>
      </details>
    </main>
  );
}
