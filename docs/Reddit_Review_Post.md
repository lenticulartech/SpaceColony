# Looking for review: Architecture assessment scoring Moon, Mars, and orbital colonies as competing platforms

I built a destination assessment that treats the Moon, Mars, and rotating orbital habitats as platforms competing for a long-horizon infrastructure program. The framework borrows structure from enterprise solutions architecture practice (Must-Have gates, weighted scoring, sensitivity analysis, RAID registers) and applies it to the off-Earth colonization question. I am looking for technical pushback before I publish a wider version.

## What came out of it

The ranking across 25 non-functional requirements, after a Must-Have gate check:

- **Orbital rotating habitats: 71.0%.** Passes all 15 Must-Have gates.
- **Moon: 63.2%.** Fails one Must-Have (native gravity, 0.166G).
- **Mars: 31.6%.** Fails four Must-Haves (gravity, emergency return time, resupply interval, transport cost).

Recommendation is a hybrid: Earth as hardened primary, Moon as resource and staging tier, orbital colonies as the permanent habitation tier, Mars as a deferred science outpost. Not a single destination winner. Sensitivity analysis across six scenarios (best-case Mars, most-favorable lunar, cost-weighted, resilience-weighted, aggressive tech timelines, conservative tech timelines) did not change the ranking.

## Where I expect pushback, and want it

**The gravity threshold.** I set the Must-Have at 1G equivalent, which means only rotating habitats qualify for permanent habitation. The evidence driving that threshold is the JAXA MHU-8 mouse study (Mortreux and Bouxsein, 2024), showing 0.33G partial mitigation of muscle atrophy and 0.67G full prevention. Multi-generational mammalian reproduction at partial gravity has never been tested. I defaulted conservatively. If you think the default should be 0.38G or 0.67G instead of 1G, I want to hear the reasoning.

**The Mars classification.** I put Mars at the edge tier (science outpost on crew rotation, not permanent settlement) because it fails four physics-bound Must-Haves within the horizon. If you think I am underweighting Mars's long-term potential or strategic value, I want to see where.

**The Moon classification.** I classified the Moon as resource tier only, not habitation. Gravity disqualifies permanent residence. Lunar water ice and regolith make it the most capital-efficient source of habitat materials. If you think the Moon should host permanent habitation, I want the physiology argument.

**The hybrid itself.** If you think a single-destination architecture is defensible under current evidence, I want to see how it passes every Must-Have.

## What I am not asking for

Not looking for debates about whether space colonization is worthwhile in general. Assume the program is happening. The question is what architecture best serves it.

## What I am sharing for review

The full architecture assessment document is linked below. Also sharing the methodology and evidence appendix with the scoring mathematics and source registry. I have a data workbook with the full evidence table (101 rows of sourced data points, 25 scored requirements, weighted scoring, sensitivity scenarios). Happy to share that too if there is interest. I will answer formula questions in the comments.

Sources cited include NASA (NASA-STD-3001, technology gap priorities 2025, Artemis architecture documents), academic biological research (JAXA, Harvard, URI on partial gravity), commercial operator roadmaps (Axiom, Vast, Voyager, Blue Origin, SpaceX), and independent analyses (O'Neill-Glaser 1975 for orbital colony precedent, NASEM for planetary science priorities).

Would appreciate criticism of the decisions, the evidence, or the structure. The framework is versioned. If the review surfaces issues, I revise and publish the next version with change logs.
