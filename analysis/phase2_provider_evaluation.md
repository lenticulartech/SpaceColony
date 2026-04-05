# Phase 2: Off-Earth Solutions Provider Evaluation

## Mapping Real Capabilities to the Hybrid Colonization Architecture

**Version:** 1.0
**Date:** April 2026
**Prerequisite:** Phase 1 Architecture Analysis (Moon + Orbital hybrid model)

---

## Executive Summary

Phase 1 defined the architecture: a hybrid model with Moon as primary resource layer, orbital colonies as scalable habitation and economic engine, Mars deferred. Phase 2 evaluates which organizations can actually deliver each layer of that architecture.

The current provider landscape reveals a critical finding: **the transport layer is approaching readiness, but the destination layer is 5-10 years behind.** SpaceX dominates heavy lift with a cost trajectory that could drop below $100/kg to LEO within 2-3 years. Blue Origin is establishing credibility with New Glenn. But no orbital habitat exists beyond the ISS, no ISRU system has operated at useful scale, and no closed-loop ECLSS has been demonstrated outside of ISS (which still requires resupply). The architecture is sound. The supply chain to build it is forming, but has significant gaps.

---

## 1. Methodology

Provider evaluation uses six criteria mapped to enterprise vendor selection:

| Criteria | Weight | Enterprise Analog |
|---|---|---|
| Technology Readiness Level (TRL) | 25% | Product maturity / GA status |
| Cost Trajectory | 20% | Pricing model / TCO trend |
| Roadmap Alignment | 20% | Vendor roadmap vs customer needs |
| Reliability / Track Record | 15% | SLA history / uptime |
| Interoperability | 10% | API compatibility / standards |
| Scalability | 10% | Capacity growth path |

TRL Scale: 1-3 = concept/research, 4-5 = component testing, 6-7 = system demo, 8-9 = operational/proven.

---

## 2. Architecture Layer Evaluation

### 2.1 Heavy Lift Transport (Earth to LEO)

This is the IaaS compute layer: raw capacity to get mass off Earth.

| Provider | Vehicle | Payload to LEO | Cost/Launch | Cost/kg | TRL | Status (April 2026) |
|---|---|---|---|---|---|---|
| SpaceX | Falcon 9 | 22.8t | $67M | $2,720 | 9 | 170+ launches/year, booster reuse routine |
| SpaceX | Falcon Heavy | 63.8t | $97M | $1,500 | 9 | Operational, limited manifest |
| SpaceX | Starship | 100-150t | $90M (list) | $600-900 | 7 | 11 flights, 6 successful, Block 2 upper stage issues in 2025 |
| Blue Origin | New Glenn | 45t | ~$67M est. | ~$1,500 | 7 | Orbit achieved Jan 2025, booster landing Nov 2025, ramping to 3+ flights 2026 |
| Rocket Lab | Electron | 0.3t | $7.5M | $25,000 | 9 | High cadence small launch, 50+ flights |
| Rocket Lab | Neutron | 13t | $50M target | ~$3,800 | 4 | In development, first flight anticipated 2026 |
| ULA | Vulcan Centaur | 27.2t | ~$110M | ~$4,000 | 8 | Operational, NSSL certified |
| ESA | Ariane 6 | 21.6t (64) | ~$77M | ~$3,600 | 7 | First flight 2024, ramping cadence |
| CNSA | Long March 5 | 25t | ~$50M est. | ~$2,000 | 9 | Operational, government-only |

**Assessment:** SpaceX holds a structural cost advantage that will widen as Starship matures. Starship's $90M list price for 100-150t is transformative: at full reuse, projections suggest sub-$100/kg within 3-5 years. Blue Origin is the only credible second source for heavy lift at competitive pricing. The rest compete on reliability, government relationships, or niche payloads.

**Score by criteria (1-10):**

