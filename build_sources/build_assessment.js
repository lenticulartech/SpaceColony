// Restructured Architecture Assessment
// Follows IBM IT Architect Assistant artifact structure
// No company attribution, author footer on each page
// Voice calibrated to Craig's academic writing samples

const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, PageOrientation, LevelFormat,
  HeadingLevel, BorderStyle, WidthType, ShadingType, PageNumber, PageBreak,
  PositionalTab, PositionalTabAlignment, PositionalTabRelativeTo, PositionalTabLeader,
  TabStopType, TabStopPosition, VerticalAlign,
  C, W, borders,
  p, pb, pi, leadIn, h1, h1NoBreak, h2, h3, spacer, PB,
  tcell, mkTable, figure,
  fs
} = require('./lib2.js');

const all = [];

// ============================================================
// COVER PAGE
// ============================================================
all.push(
  spacer(2400),
  new Paragraph({
    children: [new TextRun({ text: "Architecture Assessment", size: 48, bold: true, color: C.accent })],
    alignment: AlignmentType.CENTER,
    spacing: { before: 0, after: 200 },
  }),
  new Paragraph({
    children: [new TextRun({ text: "Extraplanetary Infrastructure Program", size: 32, color: C.text })],
    alignment: AlignmentType.CENTER,
    spacing: { before: 0, after: 1000 },
  }),
  new Table({
    width: { size: 7200, type: WidthType.DXA },
    columnWidths: [3000, 4200],
    alignment: AlignmentType.CENTER,
    rows: [
      new TableRow({ children: [
        tcell("Prepared for", { width: 3000, bold: true, fill: C.subtle }),
        tcell("Global Alliance for Extraplanetary Adaptation (GAEA)", { width: 4200 })
      ]}),
      new TableRow({ children: [
        tcell("Document type", { width: 3000, bold: true, fill: C.subtle }),
        tcell("Architecture Assessment", { width: 4200 })
      ]}),
      new TableRow({ children: [
        tcell("Version", { width: 3000, bold: true, fill: C.subtle }),
        tcell("1.0", { width: 4200 })
      ]}),
      new TableRow({ children: [
        tcell("Date", { width: 3000, bold: true, fill: C.subtle }),
        tcell("April 2026", { width: 4200 })
      ]}),
      new TableRow({ children: [
        tcell("Author", { width: 3000, bold: true, fill: C.subtle }),
        tcell("Craig Nash", { width: 4200 })
      ]}),
      new TableRow({ children: [
        tcell("Status", { width: 3000, bold: true, fill: C.subtle }),
        tcell("For client review", { width: 4200 })
      ]}),
      new TableRow({ children: [
        tcell("Distribution", { width: 3000, bold: true, fill: C.subtle }),
        tcell("GAEA internal; public release permitted", { width: 4200 })
      ]}),
    ]
  }),
  spacer(800),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [new TextRun({ text: "This document presents the recommended extraplanetary infrastructure architecture", size: 20, italics: true, color: C.muted })],
    spacing: { before: 0, after: 60 },
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [new TextRun({ text: "for the 25-year planning horizon, including component model,", size: 20, italics: true, color: C.muted })],
    spacing: { before: 0, after: 60 },
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [new TextRun({ text: "phased deployment, and associated risks.", size: 20, italics: true, color: C.muted })],
    spacing: { before: 0, after: 60 },
  }),
  PB,
);

// ============================================================
// DOCUMENT CONTROL
// ============================================================
all.push(
  h1NoBreak("Document Control"),

  h3("Revision History"),
  mkTable(
    [1400, 1800, 2600, 3560],
    ["Version", "Date", "Author", "Summary of Changes"],
    [
      ["0.1", "March 2026", "Craig Nash", "Initial working draft, baseline framework established"],
      ["0.2", "March 2026", "Craig Nash", "Stakeholder analysis expanded, governance requirements added"],
      ["0.3", "April 2026", "Craig Nash", "Evidence base consolidated, scoring corrections applied"],
      ["0.4", "April 2026", "Craig Nash", "Gravity threshold analysis refined, sensitivity scenarios tested"],
      ["1.0", "April 2026", "Craig Nash", "Released for client review"],
    ]
  ),

  h3("Related Documents"),
  mkTable(
    [2600, 6760],
    ["Document", "Purpose"],
    [
      ["Methodology and Evidence Appendix", "Framework derivation, scoring mathematics, source registry, gravity threshold worked example"],
      ["Scoring Data Workbook", "Evidence table, normalization formulas, weighted scoring matrix, sensitivity calculations"],
      ["Interactive Scoring Tool", "Web-based tool for scenario modeling, weight adjustment, and evidence contribution"],
    ]
  ),

  h3("Review and Approval"),
  p("This document is released at Version 1.0 for review by the client and designated technical reviewers. Subsequent revisions are expected as evidence is contributed, scenarios are refined, and stakeholder feedback is incorporated. The framework supports versioning. Each revision publishes a change log indicating what moved, why, and which source evidence supports the change."),

  h3("Conventions"),
  p("Requirements are identified using three-letter prefixes (FR for functional requirements, NFR for non-functional requirements). Components are identified by tier prefix and number (PRI for primary, RES for resource, HAB for habitation). Sources are cited using short names that resolve to the full citation in the Methodology Appendix source registry."),
  p("Terms defined in the Glossary appear in their first in-text occurrence without special formatting. Acronyms are expanded on first use. The document uses American English spelling and avoids jargon where plain language works."),
);

// ============================================================
// SECTION 1: OVERVIEW
// ============================================================
all.push(
  h1("1. Overview"),

  p("Humanity is preparing to extend civilizational infrastructure beyond Earth for the first time. The question of where that infrastructure should go is often framed as a contest between destinations, with advocates for each arguing that their preferred option best serves long-term survival, economic return, or scientific value. This framing is incomplete. Destinations are platforms. Platforms have distinct native characteristics, and a serious program will allocate workloads to whichever platform each workload fits best."),

  p("This document presents the recommended architecture for the Global Alliance for Extraplanetary Adaptation's 25-year planning horizon. The recommendation is a hybrid architecture built from Earth, the Moon, and orbital rotating habitats as complementary layers. It places Earth at the center of the architecture rather than at its periphery. It separates the requirements that physics cannot relax from the requirements that engineering can solve. It chooses conservative defaults where evidence is incomplete and where decisions are difficult to reverse."),

  p("The scoring results support the recommendation under all tested sensitivity scenarios. Orbital rotating habitats score highest overall and pass every Must-Have requirement that current evidence can demonstrate. The Moon scores second and fails only on native gravity, a constraint that disqualifies it as a permanent habitation destination but does not disqualify it from other productive roles. Mars was evaluated as a candidate destination and is not part of the recommended architecture. It fails five Must-Have requirements on physics constraints that cannot be addressed within the horizon. The data is documented in Section 9 and the Methodology Appendix for anyone tracking Mars as a separate program."),

  p("What follows is the structured case for this architecture. Section 2 describes the business challenge the architecture is meant to solve. Sections 3 through 5 establish scope, stakeholders, and the system context within which the architecture operates. Sections 6 and 7 document the architectural decisions and principles that shape the design. Sections 8 and 9 present the functional and non-functional requirements. Sections 10 and 11 describe the component and operational models. Sections 12 through 14 document the risks, RACI, and sizing estimates. Section 15 states the recommendation. Section 16 is the glossary."),
);

