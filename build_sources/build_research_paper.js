// Research Paper: Destination Assessment Data and Methodology
// 25-30 pages, front-loaded hook, scannable, charts embedded
// Voice: Craig Nash's academic writing samples

const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, HeadingLevel, BorderStyle, WidthType,
  ShadingType, PageNumber, PageBreak,
  PositionalTab, PositionalTabAlignment, PositionalTabRelativeTo, PositionalTabLeader,
  VerticalAlign,
  C, W, borders,
  p, pb, pi, leadIn, h1, h1NoBreak, h2, h3, spacer, PB,
  tcell, mkTable, figure,
  fs
} = require('./lib2.js');

const all = [];

// ============================================================
// COVER + TABLE OF CONTENTS (compact, single page if possible)
// ============================================================
all.push(
  spacer(1200),
  new Paragraph({
    children: [new TextRun({ text: "Destination Assessment", size: 48, bold: true, color: C.accent })],
    alignment: AlignmentType.CENTER,
    spacing: { before: 0, after: 160 },
  }),
  new Paragraph({
    children: [new TextRun({ text: "Data, Methodology, and Results", size: 28, color: C.text })],
    alignment: AlignmentType.CENTER,
    spacing: { before: 0, after: 80 },
  }),
  new Paragraph({
    children: [new TextRun({ text: "Moon, Mars, and Orbital Rotating Habitats as Candidate Platforms", size: 20, italics: true, color: C.muted })],
    alignment: AlignmentType.CENTER,
    spacing: { before: 0, after: 600 },
  }),
  new Table({
    width: { size: 6000, type: WidthType.DXA },
    columnWidths: [2400, 3600],
    alignment: AlignmentType.CENTER,
    rows: [
      new TableRow({ children: [
        tcell("Document type", { width: 2400, bold: true, fill: C.subtle }),
        tcell("Research Paper / Data Report", { width: 3600 })
      ]}),
      new TableRow({ children: [
        tcell("Companion to", { width: 2400, bold: true, fill: C.subtle }),
        tcell("Architecture Assessment v1.0", { width: 3600 })
      ]}),
      new TableRow({ children: [
        tcell("Version", { width: 2400, bold: true, fill: C.subtle }),
        tcell("1.0", { width: 3600 })
      ]}),
      new TableRow({ children: [
        tcell("Date", { width: 2400, bold: true, fill: C.subtle }),
        tcell("April 2026", { width: 3600 })
      ]}),
      new TableRow({ children: [
        tcell("Author", { width: 2400, bold: true, fill: C.subtle }),
        tcell("Craig Nash", { width: 3600 })
      ]}),
    ]
  }),
  spacer(400),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [new TextRun({ text: "This document presents the quantitative data, methodology, and", size: 20, italics: true, color: C.muted })],
    spacing: { before: 0, after: 40 },
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [new TextRun({ text: "evaluation results that support the recommended architecture.", size: 20, italics: true, color: C.muted })],
    spacing: { before: 0, after: 40 },
  }),
  PB,
);

// ============================================================
// EXECUTIVE SUMMARY (Page 1 hook)
// ============================================================
all.push(
  h1NoBreak("Executive Summary"),

  p("The assessment evaluates three candidate destinations for sustained human presence on a 25-year planning horizon: the Moon, Mars, and orbital rotating habitats. Each destination was scored against 25 requirements classified by MoSCoW priority, grouped by Kano category, and aggregated by weighted scoring. Scoring was stress-tested across seven sensitivity scenarios. The ranking was stable in all of them."),

  h3("Result"),
  p("The recommended architecture is a three-tier hybrid. Earth is the hardened primary tier. The Moon is the resource and staging tier. Orbital rotating habitats are the primary habitation tier. Mars was evaluated and is disqualified; Mars fails five of the fifteen Must-Have gates on physics constraints that cannot be addressed within the horizon."),

  h3("Headline Numbers"),

  mkTable(
    [2400, 1700, 1700, 3560],
    ["Destination", "Weighted Score", "Must-Haves Passed", "Architecture Role"],
    [
      ["Orbital rotating habitats", "71.0%", "15 of 15", "Primary habitation tier"],
      ["Moon", "63.2%", "14 of 15", "Resource and staging tier"],
      ["Mars", "31.6%", "10 of 15", "Not part of architecture"],
    ]
  ),

  spacer(240),
  h3("Why These Numbers Matter"),
  p("Weighted score alone does not select a destination. The Must-Have gate operates as a hard filter: a destination failing any Must-Have is disqualified regardless of its aggregate score. Mars's 31.6% is informative but secondary; the gate failures are the operative decision. The Moon's 63.2% would qualify it as a habitation tier if not for the gravity gate, which disqualifies it from that role. Its other gates pass and support its use as a resource tier. Orbital rotating habitats are the only destination that passes every gate that current evidence can demonstrate."),

  h3("What This Document Covers"),
  p("This document is the data side of the program. It is a companion to the Architecture Assessment, which presents the architectural decisions, stakeholders, and governance framework. This document presents the evidence, the methodology, and the charts that support those decisions. Readers who want the recommendation without the derivation should read the Architecture Assessment. Readers who want to review, challenge, or contribute to the evidence base should read this document."),
);

