# Project Log: Off-Earth Colonization Architecture Analysis

## Project Overview

Applied enterprise solutions architecture methodology to evaluate Moon, Mars, and orbital colonies as deployment targets for permanent human settlement. Produced a scored architecture recommendation, risk assessment, provider evaluation, and reusable methodology template.

**Duration:** Multi-session engagement, April 2026
**Output:** GitHub repository with analysis, data, notebook, methodology, and templates
**Repository:** https://github.com/lenticulartech/SpaceColony

---

## How the Project Was Defined

The project started as a question: what happens when you treat space colonization as an infrastructure architecture decision instead of an exploration narrative? The framing evolved through iteration:

1. Initial concept: compare Moon, Mars, and orbital using weighted scoring
2. Refined to: apply Well-Architected Framework pillars as the evaluation structure
3. Further refined to: treat this as a real SA engagement with a phased methodology, not just a comparison chart
4. Final framing: preliminary architecture assessment for a hybrid deployment, treating NASA documents as vendor specs, with assumptions flagged for refinement post-sale

The engagement framing mirrors how an actual consulting project would work: assess current environment, define requirements, evaluate options, recommend architecture, note where estimates need better data.

---

## Methodology Development

### Framework Selection

Reviewed the Well-Architected Frameworks from three vendors to build a cross-vendor pillar structure:

| Vendor | Pillars | Used For |
|---|---|---|
| IBM | Resiliency, Security/Compliance, Performance, Cost Optimization, Operational Excellence, Hybrid/Portable | Primary pillar structure (6 of 8 pillars) |
| AWS | Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, Sustainability | Sustainability pillar added, WAFR review process as structural model |
| Google Cloud | Operational Excellence, Security/Privacy/Compliance, Reliability, Cost Optimization, Performance, Sustainability | Cross-validation of pillar definitions |

Added Risk Assessment as the 7th pillar (distinct from Resiliency). Added Sustainability as the 8th (aligned with AWS/Google). Final structure: 8 pillars.

### Process Design

The 14-step process was developed iteratively by documenting the actual steps taken during the analysis, then organizing them into a reproducible sequence. The three-phase structure (Prepare, Analyze, Design) was modeled after the AWS WAFR lifecycle (Prepare, Review, Improve).

### Analytical Techniques Applied

