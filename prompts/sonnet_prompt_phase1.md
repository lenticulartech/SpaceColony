# SONNET PROMPT: Off-Earth Colonization Architecture Analysis — Content Generation v2

## CONTEXT

You are generating content based on a completed solutions architecture analysis that applies enterprise Well-Architected Framework methodology to off-earth colonization decisions. The analysis uses IBM, AWS, and Google Cloud well-architected pillars, NASA-STD-3001, MoSCoW prioritization, Kano satisfaction modeling, and workload dependency classification.

## CRITICAL STYLE RULES

- American English vocabulary
- No unnecessary hyphens; use commas and natural flow
- No em dashes
- No sycophancy or filler
- Conversational, confident, direct voice
- Data first, opinions second
- No bullet points in prose sections unless explicitly requested
- When listing, use commas inline or short formatted lists
- **DO NOT reference the author's background, credentials, certifications, or experience in any output.** The analysis and methodology should speak for themselves. No "as a solutions architect" or "with X years of experience" or credential name-drops. Zero. The reader should judge the work on its merits.

## THE ANALYSIS (reference material for all outputs)

### Core Thesis
No single off-earth destination satisfies all "Must Have" requirements for permanent human colonization. The optimal architecture is hybrid: Moon as primary resource/staging layer, orbital colonies as scalable habitation and economic engine, Mars deferred as a high-latency edge deployment. This mirrors hybrid cloud architecture where on-prem + cloud outperforms either alone.

### Key Metaphor: Bare Metal vs Virtualization
Moon and Mars are bare-metal deployments — fixed gravity, fixed atmosphere, fixed radiation. You accept whatever the hardware ships with. Orbital colonies are virtualized infrastructure — gravity, atmosphere, radiation shielding, thermal management, and day/night cycles are all configurable design parameters. The same reason enterprises moved from physical servers to VMs is the same reason humanity's future is more likely in orbit than on a planetary surface.

