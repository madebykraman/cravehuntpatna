# Crave Hunt Patna

A craving-led street food discovery product for Patna.

## Product thesis
Crave Hunt is not another restaurant directory. It is a living food-intelligence layer built around dishes, neighbourhoods, pincodes, local knowledge, short-form food content, public evidence and community-submitted hunts.

## MVP shipped
- Craving search across dish, place, area and pincode
- Dish-led discovery chips
- Human-reviewed food cards
- Save/bookmark interaction
- Crave Hunt submission flow
- Food reel/video discovery layer
- Mobile-first editorial UI
- Seed dataset for Patna
- Locality research atlas
- Research/recheck queue
- Provenance, confidence, contradictions and dated observations

## Research architecture
Crave Hunt separates canonical entities from changing evidence. Places can move between active, uncertain, closed or relocated states without destroying historical records. Planned food infrastructure is modelled through dated plan versions. Community signals and editorial discovery leads do not become facts without corroboration.

Media is also evidence, not automatic truth. Viral or creator food videos can be staged, miscaptioned or stripped of context, so media links carry an explicit authenticity/context state before they can strengthen a place or dish claim. Creator reach is treated as a dated observation, not a permanent authority score.

Food geography is temporal as well as spatial. A locality can have a seasonal corridor or event route that is highly active during Ramadan, Chhath, fairs or other occasions without being a permanent food street. Route evidence remains dated and distinct from canonical venue status.

Culinary context is separated from availability. A dish can have a verified Bihar-wide cultural or ritual association without evidence that a particular Patna vendor currently sells it. Event-only food remains time-bounded. The research layer also tracks source independence so several articles repeating one upstream claim are not mistaken for independent corroboration.

Run 18 adds another integrity layer: evidence chains. A community post can discover an entity, a later visit report can confirm an experience, and an independent source can verify operational or historical facts. These stages must remain distinct. Multi-branch brands are also branch-aware so conflicting opinions about one outlet do not contaminate the brand-level record.

Run 19 adds conflict-aware current-state research. Third-party listings can contain mutually incompatible operational fields, so current status must be resolved from dated observations and source reliability rather than a single aggregator flag. Creator audience metrics are likewise treated as source-specific observations, never as editorial authority. Dish provenance now needs a clean separation between origin place/district and current Patna availability.

## Next build
1. Implement conflict-aware current-state resolution for places and infrastructure.
2. Implement public evidence timelines for locality, corridor, place, dish and event pages.
3. Add contextual dish/event relationships: occasion, season, ritual role and explicit Patna availability.
4. Add independent-source counts and source lineage to confidence calculations.
5. Add seasonal corridor and route evidence, including creator-hosted food walks.
6. Add media authenticity/context badges and source-role labels to creator/video relationships.
7. Implement an evidence-chain model: discovery source -> entity mention -> visit report -> corroboration -> current-state verification.
8. Add branch-aware place identity for multi-location brands.
9. Add food-tour entities connecting heritage sites, meals, routes and organisers.
10. Add creator metric provenance: observed_at, source, metric_type and reliability class.
11. Add dish origin_place/origin_district separately from Patna availability.
12. Replace seed content with a structured persistent database when submissions/auth/data persistence are ready.
13. Add Google Maps/Mapbox place coordinates and directions.
14. Build admin review queue for submitted Crave Hunts and media evidence.
15. Add source URLs for Instagram, YouTube and creator attribution.
16. Add freshness fields: last checked, opening hours checked, price checked.
17. Add trust signals rather than generic star ratings.
18. Add Supabase only when submissions/auth/data persistence are ready.

## Research signal
Current research indicates that Patna's food landscape is changing through municipal food infrastructure as well as individual venues. Reported plans around JP Ganga Path, Khatal Gali and Mithapur, plus changing Digha corridor proposals, make lifecycle-aware geography important. Square Street provides a useful historical lifecycle example: February 2026 reporting moved from planned opening language to an inaugurated-state report, while current occupancy still requires fresh confirmation.

Event research shows that food discovery is also tied to temporary cultural and commercial activity. The 2026 Saras Mela at Gyan Bhawan is documented through September 29 with 135+ stalls and traditional food participation, while current reporting records more than Rs 68.56 lakh in business during its first three days. These remain dated observations rather than permanent demand scores.

Community research now shows a second useful layer: Reddit can create an evidence chain where one user's post leads another person to visit a place and report back. Recent Patna discussions show this pattern around Madras Meals, Lavou Bakery and Alba, while branch-specific disagreement around Champaran Meat House demonstrates why place identity must preserve outlet-level distinctions.

Run 16 strengthened seasonal geography through a March 2026 food walk documenting Sabzibagh as a Ramadan food hub and a multi-stop route with Fahmi from Unzip Patna as local host. Run 17 moved upstream into canonical culinary context through Bihar Tourism. Run 18 connected these layers through evidence lineage, event economics, infrastructure lifecycle, food tours and branch-aware community signals.

Run 19 adds a concrete operational-data quality case: the same Litti Hut aggregator record reports both shutdown and open-now states. It also identified D.K Litti as a new dish-specialist research lead and Patna's Paradise as a creator research lead, while strengthening Barh/Khoye-Ki-Laai provenance and the use of government culinary taxonomies as controlled vocabulary.

Market research continues to show convergence around turning creator content into persistent food maps through products such as Waybites, CraveMap, Ready to Echo and FoodPrint. Crave Hunt's differentiation therefore remains evidence-aware local intelligence rather than generic saving or mapping.

Research runs and source registries are preserved under `data/` and audit notes under `docs/`. See `data/culinary-context-taxonomy.json` for the current context model and the latest run audit for integrity changes.