// ============================================================
// SECTION 2: BUSINESS CHALLENGE
// ============================================================
all.push(
  h1("2. Business Challenge"),

  h2("2.1 Problem Statement"),
  p("Humanity has outgrown Earth as the sole platform for civilizational infrastructure. Terrestrial carrying capacity is declining under combined pressures from climate change, resource depletion, and concentration of civilizational risk. Governments, commercial operators, and scientific institutions have begun investing in off-Earth infrastructure, but these investments are not coordinated against a shared architecture. Each actor is making decisions optimized for its own narrow goals, with limited attention to how those decisions fit together or what the resulting system will actually look like in 25 years."),
  p("GAEA was established to provide this coordination. Its mandate is to define a target architecture for the extraplanetary infrastructure program, align investments against that architecture, and manage the governance issues that arise when multiple sovereign actors operate shared infrastructure. The architecture assessment in this document is the first deliverable under that mandate."),

  h2("2.2 Why This Matters"),
  p("Three pressures make this work time-sensitive:"),

  leadIn("Capital commitments are being made now."),
  p("National agency budgets, commercial station investments, and supplier contracts for the next decade are already being decided. A coherent architecture now directs those commitments toward complementary outcomes. A coherent architecture five years from now means five years of commitments have been spent on work that may not fit together."),

  leadIn("Some decisions are difficult to reverse."),
  p("A colony, once established, cannot be easily recalled. A habitat built on an assumption that later proves wrong becomes a liability rather than an asset. Architecture decisions about permanent infrastructure warrant more care than architecture decisions about systems that can be rebuilt every few years. Solutions architecture discipline treats this asymmetry explicitly."),

  leadIn("Public trust is fragile."),
  p("The program depends on sustained public investment across multiple national budgets. If the first generation of investments produces visible waste or visible failure, the second generation of investments will not be funded. A coherent architecture with traceable decisions and explicit risk management is the best defense against this outcome."),

  h2("2.3 Desired Outcomes"),
  p("The architecture is intended to deliver the following outcomes over the 25-year horizon:"),

  mkTable(
    [3000, 6360],
    ["Outcome", "Measure of Success"],
    [
      ["Sustained human presence off Earth", "Continuous crewed operations at two or more off-Earth destinations by 2035"],
      ["Multi-generational habitation capability", "At least one habitation tier demonstrates multi-year family-scale occupancy with documented physiological outcomes by 2045"],
      ["Economic self-sufficiency", "Off-Earth operations generate revenue sufficient to fund baseline operations without subsidy by 2045"],
      ["Civilizational risk diversification", "Population and critical infrastructure distributed across at least three geographically independent tiers"],
      ["Scientific expansion", "Human science access extended to the Moon and orbital environments as a matter of routine operations; Mars science access sustained through separate programs"],
      ["Governance maturity", "Property rights, jurisdiction, and liability frameworks established for all tiers"],
    ]
  ),
);

// ============================================================
// SECTION 3: SCOPE AND OBJECTIVES
// ============================================================
all.push(
  h1("3. Scope and Objectives"),

  h2("3.1 In Scope"),
  p("The assessment evaluates candidate destinations for sustained human presence on a 25-year planning horizon. Three destinations are evaluated: the Moon (surface and near-space staging locations including L1 and L2), Mars (surface and Mars orbit), and orbital free-space habitats (low Earth orbit, equatorial low Earth orbit, and cislunar space). Mars was evaluated as a candidate and is disqualified from the recommended architecture by the Must-Have gate check (Section 9). The Mars data is retained in the deliverable for reviewers, for future reassessment, and for handoff to any Mars-specific program."),
  p("The deliverable includes a system context description, architectural decisions with traceability, functional and non-functional requirements, a component model for the recommended architecture, an operational model showing phased deployment, a RAID register, a RACI matrix, sizing estimates, and the final recommendation."),

  h2("3.2 Out of Scope"),
  p("The following items are explicitly out of scope:"),
  mkTable(
    [3000, 6360],
    ["Out of Scope", "Rationale"],
    [
      ["Vehicle and propulsion system selection", "Mission-level engineering follows architecture decisions, not the reverse. Engineering organizations will perform this work once the destination architecture is settled."],
      ["Crew sizing and habitat sizing at flight-ready detail", "Requires mission-level engineering inputs not yet available."],
      ["Destinations beyond the inner solar system", "Ceres, the outer planets, and interstellar targets fall outside the 25-year horizon."],
      ["Venus", "Surface conditions cannot be addressed within the horizon."],
      ["Terraforming and planetary geoengineering", "Timescales exceed the horizon by orders of magnitude."],
      ["Specific vendor selection", "Architecture should not pre-commit to specific commercial providers. Vendor selection follows a separate procurement process."],
    ]
  ),

  h2("3.3 Assessment Objectives"),
  p("The assessment is structured to deliver three objectives:"),
  p("1. A defensible architecture that can withstand hostile technical review. Every conclusion must be traceable to requirements, and every requirement must be traceable to evidence."),
  p("2. A falsifiable architecture that can be improved over time. The framework accepts new evidence, updates scoring accordingly, and documents version history so that changes are auditable."),
  p("3. An adaptable architecture that can absorb new information without collapsing. If future research changes key assumptions, the architecture phases permit revision at defined gates rather than forcing starts from scratch."),

  h2("3.4 Time Horizon"),
  p("The 25-year horizon aligns with current planning cycles for major spacefaring agencies and with the operational maturity timeline for current infrastructure programs. Extending the horizon to 50 or 100 years shifts scoring on requirements sensitive to technology maturation, particularly in-situ resource utilization, rotating habitat construction, and advanced propulsion. The framework supports these alternate horizons as scenario variations, but the base recommendation is calibrated to 25 years."),

  h2("3.5 Success Criteria for This Document"),
  p("This document succeeds if it allows a new reader to reach the same architectural conclusion from the same evidence, or to propose a different conclusion with specific alternative evidence. It fails if readers cannot trace a conclusion to its supporting requirements and evidence. Section 7 through Section 11 are organized around this traceability requirement."),
);

// ============================================================
// SECTION 4: KEY STAKEHOLDERS
// ============================================================
all.push(
  h1("4. Key Stakeholders"),

  p("The architecture is a multi-stakeholder system. No single stakeholder group's preferences dominate the requirements. The stakeholder analysis below documents who the architecture serves, what each group cares about, and what influence each has on the decisions that shape the design."),

  h2("4.1 Stakeholder Register"),

  mkTable(
    [2400, 3200, 1800, 1960],
    ["Stakeholder Group", "Representative Organizations", "Interest Level", "Influence"],
    [
      ["Spacefaring agencies", "NASA, ESA, JAXA, CNSA, Roscosmos", "High", "High"],
      ["Private aerospace", "SpaceX, Blue Origin, ULA, Rocket Lab", "High", "High"],
      ["Commercial station operators", "Axiom Space, Vast, Voyager Space, Blue Origin", "High", "Moderate-High"],
      ["Scientific community", "NASEM, national academies, university research consortia", "High", "Moderate"],
      ["Commercial resource extractors", "Astroforge, TransAstra, emerging lunar mining", "Moderate-High", "Moderate"],
      ["International treaty bodies", "UN COPUOS, Artemis Accords signatories", "Moderate", "Moderate"],
      ["Insurance and finance", "Lloyd's space syndicate, sovereign wealth, venture capital", "Moderate", "Moderate (growing)"],
      ["Defense and security", "US Space Force, allied space commands", "Moderate", "Moderate"],
      ["Colonist populations", "Future residents, crew candidates", "High", "Low (growing with population)"],
      ["Earth-bound populations", "Taxpayers, public opinion, media audiences", "Moderate (aggregate)", "Moderate via democratic pressure"],
    ]
  ),

  h2("4.2 Power-Interest Positioning"),
  p("Classifying stakeholders on the standard power-interest grid informs the engagement approach. The grid reflects current conditions. Positions shift over time as commercial activity scales, as colonist populations grow, and as governance frameworks mature."),

  mkTable(
    [2100, 3620, 3640],
    ["", "Low Interest", "High Interest"],
    [
      ["High Power", "Defense and security (monitor, engage when material)", "Spacefaring agencies, private aerospace, station operators (manage closely)"],
      ["Low Power", "Earth-bound general populations (keep informed through public communication)", "Colonist populations, scientific community, resource extractors (keep informed, consult where feasible)"],
    ]
  ),

  h2("4.3 Stakeholder Incentive Misalignments"),
  p("Three incentive misalignments affect requirement weighting and deserve explicit attention:"),

  leadIn("Agencies operate on electoral and funding-cycle timescales."),
  p("Budgets are authorized in annual increments and programs are justified against milestones visible to legislators. This biases decision-making toward destinations that produce near-term visible results over destinations with stronger long-term viability. The assessment guards against this bias by weighting long-horizon requirements at levels proportional to their actual importance rather than to their political visibility."),

  leadIn("Commercial providers match the roadmaps of their largest customers."),
  p("If agencies announce Mars priorities, private capital follows because agency contracts represent the dominant revenue opportunity. This creates self-reinforcing narratives that do not necessarily reflect underlying platform viability. The assessment documents private investment flow separately from technical merit so that the two can be evaluated independently."),

  leadIn("Colonist populations cannot advocate at the point of decision."),
  p("Future residents of a permanent colony are stakeholders in outcomes that are being decided before those residents exist. A colony established under assumptions that later prove wrong cannot easily be recalled. Conservative requirement-setting is a form of protection for stakeholders who cannot speak for themselves at the decision point. This principle drives the conservative default applied to the gravity requirement."),
);

