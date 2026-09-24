# Research audit — 24 Sep 2026 / run 03

## What changed

- Audited the live homepage and found the main product integrity gap: the UI still contained invented-looking ratings, placeholder reel links, and hardcoded restaurant cards that were not directly tied to the research corpus.
- Replaced the hardcoded discovery cards with `data/discovery-feed.json`, a source-linked research feed.
- Added current locality/corridor signals for Kankarbagh, Boring Road and the changing JP Ganga Path / Digha food-vending zone.
- Added creator research leads for `@happiness_on_my_plate` and `@urgeforfood`. Creator metrics remain distribution signals only, not editorial quality scores.
- Added Saras Mela as a time-bound event record with explicit source provenance.
- The new UI now exposes confidence and source links instead of fake ratings.
- Preserved the existing research corpus and added the new feed as a separate layer rather than rewriting prior records.

## What was learned

1. **Geography is more useful than a flat restaurant list.** Kankarbagh is described as a dispersed food geography with multiple clusters rather than a single walkable strip. This supports modelling localities as containers for multiple food corridors and micro-clusters.
2. **Food infrastructure is changing.** The JP Ganga Path / Digha Roundabout vending proposal means the archive needs an infrastructure/change-status layer, not just static places.
3. **Creators are discovery infrastructure.** Patna food creators can expose places and dishes that are poorly represented in conventional editorial indexes. Their reach must remain separate from evidence about food quality.
4. **Events should expire.** Saras Mela is a good test case for temporal data: dates, venue, source, current status and post-event archival state should all be retained.
5. **Community recommendations remain high-signal leads but low-certainty facts.** Repeated Reddit mentions are useful for entity discovery; they should not create ratings or factual claims without corroboration.

## Contradictions / risks retained

- Some locality/pincode mappings in the older corpus remain provisional. They are not silently upgraded.
- Several restaurant names from Reddit remain research leads rather than verified place records.
- Third-party creator analytics can be stale or internally inconsistent; metrics are timestamped and never used as quality rankings.
- Current news about proposed food zones describes plans, not necessarily completed infrastructure.

## Next search metrics

Prioritise under-covered geography instead of adding more generic restaurant names:

- pincode coverage by verified food entity
- locality → corridor density
- number of independent sources per entity
- source age and re-verification interval
- creator → place → dish relationship coverage
- event recurrence and seasonal food signals
- contradictions between map/editorial/community sources
- percentage of UI records with a live source

## Next highest-value build

Build the **Patna Locality Atlas UI**: locality pages should show food corridors, canonical dishes, place/entity leads, creator coverage, events, evidence density, unresolved claims and last-verified dates. The homepage should become an entry point into that atlas rather than the primary database itself.