| Criteria | SpaceX | Blue Origin | Rocket Lab | ULA |
|---|---|---|---|---|
| TRL | 9 | 7 | 8 | 8 |
| Cost trajectory | 10 | 7 | 5 | 4 |
| Roadmap alignment | 9 | 8 | 6 | 5 |
| Reliability | 9 | 6 | 8 | 9 |
| Interoperability | 7 | 7 | 6 | 7 |
| Scalability | 10 | 7 | 5 | 4 |
| **Weighted Total** | **9.2** | **7.1** | **6.2** | **5.8** |

### 2.2 Cislunar Transport (LEO to Lunar Surface/Orbit)

This is the regional interconnect: getting payloads from the primary cloud region (LEO) to the Moon.

| Provider | Vehicle | Capability | Status | TRL |
|---|---|---|---|---|
| SpaceX | Starship HLS | Crew + cargo to lunar surface. Requires 10-15 orbital refueling flights. | Uncrewed lunar demo targeted 2027. Selected for Artemis III/IV. | 5 |
| Blue Origin | Blue Moon MK1 | Robotic cargo to lunar surface, 3t payload | First flight planned early 2026 on New Glenn | 6 |
| Blue Origin | Blue Moon MK2 | Crew to lunar surface, 4 crew, 30-day missions | Selected for Artemis V. In development. | 4 |
| Astrobotic | Griffin | 625kg to lunar surface | In development, NASA CLPS contract | 5 |
| Intuitive Machines | Nova-C | 130kg to lunar surface | IM-1 landed Feb 2024 (tipped over), IM-2 in progress | 7 |
| Firefly | Blue Ghost | 150kg to lunar surface | NASA CLPS contract, in development | 5 |

**Assessment:** No provider has demonstrated reliable lunar delivery at colony-relevant scale. Intuitive Machines has the most flight heritage but at small payload capacity. SpaceX HLS has the largest potential capacity but depends on unproven orbital refueling. Blue Moon MK1 is the nearest-term medium-capacity option. This layer has the widest gap between architecture need and provider readiness.

### 2.3 Orbital Habitats

This is the PaaS / managed services layer: habitable infrastructure in orbit.

| Provider | Station | Volume | Crew | Launch Target | Estimated Cost | TRL |
|---|---|---|---|---|---|---|
| Vast | Haven-1 | 45 m3 | 4 (10-30 day visits) | Q1 2027 | Private funding | 6 |
| Vast | Haven-2 | Multi-module, 9 modules | 12 continuous | 2028-2032 | NASA CLD Phase 2 dependent | 3 |
| Axiom | Axiom Station | Multi-module (ISS-attached first) | TBD | First module 2027 | $140M NASA contract + private | 5 |
| Blue Origin / Sierra Space | Orbital Reef | 830 m3 | 10 | 2027 (optimistic) | $100B projected | 4 |
| Voyager / Airbus | Starlab | 400 m3 | TBD | 2029 (on Starship) | $90M launch contract | 4 |
| NASA | ISS | 916 m3 | 6-7 | Operational until ~2030 | Sunk cost | 9 |

**Assessment:** The ISS is the only operational orbital habitat and is scheduled for retirement around 2030. Vast Haven-1 is the nearest-term commercial replacement but is a minimal viable product (shipping container scale, open-loop ECLSS dependent on Dragon). No commercial station approaches colony-relevant scale. Orbital Reef has the most ambitious design but the highest cost and longest timeline. This is the biggest bottleneck in the entire architecture.

**Score by criteria (1-10):**

| Criteria | Vast | Axiom | Orbital Reef | Starlab |
|---|---|---|---|---|
| TRL | 6 | 5 | 4 | 4 |
| Cost trajectory | 7 | 6 | 3 | 5 |
| Roadmap alignment | 8 | 7 | 7 | 6 |
| Reliability | 5 | 6 | 5 | 4 |
| Interoperability | 6 | 7 | 8 | 6 |
| Scalability | 7 | 6 | 9 | 7 |
| **Weighted Total** | **6.6** | **6.1** | **5.6** | **5.2** |