// ============================================================
// SECTION 5: SYSTEM CONTEXT
// ============================================================
all.push(
  h1("5. System Context"),

  p("The System Context diagram shows the extraplanetary infrastructure program and the external actors with which it interacts. The program is the central system under analysis. The external actors are the stakeholder groups catalogued in Section 4, together with the primary flows between each actor and the program. The diagram establishes what is inside the boundary of the architecture and what is outside."),

  ...figure('/home/claude/diagrams/system_context.png', 580, 377, 'Figure 1. System Context'),

  h2("5.1 Program Boundary"),
  p("The program includes three primary activities within its boundary: destination architecture (the platform decisions about which destinations are used for which workloads), workload allocation (the placement of specific capabilities such as habitation, research, or resource extraction), and capital planning (the phased commitment of resources against the architecture)."),
  p("Outside the boundary are all stakeholder organizations and their internal operations. The program does not operate transport systems, build habitats, or conduct scientific research. It coordinates the actors that do."),

  h2("5.2 Primary Interactions"),

  mkTable(
    [2600, 6760],
    ["Actor", "Primary Interaction with the Program"],
    [
      ["Spacefaring agencies", "Provide funding, define national-level requirements, operate flagship missions that anchor the architecture"],
      ["Treaty bodies", "Impose compliance requirements (Outer Space Treaty, Artemis Accords, COPUOS resolutions)"],
      ["Transport providers", "Supply transport capacity against tier-level demand; compete on cost, cadence, and reliability"],
      ["Station operators", "Deliver habitation services at commercial scale; primary near-term habitation tier suppliers"],
      ["Scientific community", "Supply research inputs (planetary science, biological studies, materials science); receive research access in return"],
      ["Resource extractors", "Supply extracted resources (water, propellant, regolith) from the resource tier to the habitation tier"],
      ["Colonist populations", "Receive habitation services; inform ongoing requirements as populations grow"],
      ["Earth-bound populations", "Provide the public mandate that sustains agency funding; receive transparency on program progress"],
      ["Insurance and finance", "Supply risk capital; receive risk information to support pricing and coverage"],
      ["Defense and security", "Provide security context; the architecture is designed to be defensible and non-militarized"],
    ]
  ),

  h2("5.3 External Dependencies"),
  p("The architecture depends on external conditions that the program does not control. The most material external dependencies are:"),
  p("Continuation of the Outer Space Treaty framework. A collapse of international space law would force a rework of governance provisions and would likely slow commercial investment."),
  p("Sustained downward trajectory of launch costs. The cost scoring assumes Starship-class transport economics materialize. If launch costs plateau above current projections, relative scoring holds but absolute capital requirements increase."),
  p("Availability of fission power for surface applications. Kilopower-class reactors are at TRL 5 and must reach TRL 8-9 on the Phase 1 timeline. A delay here delays the resource tier."),
  p("Biological research on partial-gravity physiology. The gravity threshold is set conservatively because partial-gravity multi-generational physiology has not been tested. Research outcomes within the horizon may shift this threshold."),
);

// ============================================================
// SECTION 6: ARCHITECTURAL DECISIONS
// ============================================================
all.push(
  h1("6. Architectural Decisions"),

  p("The architecture is the product of a sequence of explicit decisions. Each decision addresses a specific issue, weighs alternatives against requirements, and records the selected alternative with its rationale. The decisions are documented in the table below for traceability. Decision IDs referenced in subsequent sections resolve to this table."),

  h2("6.1 Decision Register"),

  mkTable(
    [900, 2700, 2800, 2960],
    ["ID", "Decision", "Alternatives Considered", "Selected and Rationale"],
    [
      ["AD-01", "Treat destinations as complementary platforms rather than competing options", "Single-destination primary (Moon, Mars, or Orbital), rotation-only on one destination", "Hybrid multi-tier architecture. No single destination satisfies all Must-Have requirements. Hybrid allocates workloads to native-best platforms."],
      ["AD-02", "Retain Earth as the hardened primary tier", "Relocate primary infrastructure to an off-Earth destination", "Earth remains primary. No credible threat within the horizon renders Earth uninhabitable. All off-Earth destinations depend on Earth for support."],
      ["AD-03", "Set gravity threshold for permanent habitation at 1G equivalent", "0.38G (Mars), 0.67G (direct-evidence inflection), 1G (Earth equivalent)", "1G equivalent via rotation. Partial-gravity multi-generational physiology has never been tested. Conservative default protects irreversible decisions."],
      ["AD-04", "Classify the Moon as resource layer, not habitation tier", "Moon as primary habitation (fails gravity), Moon as unused", "Resource layer. Gravity disqualifies permanent residence; physics permits productive resource extraction and staging."],
      ["AD-05", "Exclude Mars from the recommended architecture", "Mars as primary habitation (fails five Must-Haves), Mars as edge/deferred tier", "Excluded. Mars fails five Must-Have gates on physics constraints not addressable within the horizon. The Mars scoring is retained for reference and for handoff to any Mars-specific program, but Mars is not part of the recommended architecture."],
      ["AD-06", "Place habitation tier in orbital rotating structures", "Surface habitats with medical countermeasures, small stations only (no colony scale)", "Rotating structures. Only platform where gravity, radiation, and latency are all engineered rather than inherited."],
      ["AD-07", "Sequence deployment in three phases with gate reviews", "Single long-horizon commitment, continuous incremental deployment", "Phased with gates. Gates at 2032 and 2038 permit evidence-based revision before subsequent capital commitments."],
      ["AD-08", "Source resource-tier materials from the Moon in preference to Earth launch", "Earth launch for all materials, asteroid sourcing from Phase 1", "Lunar sourcing. Lunar water and regolith are cheaper per delivered kilogram to cislunar destinations than Earth launch. Asteroid sourcing deferred to Phase 3."],
      ["AD-09", "Apply conservative defaults where evidence is incomplete and reversibility is low", "Aggressive defaults accepting higher risk for faster progress", "Conservative defaults. Irreversible decisions warrant disproportionate protection against assumption failure."],
      ["AD-10", "Adopt open methodology with versioned publication", "Proprietary methodology, one-time publication", "Open methodology, versioned. Transparency supports external review and enables the framework to improve with use."],
    ]
  ),

  h2("6.2 Decision Traceability"),
  p("Each architectural decision traces to one or more requirements. AD-03 (gravity threshold) traces to NFR-01 (gravity) and to the conservative defaults principle (AP-03). AD-01 (hybrid architecture) traces to the Must-Have gate check in Section 9, where no single destination passes every gate. AD-06 (orbital rotating habitats) traces to NFR-01 and to the risk register item covering rotation feasibility. Traceability is maintained in the scoring workbook and the Methodology and Evidence Appendix."),

  h2("6.3 Decision Review Cadence"),
  p("Decisions AD-03 and AD-08 are sensitive to external evidence that may change within the horizon. Partial-gravity physiology research could move AD-03 downward. Lunar ISRU outcomes could affect AD-08 source-mix assumptions. These decisions are reviewed at each phase gate. AD-05 (Mars exclusion) is revisited only if biological research demonstrates partial-gravity viability and if EDL technology matures; absent both, Mars remains outside the recommended architecture. Decisions AD-01, AD-02, AD-04, AD-06, and AD-09 rest on structural considerations that are not expected to change within the horizon."),
);

