import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ClipboardCheck,
  DraftingCompass,
  FileCog,
  Factory,
  Gauge,
  Layers3,
  Microscope,
  ShieldCheck,
  Sparkles,
  Thermometer,
  Wrench,
  Zap,
  ChevronDown,
} from "lucide-react";

const capabilityCards = [
  {
    icon: DraftingCompass,
    title: "Mechanical design & CAD",
    description:
      "3D CAD modelling, detailed drawings, fabrication features, and design documentation prepared for practical delivery.",
  },
  {
    icon: Gauge,
    title: "GD&T & tolerance engineering",
    description:
      "Critical interfaces, tolerance stack-up, datum strategy, and repeatability-focused design for reliable fit and function.",
  },
  {
    icon: ClipboardCheck,
    title: "DFMA, DFMEA & V&V",
    description:
      "Structured engineering methods used to simplify fabrication, reduce risk, and validate performance before release.",
  },
  {
    icon: Thermometer,
    title: "Thermal systems & heat management",
    description:
      "Mechanical solutions for cooling, passive heat dissipation, and thermal testing across industrial and device applications.",
  },
  {
    icon: Microscope,
    title: "Testing fixtures & metrology systems",
    description:
      "Custom fixtures, conductivity measurement systems, and experimental setups designed for stable, repeatable results.",
  },
  {
    icon: Zap,
    title: "Sensor integration & technical prototyping",
    description:
      "Practical engineering support for data acquisition, signal alignment, and prototype-ready system implementation.",
  },
];

const projectCards = [
  {
    title: "Custom Cooling Drum",
    category: "Industrial thermal management",
    outcome: "Production-ready component design with improved fit, assembly consistency, and documentation quality.",
    points: [
      "Applied DFMA to simplify fabrication and assembly",
      "Defined critical interfaces using GD&T",
      "Completed CAD models, drawings, and release documentation",
    ],
  },
  {
    title: "Thermal Conductivity Metering System",
    category: "Custom test equipment",
    outcome: "Custom-engineered testing system capable of repeatable thermal conductivity measurement.",
    points: [
      "Used DFMEA and fishbone-style investigation to reduce risk and variation",
      "Performed tolerance stack-up analysis for repeatable positioning",
      "Completed V&V for functional performance and consistency",
    ],
  },
  {
    title: "Anti-Adhesion Mold for Silicone Phantom Casting",
    category: "Medical / prototyping support",
    outcome: "Eliminated sticking issues and enabled repeatable fabrication of deformable test specimens.",
    points: [
      "CAD geometry designed for smooth demoulding",
      "PLA 3D-printed tooling with finishing and acetone vapour smoothing",
      "Vent and release strategy added to prevent suction and bonding",
    ],
  },
  {
    title: "Hand-Held Stereoscope Thermal Solution",
    category: "Device development",
    outcome: "Improved passive cooling with a lightweight, manufacturable fin-based heat dissipation structure.",
    points: [
      "Thermal-aware geometry optimisation",
      "Heat-sink fin layout design for convection",
      "Supplier coordination and laser-cut fabrication support",
    ],
  },
  {
    title: "Rotary Cooling System",
    category: "Continuous production equipment",
    outcome: "Robust manufacturable design supporting continuous operation, improved thermal control, and process efficiency.",
    points: [
      "SolidWorks modelling and GD&T-based assembly design",
      "Rotating drum and shaft–bearing system development",
      "Airflow-assisted heat dissipation analysis",
    ],
  },
  {
    title: "EV Battery Sample Testing Fixture",
    category: "EV testing",
    outcome: "Robust, repeatable testing setup with improved safety and manufacturability for battery evaluation.",
    points: [
      "Designed fixture structure and mounting interfaces in SolidWorks",
      "Applied GD&T for dimensional repeatability",
      "Selected materials for strength, thermal stability, and electrical safety",
    ],
  },
  {
    title: "Force–Voltage Measurement System",
    category: "EV instrumentation",
    outcome: "Reliable real-time monitoring with improved measurement accuracy for EV testing workflows.",
    points: [
      "Integrated force sensors and voltage modules",
      "Handled wiring, calibration, and system validation",
      "Aligned implementation with EV testing requirements",
    ],
  },
  {
    title: "Camera / Force / Displacement Synchronisation",
    category: "DAQ & measurement systems",
    outcome: "Precise multi-sensor timing and more reliable experimental data capture.",
    points: [
      "LabVIEW-based acquisition and synchronisation system",
      "Integrated camera triggers with force and displacement sensors",
      "Validated timing alignment for measurement accuracy",
    ],
  },
];

