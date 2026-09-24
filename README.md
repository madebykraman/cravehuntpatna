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

Culinary context is now also separated from availability. A dish can have a verified Bihar-wide cultural or ritual association without evidence that a particular Patna vendor currently sells it. Event-only food remains time-bounded. The research layer also tracks source independence so several articles repeating one upstream claim are not mistaken for independent corroboration.

## Next build
1. Implement public evidence timelines for locality, corridor, place, dish and event pages.
2. Add contextual dish/event relationships: occasion, season, ritual role and explicit Patna availability.
3. Add independent-source counts and source lineage to confidence calculations.
4. Add seasonal corridor and route evidence, including creator-hosted food walks.
5. Add media authenticity/context badges and source-role labels to creator/video relationships.
6. Replace seed content with a structured persistent database when submissions/auth/data persistence are ready.
7. Add Google Maps/Mapbox place coordinates and directions.
8. Build admin review queue for submitted Crave Hunts and media evidence.
9. Add source URLs for Instagram, YouTube and creator attribution.
10. Add freshness fields: last checked, opening hours checked, price checked.
11. Add trust signals rather than generic star ratings.
12. Add Supabase only when submissions/auth/data persistence are ready.

## Research signal
Current research indicates that Patna's food landscape is changing through municipal food infrastructure as well as individual venues. Reported plans around JP Ganga Path, Khatal Gali and Mithapur, plus changing Digha corridor proposals, make lifecycle-aware geography important. Event research such as Saras Mela shows that food discovery is also tied to temporary cultural and commercial activity.

Run 16 strengthened seasonal geography through a March 2026 food walk documenting Sabzibagh as a Ramadan food hub and a multi-stop route with Fahmi from Unzip Patna as local host. Reddit independently surfaced micro-location litti leads around Mahavir Mandir and GPO Golambar. These remain dated media/community evidence rather than blanket venue endorsements.

Run 17 moved upstream into canonical culinary context. Bihar Tourism provides primary-source context for Thekua's Chhath association and Khichdi's festive/Makar Sankranti role. Current Saras Mela reporting adds event-food observations. Market research also shows continued convergence around turning creator content into persistent food maps through Waybites, TasteMap, BiteVault and rec'd. Crave Hunt's differentiation therefore remains evidence-aware local intelligence rather than generic saving or mapping.

Research runs and source registries are preserved under `data/` and audit notes under `docs/`. See `data/culinary-context-taxonomy.json` for the current context model.
