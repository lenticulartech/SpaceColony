# Off-Earth Colonization Architecture Analysis: Source References

## Well-Architected Frameworks

1. **IBM Well-Architected Framework** — Six pillars: Hybrid & Portable, Resiliency, Security & Compliance, Performance, Operations, Cost Optimization
   - https://www.ibm.com/think/architectures/well-architected

2. **IBM Well-Architected: Hybrid & Portable Pillar** — Portability, interoperability, containerization, multi-platform deployment
   - https://www.ibm.com/architectures/well-architected/hybrid

3. **IBM Well-Architected: Security & Compliance Pillar** — Zero trust, secure by design, NIST SP 800-53 mapping, IBM Cloud Framework for Financial Services (565 controls)
   - https://www.ibm.com/think/architectures/well-architected/security

4. **IBM Well-Architected: Performance Pillar** — Stateless components, data-at-the-ends, scaling strategies, burst-to-cloud
   - https://www.ibm.com/architectures/well-architected/performance

5. **IBM Hybrid Cloud Architecture Center** — Reference architectures, deployable architectures, DevSecOps
   - https://www.ibm.com/architectures/hybrid

6. **IBM Hybrid Cloud Roadmap 2025** — Generative AI integration, hardware optionality, consistent security models
   - https://www.ibm.com/roadmaps/hybrid-cloud/2025/

7. **AWS Well-Architected Framework** — Six pillars: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, Sustainability
   - https://aws.amazon.com/architecture/well-architected/

8. **AWS Well-Architected: Pillars Documentation**
   - https://docs.aws.amazon.com/wellarchitected/latest/framework/the-pillars-of-the-framework.html

9. **Google Cloud Well-Architected Framework** — Six pillars: Operational Excellence, Security/Privacy/Compliance, Reliability, Cost Optimization, Performance, Sustainability. Plus cross-pillar perspectives for AI/ML and financial services.
   - https://docs.cloud.google.com/architecture/framework

10. **Google Cloud: Sustainability Pillar** — Shared fate model, energy efficiency, carbon-aware workload design
    - https://docs.cloud.google.com/architecture/framework/sustainability

11. **Cross-Vendor Comparison** — IBM adds Hybrid & Portable as unique sixth pillar; AWS adds Sustainability; all share five common pillars
    - https://www.issi-inc.com/leveraging-the-power-of-the-well-architected-framework

## NASA Standards and Frameworks

12. **NASA-STD-3001 Volume 1, Rev C** — Career radiation limit: 600 mSv, medical system architecture, crew health monitoring
    - https://www.nasa.gov/wp-content/uploads/2023/11/nasa-std-3001-vol-1-rev-c-with-signature.pdf

13. **NASA-STD-3001 Volume 2** — Human factors, habitability, environmental health, vehicle design parameters
    - https://www.nasa.gov/directorates/esdmd/hhp/human-spaceflight-and-aviation-standards/

14. **NASA Human Rating Guidance** — Four-tier standards pyramid: Basic Human Needs, Safety/Security, Maintenance, Performance Optimization
    - https://www.nasa.gov/human-rating-guidance/

15. **NASA Five Hazards of Human Spaceflight** — Radiation, Isolation/Confinement, Distance from Earth, Gravity Fields, Hostile/Closed Environments. 30+ linked health risks.
    - https://www.nasa.gov/hrp/hazards/

16. **NASA Spaceflight Human-System Standard: Enabling Missions** (npj Microgravity, 2023)
    - https://www.nature.com/articles/s41526-023-00275-2

## Gravity and Human Health

17. **The Partial Gravity of the Moon and Mars Appears Insufficient** (NASA Technical Reports, 2021) — Below 0.4g insufficient for long-term musculoskeletal/cardiopulmonary health
    - https://ntrs.nasa.gov/api/citations/20210019591/downloads/ICES-2021-142.pdf

18. **How Will Martian Gravity Affect Skeletal Muscle?** (Universe Today, 2026) — ISS mouse study: 0.33g mitigated but did not prevent atrophy; 0.67g threshold
    - https://www.universetoday.com/articles/how-will-martian-gravity-affect-skeletal-muscle

19. **ISS Gravity Experiment Results** (Kingston Today, 2026) — URI/Harvard/JAXA collaboration, 24 mice, four gravity levels
    - https://nationaltoday.com/us/ri/kingston-ri/news/2026/03/21/researchers-study-how-martian-gravity-affects-skeletal-muscle/

20. **Update on Effects of Microgravity on Musculoskeletal System** (PMC, 2021) — 20% muscle mass loss, 30% strength loss per month in microgravity
    - https://pmc.ncbi.nlm.nih.gov/articles/PMC8302614/