const processSteps = [
  {
    title: "Scope the engineering problem",
    description:
      "Clarify operating conditions, constraints, interfaces, manufacturability requirements, and what success looks like.",
  },
  {
    title: "Develop the design",
    description:
      "Build the concept in CAD, engineer critical interfaces, and refine geometry for fabrication, assembly, and performance.",
  },
  {
    title: "Reduce risk and verify",
    description:
      "Apply tolerance analysis, DFMA / DFMEA thinking, and verification activities to improve repeatability and reduce downstream issues.",
  },
  {
    title: "Deliver documentation",
    description:
      "Provide drawings, models, fixture details, and structured documentation ready for fabrication, validation, or technical review.",
  },
];

const proofPoints = [
  "Selected public portfolio backed by confidentiality-aware project presentation",
  "Experience spanning industrial thermal systems, device development, EV testing, and measurement setups",
  "Detailed drawings and fabrication features prepared according to AS 1100",
  "Water tank design work referencing AS/NZS 4766",
  "SOLIDWORKS demonstrations delivered at the University of Sydney",
];

const faqs = [
  {
    q: "What kinds of projects fit this portfolio best?",
    a: "Projects that need practical mechanical design, manufacturable CAD, tolerance-conscious interfaces, custom fixtures, or technical development support are the clearest fit based on the source material.",
  },
  {
    q: "Can confidential work still be shown professionally?",
    a: "Yes. The source material already notes that some details are omitted or simplified because of IP and confidentiality restrictions, so the site is structured to present capability without disclosing protected information.",
  },
  {
    q: "What can a client expect as a deliverable?",
    a: "Depending on scope, likely deliverables include CAD models, detailed drawings, interface definitions, design documentation, fixture concepts, and validation-oriented engineering support. Exact deliverables should be confirmed per project.",
  },
  {
    q: "Is this positioned as a company site or a personal portfolio?",
    a: "The source material supports a premium personal portfolio / consulting-style site more strongly than a large multi-person company site, so the design leans into that format to stay accurate.",
  },
];

const industries = [
  "Industrial equipment",
  "Thermal management",
  "Testing & validation",
  "Medical devices",
  "EV development",
  "Mechanical documentation",
];

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-300">
        <Sparkles className="h-3.5 w-3.5" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
        {description}
      </p>
    </div>
  );
}

function GlowCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-white/[0.04] shadow-[0_20px_80px_-30px_rgba(0,0,0,0.55)] backdrop-blur ${className}`}
    >
      {children}
    </div>
  );
}

function FAQItem({ item, open, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="w-full rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left transition hover:bg-white/[0.06]"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-medium text-white">{item.q}</h3>
          <div
            className={`grid transition-all duration-300 ${open ? "mt-3 grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
          >
            <div className="overflow-hidden text-sm leading-7 text-slate-300">
              {item.a}
            </div>
          </div>
        </div>
        <ChevronDown
          className={`mt-1 h-5 w-5 shrink-0 text-slate-400 transition-transform ${open ? "rotate-180" : "rotate-0"}`}
        />
      </div>
    </button>
  );
}

