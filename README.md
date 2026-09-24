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

Media is also evidence, not automatic truth. Viral or creator food videos can be staged, miscaptioned or stripped of context, so media links now carry an explicit authenticity/context state before they can strengthen a place or dish claim. Creator reach is treated as a dated observation, not a permanent authority score.

Food geography is temporal as well as spatial. A locality can have a seasonal corridor or event route that is highly active during Ramadan, Chhath, fairs or other occasions without being a permanent food street. Route evidence therefore remains dated and distinct from canonical venue status.

## Next build
1. Implement plan version timelines for food streets and vending zones.
2. Add public evidence timelines to locality, corridor, place, dish and event pages.
3. Add seasonal corridor and route evidence, including creator-hosted food walks.
4. Add media authenticity/context badges and source-role labels to creator/video relationships.
5. Replace seed content with a structured persistent database when submissions/auth/data persistence are ready.
6. Add Google Maps/Mapbox place coordinates and directions.
7. Build admin review queue for submitted Crave Hunts and media evidence.
8. Add source URLs for Instagram, YouTube and creator attribution.
9. Add freshness fields: last checked, opening hours checked, price checked.
10. Add trust signals rather than generic star ratings.
11. Add Supabase only when submissions/auth/data persistence are ready.

## Research signal
Current research indicates that Patna's food landscape is changing through municipal food infrastructure as well as individual venues. Reported plans around JP Ganga Path, Khatal Gali and Mithapur, plus changing Digha corridor proposals, make lifecycle-aware geography important. Event research such as Saras Mela and the RARI Agamkuan traditional-food/millet programme also shows that food discovery is temporal and tied to cultural, institutional and commercial activity.

Run 16 added a stronger seasonal-geography signal: a March 2026 Delhi Food Walks episode documented Sabzibagh as a Ramadan food hub and mapped a multi-stop route through local eateries, bakeries, tea and kebab vendors, with Fahmi from Unzip Patna as the local host. A March 2026 Reddit litti hunt independently surfaced micro-location leads around Mahavir Mandir and GPO Golambar. These are stored as dated media/community evidence rather than blanket venue endorsements.

Current creator research also shows that Patna has a meaningful food-media ecosystem, but follower counts vary widely and third-party metrics conflict. Crave Hunt therefore ranks creator evidence by geographic resolution, dish specificity, recency and provenance rather than audience size alone.

Research runs and source registries are preserved under `data/` and audit notes under `docs/`.