// ============================================================
// OBJECTIONS ADDRESSED (Page 2 hook - preempts the standard pushback)
// ============================================================
all.push(
  h1("Common Objections Addressed"),

  p("Readers encountering this assessment tend to raise one of a small set of objections. Each is addressed below with the relevant evidence. The goal is not to preempt disagreement but to make clear that these points were considered rather than overlooked. Disagreement supported by additional evidence is welcome and is the mechanism by which the framework improves."),

  h3("On Mars"),
  p("Mars is not in the recommended architecture because it fails five Must-Have gates on physics constraints: native gravity (0.378G against a 1G threshold), emergency return time (6+ months against a 14-day threshold), resupply interval (26 months against a 90-day threshold), transport cost (an order of magnitude above the $1,000 per kilogram threshold), and failure expected value ($3.75B against a $1B threshold). These are not engineering challenges awaiting a solution. They are physics characteristics of the destination. Mars retains legitimate scientific value and is an appropriate target for a Mars-specific science program; it is not a fit for the extraplanetary infrastructure program assessed here. The Mars scoring and evidence are retained in Section 5 and in the data workbook for any program that needs them."),

  h3("On partial-gravity habitation"),
  p("The 1G threshold for permanent habitation may appear conservative. It is. The most recent direct evidence on partial-gravity mammalian physiology is the JAXA MHU-8 mouse study (Mortreux and Bouxsein 2024), which demonstrated partial mitigation of muscle atrophy at 0.33G and full prevention at 0.67G. Reproduction and multi-generational development at partial gravity have never been tested in mammals. The architecture is making a decision about permanent human settlement, which is difficult to reverse. A 1G conservative default protects that decision from being built on untested physiology. If partial-gravity research within the horizon resolves the question favorably, the framework supports revision. Until then, rotation provides 1G as a matter of engineering, not as a matter of hope."),

  h3("On single-destination architectures"),
  p("A common preference is to commit fully to one destination. The assessment supports the hybrid for a structural reason: no single destination passes every Must-Have gate. A single-destination architecture would be a single-destination architecture that fails gates. The hybrid allocates workloads to the destinations that each can support, which is what a serious enterprise architecture does with heterogeneous platforms."),

  h3("On launch-cost assumptions"),
  p("Scoring assumes that Starship-class transport economics materialize within Phase 1 (2026-2032). If launch costs plateau above projections, absolute capital requirements rise but the relative ranking of destinations does not change. Mars remains the most cost-sensitive destination regardless; its transport cost failure widens rather than narrows if launch costs hold high. Sensitivity analysis tested cost-weighted and resilience-weighted scenarios with this in mind (Section 6). The ranking held."),

  h3("On rotating habitat feasibility"),
  p("No colony-scale rotating habitat has been built. The architecture treats this as Risk R-01 and gates the Phase 3 commitment on a Phase 2 rotating habitat demonstrator. The physics is understood since the O'Neill 1970s work; the engineering is substantial but is engineering rather than physics. If the Phase 2 demonstrator fails, the architecture falls back to a scaled-up small-station network, which still satisfies more Must-Haves than any planetary surface does."),
);

// ============================================================
// PART 1: WHAT THIS DOCUMENT ASSESSES
// ============================================================
all.push(
  h1("Part 1. What Is Being Assessed"),

  h2("1.1 Scope"),
  p("The assessment evaluates three candidate destinations for a 25-year extraplanetary infrastructure program: the Moon (surface and cislunar staging), Mars (surface and Mars orbit), and orbital rotating habitats (low Earth orbit, equatorial low Earth orbit, and cislunar space). The output is a recommended architecture identifying which destinations host which workloads, together with the evidence supporting that recommendation."),

  p("The assessment does not evaluate vehicle design, habitat sizing at engineering detail, vendor selection, or destinations beyond the inner solar system. Those are downstream activities following architecture selection."),

  h2("1.2 The Recommended Architecture"),
  p("The recommendation is a three-tier hybrid architecture. Figure 1 shows the architecture visually."),

  ...figure('/home/claude/diagrams/architecture_visual.png', 640, 384, 'Figure 1. Recommended Architecture'),

  h3("Tier roles in brief"),

  mkTable(
    [1800, 2200, 5360],
    ["Tier", "Destination", "Role"],
    [
      ["Primary", "Earth", "Hardened anchor. Hosts control, finance, research, governance, population majority, planetary defense, launch capability, and 24/7 mission operations."],
      ["Resource", "Moon", "Extraction and staging. Water ice, regolith, propellant, fission power, shielding mass. Crew rotates; no permanent residents."],
      ["Habitation", "Orbital rotating habitats", "Population and economy. 1G equivalent rotation, closed-loop ECLSS, multi-generational residency, microgravity industry."],
    ]
  ),

  spacer(240),
  h2("1.3 Why These Tiers"),
  p("Each tier hosts the workloads its destination can support natively. Earth supports human life without engineering; it hosts everything that does not require off-Earth siting. The Moon supports resource extraction at lower delivered cost than Earth launch; it hosts the workloads that benefit from that economics. Orbital rotating habitats engineer 1G gravity and configurable radiation environment; they host permanent residents where partial-gravity planetary surfaces cannot. Mars, which hosts no workload better than these three, is excluded."),

  h2("1.4 Key Finding Up Front"),
  p("The architecture recommendation is driven by the Must-Have gate check in Section 3, not by the weighted scoring in Section 4. Weighted scoring is informative and confirms the gate-check outcome. The gate check is the operative decision."),
);