// ============================================================
// SECTION 7: ARCHITECTURE PRINCIPLES
// ============================================================
all.push(
  h1("7. Architecture Principles"),

  p("Architecture principles govern decisions throughout the program. Where a principle and a specific decision conflict, the principle wins unless the conflict is explicitly resolved by documented exception. The principles below capture commitments that apply across every tier, every requirement, and every phase of the architecture."),

  h2("7.1 Principles"),

  mkTable(
    [900, 2800, 5660],
    ["ID", "Principle", "Implication"],
    [
      ["AP-01", "Physics before engineering", "Physics constraints determine what is possible. Engineering constraints determine what is affordable. Physics takes precedence, and the architecture does not depend on engineering bypassing physics."],
      ["AP-02", "Evidence before conclusion", "Every claim in the architecture is traceable to sourced evidence or is flagged as an assumption with documented rationale. No claim relies on authority alone."],
      ["AP-03", "Conservative defaults for irreversible decisions", "Where evidence is incomplete and the decision is difficult to reverse, the architecture defaults to the option that fails more gracefully if assumptions prove wrong."],
      ["AP-04", "Earth is the primary", "The architecture protects Earth before it extends beyond Earth. Extraplanetary infrastructure is additive to terrestrial civilization, not a replacement for it."],
      ["AP-05", "Workloads follow native fit", "Each destination hosts the workloads that its native characteristics support. No destination is forced into a role its physics does not permit."],
      ["AP-06", "Phased commitment with gated review", "Capital commitment proceeds in phases. Each phase closes before the next phase commits. Gates require explicit evidence-based go/no-go decisions."],
      ["AP-07", "Open methodology and falsifiability", "The framework is public, versioned, and open to external contribution. Conclusions are stated in a form that allows them to be disproven by new evidence."],
      ["AP-08", "Governance before scale", "Legal and regulatory frameworks must mature in parallel with infrastructure capability. Scaling operations beyond governance frameworks creates disputes that undermine the program."],
    ]
  ),

  h2("7.2 How Principles Are Applied"),
  p("Principles are not decorative. When requirements conflict, principles resolve the conflict. When scoring produces a high-weighted destination that fails a Must-Have, AP-01 ensures the Must-Have wins. When a requirement lacks direct evidence, AP-02 forces either substantiation or explicit assumption labeling. When gravity physiology evidence is incomplete, AP-03 selects the conservative default. The principles are the glue that keeps the specific requirements and decisions consistent with each other."),
);

// ============================================================
// SECTION 8: FUNCTIONAL REQUIREMENTS
// ============================================================
all.push(
  h1("8. Functional Requirements"),

  p("Functional requirements state what the architecture must do. They are written as capabilities the system must deliver, phrased in active terms. Functional requirements do not describe levels of performance. That belongs in non-functional requirements (Section 9)."),

  h2("8.1 Functional Requirements Register"),

  mkTable(
    [900, 3200, 3200, 2060],
    ["ID", "Requirement", "Description", "Priority"],
    [
      ["FR-01", "Provide permanent human habitation", "The architecture shall provide at least one tier capable of supporting permanent, multi-generational human habitation", "Must"],
      ["FR-02", "Provide resource extraction", "The architecture shall provide capability to extract water, propellant, and construction materials from off-Earth bodies", "Must"],
      ["FR-03", "Provide crewed transport between tiers", "The architecture shall provide crewed transport between Earth and each other tier at planned cadence", "Must"],
      ["FR-04", "Provide cargo transport between tiers", "The architecture shall provide cargo transport sized to sustain each tier's operational needs", "Must"],
      ["FR-05", "Provide closed-loop life support", "Each habitation component shall provide closed-loop life support with documented recovery rates for water, oxygen, and waste", "Must"],
      ["FR-06", "Provide radiation protection", "Each crewed component shall provide radiation shielding that keeps career exposure within NASA-STD-3001 limits", "Must"],
      ["FR-07", "Provide emergency return", "Each crewed component shall provide an emergency return path that meets the tier's Recovery Time Objective", "Must"],
      ["FR-08", "Support scientific research operations", "The architecture shall support sustained crewed and robotic scientific research at each tier", "Should"],
      ["FR-09", "Support commercial revenue generation", "The architecture shall support commercial revenue from at least one tier within the horizon", "Should"],
      ["FR-10", "Support inter-tier communication", "The architecture shall provide continuous data communication between Earth and each other tier", "Must"],
      ["FR-11", "Support crew rotation and resupply", "The architecture shall support regular crew rotation and resupply at the cadence required by each tier", "Must"],
      ["FR-12", "Support monitoring and incident response", "The architecture shall provide monitoring and incident response capability for each crewed component, proportional to that component's emergency return time", "Must"],
      ["FR-13", "Support governance and compliance operations", "The architecture shall operate in compliance with Outer Space Treaty provisions and applicable accords", "Must"],
      ["FR-14", "Support capacity scaling", "The architecture shall support growth from Phase 1 baseline to Phase 3 colony scale without architectural rework", "Should"],
    ]
  ),
);

// ============================================================
// SECTION 9: NON-FUNCTIONAL REQUIREMENTS
// ============================================================
all.push(
  h1("9. Non-Functional Requirements"),

  p("Non-functional requirements state the qualities and performance levels the architecture must meet. They are the measurable criteria against which destinations are evaluated. This section lists the requirements, their priorities under MoSCoW classification, and the outcome of the Must-Have gate check for each candidate destination."),
  p("The gate check is performed before weighted scoring aggregation. A destination that fails any Must-Have requirement cannot be recommended. Mars fails five Must-Have gates on physics constraints not addressable within the horizon and is disqualified from the recommended architecture. The Moon fails one gate (gravity) and is not viable as a habitation tier, but its other gates pass and support its use as a resource tier. Orbital rotating habitats pass every gate that current evidence can demonstrate."),

  h2("9.1 Non-Functional Requirements Register"),

  mkTable(
    [900, 2800, 1600, 1400, 1200, 1460],
    ["ID", "Requirement", "Threshold", "Priority", "Moon", "Mars / Orbital"],
    [
      ["NFR-01", "Gravity for permanent habitation", ">=1G equivalent (conservative)", "Must", "FAIL (0.166G)", "Mars FAIL (0.378G) / Orbital PASS (rotation)"],
      ["NFR-02", "Radiation exposure, career", "<=600 mSv (NASA-STD-3001)", "Must", "PASS (shielded)", "Mars PASS (subsurface) / Orbital PASS (ELEO + shield)"],
      ["NFR-03", "Closed-loop ECLSS water recovery", ">=98 percent", "Must", "PASS", "PASS / PASS"],
      ["NFR-04", "Closed-loop ECLSS O2 recovery", ">=85 percent", "Must", "PASS", "PASS / PASS"],
      ["NFR-05", "Recovery Time Objective (emergency return)", "<=14 days for crewed ops", "Must", "PASS (3 days)", "Mars FAIL (6+ months) / Orbital PASS (hours)"],
      ["NFR-06", "Recovery Point Objective (resupply)", "<=90 days", "Must", "PASS (continuous)", "Mars FAIL (26 months) / Orbital PASS (continuous)"],
      ["NFR-07", "Transport cost per kilogram", "<=$1000/kg delivered to tier", "Must", "PASS", "Mars FAIL / Orbital PASS"],
      ["NFR-08", "Failure expected value", "<=$1B annual EV per tier", "Must", "PASS", "Mars FAIL ($3.75B) / Orbital PASS"],
      ["NFR-09", "Communication latency to Earth", "<=5 sec for real-time ops", "Should", "PASS (1.3 sec)", "Mars FAIL (3-22 min) / Orbital PASS (~0 sec)"],
      ["NFR-10", "Energy availability", "Continuous operational power", "Should", "Partial (night gap)", "Mars partial (dust) / Orbital PASS"],
      ["NFR-11", "ISRU capability at tier level", "Water, O2, propellant production", "Should", "Strong", "Mars strong (future) / Orbital none (supplied)"],
      ["NFR-12", "Population scalability", "Single-tier >=1000 capacity", "Should", "Limited", "Mars theoretical / Orbital strong"],
      ["NFR-13", "Behavioral health support", "Demonstrated multi-year tolerance", "Must", "Manageable", "Mars hardest / Orbital best"],
      ["NFR-14", "Maintenance crew time", "<=20 percent of crew hours", "Should", "Moderate", "Mars high / Orbital low"],
      ["NFR-15", "Automation and autonomy", "Tier-appropriate autonomy level", "Must", "Teleop viable", "Mars full autonomy required / Orbital teleop viable"],
      ["NFR-16", "Monitoring and incident response", "Proportional to RTO", "Must", "Near real-time", "Mars delayed / Orbital real-time"],
      ["NFR-17", "Physical and information security", "Treaty-compliant, threat-appropriate", "Must", "Achievable", "Achievable / Achievable"],
      ["NFR-18", "Strategic positioning", "Near-term commercial relevance", "Should", "Strong", "Mars long-term / Orbital near-term strong"],
      ["NFR-19", "Technology transferability", "Reuse across tiers", "Could", "Strong", "Mars narrow / Orbital broad"],
      ["NFR-20", "Standard interface compatibility", "Interop with other tiers", "Should", "Emerging", "Mars immature / Orbital mature"],
      ["NFR-21", "Resource consumption vs renewal", "Demonstrable closed-loop trajectory", "Should", "Partial", "Partial / Supplied"],
      ["NFR-22", "Closed-loop waste management", "Demonstrated at colony scale", "Should", "Feasible", "Required / ISS heritage"],
      ["NFR-23", "Standard interface compatibility (governance)", "Treaty, property rights, jurisdiction", "Must", "Maturing", "Immature / Maturing"],
      ["NFR-24", "Time to operational capacity", "<=10 years from commitment", "Should", "2-4 years", "Mars 15+ years / Orbital 3-5 small, 15-20 colony"],
      ["NFR-25", "Capital to self-sustaining", "Bounded, projectable", "Should", "$50-80B", "Mars $200-400B / Orbital $100-150B small"],
    ]
  ),

  h2("9.2 MoSCoW Summary"),
  p("The Must-Have set contains 15 requirements. A destination failing any Must-Have cannot be recommended as a sole solution. The gate results below determine which destinations remain viable before weighted scoring is aggregated:"),

  mkTable(
    [2200, 2300, 2400, 2460],
    ["Destination", "Must-Haves Passed", "Must-Haves Failed", "Gate Status"],
    [
      ["Moon", "14 of 15", "NFR-01 (gravity)", "Not viable as sole habitation tier"],
      ["Mars", "10 of 15", "NFR-01, NFR-05, NFR-06, NFR-07, NFR-08", "Not viable as sole habitation tier"],
      ["Orbital (rotating)", "15 of 15", "None", "Viable as primary habitation tier"],
    ]
  ),

  h2("9.3 Weighted Scoring Summary"),
  p("After the gate check, remaining destinations are aggregated using weighted scoring across all 25 requirements. Weights range from 1 to 10 and reflect the relative importance of each requirement within its tier. The maximum possible score is 1,670 (sum of weights multiplied by 10). Full scoring mathematics are documented in the Methodology and Evidence Appendix."),

  mkTable(
    [2400, 2200, 2200, 2560],
    ["Destination", "Weighted Score", "Percentage", "Ranking"],
    [
      ["Orbital rotating habitats", "1,186 / 1,670", "71.0%", "1st"],
      ["Moon", "1,055 / 1,670", "63.2%", "2nd"],
      ["Mars", "527 / 1,670", "31.6%", "3rd"],
    ]
  ),

  h2("9.4 Sensitivity Analysis Summary"),
  p("The ranking was stress-tested across six sensitivity scenarios: best-case Mars assumptions, most-favorable lunar assumptions, cost-weighted preferences, resilience-weighted preferences, aggressive technology maturation timelines, and conservative maturation timelines. The ranking did not change in any scenario. Orbital ranked first in all six. The Moon ranked second in all six. Mars ranked third in all six. Full sensitivity calculations are in the Methodology and Evidence Appendix."),
);