### 2.4 ECLSS / Life Support

Core infrastructure. Without this, nothing else works.

| Provider | System | Heritage | TRL | Notes |
|---|---|---|---|---|
| Collins Aerospace | ISS ECLSS, Artemis pallets | ISS (25+ years), Artemis Surface Habitat | 8 | Industry leader. Regenerative ECLSS pallets designed for Artemis. |
| Paragon SDC | Life support, EVA systems | ISS components, commercial crew | 7 | Smaller scale, specialized systems |
| NASA JSC | Regen ECLSS R&D | ISS, BVAD reference data | 8 | Research leadership, not a commercial provider |
| Vast | Haven-1 ECLSS | Open-loop (Shuttle heritage) | 6 | Dependent on Dragon for extended life support |

**Assessment:** Collins Aerospace is the clear leader with decades of ISS heritage and active Artemis contracts. No provider has demonstrated closed-loop ECLSS at colony scale. ISS achieves ~90% water recovery but still requires resupply. This remains the universal technical bottleneck identified in Phase 1.

### 2.5 Communications

| Provider | System | Capability | TRL |
|---|---|---|---|
| NASA | Deep Space Network | Earth-to-deep-space backbone | 9 |
| NASA | LunaNet | Lunar surface + orbit comms architecture | 4 |
| ESA | ESTRACK | Deep space relay | 9 |
| SpaceX | Starlink | LEO broadband constellation, 8000+ satellites | 9 |

**Assessment:** NASA DSN is operational but capacity-constrained. LunaNet is in early development. Starlink's LEO constellation could potentially extend to cislunar relay with modifications. Communications infrastructure has the fewest gaps of any layer.

### 2.6 ISRU (In-Situ Resource Utilization)

| Provider | System | Capability | TRL |
|---|---|---|---|
| NASA | MOXIE | O2 from CO2 (demonstrated on Mars via Perseverance) | 6 |
| NASA | Various Artemis ISRU payloads | Water extraction from lunar regolith, prospecting | 3-5 |
| Honeybee Robotics (Intuitive Machines) | Drilling systems | Sample collection, regolith processing | 6 |
| Multiple startups | Various concepts | Water mining, He-3 extraction | 2-4 |

**Assessment:** ISRU is the least mature layer. MOXIE demonstrated O2 extraction on Mars but at bench scale (6-10 grams/hour). No water extraction from lunar regolith has been demonstrated. This is the critical enabling technology for the Moon-as-resource-layer architecture. Without lunar ISRU, the hybrid model collapses to Earth-dependent resupply.

### 2.7 NASA Artemis Program (Government Anchor Customer)

Current timeline as of April 2026:

| Mission | Target Date | Objective | Status |
|---|---|---|---|
| Artemis II | Flew April 1, 2026 | Crewed lunar flyby | Complete |
| Artemis III | Mid-2027 | LEO docking test with HLS (NOT lunar landing) | Redesigned Feb 2026 |
| Artemis IV | Early 2028 | First crewed lunar landing (south pole) | HLS selection depends on Artemis III results |
| Artemis V | Late 2028 | Second lunar landing | Blue Moon MK2 |
| Base Camp | Phase 1: 2028+ | $20B, 3 phases, 10 years | Announced March 2026 |
| Gateway | Paused | Lunar orbit station shelved March 2026 | Resources redirected to surface infrastructure |

**Assessment:** Artemis is the anchor customer that de-risks the entire architecture. Gateway's pause and the pivot to surface infrastructure aligns with the Phase 1 finding that Moon surface is the primary resource layer. The acceleration to annual lunar landings from 2028 onward creates a predictable demand signal for transport and habitat providers.

---

## 3. Gap Analysis

