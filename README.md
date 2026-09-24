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

Media is also evidence, not automatic truth. Viral or creator food videos can be staged, miscaptioned or stripped of context, so media links now carry an explicit authenticity/context state before they can strengthen a place or dish claim.

## Next build
1. Implement plan version timelines for food streets and vending zones.
2. Add public evidence timelines to locality, corridor, place, dish and event pages.
3. Add media authenticity/context badges and source-role labels to creator/video relationships.
4. Replace seed content with a structured persistent database when submissions/auth/data persistence are ready.
5. Add Google Maps/Mapbox place coordinates and directions.
6. Build admin review queue for submitted Crave Hunts and media evidence.
7. Add source URLs for Instagram, YouTube and creator attribution.
8. Add freshness fields: last checked, opening hours checked, price checked.
9. Add trust signals rather than generic star ratings.
10. Add Supabase only when submissions/auth/data persistence are ready.

## Research signal
Current research indicates that Patna's food landscape is changing through municipal food infrastructure as well as individual venues. Reported plans around JP Ganga Path, Khatal Gali and Mithapur, plus changing Digha corridor proposals, make lifecycle-aware geography important. Event research such as Saras Mela and the RARI Agamkuan traditional-food/millet programme also shows that food discovery is temporal and tied to cultural, institutional and commercial activity.

Recent media research exposed a separate trust risk: a viral Patna food-vendor video was fact-checked as scripted. Crave Hunt therefore treats media authenticity/context as a first-class evidence attribute rather than assuming virality equals factuality.

Research runs and source registries are preserved under `data/` and audit notes under `docs/`.