// ============================================================
// SECTION 10: COMPONENT MODEL
// ============================================================
all.push(
  h1("10. Component Model"),

  p("The component model describes the architecture as a set of named components organized into three tiers. Each component has a designated role, a set of workloads it hosts, and explicit dependencies on other components. The model is the structural blueprint for the recommended architecture."),

  ...figure('/home/claude/diagrams/component_model.png', 620, 403, 'Figure 2. Component Model'),

  h2("10.1 Tier Definitions"),

  mkTable(
    [2000, 2400, 4960],
    ["Tier", "Role", "Destination"],
    [
      ["Primary", "Hardened anchor: critical infrastructure, population majority, governance, control", "Earth"],
      ["Resource", "Extraction and staging: water ice, regolith, propellant, power, shielding material", "Moon (surface and cislunar staging points)"],
      ["Habitation", "Population and economy: permanent multi-generational residents, commerce, agriculture", "Orbital rotating habitats (LEO, ELEO, cislunar)"],
    ]
  ),

  spacer(240),
  h2("10.2 Primary Tier Components"),
  p("The primary tier consists of Earth-based components that anchor the program. These components are not new construction; they are designated roles within existing terrestrial infrastructure that the program coordinates."),

  mkTable(
    [900, 2400, 6060],
    ["ID", "Component", "Description"],
    [
      ["PRI-1", "Earth", "The anchor of the architecture. Hosts control, finance, research, population majority, and governance functions. The program hardens Earth infrastructure rather than relocating it."],
      ["PRI-2", "Planetary Defense", "Asteroid tracking and deflection capability, including DART-class kinetic deflectors and monitoring systems. Supports PRI-1 by reducing extinction-class risk from known threats."],
      ["PRI-3", "Earth Launch Base", "Multi-vendor Starship-class transport capacity. The gateway between Earth and all off-Earth tiers. Capacity scales with Phase 2 and 3 demand."],
      ["PRI-4", "Ground Control", "Mission operations, communications relay network, and crew training facilities. Provides 24/7 link to all tiers."],
    ]
  ),

  h2("10.3 Resource Tier Components"),
  p("The resource tier extracts and stages materials used by the habitation tier. Lunar gravity makes the surface unsuitable for permanent residence, but the same gravity combined with native water ice and regolith makes it an efficient resource platform. Materials produced here are delivered to the habitation tier at lower cost per kilogram than Earth launch."),

  mkTable(
    [900, 2400, 6060],
    ["ID", "Component", "Description"],
    [
      ["RES-1", "Lunar Surface Base", "Water ice extraction from permanently shadowed polar regions, regolith processing, and propellant production. Crewed on rotation; no permanent residents."],
      ["RES-2", "Cislunar Fuel Depot", "Orbital refueling station in cislunar space. Staged from lunar ISRU. Supplies fuel to transit vehicles between tiers."],
      ["RES-3", "Lunar Power Station", "Fission reactor (10-40 kW class) to close the 14-day lunar night power gap. Critical dependency for RES-1 operational continuity."],
      ["RES-4", "Regolith Shielding Operations", "Bulk regolith delivery to the habitation tier for radiation shielding mass. Enables habitat designs that would be uneconomical if shielding mass were launched from Earth."],
    ]
  ),

  h2("10.4 Habitation Tier Components"),
  p("The habitation tier is where the program's population lives. Rotating orbital habitats provide Earth-equivalent gravity via rotation, configurable radiation shielding via orbit selection and regolith mass from RES-4, and continuous communication with Earth. Smaller non-rotating commercial stations provide near-term capacity and revenue."),

  mkTable(
    [900, 2400, 6060],
    ["ID", "Component", "Description"],
    [
      ["HAB-1", "Rotating Orbital Colony", "Primary permanent habitation. Supports 1,000 to 10,000 residents at 1G equivalent rotation. Multi-generational occupancy with closed-loop ECLSS."],
      ["HAB-2", "Commercial LEO Stations", "Phase 1 habitation capacity. 4 to 10 crew per station. Near-term revenue from tourism, microgravity manufacturing, research, and government tenancy."],
      ["HAB-3", "Microgravity Industrial", "Specialized manufacturing at scale: pharmaceuticals, specialty fibers, novel materials. Revenue engine that underwrites colony-scale investment."],
      ["HAB-4", "Agriculture Module", "Controlled-environment food production integrated with closed-loop ECLSS. Supports HAB-1 sustainability."],
    ]
  ),

  h2("10.5 Inter-Tier Dependencies"),
  p("The tiers depend on each other in specific directions:"),
  p("Primary depends on the resource and habitation tiers only at program scale. Earth can function without them, as it does today. The reverse is not true within the horizon."),
  p("Resource depends on primary for initial construction, personnel rotation, and periodic capital equipment. Once established, the resource tier can sustain operations with modest Earth support."),
  p("Habitation depends on resource for water, propellant, and shielding mass. Without the resource tier, the habitation tier reverts to full Earth-launch dependency, which is feasible but far less economical at scale."),
);

