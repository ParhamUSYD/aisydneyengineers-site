import {
  DraftingCompass,
  Gauge,
  Microscope,
  ScanSearch,
  Thermometer,
  Wrench,
} from "lucide-react";

export const navigation = [
  { href: "#services", label: "Services" },
  { href: "#team", label: "About us" },
  { href: "#projects", label: "Projects" },
  { href: "#proof", label: "Technical proof" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
];

export const projectCategories = [
  "Mechanical design",
  "Product development",
  "Testing systems",
  "Thermal management",
  "GD&T and tolerance control",
  "Technical documentation",
];

export const stats = [
  { value: "6+", label: "featured public project stories with linked figures" },
  { value: "AS 1100", label: "drawing discipline referenced in the portfolio material" },
  { value: "Multi-sector", label: "work spanning industrial, EV, medical, and lab environments" },
];

export const services = [
  {
    icon: DraftingCompass,
    title: "Mechanical design and CAD development",
    description:
      "Design work covering concept refinement, component detailing, assemblies, fabrication features, and structured engineering documentation.",
  },
  {
    icon: Gauge,
    title: "GD&T and tolerance-focused design",
    description:
      "Datum strategy, interface definition, tolerance stack-up, and repeatability-focused decisions for parts and assemblies that need to work in practice.",
  },
  {
    icon: Microscope,
    title: "Fixtures, test systems, and measurement setups",
    description:
      "Custom fixtures and metrology-oriented systems built for alignment, stability, repeatability, and clear technical validation workflows.",
  },
  {
    icon: Thermometer,
    title: "Thermal management and technical prototyping",
    description:
      "Cooling-related design, passive heat dissipation, experimental rigs, and hardware integration support where performance and buildability both matter.",
  },
];

export const teamMembers = [
{
    name: "Hamid Kaamrava",
    role: "Senior Engineer",
    image: "/images/team/hamid-kaamrava.jpg",
    description:
      "An experienced senior engineer providing technical leadership, project guidance, and strategic engineering insight across multidisciplinary work.",
  },
  {
    name: "Mike Mirjavadi",
    role: "Mechanical Design & Product Development Engineer",
    image: "/images/team/mike-mirjavadi.jpg",
    description:
      "Specialized in mechanical design, CAD development, GD&T, manufacturable product design, and validation-driven engineering solutions.",
  },
  {
    name: "Liam Vatan",
    role: "CFD, Automation & AI Engineer",
    image: "/images/team/liam-vatan.jpg",
    description:
      "Focused on computational engineering, simulation, automation, and AI-enabled technical workflows for advanced engineering applications.",
  },
  {
    name: "Jack Wilson",
    role: "Mechanical Design, 3D Printing & Control Systems Engineer",
    image: "/images/team/jack-wilson.jpg",
    description:
      "Experienced in mechanical design, rapid prototyping, 3D printing, and control-based engineering systems for practical product development.",
  },
];

export const projects = [
  {
    title: "Custom cooling drum for an industrial thermal management system",
    category: "Industrial thermal management",
    stage: "Design, fabrication support, and release documentation",
    summary:
      "A mechanical component designed for a cooling aggregate system where manufacturability, fit-up repeatability, and documentation quality all mattered. The project material supports a real engineering workflow rather than a concept-only model.",
    highlights: [
      "Applied DFMA principles to simplify fabrication, installation, and maintenance access.",
      "Defined critical interfaces with GD&T including datum selection, profile control, positional tolerances, and form-related requirements.",
      "Used tolerance analysis and iterative design review to reduce assembly variation and improve repeatable fit-up.",
      "Selected materials and fastening strategy around operating conditions, durability, and service needs.",
    ],
    deliverables: [
      "Complete CAD models, manufacturing drawings, and design documentation prepared for release.",
      "Production-ready component design supporting reliable integration into the wider cooling aggregate system.",
      "Visuals include fabricated hardware, CAD context, and a detailed engineering drawing extracted from the supplied portfolio deck.",
    ],
    images: [
      {
        src: "/portfolio/cooling-drum-drawing.png",
        alt: "Engineering drawing and model views of the custom cooling drum system.",
      },
      {
        src: "/portfolio/cooling-drum-fabricated.jpeg",
        alt: "Fabricated cooling drum assembly photographed in production context.",
      },
      {
        src: "/portfolio/cooling-drum-cad.jpeg",
        alt: "CAD assembly view showing the cooling drum within its surrounding support structure.",
      },
    ],
  },
  {
    title: "Thermal conductivity metering system for controlled material testing",
    category: "Custom test equipment",
    stage: "Development, risk reduction, and validation",
    summary:
      "A custom-engineered testing system aimed at repeatable thermal conductivity measurement. Even in a compact public format, the deck shows a methodical approach to alignment, sealing, risk management, and stable measurement conditions.",
    highlights: [
      "Applied DFMEA to identify and reduce risk around sealing, alignment, and measurement repeatability.",
      "Used fishbone-style root-cause thinking to investigate likely sources of variation in the test setup.",
      "Performed tolerance stack-up analysis to maintain repeatable specimen positioning and assembly fit.",
      "Engineered fastening, sealing, and interface geometry for functional stability during testing.",
    ],
    deliverables: [
      "CAD models, manufacturing drawings, and assembly documentation prepared for fabrication and validation.",
      "Verification and validation activities used to confirm assembly integrity and consistency of results.",
      "Public figures show representative metering-system components that connect the web presentation back to the original portfolio source.",
    ],
    images: [
      {
        src: "/portfolio/thermal-meter-component-c.png",
        alt: "Rendered component figure from the thermal conductivity metering system.",
      },
      {
        src: "/portfolio/thermal-meter-component-a.png",
        alt: "Annotated component figure from the thermal conductivity metering system.",
      },
      {
        src: "/portfolio/thermal-meter-component-b.png",
        alt: "Additional rendered figure from the thermal conductivity metering system.",
      },
    ],
  },
  {
    title: "Anti-adhesion mold design for silicone phantom casting",
    category: "Medical and prototyping support",
    stage: "Rapid prototyping and verification",
    summary:
      "A mold-development task focused on eliminating sticking during silicone phantom fabrication. The project stands out because it connects CAD geometry, 3D printing, surface treatment, venting, and practical verification into one small but well-resolved engineering problem.",
    highlights: [
      "Designed the dome-shaped cavity in CAD to avoid mechanical locking and support smooth demolding.",
      "Used PLA 3D printing for rapid iteration and dimensional control during mold development.",
      "Applied sanding, acetone vapor treatment, and release preparation to reduce adhesion risk.",
      "Added venting to release trapped air and reduce suction during demolding.",
    ],
    deliverables: [
      "Verification activity confirmed clean release and repeatable casting of the silicone phantom.",
      "Improved surface quality and removed a fabrication bottleneck for later displacement-measurement work.",
      "The site pairs the physical mold image with a technical drawing figure to show both design intent and practical outcome.",
    ],
    images: [
      {
        src: "/portfolio/silicone-mold-photo.png",
        alt: "Finished anti-adhesion mold used for silicone phantom casting.",
      },
      {
        src: "/portfolio/silicone-mold-drawing.png",
        alt: "Dimensioned drawing figure associated with the silicone mold design.",
      },
    ],
  },
  {
    title: "Hand-held stereoscope thermal solution and fin structure development",
    category: "Device development",
    stage: "Thermal-aware design and prototype integration",
    summary:
      "A passive cooling solution built around a fin-based structure for a hand-held stereoscope. The public material supports a design process that balanced heat dissipation, low weight, manufacturability, and integration with the broader device setup.",
    highlights: [
      "Completed 3D CAD development with thermal-aware geometry refinement.",
      "Designed fin layouts to improve convective heat transfer within the device envelope.",
      "Considered material trade-offs across thermal performance, weight, and manufacturability.",
      "Worked with technical stakeholders and suppliers to support fabrication and integration decisions.",
    ],
    deliverables: [
      "A lightweight thermal-management structure intended to improve passive cooling performance.",
      "Fabrication support including laser-cut fin holder development and device-level integration awareness.",
      "Portfolio figures connect the website to both the device rig and the imaging context used around the system.",
    ],
    images: [
      {
        src: "/portfolio/stereoscope-rig.jpg",
        alt: "Close-up image of the stereoscope thermal rig and fin structure during development.",
      },
      {
        src: "/portfolio/stereoscope-camera.jpeg",
        alt: "Imaging setup and camera arrangement associated with the hand-held stereoscope project.",
      },
    ],
  },
  {
    title: "EV battery sample testing fixture",
    category: "EV testing and validation",
    stage: "Fixture design and laboratory implementation",
    summary:
      "A testing fixture for EV battery samples developed around laboratory use, repeatability, and safety. The project is a strong fit for engineering teams that need fixtures to work reliably in real testing environments, not just look tidy in CAD.",
    highlights: [
      "Designed the fixture structure and mounting interfaces in SolidWorks for stable, repeatable use.",
      "Applied GD&T to manage dimensional control and ensure reliable sample positioning.",
      "Selected materials with strength, thermal stability, and electrical safety in mind.",
      "Aligned the design with industrial testing expectations and laboratory execution needs.",
    ],
    deliverables: [
      "Manufacturable fixture design prepared for fabrication and assembly.",
      "Battery testing setup aimed at safer handling, better stability, and repeatable evaluation conditions.",
      "Public figures include both rendered development imagery and analysis-oriented project material from the deck.",
    ],
    images: [
      {
        src: "/portfolio/battery-fixture-analysis.jpeg",
        alt: "Analysis and modelling figure related to the EV battery testing fixture.",
      },
      {
        src: "/portfolio/battery-fixture-render.jpeg",
        alt: "Rendered fixture concept and physical sample context for EV battery testing.",
      },
    ],
  },
  {
    title: "Synchronised camera, force, and displacement measurement system",
    category: "DAQ and measurement systems",
    stage: "Signal integration and timing validation",
    summary:
      "Technical consultancy and implementation support for synchronising camera triggers with force and displacement measurement systems. This work extends the site beyond mechanical parts alone and shows capability in instrumentation-aware engineering support.",
    highlights: [
      "Developed a LabVIEW-based acquisition and synchronisation approach for coordinated measurements.",
      "Integrated camera trigger signals with force and displacement channels through DAQ hardware.",
      "Handled signal conditioning and timing alignment for multi-sensor workflows.",
      "Validated timing behaviour to support more trustworthy experimental data capture.",
    ],
    deliverables: [
      "Precise synchronisation between imaging and mechanical measurement channels.",
      "Improved data reliability for force-displacement analysis and experiment review.",
      "Figures from the source deck include the system overview and LabVIEW implementation environment.",
    ],
    images: [
      {
        src: "/portfolio/sync-system-overview.png",
        alt: "System overview figure showing synchronised measurement and imaging components.",
      },
      {
        src: "/portfolio/sync-labview.png",
        alt: "LabVIEW implementation screen used for synchronised measurement control.",
      },
    ],
  },
];

export const additionalWork = [
  {
    category: "Continuous production equipment",
    title: "Rotary cooling system design",
    description:
      "Mechanical design of a rotary cooling unit for processed concrete material, with SolidWorks modelling, GD&T-based assembly design, shaft-bearing development, and airflow-related thermal considerations.",
  },
  {
    category: "EV instrumentation",
    title: "Force-voltage measurement system",
    description:
      "Integration of force sensors, voltage measurement modules, data acquisition, wiring, calibration, and validation for EV-oriented testing workflows.",
  },
  {
    category: "Standards-aware documentation",
    title: "Detailed drawings and fabrication features",
    description:
      "Portfolio material also references 3D CAD modelling, fabrication detailing, and drawing preparation aligned with AS 1100 expectations.",
  },
  {
    category: "Water tank design",
    title: "Standards-referenced tank modelling",
    description:
      "Additional project material references water tank design according to AS/NZS 4766, broadening the site's evidence of documentation and standards awareness.",
  },
];

export const proofGallery = [
  {
    title: "AS/NZS-referenced water tank design",
    image: "/portfolio/water-tank-drawing.png",
    alt: "Detailed drawing sheet for a water tank design.",
    description:
      "A useful proof point for standards-aware documentation, combining orthographic drawing views with the underlying 3D design model.",
  },
  {
    title: "Water tank model development",
    image: "/portfolio/water-tank-render.png",
    alt: "3D render of a water tank model.",
    description:
      "The public figure adds visual depth to the site and reinforces that the work includes more than isolated part modelling.",
  },
  {
    title: "Additional CAD project sample",
    image: "/portfolio/cad-tank-model.png",
    alt: "CAD model sample from an additional engineering project.",
    description:
      "This figure helps show broader CAD fluency and gives the website a less repetitive project rhythm.",
  },
  {
    title: "SolidWorks instruction and demonstrations",
    image: "/portfolio/solidworks-demo.png",
    alt: "Screenshot of SolidWorks demonstration video material.",
    description:
      "The portfolio also references SolidWorks demonstrations delivered at the University of Sydney, which supports the broader technical communication profile of the practice.",
  },
];

export const processSteps = [
  {
    title: "Define the real engineering problem",
    description:
      "Clarify constraints, interfaces, environmental conditions, manufacturing assumptions, and what success looks like before detail work starts.",
  },
  {
    title: "Develop the design with buildability in mind",
    description:
      "Move through CAD, interface definition, geometry refinement, and material or fastening decisions with fabrication and assembly in view.",
  },
  {
    title: "Check risk, repeatability, and verification needs",
    description:
      "Use tolerance analysis, DFMA, DFMEA, and validation-oriented thinking where the job calls for it so downstream issues are reduced early.",
  },
  {
    title: "Deliver documentation teams can act on",
    description:
      "Prepare drawings, models, fixture details, and technical information that support fabrication, testing, review, or the next project phase.",
  },
];

export const faqs = [
  {
    question: "What kinds of projects fit this website best?",
    answer:
      "The strongest fit is work that needs practical mechanical design, fixtures, test systems, thermal problem-solving, CAD documentation, or technically grounded product-development support.",
  },
  {
    question: "Are these full public case studies or selected examples?",
    answer:
      "They are selected public examples. The source deck explicitly notes that some details, drawings, or components are omitted or simplified because of confidentiality and IP constraints.",
  },
  {
    question: "Can this site grow beyond the current project set?",
    answer:
      "Yes. The new build is data-driven, so adding projects, images, biographies, and updated contact details is a content update rather than a structural rewrite.",
  },
  {
    question: "What still needs to be confirmed before launch?",
    answer:
      "The main remaining items are final public contact details and any fuller public profile material you want included for Liam Vatankhah or additional team members.",
  },
];
