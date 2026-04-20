# I treated humanity's expansion into space as an enterprise infrastructure decision. Here's what the framework said.

*A solutions architecture assessment of Moon, Mars, and orbital habitats, using the same methodology that governs cloud platform selection and hybrid infrastructure design.*

---

Artemis II is in flight. The Mars conversation is loud. The orbital station conversation barely rates.

Most of the public discussion treats destination selection as a matter of vision, narrative, or advocacy. I treat it the way I would treat any other multi-platform infrastructure decision: with a framework, a requirements set, and a weighted scoring matrix. Infrastructure is infrastructure. The constraints are different. The decision discipline is not.

This post summarizes the findings. The full assessment is 37 pages with a companion methodology appendix of another 15. Links at the end for anyone who wants to audit the work, challenge the scores, or run their own scenarios.

---

## The frame

I treated this as a GAEA engagement. GAEA is a fictional international body: the Global Alliance for Extraplanetary Adaptation, charged with developing humanity's long-term off-Earth strategy. The fictional client framing is a vehicle for real methodology. Everything downstream of that premise is real work.

The core reframe: Moon, Mars, and orbital habitats are not destinations competing for a single role. They are platforms with distinct native characteristics, each suitable for different workloads. The right question is not "which one wins?" but "how do these platforms compose into a working architecture?"

This is the same question enterprise architects answer every day. On-premises versus cloud, primary region versus disaster recovery site, dedicated hardware versus elastic compute, core versus edge. Nobody picks one and discards the others. You pick the combination that fits the workload profile.

## The framework

I synthesized IBM Well-Architected Framework, AWS Well-Architected Framework, and Google Cloud Architecture Framework into a unified eight-pillar structure. Six pillars come directly from IBM (Resiliency, Performance, Cost Optimization, Operational Excellence, Security and Compliance, Hybrid and Portable). Two pillars extend the base (Risk Assessment and Sustainability) because multi-generational infrastructure warrants explicit treatment of risks that would be rounded into SLA conversations at enterprise scale.