// ============================================================
// SECTION 11: OPERATIONAL MODEL
// ============================================================
all.push(
  h1("11. Operational Model"),

  p("The operational model shows how the architecture deploys over the 25-year horizon. Deployment proceeds in three phases with explicit gates between them. Each phase closes by meeting its defined criteria before the next phase commits capital. The gates are the mechanism by which the architecture absorbs new information: if a phase fails to meet its gate criteria, the program revises rather than continuing on assumption."),

  ...figure('/home/claude/diagrams/operational_model.png', 640, 349, 'Figure 3. Operational Model'),

  h2("11.1 Phase 1: Foundation, 2026 to 2032"),
  p("Phase 1 establishes the baseline capability from which later phases grow. It leverages committed programs (Artemis, commercial LEO stations, lunar surface power development) rather than initiating new capital commitments. Success in Phase 1 validates that the architecture's early assumptions hold before Phase 2 commits substantially more capital."),

  mkTable(
    [3200, 6160],
    ["Deliverable", "Success Criterion"],
    [
      ["Earth primary hardening (planetary defense expansion)", "PRI-2 operational; kinetic deflector capability demonstrated beyond DART"],
      ["Multi-vendor launch cadence (PRI-3)", "Two or more providers at Starship-class capacity, regular flight cadence"],
      ["Artemis IV lunar landing", "Sustained crew presence on lunar surface"],
      ["Lunar outpost at 4 to 6 crew capacity", "30-day expedition cadence established"],
      ["Lunar surface fission reactor (RES-3)", "10-40 kW reactor operational, closes night power gap"],
      ["Commercial LEO stations operational (HAB-2)", "Multiple stations, 4-10 crew each, operating commercially"],
    ]
  ),

  h2("11.2 Gate 1-2 Criteria"),
  p("Before Phase 2 commits, the following conditions must hold:"),
  p("Lunar cadence established: regular crewed rotation to the lunar surface at the planned frequency, with documented operational experience."),
  p("Commercial LEO stations operational: at least two commercial stations with crew rotation and revenue generation."),
  p("Fission power demonstrated on lunar surface: RES-3 in service, documenting reliability across the 14-day night cycle."),
  p("Launch economics on trajectory: Starship-class cost per kilogram within projected bands."),
  p("Governance progress: at least initial property rights framework, jurisdiction clarity for commercial stations."),

  h2("11.3 Phase 2: Scale, 2030 to 2038"),
  p("Phase 2 scales operations and demonstrates the capabilities that Phase 3 depends on. Rotating habitat demonstration is the highest-risk, highest-value Phase 2 deliverable. Lunar ISRU at practical scale is the second most critical. Phase 2 overlaps with Phase 1 on the timeline because some Phase 2 activities (initial rotating habitat design, lunar ISRU precursors) begin before Phase 1 formally closes."),

  mkTable(
    [3200, 6160],
    ["Deliverable", "Success Criterion"],
    [
      ["Rotating habitat demonstrator", "Crewed habitat achieves >=0.5G sustained rotation, 30-day minimum human occupancy"],
      ["Lunar ISRU at scale (RES-1)", "Water and propellant production covers 40 percent or more of habitation tier supply"],
      ["Cislunar fuel depot (RES-2)", "Orbital refueling operational, supplied from lunar production"],
      ["Orbital habitat at 50 to 100 crew", "Intermediate-scale habitat demonstrates colony-scale ECLSS"],
    ]
  ),

  h2("11.4 Gate 2-3 Criteria"),
  p("Before Phase 3 commits, the following conditions must hold:"),
  p("Rotation demonstrator success: HAB-1 demonstrator shows sustained rotation with documented physiological outcomes."),
  p("Closed-loop ECLSS proven at scale: at least 90 percent water recovery and 75 percent oxygen recovery at colony-relevant scale."),
  p("Lunar ISRU supply sustained: continuous production meeting Phase 2 success criterion."),
  p("Governance mature: property rights, jurisdiction, and liability frameworks in place for the habitation tier."),
  p("Biological research baseline: rodent-scale partial-gravity reproduction study completed, human partial-gravity exposure studies planned."),

  h2("11.5 Phase 3: Colony Scale, 2035 to 2050"),
  p("Phase 3 scales the architecture to true colony capacity. Orbital habitation reaches 1,000 to 10,000 residents. Cislunar operations transition toward self-sustaining economics."),

  mkTable(
    [3200, 6160],
    ["Deliverable", "Success Criterion"],
    [
      ["Orbital colony (HAB-1)", "1,000 to 10,000 residents, 1G equivalent rotation, multi-generational occupancy"],
      ["Commercial lunar operations", "Lunar economic activity independent of agency funding for baseline operations"],
      ["Cislunar economy", "Revenue from tourism, manufacturing, resource supply; baseline operating costs covered"],
      ["Asteroid resource initiation", "First commercial NEA mining operations begin"],
    ]
  ),

  h2("11.6 Continuous Review"),
  p("Beyond the gates, the program operates a continuous review cadence. Biological research outcomes, governance developments, and commercial market signals are evaluated at least annually. Where findings materially affect the architecture, a revision is published following the version control conventions documented in Section 1. The framework's open methodology commitment (AP-07) is the mechanism that ensures this review surfaces external evidence rather than relying solely on internal judgment."),
);

// ============================================================
// SECTION 12: RAID REGISTER
// ============================================================
all.push(
  h1("12. Risks, Assumptions, Issues, and Dependencies"),

  p("The RAID register captures items that affect the architecture's execution. Risks are events that might happen and would affect the program if they did. Assumptions are things the architecture treats as true without having proven them, which would force revision if they turn out to be false. Issues are things that are already happening or already problematic. Dependencies are things the architecture needs from outside its boundary. Each item is documented with enough detail that it can be tracked and updated as the program progresses."),

  h2("12.1 Risks"),

  mkTable(
    [900, 2800, 1200, 1200, 3260],
    ["ID", "Risk", "Likelihood", "Impact", "Mitigation"],
    [
      ["R-01", "Rotating habitat construction infeasible at colony scale", "Low-Mod", "High", "Phase 2 demonstrator gates Phase 3 commitment. Fallback: scaled-up small-station network rather than unified colony."],
      ["R-02", "Lunar ISRU fails to scale", "Moderate", "High", "Parallel asteroid ISRU development. Earth launch retained as fallback supply chain through Phase 2."],
      ["R-03", "Starship-class launch economics do not materialize", "Moderate", "High", "Multi-vendor transport strategy. Architecture tolerates 5x cost variance with reduced cadence."],
      ["R-04", "International cooperation erodes", "Moderate", "High", "Bilateral agreements as backstop. Architecture does not require universal participation."],
      ["R-05", "Closed-loop ECLSS plateaus below colony requirements", "Low-Mod", "High", "Phase 2 scale demonstration gates Phase 3. If ECLSS plateaus, architecture reverts to outpost scale."],
      ["R-06", "Biological research adverse for permanent habitation", "Low", "Variable", "Architecture depends on 1G rotation, which is a physics certainty. Adverse partial-G findings do not disrupt the habitation tier."],
      ["R-07", "Commercial capital exits the sector", "Low-Mod", "Moderate", "Agency funding provides floor. Architecture tolerates slower pace."],
      ["R-08", "Governance disputes over resource rights", "Moderate", "Moderate", "Phase 1 and 2 focus on framework development. Phase 3 does not commit capital until frameworks mature."],
      ["R-09", "Lunar dust abrasion damages RES-1 infrastructure", "High", "Moderate", "Dust mitigation engineering in active development. Design for replaceable external components."],
      ["R-10", "Orbital debris increases risk to HAB-1 and HAB-2", "Moderate", "Moderate", "ELEO orbit selection, active debris mitigation, international debris treaties"],
    ]
  ),

  h2("12.2 Assumptions"),

  mkTable(
    [900, 3400, 5060],
    ["ID", "Assumption", "Impact if Wrong"],
    [
      ["A-01", "Rotating habitats scale to colony size", "Architecture weakens. Orbital tier limited to small stations. Alternate hybrid required."],
      ["A-02", "Partial gravity does not support multi-generational development", "If proven safe, Mars could be reconsidered as a future addition. Does not change HAB-1 requirements within the current horizon."],
      ["A-03", "Transport cost trends downward as projected", "Absolute capital grows. Relative ranking of destinations does not change materially."],
      ["A-04", "Lunar water and regolith extraction delivers at projected scale", "Habitation tier dependency on Earth launch increases. Cost per delivered kg rises."],
      ["A-05", "Colony-scale closed-loop ECLSS is achievable", "No permanent habitation tier viable. Architecture collapses to outposts only."],
      ["A-06", "International treaty framework remains functional", "Property rights and jurisdiction disputes escalate. Commercial investment slows."],
      ["A-07", "Earth remains habitable for the horizon", "Architecture pressures increase. Primary tier role reprioritized."],
      ["A-08", "25-year horizon is coherent for capital planning", "Phase 3 deliverables slip. Gate structure provides update mechanism."],
    ]
  ),

  h2("12.3 Issues"),

  mkTable(
    [900, 3000, 5460],
    ["ID", "Issue", "Resolution Approach"],
    [
      ["I-01", "Property rights framework for extracted resources is incomplete", "Phase 1 governance workstream focuses on this. Bilateral agreements bridge until multilateral framework emerges."],
      ["I-02", "Jurisdiction for off-Earth settings is not settled", "Current ISS nationality model is interim solution. Phase 2 develops framework for mixed-nationality commercial and colony settings."],
      ["I-03", "Liability frameworks for commercial human spaceflight underdeveloped", "Working with insurance and financial stakeholders in Phase 1 to establish workable frameworks."],
      ["I-04", "Orbital radiation data is sparse", "Phase 1 research investment addresses this. Current scoring uses conservative defaults."],
      ["I-05", "Partial-gravity human physiology data is absent", "Long-lead research program required. Phase 2 gate includes research milestones."],
    ]
  ),

  h2("12.4 Dependencies"),

  mkTable(
    [900, 3200, 5260],
    ["ID", "Dependency", "Owner and Expected Timing"],
    [
      ["D-01", "Artemis program success through at least Artemis IV", "Spacefaring agencies (NASA-led); 2028-2030"],
      ["D-02", "Commercial LEO station operational capacity", "Station operators (Axiom, Vast, Blue Origin, Voyager); 2028-2030"],
      ["D-03", "Multi-vendor Starship-class transport", "Transport providers (SpaceX primary, others secondary); 2027-2030"],
      ["D-04", "Kilopower-class fission reactor flight-ready", "NASA and commercial partners; 2030-2032"],
      ["D-05", "Updated Outer Space Treaty interpretation or amendment", "UN COPUOS, signatory nations; 2030-2035"],
      ["D-06", "Partial-gravity biological research program", "Spacefaring agencies, universities, ISS successor programs; ongoing"],
      ["D-07", "Public sustained funding", "National budget processes; annual"],
    ]
  ),
);