export default function MikeMirjavadiPortfolioSite() {
  const [openFaq, setOpenFaq] = useState(0);

  const topCapabilities = useMemo(
    () => [
      "Mechanical design",
      "Product development",
      "GD&T",
      "Tolerance analysis",
      "Thermal systems",
      "Testing fixtures",
    ],
    []
  );

  return (
    <div className="min-h-screen bg-[#07111f] text-slate-100">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-[32rem] w-[32rem] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-[-10%] top-[10%] h-[28rem] w-[28rem] rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[20%] h-[24rem] w-[24rem] rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.12]" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#07111f]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
              <Layers3 className="h-5 w-5 text-cyan-300" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Mike Mirjavadi</div>
              <div className="text-xs text-slate-400">Mechanical Design & Product Development</div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#capabilities" className="transition hover:text-white">Capabilities</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#process" className="transition hover:text-white">Process</a>
            <a href="#faq" className="transition hover:text-white">FAQ</a>
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-900 transition hover:scale-[1.02]"
          >
            Start a conversation
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <main id="top" className="relative">
        <section className="mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-8 lg:pb-24 lg:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 inline-flex flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-300">
                <Factory className="h-3.5 w-3.5" />
                Premium engineering portfolio
              </div>

              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Mechanical design that is built to be
                <span className="bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent">
                  {" "}manufacturable, repeatable, and ready for real use.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                A premium portfolio site for selected public work in mechanical design and product development,
                covering thermal systems, custom fixtures, measurement setups, CAD documentation, and engineering
                refinement for practical delivery.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {topCapabilities.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-sm text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition hover:scale-[1.02]"
                >
                  View selected work
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
                >
                  Contact details to confirm
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <GlowCard className="relative overflow-hidden p-6 sm:p-8">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-slate-300">Positioning</div>
                    <div className="mt-1 text-2xl font-semibold text-white">Consulting-style portfolio</div>
                  </div>
                  <div className="rounded-2xl bg-emerald-400/10 p-3 text-emerald-300 ring-1 ring-emerald-400/20">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                </div>

                <div className="grid gap-4">
                  {[
                    {
                      title: "Engineering-first",
                      text: "The source material consistently emphasises CAD, GD&T, tolerance analysis, DFMA / DFMEA, and validation-oriented design work.",
                    },
                    {
                      title: "Cross-domain capability",
                      text: "Projects span industrial cooling, medical prototyping, stereoscope thermal management, EV testing, and synchronised measurement systems.",
                    },
                    {
                      title: "Credibility without overclaiming",
                      text: "The site deliberately avoids invented metrics and keeps confidentiality restrictions visible rather than pretending every project can be fully disclosed.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <div className="flex items-start gap-3">
                        <BadgeCheck className="mt-0.5 h-5 w-5 text-cyan-300" />
                        <div>
                          <h3 className="font-medium text-white">{item.title}</h3>
                          <p className="mt-2 text-sm leading-7 text-slate-300">{item.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </GlowCard>
            </motion.div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
            <SectionHeader
              eyebrow="About"
              title="A polished portfolio for serious engineering work."
              description="The source material reads most naturally as a high-end personal portfolio for a mechanical designer and product developer whose work combines practical fabrication awareness, structured engineering method, and documentation discipline."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <GlowCard className="p-6">
                <div className="mb-4 inline-flex rounded-2xl bg-cyan-400/10 p-3 text-cyan-300 ring-1 ring-cyan-400/20">
                  <Wrench className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">Main purpose</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Help visitors quickly understand the type of mechanical design and development work available,
                  the rigor behind it, and the standard of delivery they can expect.
                </p>
              </GlowCard>

              <GlowCard className="p-6">
                <div className="mb-4 inline-flex rounded-2xl bg-emerald-400/10 p-3 text-emerald-300 ring-1 ring-emerald-400/20">
                  <FileCog className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">Target audience</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Engineering managers, product teams, R&D groups, testing environments, and manufacturers who
                  need design work that can move beyond concept into fabrication and validation.
                </p>
              </GlowCard>

              <GlowCard className="p-6 sm:col-span-2">
                <div className="mb-4 inline-flex rounded-2xl bg-white/10 p-3 text-white ring-1 ring-white/15">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">Tone and brand personality</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Precise, practical, premium, and trustworthy. The copy avoids hype and instead leans on method,
                  clarity, manufacturability, and engineering seriousness.
                </p>
                <div className="mt-5 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-4 text-sm text-slate-300">
                  <span className="font-medium text-white">Important note:</span> the portfolio source explicitly states
                  that some details, drawings, and components have been omitted or simplified due to IP and confidentiality
                  restrictions. That constraint is preserved here as a credibility signal, not hidden.
                </div>
              </GlowCard>
            </div>
          </div>
        </section>

        <section id="capabilities" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <SectionHeader
            eyebrow="Capabilities"
            title="What this site communicates clearly"
            description="The strongest message from the source material is not just that projects were completed, but that they were engineered with method: manufacturability, interface control, validation, and practical implementation all show up repeatedly."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {capabilityCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                >
                  <GlowCard className="h-full p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06]">
                    <div className="mb-4 inline-flex rounded-2xl bg-white/10 p-3 text-cyan-300 ring-1 ring-white/10">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{card.description}</p>
                  </GlowCard>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="Selected work"
              title="Project cards grounded in the source deck"
              description="The site uses the public portfolio examples as the backbone of the narrative. Rather than inflating them into case studies with invented metrics, each project stays concise and credible."
            />
            <div className="rounded-2xl border border-dashed border-white/15 bg-white/[0.03] px-4 py-3 text-sm text-slate-300">
              Image assets can be swapped in later if exported from the original deck.
            </div>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {projectCards.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.03 }}
              >
                <GlowCard className="relative h-full overflow-hidden p-6 sm:p-7">
                  <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl" />
                  <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-slate-300">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{project.outcome}</p>

                  <div className="mt-6 space-y-3">
                    {project.points.map((point) => (
                      <div key={point} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-emerald-300" />
                        <p className="text-sm leading-7 text-slate-300">{point}</p>
                      </div>
                    ))}
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.05fr]">
            <GlowCard className="p-8">
              <SectionHeader
                eyebrow="Why it feels credible"
                title="Differentiators that come from engineering method, not marketing fluff"
                description="Several strengths repeat across the portfolio: attention to interfaces, repeatability, manufacturability, validation, and documentation quality. That combination is what makes the website feel professional rather than decorative."
              />
            </GlowCard>

            <div className="grid gap-4 sm:grid-cols-2">
              {proofPoints.map((point) => (
                <GlowCard key={point} className="p-5">
                  <div className="flex items-start gap-3">
                    <BadgeCheck className="mt-0.5 h-5 w-5 text-cyan-300" />
                    <p className="text-sm leading-7 text-slate-300">{point}</p>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <SectionHeader
            eyebrow="How it works"
            title="A process section that matches the portfolio evidence"
            description="The source material supports a delivery model centred on scoping, design development, risk reduction, and documentation. This keeps the site conversion-focused without inventing a formal agency workflow that was never stated."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => (
              <GlowCard key={step.title} className="relative overflow-hidden p-6">
                <div className="mb-5 text-sm font-medium text-cyan-300">0{index + 1}</div>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{step.description}</p>
              </GlowCard>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <GlowCard className="p-8">
              <SectionHeader
                eyebrow="Benefits"
                title="What a visitor should understand within seconds"
                description="This site is designed so a potential client or collaborator quickly sees that the work is practical, standards-aware, and suitable for projects where buildability and repeatability matter."
              />
            </GlowCard>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Clearer technical credibility",
                "Better framing of cross-industry capability",
                "Professional presentation despite confidentiality limits",
                "Conversion-ready structure with room for real contact details",
              ].map((item) => (
                <GlowCard key={item} className="flex min-h-[122px] items-center p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-300" />
                    <p className="text-base text-slate-200">{item}</p>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <GlowCard className="overflow-hidden p-8 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-slate-300">
                  Fit and focus
                </div>
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Best suited to engineering teams that want practical design support, not theatre.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                  The portfolio examples align best with teams that value clean documentation, careful interface design,
                  manufacturability, testing discipline, and engineering work that is grounded in reality.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {industries.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </GlowCard>
        </section>

        <section id="faq" className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="text-center">
            <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-slate-300">
              FAQ
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Questions a real visitor would ask</h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((item, index) => (
              <FAQItem
                key={item.q}
                item={item}
                open={openFaq === index}
                onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}
              />
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 pb-20 pt-4 lg:px-8 lg:pb-28">
          <GlowCard className="relative overflow-hidden p-8 sm:p-10 lg:p-12">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-transparent to-emerald-400/10" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
              <div>
                <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-slate-300">
                  Final call to action
                </div>
                <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Need mechanical design support that is detailed, buildable, and professionally documented?
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
                  This section is intentionally ready for a real lead-capture action, but the source material did not include
                  confirmed contact details. Replace the placeholders below with the final email, LinkedIn link, booking URL,
                  or contact form destination before launch.
                </p>
              </div>

              <div className="grid gap-4">
                <div className="rounded-2xl border border-dashed border-white/15 bg-black/20 p-5">
                  <div className="text-sm font-medium text-white">Primary CTA</div>
                  <div className="mt-2 text-sm text-slate-300">[CONFIRM: book a consultation URL or contact form]</div>
                </div>
                <div className="rounded-2xl border border-dashed border-white/15 bg-black/20 p-5">
                  <div className="text-sm font-medium text-white">Email</div>
                  <div className="mt-2 text-sm text-slate-300">[CONFIRM EMAIL ADDRESS]</div>
                </div>
                <div className="rounded-2xl border border-dashed border-white/15 bg-black/20 p-5">
                  <div className="text-sm font-medium text-white">LinkedIn / portfolio link</div>
                  <div className="mt-2 text-sm text-slate-300">[CONFIRM PUBLIC PROFILE URL]</div>
                </div>
              </div>
            </div>
          </GlowCard>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            Mike Mirjavadi — Mechanical Design & Product Development
          </div>
          <div className="flex flex-wrap gap-4">
            <span>Built from source portfolio material</span>
            <span>•</span>
            <span>Contact details pending confirmation</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
