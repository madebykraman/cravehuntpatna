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

## Next build
1. Implement plan version timelines for food streets and vending zones.
2. Add public evidence timelines to locality, corridor, place, dish and event pages.
3. Replace seed content with a structured persistent database when submissions/auth/data persistence are ready.
4. Add Google Maps/Mapbox place coordinates and directions.
5. Build admin review queue for submitted Crave Hunts.
6. Add source URLs for Instagram, YouTube and creator attribution.
7. Add freshness fields: last checked, opening hours checked, price checked.
8. Add trust signals rather than generic star ratings.
9. Add Supabase only when submissions/auth/data persistence are ready.

## Research signal
Current research indicates that Patna's food landscape is changing through municipal food infrastructure as well as individual venues. Reported plans around JP Ganga Path, Khatal Gali and Mithapur, plus changing Digha corridor proposals, make lifecycle-aware geography important. Event research such as Saras Mela also shows that food discovery can be temporal and tied to cultural commerce.

Research runs and source registries are preserved under `data/` and audit notes under `docs/`.
