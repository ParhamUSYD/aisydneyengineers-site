import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  ChevronDown,
  ClipboardCheck,
  Factory,
  Menu,
  ShieldCheck,
  SquareStack,
  X,
} from "lucide-react";
import {
  additionalWork,
  faqs,
  navigation,
  processSteps,
  proofGallery,
  projectCategories,
  projects,
  services,
  stats,
  teamMembers,
} from "./content/siteContent";

function SectionIntro({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">{description}</p>
    </div>
  );
}

function ProjectMedia({ project }) {
  const [primary, ...secondary] = project.images;

  return (
    <div className="space-y-4">
      <figure className="overflow-hidden rounded-[28px] border border-slate-200 bg-slate-100">
        <img
          src={primary.src}
          alt={primary.alt}
          className="h-[280px] w-full object-cover object-center sm:h-[340px]"
          loading="lazy"
        />
      </figure>

      {secondary.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {secondary.map((image) => (
            <figure
              key={image.src}
              className="overflow-hidden rounded-[24px] border border-slate-200 bg-white"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-40 w-full object-cover object-center"
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-white shadow-[0_20px_60px_-42px_rgba(15,23,42,0.22)]">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <span className="text-base font-semibold text-slate-900">{item.question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-slate-500 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div className={`faq-panel ${isOpen ? "faq-panel-open" : ""}`}>
        <p className="px-6 pb-6 text-sm leading-7 text-slate-600">{item.answer}</p>
      </div>
    </div>
  );
}

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[rgba(248,246,241,0.86)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-slate-950/20">
            <SquareStack className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
              AI Sydney Engineers
            </div>
            <div className="text-sm text-slate-800">Mechanical design and technical delivery</div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="#contact" className="button-primary">
            Discuss a project
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 lg:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-slate-200 bg-[rgba(248,246,241,0.96)] px-5 py-5 sm:px-6 lg:hidden">
          <nav className="grid gap-3">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="button-primary mt-2 justify-center"
              onClick={() => setMenuOpen(false)}
            >
              Discuss a project
              <ArrowRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export default function App() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div id="top" className="min-h-screen bg-stone-50 text-slate-900">
      <SiteHeader />

      <main>
        <section className="hero-shell">
          <div className="hero-grid mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div>
              <span className="section-eyebrow">Selected engineering work</span>
              <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                Mechanical design, technical problem solving, and documentation that are ready
                for real projects.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                AI Sydney Engineers presents selected public work by Mike Mirjavadi and Liam
                Vatankhah across product development, thermal systems, custom fixtures,
                measurement setups, and standards-aware design documentation.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {projectCategories.map((category) => (
                  <span key={category} className="pill-chip">
                    {category}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="#projects" className="button-primary justify-center">
                  View project work
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#team" className="button-secondary justify-center">
                  Meet the team
                </a>
              </div>
            </div>

            <div className="hero-panel">
              <div className="grid gap-4">
                <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_30px_70px_-48px_rgba(15,23,42,0.38)]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                        Business positioning
                      </div>
                      <div className="mt-2 text-2xl font-semibold text-slate-950">
                        Practical engineering support
                      </div>
                    </div>
                    <div className="rounded-2xl bg-slate-950 p-3 text-white">
                      <Factory className="h-5 w-5" />
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    The strongest signal in the portfolio material is not presentation alone. It is
                    the combination of CAD, tolerance control, validation thinking, fabrication
                    awareness, and technically grounded delivery.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {stats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_20px_60px_-42px_rgba(15,23,42,0.18)]"
                    >
                      <div className="text-2xl font-semibold text-slate-950">{item.value}</div>
                      <div className="mt-2 text-sm leading-6 text-slate-600">{item.label}</div>
                    </div>
                  ))}
                </div>

                <div className="rounded-[28px] border border-slate-200 bg-slate-950 p-6 text-slate-50 shadow-[0_30px_70px_-48px_rgba(15,23,42,0.5)]">
                  <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
                    <BadgeCheck className="h-4 w-4" />
                    Why this feels credible
                  </div>
                  <ul className="mt-5 grid gap-3 text-sm leading-7 text-slate-300">
                    <li>Portfolio visuals are drawn from actual project figures in the supplied deck.</li>
                    <li>Technical descriptions stay specific without inventing client metrics or claims.</li>
                    <li>The site is structured so new projects, figures, and team bios can be added fast.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="What we do"
            title="Clear service framing without the usual vague consultancy language"
            description="The portfolio consistently points to hands-on engineering support: concept-to-detail development, fixture and system design, technical verification, and manufacturing-ready documentation."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-42px_rgba(15,23,42,0.18)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-950">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="team" className="section-sand">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <SectionIntro
                eyebrow="About us"
                title="A multidisciplinary engineering team built for practical delivery"
                description="We bring together design, analysis, and development capability to help clients solve engineering problems with clarity, technical depth, and execution-focused support."
              />

              <div className="grid gap-5 md:grid-cols-2">
                {teamMembers.map((member) => (
                  <article
                    key={member.name}
                    className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_20px_60px_-42px_rgba(15,23,42,0.18)]"
                  >
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={`Portrait of ${member.name}`}
                        className="h-72 w-full bg-stone-100 object-contain object-top p-4"
                        loading="lazy"
                      />
                    ) : null}
                    <div className="p-7">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          {member.kicker ? (
                            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                              {member.kicker}
                            </div>
                          ) : null}
                          <h3 className="mt-3 text-2xl font-semibold text-slate-950">{member.name}</h3>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-stone-50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                          {member.role ?? member.label}
                        </div>
                      </div>
                      <p className="mt-5 text-sm leading-7 text-slate-600">{member.description}</p>
                      {Array.isArray(member.points) && member.points.length > 0 ? (
                        <ul className="mt-6 grid gap-3 text-sm leading-6 text-slate-700">
                          {member.points.map((point) => (
                            <li key={point} className="flex items-start gap-3">
                              <span className="mt-2 h-2 w-2 rounded-full bg-amber-500" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Selected projects"
            title="Public project material connected to the original figures"
            description="Each project below is grounded in the supplied portfolio deck. The structure is set up so future project entries only need content updates and image paths, not layout rewrites."
          />

          <div className="mt-12 space-y-8">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-[36px] border border-slate-200 bg-white p-6 shadow-[0_25px_80px_-52px_rgba(15,23,42,0.3)] sm:p-8 lg:p-10"
              >
                <div
                  className={`grid gap-8 lg:items-start ${
                    index % 2 === 0 ? "lg:grid-cols-[1.1fr_0.9fr]" : "lg:grid-cols-[0.9fr_1.1fr]"
                  }`}
                >
                  <div className={index % 2 === 0 ? "" : "lg:order-2"}>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="pill-chip">{project.category}</span>
                      <span className="text-sm font-medium text-slate-500">{project.stage}</span>
                    </div>
                    <h3 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-base leading-8 text-slate-600">{project.summary}</p>

                    <div className="mt-8 grid gap-6 lg:grid-cols-2">
                      <div>
                        <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                          Engineering focus
                        </div>
                        <ul className="mt-4 grid gap-3 text-sm leading-7 text-slate-700">
                          {project.highlights.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                              <BadgeCheck className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                          Deliverables and outcome
                        </div>
                        <ul className="mt-4 grid gap-3 text-sm leading-7 text-slate-700">
                          {project.deliverables.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                              <ClipboardCheck className="mt-1 h-4 w-4 shrink-0 text-slate-900" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className={index % 2 === 0 ? "" : "lg:order-1"}>
                    <ProjectMedia project={project} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-sand">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <SectionIntro
                eyebrow="Broader technical range"
                title="Additional work that broadens the business profile"
                description="Not every piece of public work needs a full case-study layout. This section keeps the broader range visible while staying compact and easy to expand."
              />

              <div className="grid gap-4 sm:grid-cols-2">
                {additionalWork.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-42px_rgba(15,23,42,0.18)]"
                  >
                    <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {item.category}
                    </div>
                    <h3 className="mt-3 text-xl font-semibold text-slate-950">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="proof" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Technical proof"
            title="A visual layer that reinforces standards, CAD discipline, and documentation quality"
            description="These figures come directly from the supplied portfolio material and help the site feel grounded in real engineering outputs rather than stock visuals or decorative mockups."
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_25px_80px_-52px_rgba(15,23,42,0.3)]">
              <img
                src={proofGallery[0].image}
                alt={proofGallery[0].alt}
                className="h-[320px] w-full object-cover object-center"
                loading="lazy"
              />
              <div className="p-7">
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {proofGallery[0].title}
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600">{proofGallery[0].description}</p>
              </div>
            </article>

            <div className="grid gap-5">
              {proofGallery.slice(1).map((item) => (
                <article
                  key={item.title}
                  className="grid gap-5 overflow-hidden rounded-[32px] border border-slate-200 bg-white p-5 shadow-[0_20px_60px_-42px_rgba(15,23,42,0.18)] sm:grid-cols-[220px_1fr]"
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-52 w-full rounded-[24px] object-cover object-center"
                    loading="lazy"
                  />
                  <div className="self-center">
                    <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {item.title}
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
          <div className="process-shell overflow-hidden rounded-[40px] border border-slate-200/90 px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <div className="relative">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                <SectionIntro
                  eyebrow="How we work"
                  title="A delivery process built for practical engineering outcomes"
                  description="We work through each project with a focus on scope clarity, disciplined design decisions, verification where needed, and documentation that supports real execution."
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[28px] border border-white/70 bg-white/80 p-5 shadow-[0_22px_60px_-44px_rgba(15,23,42,0.24)] backdrop-blur-sm">
                    <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Delivery emphasis
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Clear scope, buildable solutions, technical rigor, and documentation that supports fabrication, testing, and review.
                    </p>
                  </div>
                  <div className="rounded-[28px] border border-white/70 bg-white/80 p-5 shadow-[0_22px_60px_-44px_rgba(15,23,42,0.24)] backdrop-blur-sm">
                    <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Best fit
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Teams that value practicality, repeatability, and sound engineering judgment over unnecessary complexity.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {processSteps.map((step, index) => (
                  <article key={step.title} className="process-card rounded-[30px] p-6">
                    <div className="flex items-center gap-3">
                      <div className="process-step-chip">0{index + 1}</div>
                      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                        Step {index + 1}
                      </div>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold tracking-tight text-slate-950">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-5xl px-5 py-20 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="FAQ"
            title="Questions a serious client or collaborator is likely to ask"
            description="The answers are intentionally direct and grounded in the project material rather than generic sales language."
            align="center"
          />

          <div className="mt-12 space-y-4">
            {faqs.map((item, index) => (
              <FAQItem
                key={item.question}
                item={item}
                isOpen={openFaq === index}
                onToggle={() => setOpenFaq((current) => (current === index ? -1 : index))}
              />
            ))}
          </div>
        </section>

        {/* <section id="contact" className="mx-auto max-w-7xl px-5 pb-24 pt-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[40px] border border-slate-200 bg-white px-6 py-8 shadow-[0_25px_80px_-52px_rgba(15,23,42,0.3)] sm:px-8 sm:py-10 lg:px-12 lg:py-12">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <span className="section-eyebrow">Next step</span>
                <h2 className="mt-6 max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                  Ready to discuss a design problem, test setup, or product development task?
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                  The site structure is ready for direct enquiry handling through email, phone,
                  LinkedIn, or a form endpoint. Final public contact details still need to be
                  confirmed before launch.
                </p>
              </div>

              <div className="grid gap-4">
                <div className="rounded-[28px] border border-slate-200 bg-stone-50 p-5">
                  <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                    <ShieldCheck className="h-4 w-4" />
                    Best use cases
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Mechanical design, CAD refinement, manufacturability reviews, custom fixtures,
                    testing systems, and technical documentation that needs to stand up in practice.
                  </p>
                </div>
                <div className="rounded-[28px] border border-dashed border-slate-300 bg-white p-5 text-sm leading-7 text-slate-600">
                  Final email address, public profile links, and enquiry destination still need to
                  be supplied before the site is fully launch-ready.
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-slate-500 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>AI Sydney Engineers</div>
          <div className="flex flex-wrap gap-3">
            <span>Selected public engineering work</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