21. **Counteracting Bone and Muscle Loss in Microgravity** (NASA, 2024) — 1% bone density loss/month without countermeasures
    - https://www.nasa.gov/missions/station/iss-research/counteracting-bone-and-muscle-loss-in-microgravity/

## Mars Atmosphere and Terraforming

22. **Atmosphere of Mars** (Wikipedia) — 610 Pa surface pressure, 95% CO2, Jeans escape inefficiency
    - https://en.wikipedia.org/wiki/Atmosphere_of_Mars

23. **Can We Make Mars Earth-like Through Terraforming?** (Planetary Society, 2025) — Gravity ceiling ~0.38 bar, mining all CO2 yields 10-14% of Earth's pressure
    - https://www.planetary.org/articles/can-we-make-mars-earth-like-through-terraforming

24. **Inventory of CO2 Available for Terraforming Mars** (Jakosky & Edwards, Nature Astronomy, 2018) — All sources yield ~7% of Earth's pressure
    - https://lasp.colorado.edu/maven/files/2018/08/Inventory-of-CO2-available-for-terraforming-Mars.pdf

25. **Terraforming the Martian Atmosphere** (NASA SVS, 2018) — Processing all sources reaches ~7% Earth pressure
    - https://svs.gsfc.nasa.gov/20282

26. **Lower Limit of Atmospheric Pressure on Early Mars** (ScienceDirect, 2017) — Mars had >0.5 bar at 4 billion years ago
    - https://www.sciencedirect.com/science/article/abs/pii/S0019103516303062

## Artemis and Lunar Habitat Requirements

27. **Artemis Deep Space Habitation** (NASA/IEEE, 2022) — Surface Habitat self-sufficiency requirements
    - https://ntrs.nasa.gov/api/citations/20220000245/downloads/Artemis%20Deep%20Space%20Habitation%20Enabling%20a%20Sustained%20Human%20Presence%20on%20the%20Moon%20and%20Beyond%20(3).pdf

28. **Internal Layout of a Lunar Surface Habitat** (NASA/ASCEND, 2022) — Operating pressures, ECLSS pallet specs
    - https://ntrs.nasa.gov/api/citations/20220013669/downloads/Internal%20Layout%20of%20a%20Lunar%20Surface%20Habitat.pdf

29. **ECLSS Options for Mars Transit and Surface Missions** (NASA/ICES, 2023) — Open vs closed loop trade studies
    - https://ntrs.nasa.gov/citations/20230002103

30. **Gateway ECLSS Overview** (NASA, 2022) — 2-4 crew, 30-day expeditions, dormancy requirements
    - https://ntrs.nasa.gov/citations/20220015628

31. **Regenerative Life Support for Exploration Habitats** (NASA/ICES, 2022) — 90%+ uncrewed operational time, dormancy challenges
    - https://ntrs.nasa.gov/api/citations/20220006727/downloads/ICES-2022-196.pdf

32. **ECLSS First Space Habitat Architecture** (ICES, 2024) — Reliability requirements, maintenance as leading crew time demand
    - http://spacearchitect.org/pubs/ICES-2024-193.pdf

## Risk and Health Studies

33. **Red Risks for a Journey to the Red Planet** (npj Microgravity, 2020) — Priority "red" risks: radiation, SANS, behavioral health, nutrition
    - https://www.nature.com/articles/s41526-020-00124-6

34. **Updates to NASA Human System Risk Management** (npj Microgravity, 2023) — Likelihood/consequence matrix, DRM categories
    - https://www.nature.com/articles/s41526-023-00305-z

35. **Life Support for a Low-Cost Lunar Settlement** (Harper et al.) — ISS ECLSS specs, water recovery, leakage rates
    - https://www3.nd.edu/~cneal/CRN_Papers/Harper16_NS_LifeSupportLunarSettelment.pdf

36. **NASA Life Support Baseline Values and Assumptions** (NASA/TP-2015-218570/REV2)
    - https://ntrs.nasa.gov/api/citations/20210024855/downloads/BVAD_2.15.22-final.pdf

## General References

37. **Mars' Atmosphere: Facts** (Space.com, 2023)
    - https://www.space.com/16903-mars-atmosphere-climate-weather.html

38. **Artificial Gravity: Will It Preserve Bone Health?** (NASA Technical Reports, 2007)
    - https://ntrs.nasa.gov/api/citations/20070028552/downloads/20070028552.pdf

39. **TA06 Human Health, Life Support, and Habitation Systems** (National Academies) — Artificial gravity as game-changing capability
    - https://www.nationalacademies.org/read/13354/chapter/16

40. **Traveling to Mars Will Wreak Havoc on Our Bodies** (UCSF, 2017)
    - https://www.ucsf.edu/news/2017/07/407806/traveling-mars-will-wreak-havoc-our-bodies-can-we-prevent-it