// ============================================================
// PART 2: CLIENT REQUIREMENTS
// ============================================================
all.push(
  h1("Part 2. Client Requirements"),

  p("Requirements were derived from three sources: NASA standards and architecture documents (treated as vendor product specifications), the scientific literature on human physiology at non-terrestrial conditions, and commercial operator roadmaps. Requirements are divided into functional and non-functional categories, with non-functional requirements dominating because architecture evaluation is principally about quality and performance levels rather than about capability existence."),

  h2("2.1 The Fifteen Must-Have Requirements"),
  p("Fifteen requirements were classified as Must-Have under MoSCoW. A destination failing any Must-Have cannot be recommended for the role it is evaluated against, regardless of its score on other requirements. The Must-Have set is the hard filter applied before weighted aggregation."),

  mkTable(
    [900, 3600, 2000, 2860],
    ["ID", "Requirement", "Threshold", "Category"],
    [
      ["NFR-01", "Native or engineered gravity", ">=1G equivalent", "Physiology"],
      ["NFR-02", "Career radiation exposure", "<=600 mSv (NASA-STD-3001)", "Physiology"],
      ["NFR-03", "ECLSS water recovery", ">=98%", "Life support"],
      ["NFR-04", "ECLSS oxygen recovery", ">=85%", "Life support"],
      ["NFR-05", "Recovery Time Objective", "<=14 days to Earth return", "Operations"],
      ["NFR-06", "Recovery Point Objective", "<=90 days between resupply", "Operations"],
      ["NFR-07", "Transport cost", "<=$1,000 per kilogram delivered", "Economics"],
      ["NFR-08", "Failure expected value", "<=$1B annual EV per tier", "Economics"],
      ["NFR-13", "Behavioral health support", "Multi-year tolerance", "Physiology"],
      ["NFR-15", "Automation and autonomy", "Tier-appropriate", "Operations"],
      ["NFR-16", "Monitoring and incident response", "Proportional to RTO", "Operations"],
      ["NFR-17", "Physical and info security", "Treaty-compliant", "Security"],
      ["NFR-23", "Governance compatibility", "Treaty, jurisdiction, liability", "Governance"],
      ["FR-10", "Inter-tier communication", "Continuous data link", "Operations"],
      ["FR-11", "Crew rotation and resupply", "At required cadence", "Operations"],
    ]
  ),

  h2("2.2 Human Physiological Baselines"),
  p("Three Must-Haves are directly physiological: gravity (NFR-01), radiation (NFR-02), and behavioral health (NFR-13). The values are drawn from existing standards where available. Where standards are incomplete (partial-gravity physiology, long-duration behavioral health), the assessment uses conservative defaults with explicit rationale."),

  mkTable(
    [2200, 1800, 2400, 2960],
    ["Condition", "Threshold", "Source", "Design implication"],
    [
      ["Gravity", "1G equivalent", "MHU-8 (2024) + conservative default", "Rotating habitat at sufficient radius"],
      ["Radiation, career", "<=600 mSv", "NASA-STD-3001", "Shielding mass, orbit selection"],
      ["Radiation, 30 day acute", "<=250 mSv", "NASA-STD-3001", "Storm shelter"],
      ["Oxygen partial pressure", "2.83 to 3.35 psi", "NASA-STD-3001 / ISS heritage", "ECLSS design"],
      ["Total cabin pressure", "8.2 to 14.7 psi", "NASA-STD-3001 / ISS heritage", "Structural margin, EVA prebreathe"],
      ["CO2 partial pressure", "<=2.0 mmHg nominal", "NASA-STD-3001", "CDRA or equivalent"],
      ["Temperature", "18 to 27 C", "NASA-STD-3001", "Thermal control system"],
      ["Water per crew day", ">=2.5 kg potable", "ISS operational data", "Closed-loop water recovery"],
      ["Behavioral isolation", "Multi-year demonstrated", "ISS + analog studies", "Crew selection, habitat design"],
    ]
  ),

  spacer(240),
  h2("2.3 Why the Gravity Threshold Is 1G"),
  p("The gravity requirement drives the architecture, so it warrants the detailed justification below. Figure 2 shows the evidence base."),

  ...figure('/home/claude/charts/chart3_gravity_curve.png', 600, 327, 'Figure 2. Gravity dose-response from MHU-8 study'),

  p("The MHU-8 study (Mortreux and Bouxsein 2024) is the most recent direct dose-response data on mammalian partial-gravity physiology. It demonstrates full prevention of muscle atrophy at 0.67G, partial mitigation at 0.33G, and substantial loss at microgravity. This is an adult somatic outcome measured over weeks to months in rodents. The study does not address reproduction, embryonic development, or multi-generational outcomes, because those experiments have not been run."),

  p("The conservative default is 1G because the architecture is making a decision about permanent multi-generational settlement. A destination approved at 0.67G based on adult muscle retention data assumes that the untested outcomes are also acceptable at 0.67G. The assumption may prove correct. It has not been demonstrated. Where a decision is difficult to reverse and the evidence is incomplete, the conservative position is to not make the decision until the evidence exists. Rotation provides 1G as an engineering parameter, not a biological assumption."),

  p("If partial-gravity research within the horizon resolves reproduction, development, and long-term outcomes favorably, the framework supports revising NFR-01 downward. The consequence would not be immediate architectural change, because the Moon still fails on 0.166G even at a 0.33G threshold, and Mars still fails the other four Must-Haves. But it would reopen the question of whether orbital habitats must rotate at 1G or could operate at lower equivalent gravity."),
);