// ============================================================
// SECTION 13: RACI MATRIX
// ============================================================
all.push(
  h1("13. RACI Matrix"),

  p("The RACI matrix documents who is responsible, accountable, consulted, and informed for each major class of decision in the program. R is responsible (does the work). A is accountable (approves the outcome). C is consulted (provides input before the decision). I is informed (notified after the decision). The matrix is a starting point and will be refined as GAEA's coordinating role solidifies."),

  mkTable(
    [2200, 1300, 1300, 1150, 1150, 1080, 1180],
    ["Decision", "GAEA", "Agencies", "Commercial", "Science", "Colonists", "Treaty"],
    [
      ["Destination architecture (this document)", "A", "C", "C", "C", "I", "I"],
      ["Technology selection (flight hardware)", "I", "A", "R", "C", "I", "I"],
      ["Safety standards", "C", "A", "R", "C", "C", "I"],
      ["Funding model", "C", "A", "R", "I", "I", "I"],
      ["Phase gate reviews", "A", "C", "C", "C", "I", "I"],
      ["Operations model", "C", "A", "R", "C", "C", "I"],
      ["Resource allocation", "A", "C", "C", "C", "I", "C"],
      ["Governance framework", "R", "C", "C", "C", "I", "A"],
      ["Liability framework", "C", "C", "R", "I", "C", "A"],
      ["Crew selection and rotation", "I", "A", "R", "C", "R", "I"],
      ["Public communication", "R", "C", "C", "C", "C", "I"],
    ]
  ),

  spacer(240),
  p("Two positions warrant explicit comment. GAEA is Accountable for destination architecture, phase gate reviews, and resource allocation because these decisions require a coordinating authority that does not serve any single agency's or commercial provider's narrow interests. Commercial providers are Responsible for most operational and technology decisions because they build and operate the infrastructure. The matrix will be refined as Phase 1 commitments firm up and as GAEA's formal authority is recognized by participating nations."),
);

// ============================================================
// SECTION 14: SIZING
// ============================================================
all.push(
  h1("14. Sizing"),

  p("Sizing estimates the capital required to deliver each tier to its Phase 3 operational state, and the time required to reach that state from current readiness. Estimates are order-of-magnitude at this stage, with the relative ranking of destinations being more defensible than the absolute numbers. All figures are in constant 2025 United States dollars unless otherwise noted."),

  h2("14.1 Capital to Self-Sustaining Operation"),

  mkTable(
    [2400, 2300, 1800, 2860],
    ["Tier", "Capital Estimate", "Time from Now", "Notes"],
    [
      ["Primary (hardening)", "$20-40 billion", "Continuous", "Planetary defense expansion, multi-vendor launch infrastructure; leverages existing budgets"],
      ["Resource (Moon)", "$50-80 billion", "6-10 years to ops", "Leverages committed Artemis infrastructure; most capital-efficient tier"],
      ["Habitation (Orbital small)", "$30-60 billion", "3-5 years to ops", "Phase 1 commercial LEO stations within existing projected spend"],
      ["Habitation (Orbital colony)", "$100-250 billion", "15-20 years to ops", "Colony-scale infrastructure; order-of-magnitude estimate"],
    ]
  ),

  spacer(240),
  h2("14.2 Phased Spending"),

  mkTable(
    [2400, 2200, 2200, 2560],
    ["Phase", "Timeframe", "Estimated Capital", "Primary Commitments"],
    [
      ["Phase 1", "2026-2032", "$60-100 billion", "Artemis completion, fission power, initial LEO stations, multi-vendor launch"],
      ["Phase 2", "2030-2038", "$80-140 billion", "Rotating habitat demonstrator, lunar ISRU at scale, cislunar fuel depot"],
      ["Phase 3", "2035-2050", "$150-300 billion", "Orbital colony, commercial lunar operations"],
      ["Total", "2026-2050", "$210-390 billion", "25-year program total"],
    ]
  ),

  spacer(240),
  h2("14.3 Sizing Caveats"),
  p("The estimates above are subject to material uncertainty. Two caveats apply:"),
  p("Orbital colony construction costs are the most uncertain element. No structure of the necessary scale has been built. The estimate draws on O'Neill-Glaser 1975 analyses (which projected $283 billion for the foundational lunar mining infrastructure alone in 2025 dollars) and on more recent commercial station cost experience at small scale. Extrapolating between these sources involves substantial assumption."),
  p("Primary tier hardening costs are absorbed into existing national security and planetary defense budgets in most scenarios. The explicit attribution here reflects program accounting rather than new incremental spend."),
);

