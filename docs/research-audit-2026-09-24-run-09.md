# Crave Hunt Patna — Research Audit Run 09

Date: 2026-09-24

## Research focus
This pass shifted from broad restaurant discovery toward temporal evidence, independent source overlap, current event momentum, and comparable product mechanics.

## Material findings

1. Exhibition Road has a stronger corridor signal because two separate 2026 editorial guides independently describe its street food density and overlapping dish categories. This remains medium confidence because both are secondary editorial sources rather than municipal or primary mapping evidence.

2. Bihar Saras Mela at Gyan Bhawan is an active, high signal food and cultural event through September 29, 2026. A September 23 report states that reported business crossed Rs 68.56 lakh after three days. The number is preserved as a reported observation, not an audited financial fact.

3. Comparable discovery products reinforce three distinct interaction patterns: Eatables uses dish level discovery and reviews tied to people who actually ate the dish; HOGR combines friends, influencers, social feeds, video and recommendation incentives; Beli combines personal restaurant history, lists, maps and friend recommendations. Crave Hunt should borrow interaction patterns only where they reinforce its evidence first Patna archive rather than becoming another social restaurant directory.

## Data integrity

- No duplicate Exhibition Road locality created.
- No duplicate Saras Mela event created; new performance information is treated as a dated observation.
- Comparable products are stored as product research signals, not Patna food entities.
- Existing uncertainty around corridor authority and event financial reporting is retained.

## Schema improvement
`observation` is now a first class record. It preserves changing values over time for places, dishes, localities and events without overwriting history.

Required fields: entity_id, field, value, observed_at, source_ids, status, confidence, supersedes and notes.

## Product implication
The archive can now evolve from a static knowledge base into a temporal food intelligence system. A locality or dish page should eventually show an evidence timeline: what was reported, when, by whom, whether it was corroborated, and whether a newer observation superseded it.

## Next highest value build
Implement relationship aware entity pages and an evidence timeline UI. Start with locality → corridor → dish → place → creator or event relationships, then expose source confidence and observation dates. This is higher value than adding another undifferentiated batch of restaurant records.