// ============================================================
// PART 3: DESTINATION EVALUATIONS
// ============================================================
all.push(
  h1("Part 3. Destination Evaluations"),

  p("Each candidate destination is evaluated against the same requirement set. The evaluations below present the evidence and outcome for each destination in turn."),

  h2("3.1 Orbital Rotating Habitats"),
  p("Orbital rotating habitats are free-space structures that generate gravity through rotation. Radius and rotation rate are engineering parameters; the resulting centripetal force substitutes for native gravity. The concept has well-developed physics and engineering heritage from the O'Neill 1975 studies onward, though no colony-scale structure has been built."),

  leadIn("Capabilities"),
  p("Engineered 1G equivalent gravity. Configurable radiation environment through orbit selection (ELEO is below the Van Allen belts and within Earth's magnetosphere) and shielding mass. Continuous communication with Earth. Short emergency return (hours). Direct access to Earth launch and resupply."),

  leadIn("Limits"),
  p("Requires launch-supplied mass for initial construction and for shielding. Orbital debris risk in populated orbits. No native resources; full dependence on supply chain for consumables. Engineering at colony scale is unproven."),

  leadIn("Gate results and score"),

  mkTable(
    [2400, 2200, 4760],
    ["Measure", "Value", "Notes"],
    [
      ["Must-Haves passed", "15 of 15", "Passes every current-evidence gate"],
      ["Weighted score", "71.0% (1,186 / 1,670)", "Highest of the three destinations"],
      ["Sensitivity rank", "1st in all 7 scenarios", "Robust to weight and assumption variation"],
      ["Role in architecture", "Habitation tier (HAB-1 to HAB-4)", "Phase 1 small, Phase 3 colony scale"],
    ]
  ),

  h2("3.2 Moon"),
  p("The Moon has 0.166G native gravity, a 14-day day-night cycle, substantial water ice at polar permanently shadowed regions, and three-day Earth return capability. Artemis program architecture and commercial partnerships are delivering the near-term infrastructure."),

  leadIn("Capabilities"),
  p("Native water ice and regolith for ISRU. Lunar-sourced propellant delivered to cislunar destinations at lower cost per kilogram than Earth launch. Three-day Earth return for crew emergency or rotation. Near-continuous communication with Earth (1.3-second one-way latency). Regolith available as bulk shielding mass for orbital habitat construction."),

  leadIn("Limits"),
  p("0.166G native gravity is below the threshold for permanent multi-generational habitation. Dust abrasion damages equipment and crew lungs. 14-day lunar night requires fission power or extensive storage. Surface operations are constrained by radiation exposure without substantial shielding."),

  leadIn("Gate results and score"),

  mkTable(
    [2400, 2200, 4760],
    ["Measure", "Value", "Notes"],
    [
      ["Must-Haves passed", "14 of 15", "Fails only NFR-01 (gravity)"],
      ["Weighted score", "63.2% (1,055 / 1,670)", "Second of the three destinations"],
      ["Sensitivity rank", "2nd in all 7 scenarios", "Stable second position"],
      ["Role in architecture", "Resource tier (RES-1 to RES-4)", "Crew rotation; no permanent residents"],
    ]
  ),

  spacer(200),
  leadIn("Why the Moon is a resource tier, not a habitation tier"),
  p("The Moon fails NFR-01 (gravity) and is therefore not viable as a permanent habitation destination under the architecture's conservative default. Its other Must-Haves pass and support a crew-rotation resource role: three-day Earth return is far inside the 14-day RTO threshold, continuous resupply satisfies RPO, and delivered transport cost is tractable. The productive workloads the Moon can host, water and propellant extraction, regolith delivery for orbital shielding, and fuel depot staging, do not require permanent residents. Crew rotates on operational schedules similar to remote terrestrial industrial sites."),

  h2("3.3 Mars"),
  p("Mars has 0.378G native gravity, a 24.6-hour day, a thin CO2 atmosphere, substantial water ice at mid and high latitudes, and a 6-to-9 month Hohmann transfer window from Earth that recurs every 26 months. Historical and current agency architectures have positioned Mars as a long-term human destination. The assessment evaluates Mars against the same requirement set as the other destinations, which it fails."),

  leadIn("Capabilities"),
  p("Substantial scientific value for planetary science, astrobiology, and comparative planetology. Native resources for long-duration missions (water ice, regolith, atmospheric CO2 for methane production). Protective atmosphere reduces solar particle event acute exposure relative to deep space. Long day-night cycle tolerable for solar power."),

  leadIn("Limits"),
  p("0.378G is below the 1G threshold, and partial-gravity multi-generational outcomes are untested. Earth return requires a six-month transit and is only available at 26-month windows, which fails both RTO and RPO. Entry, descent, and landing for crewed-scale payloads remains unproven. Transport cost per kilogram is an order of magnitude above the threshold due to the mass penalty of the launch window structure and of EDL. Failure expected value is high because failure modes compound over transit and surface phases that cannot be aborted."),

  leadIn("Gate results and score"),

  mkTable(
    [2400, 2200, 4760],
    ["Measure", "Value", "Notes"],
    [
      ["Must-Haves passed", "10 of 15", "Fails NFR-01, 05, 06, 07, 08"],
      ["Weighted score", "31.6% (527 / 1,670)", "Third of the three destinations"],
      ["Sensitivity rank", "3rd in all 7 scenarios, including best-case Mars", "Stable last position"],
      ["Role in architecture", "None", "Mars is not part of the recommended architecture"],
    ]
  ),

  spacer(200),
  leadIn("Mars handoff"),
  p("Mars retains legitimate scientific value and is an appropriate target for a Mars-specific science program. The scoring, the source registry, the risk register, and the sensitivity data for Mars are retained in this document and in the data workbook for any program that wants them. The exclusion is about architecture fit, not about Mars's independent merit as a science destination."),
);