| Technique | Where Applied |
|---|---|
| MoSCoW Prioritization | Requirements classification (Must/Should/Could/Won't) |
| Kano Satisfaction Model | Requirements classification (Basic/Performance/Excitement) with pass/fail check |
| Weighted Scoring Matrix | Destination evaluation (24 requirements, 155 total weight) |
| Stakeholder Analysis | Power/interest grid, RACI matrix for 6 stakeholder groups |
| Workload Classification | 8 workloads mapped by dependency and portability to platforms |
| Risk Register | 26 threats across Moon, Mars, Orbital, Earth with likelihood x impact scoring |
| FMEA | 5 destination-specific failure modes with detection and severity |
| Solvability Classification | Each risk categorized as engineering-solvable, partial, or permanent constraint |
| Provider Scoring | 17 providers across 6 layers with 6-criteria weighted evaluation |
| Gap Analysis | 10 architecture layers with severity rating and estimated closure year |
| Sensitivity Analysis | 6 scenarios testing assumption changes against scoring results |
| Virtualization Spectrum | Environment classification (native, partial, full) as architectural decision tool |
| Cost Trajectory Analysis | ISS → Tiangong → commercial stations → colony-scale trend |

---

## Data Sources and When They Were Introduced

### NASA Primary Sources (uploaded and analyzed during the engagement)

| Source | Content | Size | How Used |
|---|---|---|---|
| 2025 Architecture-Driven Technology Gaps (XLSX) | 57 prioritized technology gaps from NASA 2025 ACR Rev C | 57 rows | Mapped to our pillar categories, validated MoSCoW ordering |
| 2025 Architecture-Driven Data Gaps (XLSX) | 25 data gaps NASA has identified | 25 rows | Referenced for what NASA acknowledges it doesn't know |
| 2025 Lunar Objective Decomposition (XLSX) | Full functional decomposition of lunar objectives | 2,300+ rows | Treated as service requirements specification for Moon |
| 2025 Mars Objective Decomposition (XLSX) | Full functional decomposition of Mars objectives | 1,400+ rows | Treated as service requirements specification for Mars |
| ACR24 Lunar Architecture (XLSX) | 2024 Architecture Concept Review, lunar | 2,651 rows | Cross-reference for architecture segments and functions |
| ACR24 Mars Architecture (XLSX) | 2024 Architecture Concept Review, Mars | 604 rows | Cross-reference, noted "science objectives not yet decomposed for Mars" |
| ACR23 Architecture (XLSX) | 2023 Architecture Concept Review | 3,136 rows | Historical baseline for architecture evolution |

### NASA Published Documentation (referenced, not uploaded)

- NASA-STD-3001 Volume 1 Rev C (crew health standards, career radiation limits)
- NASA Life Support BVAD (daily O2, water, food requirements per crew member)
- NASA ECLSS trade studies (open-loop 225 kg vs closed-loop 2,641 kg)
- Artemis Surface Habitat specifications (atmospheric pressure, O2 concentration)
- NASA Human Research Program Five Hazards classification

### Other Sources

- SIPRI 2025 data (nuclear warhead counts: 12,241 global, 3,912 deployed)
- ESA planetary defense data (>95% of 1km+ asteroids identified)
- Globus et al. 2017 (rotating habitat human factors: 4 RPM comfort, 56m radius for 1g)
- Nuclear engineering analysis transcripts (T. Folse Nuclear, reaction video series analyzing nuclear war scenarios)
- Voyager Technologies 10-K (Starship launch cost: $90M)
- SpaceX, Blue Origin, Vast, Axiom public documentation and press reports
- Artemis program updates through April 2026

---

## How AI Models Were Used

Multiple AI models were used for different tasks based on their strengths:

| Task Type | Approach | Why |
|---|---|---|
| Data gathering and web research | Search-capable model with real-time access | Current provider data, Artemis status, pricing, timelines needed April 2026 accuracy |
| Structured data extraction from XLSX | Python/pandas processing of uploaded NASA files | Programmatic extraction of 57 tech gaps, objective decompositions, priority rankings |
| Deep research requiring large context synthesis | Model with extended search capability | Cross-referencing multiple NASA documents, identifying patterns across 2,300+ row datasets |
| Scoring validation and sensitivity analysis | Analytical model maintaining scoring consistency | Recalculating weighted totals across scenarios while maintaining framework integrity |
| Content generation and formatting | Model optimized for structured output | CSV generation, notebook code, markdown documents, prompt engineering |
| External research (cost data, Coriolis effects, threat baselines) | Separate model with deep search | Gemini used for broad data gathering with strict sourcing rules, results brought back for integration |
| Prior art assessment | Web search across academic databases, NASA, and industry | Confirmed no existing work applies enterprise IT Well-Architected methodology to colonization |

### Multi-Model Research Pattern

A deliberate pattern was established: one model for broad data gathering with sourcing requirements, a second for analytical integration and framework consistency. Research prompts were generated with explicit instructions against fabrication ("state 'no source found' rather than guessing") and results were reviewed for accuracy before integration.

---

## How Data Analytics Was Applied

### Quantitative Analysis
- Weighted scoring across 24 requirements x 3 destinations = 72 individual scores
- Sensitivity analysis: 6 scenarios modifying key assumptions, recalculating all totals
- Risk scoring: 26 threats with likelihood x impact = risk score, aggregated per destination
- Provider evaluation: 17 providers x 6 weighted criteria = weighted composite scores
- NASA tech gap categorization: 57 gaps mapped to 10 analysis categories, average priority computed per category

### Data Processing
- NASA XLSX files parsed with Python/pandas to extract structured data
- Technology gaps sorted by priority ranking and mapped to our pillar categories
- Cross-tabulation between NASA priority ordering and our independent MoSCoW classification
- CSV exports generated for all analysis tables (12 files) for Google Sheets portability

### Visualization (Colab Notebook)
- Destination score comparison (bar chart + tier breakdown)
- Must-Have requirements radar chart
- Risk profile heatmaps per destination (color-coded by severity)
- Engineering solvability stacked bar chart
- Kano satisfaction curves
- Provider evaluation horizontal bar chart by architecture layer
- Gap analysis with TRL readiness markers
- NASA technology gap priority distribution by category
- ECLSS mass comparison and daily consumables breakdown

---

## Key Decision Points and How They Were Resolved

| Decision | How Resolved |
|---|---|
| Which Well-Architected Framework to use? | Cross-vendor comparison (IBM/AWS/Google), selected IBM as base, added Risk Assessment and Sustainability pillars |
| How to weight requirements? | Direct assignment based on NASA hazard severity hierarchy and stakeholder analysis |
| Is 0.4g a valid gravity threshold? | Best available evidence from NASA-STD-3001 and physiological research, flagged as medium-confidence assumption |
| Should the "eggs in one basket" argument change the recommendation? | Nuclear engineering analysis (T. Folse transcripts) reviewed, concluded no credible threat renders Earth uninhabitable, argument fails |
| Can rotating habitats work at reasonable scale? | Globus et al. 2017 updated the 1970s assumptions: 56m radius at 4 RPM, not 224m. Score adjusted accordingly. |
| How to handle missing cost data for orbital colonies? | Document the cost trajectory trend (ISS → Tiangong → proposed colonies), flag as assumption, note for refinement |
| Generic methodology or space-specific? | Generic. The methodology applies to any multi-platform architecture decision. Space is the case study. |
| How to handle NASA source attribution? | NASA data is public domain (US government work). Original analysis, methodology, and scoring are Apache 2.0, Copyright 2026 Lenticular Tech. |

---

## What Could Be Refined

| Area | Current State | Refinement Opportunity |
|---|---|---|
| Orbital colony costs | Trend data only, no hard numbers | Need real cost estimates from Vast, Axiom, or similar for near-term stations |
| Gravity threshold | 0.4g based on limited evidence | Long-duration partial gravity studies needed (none exist yet) |
| FMEA | 5 entries, illustrative | Full FMEA per destination with all critical systems |
| Cascading failure analysis | Described conceptually | Formal cascading failure model with quantified propagation |
| SPOF analysis | Scoped but not built | Full SPOF count per destination per critical system |
| Process mapping / BPMN | Referenced in methodology | Actual BPMN diagrams for deployment, failover, scaling |
| Financial model | Cost trajectory only | Full TCO model with risk-adjusted costs per destination |
| Gemini data gaps | Many "Data not found" entries | Follow-up research pass to fill ISS operational baselines |
| Methodology v2 | 3 phases, 14 steps documented | Expand with review questions per pillar, worked examples per step |

---

## Repository Contents (Final State)

36 files, 722 KB:
- README.md, METHODOLOGY.md, LICENSE, NOTICE, .gitignore
- analysis/ (3 files: Phase 1, Phase 2, sources)
- data/sheets/ (12 CSV files)
- data/nasa_reference/ (4 NASA XLSX files)
- notebooks/ (1 Colab notebook, 10 analysis sections)
- prompts/ (2 Sonnet content generation prompts)
- templates/ (9 blank CSV templates)
