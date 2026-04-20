# SpaceColony Architecture Assessment

An open methodology applied to destination selection for extraplanetary infrastructure. Treats the Moon, Mars, and orbital rotating habitats as candidate platforms and evaluates them against a structured requirement set drawn from NASA standards, peer-reviewed physiology research, and commercial operator data.

**License: Apache 2.0**

## Headline Result

The recommended architecture is a three-tier hybrid:

| Tier | Destination | Role |
|---|---|---|
| Primary | Earth | Hardened anchor: control, finance, research, governance, population majority, planetary defense, launch, mission operations |
| Resource | Moon | Extraction and staging: water ice, regolith, propellant, fission power, shielding mass. Crew rotates; no permanent residents |
| Habitation | Orbital rotating habitats | Population and economy: 1G equivalent rotation, closed-loop ECLSS, multi-generational residency, microgravity industry |

| Destination | Weighted Score | Must-Haves Passed | Role |
|---|---|---|---|
| Orbital rotating habitats | 71.0% | 15 of 15 | Primary habitation tier |
| Moon | 63.2% | 14 of 15 | Resource and staging tier |
| Mars | 31.6% | 10 of 15 | Not part of architecture |

Mars was evaluated as a candidate and is disqualified. It fails five Must-Have gates on physics constraints not addressable within the 25-year horizon: native gravity, emergency return time, resupply interval, transport cost, and failure expected value. Mars retains legitimate scientific value and is an appropriate target for a Mars-specific science program; it is not a fit for the program assessed here. Data is retained in the workbook for handoff.

## Repository Structure

```
/docs/                  Final deliverable documents
  01_Architecture_Assessment.docx/.pdf
  02_Destination_Assessment_Data_Paper.docx/.pdf
  03_Methodology_Evidence_Appendix.docx
  LinkedIn_Article.md
  Reddit_Review_Post.md

/diagrams/              Architecture and design diagrams (SVG + PNG)
  architecture_visual.*
  system_context.*
  component_model.*
  operational_model.*

/charts/                Data charts (PNG) and their source
  chart1_must_have_gates.png
  chart2_weighted_scores.png
  chart3_gravity_curve.png
  chart4_sensitivity.png
  chart5_kano.png
  build_charts.py
  build_chart1.py

/data/                  Workbook, CSVs, and NASA source data
  SpaceColony_DataAnalysis_Workbook_v0.4.xlsx (primary scoring workbook)
  colonization_analysis_data.xlsx (earlier evidence consolidation)
  01_scoring_matrix.csv through 12_assumptions_register.csv
  NASA source files (Architecture-Driven Technology Gaps 2025, etc.)

/build_sources/         Node.js scripts that generate the documents
  lib2.js (shared helpers and styles)
  build_assessment.js
  build_research_paper.js
```

## How to Read This Repo

If you want the recommendation with stakeholder and governance context, start with **01_Architecture_Assessment**. It follows IBM IT Architect Assistant artifact structure: architectural decisions, requirements, RAID register, RACI matrix, sizing, recommendation.

If you want the data, methodology, and evidence, start with **02_Destination_Assessment_Data_Paper**. It is a 26-page research-paper-style document with the headline numbers on page 2, common objections addressed on page 3, and data-heavy treatment of requirements, gate check, weighted scoring, Kano analysis, and sensitivity analysis.

If you want to challenge the methodology or contribute evidence, start with the **workbook** in /data/. Every score traces to one or more sources in the source registry.

## Framework

The assessment uses standard enterprise solutions architecture methodology applied to an unconventional problem:

- **MoSCoW** classification of requirements (Must, Should, Could, Won't)
- **Kano** model for satisfaction category (Basic, Performance, Excitement, Indifferent)
- **Weighted scoring** across 25 requirements with weights derived from MoSCoW priority and NASA technology gap priorities
- **Sensitivity analysis** across 7 scenarios including best-case Mars and cost-weighted variants
- **RAID register** (Risks, Assumptions, Issues, Dependencies)
- **RACI matrix** for decision authority
- **Architectural decision records** with traceability to requirements

NASA documents are treated as vendor product specifications rather than authoritative background. Physics constraints are distinguished from engineering-solvable limits as a core analytical tool.

## Key Principle

Physics before engineering. Physics constraints determine what is possible; engineering constraints determine what is affordable. The architecture does not depend on engineering bypassing physics. A destination that fails a Must-Have on a physics constraint does not pass because it scores well elsewhere. Must-Have gates are hard filters applied before weighted scoring.

## Gravity Threshold

The gravity Must-Have is set at 1G equivalent. The evidence base is the JAXA MHU-8 mouse study (Mortreux and Bouxsein 2024), which shows partial mitigation of muscle atrophy at 0.33G and full prevention at 0.67G. Multi-generational mammalian reproduction at partial gravity has never been tested. The conservative default protects a difficult-to-reverse decision from being built on untested physiology. Rotation provides 1G as an engineering parameter rather than a biological assumption. The threshold is revisitable when partial-gravity physiology evidence exists.

## Building the Documents

The two primary documents are built from Node.js scripts in /build_sources/:

```bash
cd build_sources
npm install docx
node build_assessment.js      # produces assessment.docx
node build_research_paper.js  # produces research_paper.docx
```

Charts are regenerated from /charts/build_charts.py and /charts/build_chart1.py. Requires Python 3 with matplotlib.

Diagrams are SVG source files in /diagrams/; PNG versions are generated via cairosvg.

## Contributing

The framework is versioned and open to contribution. Evidence proposed for inclusion should cite its source. Where accepted, contributions are incorporated in the next version with change log annotation. The goal is the best assessment the available evidence supports, not defense of the assessment presented here.

If you find a missing requirement, a miscategorized one, a score that should be higher or lower based on evidence not incorporated, or a logic error in how the gate check is applied, those are the most useful findings.

## Versioning

Current version: v1.0 (April 2026).

Each material revision publishes a change log indicating what moved, why, and which source evidence supports the change. See CHANGELOG.md for history.

## Author

Craig Nash