// ============================================================
// PART 4: MUST-HAVE GATE CHECK
// ============================================================
all.push(
  h1("Part 4. Must-Have Gate Check"),

  p("The Must-Have gate is the operative filter in the assessment. A destination that fails any Must-Have cannot be recommended for its evaluated role, regardless of its weighted aggregate score. The gate is applied before weighted scoring aggregates across all requirements. Figure 3 shows the gate results visually."),

  ...figure('/home/claude/charts/chart1_must_have_gates.png', 640, 345, 'Figure 3. Must-Have gate results per destination'),

  h2("4.1 What MoSCoW Means"),
  p("MoSCoW is a standard requirements prioritization technique. It classifies each requirement into one of four categories:"),

  mkTable(
    [2400, 6960],
    ["Category", "Meaning"],
    [
      ["Must-Have", "Mandatory. The solution fails if this requirement is not met. No trade-off; no compensation by over-performance on other requirements."],
      ["Should-Have", "Strongly desired. Contributes materially to solution value. Can be traded off if necessary but trade-offs must be documented."],
      ["Could-Have", "Desired. Increases solution value when present but does not define fitness-for-purpose."],
      ["Won't-Have", "Explicitly out of scope for this iteration. Documented to prevent scope creep and to signal future consideration."],
    ]
  ),

  h2("4.2 How Must-Haves Were Identified"),
  p("Three criteria were applied to classify a requirement as Must-Have:"),
  p("1. Loss of this requirement constitutes failure of the architecture's primary purpose. Failing to provide a habitable gravity environment is not a partial success; it is a failure."),
  p("2. The requirement cannot be compensated by excellence elsewhere. An architecture that scores well on cost but fails on crew safety does not deliver a safe program at an acceptable cost. The safety failure is the outcome."),
  p("3. The requirement represents an external standard or physiological limit that the program cannot negotiate. NASA-STD-3001 radiation limits are not a starting position for trade-off discussion."),

  h2("4.3 The Gate Operation"),
  p("Gate operation is a binary check. For each destination, each Must-Have is evaluated. If any Must-Have fails, the destination fails the gate. No destination that fails the gate enters the weighted scoring aggregation as a candidate for the evaluated role. Only after the gate check passes does weighted scoring differentiate between remaining candidates."),

  h2("4.4 Gate Results Detail"),

  mkTable(
    [2200, 1500, 1500, 1500, 2660],
    ["Must-Have", "Orbital", "Moon", "Mars", "Mars detail if failed"],
    [
      ["NFR-01 Gravity", "PASS", "FAIL", "FAIL", "0.378G (threshold 1G)"],
      ["NFR-02 Radiation", "PASS", "PASS", "PASS", ""],
      ["NFR-03 Water recovery", "PASS", "PASS", "PASS", ""],
      ["NFR-04 O2 recovery", "PASS", "PASS", "PASS", ""],
      ["NFR-05 RTO", "PASS", "PASS", "FAIL", "6+ months (threshold 14 days)"],
      ["NFR-06 RPO", "PASS", "PASS", "FAIL", "26 months (threshold 90 days)"],
      ["NFR-07 Transport cost", "PASS", "PASS", "FAIL", "~$10,000/kg (threshold $1,000)"],
      ["NFR-08 Failure EV", "PASS", "PASS", "FAIL", "$3.75B (threshold $1B)"],
      ["NFR-13 Behavioral health", "PASS", "PASS", "PASS", ""],
      ["NFR-15 Autonomy", "PASS", "PASS", "PASS", ""],
      ["NFR-16 Monitoring", "PASS", "PASS", "PASS", ""],
      ["NFR-17 Security", "PASS", "PASS", "PASS", ""],
      ["NFR-23 Governance", "PASS", "PASS", "PASS", ""],
      ["FR-10 Communication", "PASS", "PASS", "PASS", ""],
      ["FR-11 Rotation and resupply", "PASS", "PASS", "PASS", ""],
    ]
  ),

  spacer(240),
  p("Only after passing this filter does a destination proceed to weighted scoring. Mars does not pass. The Moon passes for the resource-tier role but not for the habitation-tier role. Orbital habitats pass for all roles."),
);