| Architecture Layer | Required for Hybrid Model | Current Provider Readiness | Gap Severity |
|---|---|---|---|
| Heavy lift to LEO | Mature, high cadence, low cost | SpaceX operational, costs dropping | **Low** |
| Cislunar transport | Reliable cargo + crew to lunar surface | No proven system at scale | **High** |
| Lunar surface ops | Mining, manufacturing, construction | No capability beyond Apollo-era demos | **Critical** |
| Orbital habitat | Colony-scale, rotating for gravity | Nothing beyond ISS, first commercial stations 2027+ | **Critical** |
| Closed-loop ECLSS | Self-sustaining life support | ISS achieves 90%, no colony-scale demo | **High** |
| Communications | Earth-Moon-orbital backbone | DSN operational, LunaNet early development | **Medium** |
| ISRU | Water, oxygen, fuel from lunar resources | MOXIE bench-scale only, no lunar demo | **Critical** |
| Power | Continuous, through lunar night | Nuclear fission 10kW demos in development | **High** |

Three layers are rated **Critical**: lunar surface operations, orbital habitats, and ISRU. These correspond to the Phase 1 finding that the hybrid architecture is optimal but no single destination is ready. The transport layer is approaching readiness, but the destinations themselves remain 5-10 years from minimum viable capability.

---

## 4. Provider Landscape Summary

**Tier 1: Operational, architecture-critical**
- SpaceX (transport dominant, HLS lunar lander, Starship platform)
- NASA (Artemis anchor customer, ECLSS heritage, DSN, standards)
- Collins Aerospace (ECLSS, only proven life support provider)

**Tier 2: Demonstrated capability, scaling**
- Blue Origin (New Glenn operational, Blue Moon lander, Orbital Reef concept)
- Intuitive Machines (only successful commercial lunar landing to date)
- Vast (nearest-term commercial station, Haven-1 in 2027)

**Tier 3: In development, high potential**
- Axiom Space (ISS-attached module strategy, NASA contract)
- Rocket Lab (Neutron medium lift, high cadence small lift)
- Sierra Space (LIFE module, Dream Chaser spaceplane)

**Tier 4: Early stage or uncertain**
- Voyager/Starlab (2029 launch, dependent on Starship)
- ISRU startups (no demonstrated capability)
- Lunar surface construction providers (concept only)

---

## 5. Investment Timing

Using the Phase 1 architecture as the deployment roadmap:

**Phase 1 (2026-2030): Foundation**
Transport matures. First commercial stations operational. Artemis establishes lunar surface presence. ISRU demos begin.
Key providers: SpaceX, Blue Origin, Vast, NASA/Artemis, Collins Aerospace

**Phase 2 (2030-2035): Resource Layer**
Lunar ISRU at useful scale. Moon-to-orbit supply chain established. Orbital habitats scale beyond ISS-class.
Key providers: Winners of NASA CLD Phase 2, ISRU pioneers, power system providers

**Phase 3 (2035+): Scalable Habitation**
Rotating orbital habitats at colony scale. Asteroid mining first demos. Mars edge deployment considered.
Key providers: Next-generation habitat builders, asteroid mining companies

---

## 6. Conclusion

The hybrid architecture from Phase 1 holds up against the provider landscape. The transport layer is approaching maturity thanks primarily to SpaceX's cost disruption. The destination layers (habitats, ISRU, ECLSS) are the bottleneck, with no provider ready to deliver colony-relevant capability before 2030.

The most critical near-term milestone is lunar ISRU demonstration. If water extraction from lunar regolith can be proven at useful scale during Artemis surface missions (2028+), the Moon-as-resource-layer architecture becomes viable. Without it, orbital colonies remain Earth-dependent for all resources, which fundamentally changes the cost model.

The provider landscape also reinforces the Phase 1 finding that Mars is premature. No provider is within a decade of delivering the closed-loop, autonomous systems required for a Mars surface colony. Every dollar spent on Mars-specific capability before the Moon-orbital infrastructure is mature is a dollar diverted from the critical path.

---

*Provider data current as of April 2026. Scores based on publicly available information, regulatory filings, and press reporting. See accompanying source document for full references.*