// ============================================================
// SECTION 15: RECOMMENDATION
// ============================================================
all.push(
  h1("15. Recommendation"),

  p("The recommended architecture is a three-tier hybrid: Earth as hardened primary, the Moon as resource and staging layer, and orbital rotating habitats as the scalable habitation tier. Mars was evaluated as a candidate and is disqualified. This architecture is supported by the weighted scoring results (71.0 percent and 63.2 percent for Orbital and Moon, respectively; Mars at 31.6 percent fails the gate check), by the Must-Have gate check (Orbital passes all gates, the Moon fails one, Mars fails five), and by the sensitivity analysis (ranking unchanged across six tested scenarios). The rationale is developed in detail through Sections 6 through 14. The essential points are summarized below."),

  h2("15.1 Why Hybrid"),
  p("No single destination passes every Must-Have requirement. A single-destination architecture is therefore unavailable within the evidence base. The hybrid accepts this constraint and allocates workloads to the destinations that best support them. Earth hosts the workloads that benefit from native human-habitable conditions. The Moon hosts the workloads that benefit from low-cost resource access. Orbital habitats host the workloads that benefit from engineered gravity and radiation environments. Mars was evaluated as a candidate to host science workloads but does not meet the Must-Have gates; any Mars science program operates as a separate effort outside this architecture."),

  h2("15.2 Why Orbital as the Habitation Tier"),
  p("Only orbital rotating habitats can provide 1G equivalent gravity within the horizon. This is a physics outcome. Gravity in a rotating structure is a function of rotation rate and radius, both of which are engineering parameters. Gravity on a planetary surface is a function of the planet's mass and radius, which cannot be changed. No amount of engineering produces 1G on the Moon or Mars within the horizon. The gravity requirement therefore resolves to orbital rotation or to accepting less than 1G for permanent habitation. The architecture takes the conservative position: where evidence does not support relaxation of a physiological requirement, the requirement is not relaxed."),

  h2("15.3 Why the Moon as the Resource Tier"),
  p("Lunar water, regolith, and proximity make the Moon the most capital-efficient source of the materials the habitation tier needs. Water extracted from permanently shadowed lunar craters can be delivered to cislunar destinations at lower cost per kilogram than Earth launch can deliver water. Lunar regolith provides shielding mass for orbital habitats at orders of magnitude lower cost than launching equivalent shielding from Earth. The Moon's three-day return capability also permits productive crew rotation without the permanent-residence requirement that its gravity cannot satisfy. The role fits the destination's native characteristics."),

  h2("15.4 Why Mars Is Not Part of the Architecture"),
  p("Mars fails five Must-Have gates within the horizon: native gravity (0.378G against a 1G threshold), emergency return time (6+ months against a 14-day threshold), resupply interval (26 months against a 90-day threshold), transport cost (an order of magnitude above the $1,000 per kilogram threshold), and failure expected value (approximately $3.75B against a $1B annual threshold). These are not engineering shortcomings that closer attention would resolve. They are physics constraints bound to the destination. A destination that fails five Must-Haves does not belong in the recommended architecture."),
  p("Mars retains legitimate scientific value. The surface offers access to the most Earth-similar planetary environment available and a platform for research that cannot be conducted on the Moon or in orbit. The assessment supports Mars as a science destination managed through a separate program, on its own timeline and budget. The scoring data, gate results, and source evidence for Mars are retained in this deliverable and in the data workbook for any Mars-specific program that wants them. The exclusion is about architecture fit, not about Mars's independent merit as a science target."),

  h2("15.5 What the Architecture Asks of the Reader"),
  p("Readers reviewing this architecture are asked to evaluate three things: whether the evidence cited supports the conclusions drawn, whether the decisions in Section 6 follow from the requirements and principles in Sections 7 through 9, and whether the risks and assumptions in Section 12 are adequately managed by the phasing in Section 11. Challenges to any of the three are welcome, provided they come with alternative evidence, alternative analysis, or alternative risk management. The framework is open. The conclusions are falsifiable. The goal is the best architecture the available evidence supports, not defense of the architecture presented here."),

  h2("15.6 Immediate Next Steps"),
  p("Three actions are recommended as the immediate next steps to advance from assessment to execution:"),

  p("1. Formalize GAEA's coordinating authority with participating nations and commercial providers. The architecture requires a coordinating body. Ad-hoc coordination will not deliver at scale."),

  p("2. Commit Phase 1 capital against deliverables already committed under existing programs. Phase 1 does not require new capital beyond Artemis, commercial LEO, and planetary defense budgets already authorized. The decision is whether to pre-commit Phase 2 capital now or wait for Phase 1 validation. The recommendation is to wait."),

  p("3. Launch the biological research program addressing partial-gravity physiology. This research is the longest-lead-time input to future architecture revisions. Starting now delivers results within the horizon."),
);

// ============================================================
// SECTION 16: GLOSSARY
// ============================================================
all.push(
  h1("16. Glossary"),

  mkTable(
    [2400, 6960],
    ["Term", "Definition"],
    [
      ["Architectural Decision (AD)", "An explicit, documented decision shaping the architecture. Each AD records the issue, alternatives considered, the selected alternative, and the rationale."],
      ["Architecture Principle (AP)", "A general rule that governs decisions throughout the program. Principles resolve conflicts between specific requirements."],
      ["Cislunar", "The region of space between Earth and the Moon, including the Earth-Moon Lagrange points."],
      ["ECLSS", "Environmental Control and Life Support System. The set of systems that manage air, water, temperature, and waste in a crewed habitat."],
      ["EDL", "Entry, Descent, and Landing. The sequence of events in delivering a payload from orbit to a planetary surface."],
      ["ELEO", "Equatorial Low Earth Orbit. A low orbit below the Van Allen belts, with reduced radiation exposure from Earth's magnetic field."],
      ["Functional Requirement (FR)", "A statement of capability the architecture must deliver."],
      ["GAEA", "Global Alliance for Extraplanetary Adaptation. The fictional client organization on whose behalf this assessment is prepared."],
      ["ISRU", "In-Situ Resource Utilization. The use of local resources at a destination to reduce dependence on Earth launch."],
      ["MHU", "Multiple Artificial-gravity Research System. A JAXA centrifuge on the ISS used for partial-gravity biological research."],
      ["MoSCoW", "A requirements prioritization classification: Must-Have, Should-Have, Could-Have, Won't-Have."],
      ["Non-Functional Requirement (NFR)", "A statement of quality or performance the architecture must meet."],
      ["RAID", "Risks, Assumptions, Issues, Dependencies. A register tracking items affecting program execution."],
      ["RTO", "Recovery Time Objective. The maximum acceptable time to restore service or evacuate crew after a failure event."],
      ["RPO", "Recovery Point Objective. The maximum acceptable interval between supply events or data backups."],
      ["TRL", "Technology Readiness Level. NASA's nine-level scale rating a technology from basic research (TRL 1) to flight-proven (TRL 9)."],
    ]
  ),
);

// Closing page
all.push(
  PB,
  spacer(2000),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [new TextRun({ text: "End of Architecture Assessment", size: 26, color: C.accent, bold: true })],
    spacing: { before: 0, after: 400 }
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [new TextRun({ text: "See the Methodology and Evidence Appendix for framework derivation,", size: 22, color: C.muted, italics: true })],
    spacing: { before: 0, after: 60 }
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [new TextRun({ text: "scoring mathematics, gravity threshold derivation, and source registry.", size: 22, color: C.muted, italics: true })],
    spacing: { before: 0, after: 0 }
  }),
);

// ============================================================
// Build
// ============================================================
const doc = new Document({
  creator: "Craig Nash",
  title: "Architecture Assessment: Extraplanetary Infrastructure Program",
  description: "Destination evaluation and recommended architecture",
  styles: {
    default: { document: { run: { font: "Calibri", size: 22 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 32, bold: true, font: "Calibri", color: "1F4E79" },
        paragraph: { spacing: { before: 360, after: 180 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 26, bold: true, font: "Calibri", color: "1F4E79" },
        paragraph: { spacing: { before: 280, after: 120 }, outlineLevel: 1 } },
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 22, bold: true, font: "Calibri", color: "222222" },
        paragraph: { spacing: { before: 220, after: 100 }, outlineLevel: 2 } },
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: W.fullPage, height: W.fullPageHeight },
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
      }
    },
    headers: {
      default: new Header({
        children: [new Paragraph({
          children: [
            new TextRun({ text: "Architecture Assessment: Extraplanetary Infrastructure Program", size: 18, color: C.muted }),
            new TextRun({
              children: [new PositionalTab({
                alignment: PositionalTabAlignment.RIGHT,
                relativeTo: PositionalTabRelativeTo.MARGIN,
                leader: PositionalTabLeader.NONE
              })], size: 18
            }),
            new TextRun({ text: "Version 1.0", size: 18, color: C.muted, italics: true })
          ],
          border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: "1F4E79", space: 6 } }
        })]
      })
    },
    footers: {
      default: new Footer({
        children: [new Paragraph({
          children: [
            new TextRun({ text: "Craig Nash", size: 18, color: C.muted, italics: true }),
            new TextRun({
              children: [new PositionalTab({
                alignment: PositionalTabAlignment.CENTER,
                relativeTo: PositionalTabRelativeTo.MARGIN,
                leader: PositionalTabLeader.NONE
              })], size: 18
            }),
            new TextRun({ text: "Page ", size: 18, color: C.muted }),
            new TextRun({ children: [PageNumber.CURRENT], size: 18, color: C.muted }),
            new TextRun({ text: " of ", size: 18, color: C.muted }),
            new TextRun({ children: [PageNumber.TOTAL_PAGES], size: 18, color: C.muted }),
            new TextRun({
              children: [new PositionalTab({
                alignment: PositionalTabAlignment.RIGHT,
                relativeTo: PositionalTabRelativeTo.MARGIN,
                leader: PositionalTabLeader.NONE
              })], size: 18
            }),
            new TextRun({ text: "April 2026", size: 18, color: C.muted, italics: true }),
          ]
        })]
      })
    },
    children: all
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync('/home/claude/report_builder/assessment_v3.docx', buffer);
  console.log('Restructured assessment v3 written');
});