// ============================================================
// PART 5: WEIGHTED SCORING
// ============================================================
all.push(
  h1("Part 5. Weighted Scoring"),

  p("Weighted scoring aggregates evaluation across the full 25-requirement set. Each requirement carries a weight from 1 to 10 reflecting its relative importance. Each destination is scored 0 to 10 against each requirement. The weighted score is the sum of weight multiplied by score across all requirements, divided by the theoretical maximum. Figure 4 summarizes the results."),

  ...figure('/home/claude/charts/chart2_weighted_scores.png', 600, 300, 'Figure 4. Weighted scores per destination'),

  h2("5.1 How Weights Were Set"),
  p("Weights were derived from three inputs: NASA's 2025 Architecture-Driven Technology Gap priorities (which independently validate the relative importance ordering used here), MoSCoW classification (Must-Haves receive the highest weights), and Kano classification (Basic needs receive highest weights, Excitement attributes lowest). The cross-validation between these three sources gives confidence that the weighting reflects genuine priority rather than author preference."),

  p("Weights span 1 to 10. A weight of 10 is reserved for physiological and safety requirements that the architecture cannot compromise. Weights of 7 to 9 apply to operational requirements that define the program's usability. Weights of 4 to 6 apply to economic and strategic requirements where trade-offs are more reasonable. Weights of 1 to 3 apply to desirable but not defining attributes."),

  h2("5.2 Scoring the Destinations"),
  p("Each destination is scored 0 to 10 on each requirement. A score of 10 indicates the destination meets or exceeds the threshold with margin. A score of 5 indicates partial performance or feasibility with work. A score of 0 indicates the requirement cannot be met within the horizon."),

  p("Scores were assigned from source data: NASA documents (Architecture-Driven Technology Gaps 2025, Objective Decomposition documents, Artemis architecture), peer-reviewed research (gravity physiology, radiation physics, ECLSS literature), commercial operator filings and public roadmaps, and independent analyses (O'Neill-Glaser 1975 orbital construction studies, NASEM planetary science decadals). Each score is traceable to one or more sources in the data workbook."),

  h2("5.3 The Aggregate"),

  mkTable(
    [2400, 1800, 1800, 3360],
    ["Destination", "Weighted Total", "Maximum", "Percentage"],
    [
      ["Orbital rotating habitats", "1,186", "1,670", "71.0%"],
      ["Moon", "1,055", "1,670", "63.2%"],
      ["Mars", "527", "1,670", "31.6%"],
    ]
  ),

  spacer(240),
  h2("5.4 What the Scores Do and Do Not Say"),
  p("Weighted scores are informative but not decisive. The gate check in Part 4 is decisive. A hypothetical destination could score 80% in weighted terms while failing three Must-Haves, in which case it would still be disqualified. The scores are useful for ranking destinations that have already passed the gates and for tracking improvement over time as evidence accumulates."),

  p("In this assessment, weighted scores happen to agree with gate-check outcomes. This is not automatic. It reflects the fact that requirements classified as Must-Haves are also heavily weighted, and that destinations failing Must-Haves tend to score poorly on the aggregated total. A framework where Must-Haves received low weights would produce gate-check outcomes that conflict with weighted rankings, which is one reason weights and priorities were derived from consistent sources."),
);

// ============================================================
// PART 6: KANO ANALYSIS
// ============================================================
all.push(
  h1("Part 6. Kano Analysis"),

  p("Kano analysis is a second lens for requirement prioritization that complements MoSCoW. Where MoSCoW classifies requirements by how critical they are to deliver, Kano classifies requirements by how they affect user satisfaction when present or absent. The two classifications reinforce each other: a requirement that is Must-Have under MoSCoW is typically Basic under Kano. Figure 5 shows the distribution."),

  ...figure('/home/claude/charts/chart5_kano.png', 640, 272, 'Figure 5. Kano classification and basic-need satisfaction'),

  h2("6.1 What Kano Categories Mean"),

  mkTable(
    [2200, 3400, 3760],
    ["Category", "Behavior when requirement is present", "Behavior when requirement is absent"],
    [
      ["Basic (Must-be)", "Not noticed; taken for granted", "Dissatisfaction; the product is broken"],
      ["Performance (One-dimensional)", "Proportional satisfaction; more is better", "Proportional dissatisfaction"],
      ["Excitement (Attractive)", "Delight; differentiates above competitors", "No dissatisfaction; user did not expect it"],
      ["Indifferent", "No effect", "No effect"],
    ]
  ),

  h2("6.2 Classification Applied Here"),
  p("The 15 top-ranked requirements fall into Kano categories as follows. Gravity, radiation, ECLSS, and RTO fall in Basic because their absence is disqualifying. Transport cost, behavioral health tolerance, and scalability fall in Performance because more-is-better characterizes user preference. Excitement attributes include technology transferability and strategic positioning, where presence differentiates the architecture but absence does not break it."),

  h2("6.3 Gate-Check Reinforcement"),
  p("A destination that fails a Basic-category requirement fails the architecture's purpose by Kano definition, regardless of its Performance or Excitement scores. The Moon's gravity failure, Mars's five gate failures, and Orbital's clean gate card all fall in Basic territory. Kano analysis independently confirms the MoSCoW gate-check outcome."),
);