### Methodology Stack
- **Well-Architected Frameworks:** IBM (6 pillars including Hybrid & Portable), AWS (6 pillars including Sustainability), Google Cloud (6 pillars including Sustainability). Cross-referenced for completeness.
- **NASA Standards:** NASA-STD-3001 (human system standard), Human Rating Pyramid (4 tiers), Five Hazards of Human Spaceflight
- **Prioritization:** MoSCoW (Must/Should/Could/Won't) + Kano Model (Basic/Performance/Excitement needs) + Weighted Scoring
- **Classification:** Workload dependency → portability → placement mapping
- **Stakeholder Analysis:** Power/Interest Grid, RACI Matrix

### Six Pillar Mapping to Colonization

| Well-Architected Pillar | Colonization Category |
|---|---|
| Resiliency / Reliability | Human Survivability |
| Security & Compliance | Safety & Operations |
| Operational Excellence | Day-to-day Operations, Maintenance |
| Cost Optimization | Transport, Operating, Failure Costs |
| Performance | Resource Efficiency, Energy |
| Hybrid & Portable (IBM) | Technology Transferability, Interoperability |
| Sustainability (AWS/Google) | Resource Renewal, Waste Management |

### Combined Weighted Scores (out of 1550 max)
- Orbital Colonies: 1028 (66.3%)
- Moon: 921 (59.4%)
- Mars: 595 (38.4%)

### Must-Have Failures
- Moon: fails gravity (0.16g vs 0.4g threshold)
- Mars: fails gravity (0.38g), emergency RTO (9+ month return), supply chain RPO (26-month windows), and cost of failure (catastrophic, no evacuation)
- Orbital: weakest on radiation shielding and ISRU (resource dependency on external supply)

### Kano Model Results
**Basic Needs (dissatisfied if absent):**
- Mars fails three: gravity, emergency return, supply chain
- Moon fails one: gravity
- Orbital passes all

**Performance Needs (more = happier):**
- Living space, economic opportunity, energy, comms all favor Moon or Orbital
- Mars is capped by physics on most performance dimensions

**Excitement Needs (unexpected delight):**
- Only orbital delivers: simulated Earth gravity, mobility between locations, configurable day/night, choice of community
- Moon and Mars cannot deliver any excitement-level features

### Workload Classification Results
- High-dependency workloads (mining, heavy manufacturing) → Moon surface (bare metal)
- Medium-dependency workloads (light manufacturing, agriculture) → Orbital (cloud)
- Low-dependency workloads (science, transport) → Deploy anywhere needed
- Habitation → Orbital only (only destination meeting all human health specs)

### Key Data Points (cite where relevant)
- Partial gravity below 0.4g insufficient for long-term health (NASA Technical Reports, 2021)
- ISS mouse study at 0.33g: mitigated but did not prevent atrophy; 0.67g threshold (2026 ISS/URI/Harvard study)
- All available Mars CO2 sources yield max ~0.07 bar atmospheric pressure (MAVEN/Jakosky & Edwards, Nature Astronomy, 2018)
- Career radiation limit: 600 mSv (NASA-STD-3001)
- NASA Five Hazards: Radiation, Gravity, Isolation/Confinement, Hostile Environments, Distance from Earth
- NASA Human Rating Pyramid maps to MoSCoW: Tier 1 = Must, Tier 2 = Must, Tier 3 = Should, Tier 4 = Could
- IBM Well-Architected: "Operations is 98% of a solution's lifetime costs"
- Mars round trip: ~1200 days. No on-demand resupply. No emergency evacuation.
- Moon RTO: 3 days. Mars RTO: 9+ months. Orbital (cislunar): hours to days.
- ISS ECLSS maintenance and housekeeping are the leading demands on crew time
- IBM unique pillar (Hybrid & Portable): technology should be built once and deployed consistently everywhere

### Stakeholder Summary
- Government agencies: high power, high interest (sponsors, regulators)
- Private aerospace: high power, high interest (builders, transport)
- Colonists: low power, high interest (end users)
- Taxpayers aligned with government Must-Haves but weight cost/return higher
- No stakeholder group's Must-Have requirements are fully satisfied by Mars

### Hybrid Architecture Conclusion
- Earth = on-prem (manufacturing, population, regulatory)
- Moon = primary cloud region (nearest resource node, ISRU, low-latency supply chain)
- Orbital = elastic compute (mobile, scalable, configurable everything, asteroid mining)
- Mars = edge node (deploy last, high latency, autonomous, only when core infrastructure supports it)
- Resource chain: Earth → async → Moon → sync → Orbital → async → Deep space

---

## OUTPUT REQUESTS

Generate each output as a complete, standalone piece. **No personal background or credential references in any output.**

### OUTPUT 1: LinkedIn Post (600-800 words)

Hook should grab attention through the methodology itself, not the author's background. Something like: "What if you evaluated Moon vs Mars vs orbital colonies the same way you'd evaluate a hybrid cloud migration?" or "I ran humanity's biggest infrastructure decision through a Well-Architected Framework review. Here's what failed."

Structure:
1. Opening hook establishing the unusual application of SA methodology
2. Brief explanation of the approach (Well-Architected pillars, MoSCoW, Kano, NASA requirements)
3. The bare metal vs virtualization metaphor
4. Key findings: no destination passes all Must-Haves, Mars fails basic needs, hybrid wins
5. The workload classification insight (mining stays on Moon, habitation goes orbital)
6. Closing engagement question

Tone: Conversational, confident, direct. Not academic. Not corporate. The kind of analysis that makes someone stop scrolling because it reframes something they thought they understood.

Do NOT use: em dashes, unnecessary hyphens, bullet points in the body, headers/bold (LinkedIn mobile rendering), filler phrases, author credentials.

End with an engagement question.

### OUTPUT 2: Reddit Post (r/space or r/futurology, 1200-1800 words)

Title suggestion included. More technical depth than LinkedIn. Include the scoring matrix as a formatted table, the Kano model results, and the workload classification table. Acknowledge counterarguments and debatable scores explicitly. Invite discussion on specific scores.

Tone: Informed, direct, expects a technically literate audience that will push back. Preempt the obvious counterarguments (Starship cost reduction, asteroid mining speculation, "but Elon said").

### OUTPUT 3: YouTube Video Script (8-12 minutes, ~1500-2000 words)

Structure as spoken narration with [VISUAL] cues in brackets. Assume screen recordings of the scoring matrix, simple graphics, and referenced NASA diagrams.

Open with a hook that poses the question. Walk through methodology progressively. Build from "what are the requirements" to "how do the destinations score" to "what does the hybrid architecture look like." End with the Kano insight (Mars can't deliver basic satisfaction) and a call to action for comments.

Pacing: conversational, as if explaining to a smart friend over coffee. Not lecture-style. Not breathless YouTube energy.

### OUTPUT 4: Full Analysis Summary (300-400 words)

Concise summary suitable for a blog landing page or document introduction. Reference that the full methodology, all six pillar mappings, Kano model, workload classification, stakeholder analysis, scoring matrix, and 40-source reference list are available in the complete document.

---

## IMPORTANT NOTES FOR SONNET

- **No author credentials or background in any output.** This is non-negotiable. The analysis stands on its methodology and data, not on who wrote it.
- The audience spans IT professionals, cloud architects, space enthusiasts, and general LinkedIn readers. The cloud metaphor is the differentiator that makes this content unique.
- The original Mars colonization article argued for orbital colonies over Mars on ROI grounds. This analysis expands and formalizes that argument with enterprise methodology and NASA data.
- Do not invent data. All claims should be traceable to the source list or clearly marked as scoring judgment.
- When referencing NASA standards, use actual standard numbers (NASA-STD-3001).
- When referencing Well-Architected Frameworks, name the vendor (IBM, AWS, Google) and the specific pillar.
- The Kano model results are a key differentiator. Mars failing three basic needs is a powerful, easy-to-understand finding. Use it prominently.
- The workload classification is another differentiator. "Mining stays on Moon, habitation goes orbital" is a clean, memorable conclusion.
- No hyphens except compound words. Commas preferred. No em dashes. No en dashes.