Within that structure, 25 requirements are evaluated across three destinations. Requirements are classified with MoSCoW (Must / Should / Could / Won't) and weighted 1 to 10. Each destination receives a normalized score per requirement, weighted and summed to a total. Must-Have requirements act as gates: a destination that fails any Must-Have is not viable as a sole solution regardless of its total score.

Standard tools. Standard process. Applied to a non-standard problem.

## The distinction that matters most

Before any scoring, one distinction drives the whole analysis: physics constraints versus engineering problems.

Physics constraints are permanent within the assessment horizon. A destination's native gravity cannot be increased. Its distance from Earth cannot be shortened. Its communication latency cannot be reduced below the speed of light. These constraints are baked into the destination.

Engineering problems are tractable. Closed-loop life support, radiation shielding design, in-situ resource utilization, power generation, habitat construction - all are active research programs with credible development paths. They cost money and time. They are not categorically impossible.

Mars fails on multiple physics constraints. Gravity (0.378G, below the 0.67G threshold for musculoskeletal preservation). Emergency return time (6+ months minimum, unacceptable as a Recovery Time Objective). Supply window cadence (26 months between launch opportunities). Communication latency (3 to 22 minutes one-way, precluding real-time operations). None of these are engineering problems. They are the destination.

The Moon fails on one physics constraint: gravity at 0.166G is even further below the threshold than Mars. Everything else about the Moon is tractable. Short communication latency. Three-day emergency return. Continuous supply cadence. Abundant regolith for shielding. Confirmed water ice.

Orbital rotating habitats fail on no physics constraints, because gravity, radiation shielding, and atmosphere are engineered parameters rather than inherited conditions. A rotating habitat can be designed for any gravity level. Its orbit selection determines its radiation environment. Its position determines its latency.

This distinction alone produces most of the finding. Mars is disqualified by physics. The Moon is limited by physics. Orbital habitats are limited by engineering effort, which is a different kind of problem.

## The scoring

With all 25 requirements evaluated against all three destinations:

- **Orbital rotating habitats: 1,186 / 1,670 (71.0%)**
- **Moon: 1,055 / 1,670 (63.2%)**
- **Mars: 527 / 1,670 (31.6%)**

Must-Have gate check:

- **Orbital: passes all Must-Haves that current evidence can demonstrate.**
- **Moon: fails gravity. Passes everything else.**
- **Mars: fails gravity, fails emergency return, fails supply chain resilience, fails transport cost.**

Mars is not a viable primary destination under any tested assumption set. The sensitivity analysis ran six scenarios including best-case Mars assumptions, most-favorable lunar assumptions, cost-weighted preferences, resilience-weighted preferences, aggressive technology maturation, and conservative maturation. Orbital ranked first in all six. Moon ranked second in all six. Mars ranked third in all six.

## The recommended architecture

The recommendation is a four-tier hybrid:

**Earth as hardened primary.** No credible threat within the 25-year horizon renders Earth uninhabitable in the absolute sense. Every threat that could damage Earth infrastructure would also threaten off-Earth colonies that depend on Earth for resupply. The correct disaster recovery strategy is to protect the primary, build redundancy within reach, and ensure backups can receive support from the primary.

**Moon as resource and staging layer.** Lunar gravity disqualifies the Moon as a permanent habitation destination. But lunar water, regolith, and proximity make it a superb resource and logistics layer. Lunar-extracted water is cheaper to deliver to orbital locations than Earth-launched water. Lunar regolith is the highest-value shielding material for orbital habitats. Think of the Moon as the storage tier or primary cloud region in hybrid cloud architecture. Critical to the system, but not where the population lives.

**Orbital rotating habitats as scalable habitation tier.** This is the population and economic engine. 1G equivalent gravity via rotation. Continuous Earth communication. Hours-range emergency return. Configurable radiation shielding. Commercial markets that exist today (tourism, microgravity manufacturing, satellite servicing) and markets that will scale with population (agriculture, services, trade with the Moon and Earth).

**Mars deferred as long-latency edge node.** Mars is a science outpost in this architecture, not a colony. Crewed science missions with sustained crew rotation, not permanent settlement. Analogous to Antarctic research stations: valuable, specialized, and not a place where families live.

The cloud analogy maps cleanly: on-premises primary, primary cloud region for storage, elastic compute availability zones for scaling, air-gapped edge for specialized workloads. Hybrid cloud architectures do not discard physical infrastructure. They place workloads where they fit.

## The gravity question

Gravity is the most consequential single requirement in the analysis. It deserves explicit treatment because it is the primary differentiator between destinations that can and cannot support permanent habitation.

The 0.67G threshold comes from a 2024 study by researchers at University of Rhode Island, Harvard Medical School, and JAXA (Mortreux, Bouxsein et al., published via the Multiple Artificial-gravity Research System on the ISS). Mice were exposed to four gravity levels (0, 0.33, 0.67, and 1G) for 28 days. Muscle atrophy was fully prevented at 0.67G. It was partially mitigated at 0.33G. The dose-response curve matched earlier ground-based studies showing bone loss proportional to the degree of unloading.

Three honest caveats:

**These are rodent studies, not human studies.** No human has lived at partial gravity for longer than several days (Apollo lunar missions). Long-duration partial-gravity human data does not exist.

**Reproduction at partial gravity has never been tested.** Rat mating studies at microgravity (Cosmos 1129, 1979) produced zero births. That is a microgravity finding, not a Mars-gravity or Moon-gravity finding. Extrapolating from 0G reproductive failure to partial-gravity reproductive failure is not supported by direct evidence. Neither is the opposite. The question has not been tested.

**No mammal has completed a full life cycle at any partial gravity.** No mouse has been conceived, gestated, born, matured, and reproduced at Mars or Moon gravity. This is the critical evidence gap for multi-generational habitation.

Given these gaps, I chose the conservative default. A colony established under the assumption that partial gravity is sufficient cannot be recalled if the assumption proves wrong. A colony established under the assumption that 1G equivalence is required can be relaxed later if research proves otherwise. The asymmetry of reversibility argues for the stricter threshold.

The architecture recommendation does not depend on 0.67G being exactly right. It depends on two weaker claims: that some minimum gravity threshold exists for permanent habitation, and that orbital rotation reliably exceeds whatever the threshold turns out to be. Both are strongly supported. The rest is the responsible default.

We don't make product decisions on vaporware. Partial-gravity human reproduction is vaporware. Until it isn't, the framework defaults to the gravity level where we have direct evidence of physiological function: 1G.

## The evolution counterargument

Someone always raises it: "future generations will evolve to tolerate Mars gravity."

Evolutionary adaptation of mammals to new selection pressure takes thousands of generations, not hundreds. Human generation time is about 25 years. Ten thousand generations is 250,000 years. Even aggressive selection pressure producing detectable change in 100 generations is 2,500 years. Industrial civilization is 250 years old.

The intermediate generations experience the pathology. You can't skip them to reach the adapted descendants. The founder-effect genetics in a small isolated colony actively work against adaptation; drift loses diversity before selection can act on it.

Evolution does not help an individual. It does not help a colony on any civilizational timescale. The argument confuses time scales that are not equivalent.

## The build cost question

One finding I want to highlight because it differentiates Moon and Orbital in a way the pure physics argument doesn't:

Moon is the winner on time to operational capacity and capital to self-sustaining configuration.

Artemis infrastructure is committed. Lunar surface hardware is closest to flight-ready. Time to operational lunar outpost: 2 to 4 years. Capital estimate to self-sustaining: $50 to $80 billion, leveraging existing program commitments.

Orbital is the winner on long-term ceiling but loses on speed. Small commercial stations are 3 to 5 years away. Colony-scale rotating habitats require 15 to 20+ years of construction that has never been done. Capital estimate at colony scale: unknown, referenced against O'Neill-Glaser 1975 estimates of $283 billion for foundational lunar mining infrastructure alone.

Mars loses on both. No flight-qualified Mars human hardware exists. Capital estimate: $200 to $400 billion. First crew no earlier than 2040.

This is actually the strongest argument for the hybrid architecture. Moon wins near-term speed and cost. Orbital wins long-term ceiling. Mars wins neither. The hybrid takes what each platform is actually best at.

## Why this framework is the portfolio piece

The space case study is a demonstration. The framework is the deliverable.

The same eight-pillar structure evaluates cloud platform selection. Vendor consolidation decisions. On-premises versus cloud migration. Multi-cloud versus single-cloud strategy. AI platform selection. Data sovereignty strategies. Any decision where competing platforms have distinct characteristics, asymmetric data coverage, and irreversible-if-wrong consequences.

The methodology transferred cleanly because the underlying question is the same: how do you choose between incomplete options in the presence of genuine uncertainty, and how do you document the decision so it can be audited, challenged, and improved?

Space is a useful case study for this framework because the stakes are high, the data is imperfect, the stakeholders are misaligned, and the decision is irreversible. Most enterprise architecture decisions have all four properties at lower intensity. If the framework holds under space-colonization constraints, it holds under cloud-migration constraints.

## What's next

The framework is versioned at V0.4 and documented end-to-end. Interactive tooling lets readers run their own scenarios by adjusting weights or overriding raw data values. An evidence contribution feature accepts new sources via the AI chat, flags them for human review, and integrates accepted sources into future versions. The analysis improves with use.

All data and methodology are open under a permissive license. Anyone can run the numbers. Anyone can propose different weightings. Anyone can submit research that changes specific scores. The framework is designed to be falsifiable.

If you are evaluating solutions architects, what you are looking at here is how I work: methodology first, case study second, evidence transparent, conclusions falsifiable. The space project is the demonstration. The methodology is the product.

---

**Links**

Full architecture assessment (37 pages): [link]
Methodology and evidence appendix (15 pages): [link]
Interactive scoring tool: [link]
Live framework and data: github.com/lenticulartech/SpaceColony
Chat with the evidence-bound assistant: [link]

---

*Written for the people evaluating me, not the people debating me. If you want to challenge the scoring, do it in the interactive tool and bring evidence. That is the fastest way to make the framework better.*

#SolutionsArchitecture #EnterpriseArchitecture #HybridCloud #DecisionAnalysis