// ============================================================
// PART 7: SENSITIVITY ANALYSIS
// ============================================================
all.push(
  h1("Part 7. Sensitivity Analysis"),

  p("Sensitivity analysis tests whether the ranking is driven by specific weight or assumption choices or whether it is stable across reasonable variation. Seven scenarios were tested. The ranking held in every scenario. Figure 6 shows the results."),

  ...figure('/home/claude/charts/chart4_sensitivity.png', 640, 267, 'Figure 6. Sensitivity across scenarios'),

  h2("7.1 Scenarios Tested"),

  mkTable(
    [2800, 6560],
    ["Scenario", "What was varied"],
    [
      ["Baseline", "Published weights, documented scores"],
      ["Best-case Mars", "Assumed partial-gravity viability demonstrated; RTO threshold relaxed to 90 days; transport cost threshold relaxed to $5,000/kg"],
      ["Most-favorable Moon", "Lunar ISRU maturation accelerated; fission power deployed early; lunar night gap closed on Phase 1 timeline"],
      ["Cost-weighted", "Cost and transport requirement weights doubled"],
      ["Resilience-weighted", "Risk and reliability requirement weights doubled"],
      ["Aggressive tech timeline", "All technology maturation timelines accelerated 30%"],
      ["Conservative tech timeline", "All technology maturation timelines slowed 30%"],
    ]
  ),

  h2("7.2 Results"),
  p("Orbital ranked first in every scenario. Moon ranked second in every scenario. Mars ranked third in every scenario including its best-case. The ranking is robust. Even under assumptions favorable to Mars, Mars does not overtake Moon or Orbital, because its gate failures persist: the scenarios modify weights and scores within gates that pass, but the gate failures on gravity and RTO remain physics constraints unaffected by weight variation."),

  h2("7.3 Why the Ranking Is Stable"),
  p("Two structural reasons. First, Must-Have gates operate as hard filters that weight variation cannot override. A destination failing a Must-Have stays at the bottom regardless of how the remaining weights are adjusted. Second, the gap between Orbital and the others on heavily-weighted requirements (gravity, RTO, RPO) is wide enough that realistic weight variation does not close it."),

  p("This robustness is an expected feature of a well-structured assessment. If small weight perturbations changed the ranking, the ranking would reflect the weighting choices more than the underlying evidence. The stability is diagnostic: it indicates the evidence is doing the work."),
);

// ============================================================
// PART 8: DATA SOURCES AND TRACEABILITY
// ============================================================
all.push(
  h1("Part 8. Data Sources and Traceability"),

  p("Every score in the assessment traces to one or more sources. The data workbook records the source or sources behind each cell. This section summarizes the primary source categories and notes the top sources per category. The full source registry with citation details is in the Methodology and Evidence Appendix."),

  h2("8.1 Source Categories"),

  mkTable(
    [2400, 1400, 5560],
    ["Category", "Count", "Primary Sources"],
    [
      ["NASA standards and architecture", "15+", "NASA-STD-3001, Architecture-Driven Technology Gaps 2025, Architecture-Driven Data Gaps 2025, Lunar Objective Decomposition, Mars Objective Decomposition, Architecture Concept Reviews 2023-2024"],
      ["Peer-reviewed research", "12+", "Mortreux and Bouxsein 2024 (MHU-8), ISS ECLSS performance papers, radiation environment studies, behavioral health analog studies (HI-SEAS, Concordia)"],
      ["Commercial operator data", "10+", "Axiom, Vast, Voyager Space, Blue Origin, SpaceX public filings and roadmaps"],
      ["Independent analyses", "8+", "O'Neill-Glaser 1975 Space Settlements study, NASEM decadals, Institute for Defense Analyses launch cost studies"],
      ["Historical program data", "10+", "Apollo, Space Shuttle, ISS, commercial cargo program cost and operational data"],
    ]
  ),

  h2("8.2 Traceability Example"),
  p("Gravity threshold derivation: NFR-01 threshold of 1G is sourced to (a) Mortreux and Bouxsein 2024 for the partial-gravity dose-response curve, (b) NASA-STD-3001 for bone loss limits that the MHU-8 data informs, and (c) the conservative-defaults architecture principle (AP-03 in the Architecture Assessment) for the choice of 1G over 0.67G. The threshold is thus not a single number but a derivation traceable through three references. A reviewer challenging the threshold can challenge any of the three."),

  h2("8.3 Known Evidence Gaps"),
  p("Five gaps are noted in the current evidence base. Each affects the confidence of specific scores but does not change the gate-check outcomes:"),

  p("Partial-gravity multi-generational physiology has no direct data. The architecture uses conservative defaults."),
  p("Colony-scale ECLSS has no operational precedent. The Phase 2 demonstrator gates Phase 3 commitment."),
  p("Rotating habitat operational experience is zero. The Phase 2 demonstrator is the evidence-generation mechanism."),
  p("Orbital radiation environment at ELEO is sparse; current values rely on modeling plus ISS extrapolation."),
  p("Mars EDL for crew-scale payloads has no flight heritage. Mars is disqualified on other grounds; this gap does not change the outcome but affects any future Mars upgrade assessment."),
);

// ============================================================
// PART 9: CONCLUSIONS AND OPEN INVITATIONS
// ============================================================
all.push(
  h1("Part 9. Conclusions and Open Invitations"),

  h2("9.1 Summary of Findings"),
  p("The recommended architecture is a three-tier hybrid: Earth as hardened primary, the Moon as resource and staging tier, and orbital rotating habitats as primary habitation. Mars was evaluated and is disqualified by five Must-Have gate failures on physics constraints not addressable within the horizon. The finding is supported by weighted scoring (71%, 63%, 32% for Orbital, Moon, Mars respectively) and by sensitivity analysis across seven scenarios where the ranking held without exception."),

  h2("9.2 What Would Change the Recommendation"),
  p("The assessment is falsifiable. Specific evidence would change specific conclusions:"),

  p("New evidence on partial-gravity multi-generational physiology could change NFR-01's conservative default. This would not make the Moon or Mars competitive for habitation immediately (the Moon still fails at 0.166G against a reduced threshold; Mars still fails four other Must-Haves), but it could reopen the gravity requirement for orbital habitats."),

  p("A rotating habitat demonstrator failure would force architecture revision. The current architecture gates Phase 3 colony commitment on Phase 2 demonstrator success. If the demonstrator fails, the habitation tier falls back to a scaled-up small-station network."),

  p("Material changes in transport cost economics would affect capital requirements but not relative ranking. If Starship-class costs do not materialize, Mars moves further out of contention, not closer."),

  p("A breakthrough in Mars EDL, combined with resolution of the partial-gravity question, would reopen Mars as a candidate. Both conditions would need to be met; neither alone is sufficient."),

  h2("9.3 What Reviewers Are Asked to Evaluate"),
  p("Readers reviewing this assessment are asked to evaluate three things:"),
  p("1. Whether the requirements in Part 2 accurately capture what the program should be delivering. If a requirement is missing or miscategorized, that is a material finding."),
  p("2. Whether the evidence cited supports the scores assigned. If a score should be higher or lower based on sources not yet incorporated, that is a material finding."),
  p("3. Whether the gate-check outcome follows from the evidence. If the logic is flawed or the filter is misapplied, that is the most material finding of all."),

  h2("9.4 How to Contribute"),
  p("The assessment is versioned and open to contribution. Evidence proposed for inclusion is evaluated against sourcing standards and, where accepted, incorporated in the next version with change log annotation. A change log accompanies every revision so that the evolution of the assessment is itself auditable. The data workbook and the Methodology and Evidence Appendix are the primary artifacts for evidence contribution."),

  h2("9.5 Next Documents"),
  p("Two documents are planned to follow this one:"),
  p("A Background and Physics Primer explaining centrifugal gravity, radiation physics, ECLSS design principles, ISRU economics, and related technical background for readers who want the deeper treatment. This is educational material, not evaluation material."),
  p("A Future Horizon document covering asteroid mining, cislunar economy development, trade between tiers, expansion beyond the 25-year baseline, and Mars as a candidate science program. This is forward-looking material that exceeds the current assessment's evidence base but that informs long-horizon planning."),
);

// ============================================================
// Closing page
// ============================================================
all.push(
  PB,
  spacer(1600),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [new TextRun({ text: "End of Destination Assessment Data Document", size: 26, color: C.accent, bold: true })],
    spacing: { before: 0, after: 400 }
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [new TextRun({ text: "See the Architecture Assessment for the stakeholder, governance,", size: 22, color: C.muted, italics: true })],
    spacing: { before: 0, after: 60 }
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [new TextRun({ text: "and architectural decision framework.", size: 22, color: C.muted, italics: true })],
    spacing: { before: 0, after: 60 }
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [new TextRun({ text: "See the Methodology and Evidence Appendix for the full source registry.", size: 22, color: C.muted, italics: true })],
    spacing: { before: 200, after: 0 }
  }),
);

// ============================================================
// Build
// ============================================================
const doc = new Document({
  creator: "Craig Nash",
  title: "Destination Assessment: Data, Methodology, and Results",
  description: "Quantitative evaluation of Moon, Mars, and orbital rotating habitats as candidate platforms",
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
            new TextRun({ text: "Destination Assessment: Data, Methodology, and Results", size: 18, color: C.muted }),
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
  fs.writeFileSync('/home/claude/report_builder/research_paper.docx', buffer);
  console.log('Research paper written');
});
