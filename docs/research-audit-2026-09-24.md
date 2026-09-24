# Crave Hunt Patna — Research Audit

Date: 2026-09-24

## This pass

The research strategy shifted from broad restaurant discovery toward three higher-signal layers: (1) primary/official culinary heritage, (2) creator-to-food intelligence, and (3) event/community freshness.

## Material findings

- Bihar Tourism currently provides a substantially richer primary culinary corpus than the seed dataset had captured. New source-backed heritage records cover Thekua, Khichdi, Champaran Meat/Ahuna, Dal Pittha, Dahi Chuda, Tilkut, Maner Laddoo and Laung Lata, in addition to Litti Chokha and Sattu Sharbat.
- This changes the product's heritage model: Patna should not be represented only through Litti Chokha. The archive should connect city discovery to the wider Bihar culinary geography and seasonal/festival calendar.
- The creator layer now has five Patna/Bihar discovery leads with provenance and capture dates. Third-party metrics are explicitly treated as volatile ranking inputs, not editorial evidence.
- Saras Mela at Gyan Bhawan is a useful event signal because it combines traditional food, rural producers and public demand. Current reporting places the 2026 fair at Sept 20–29 with 135+ stalls; later reporting gives day-by-day visitor/sales figures. Those figures remain reported claims and are not treated as audited metrics.
- Product research continues to support a differentiated model: video/context + personal map + saved discoveries are useful patterns, but Crave Hunt's defensible layer should be source-backed local knowledge, dish/place relationships, provenance, freshness and field notes rather than another rating directory.

## Contradictions / data hygiene

- Existing seed data used `drink|ingredient` as a dish type for Sattu. The schema now separates `drink` and `ingredient`; legacy records should be normalized in the next seed-data migration.
- Community recommendations frequently disagree on restaurant quality. These remain sentiment signals and are not converted into objective ratings.
- Third-party creator directories expose inconsistent metrics. Metrics are stored with capture dates and confidence and should never be used as permanent facts.
- Event dates and reported attendance/sales require source-level timestamping because event reporting changes during the event lifecycle.

## New search metric for subsequent passes

Prioritize records by **evidence density × locality specificity × novelty × freshness × archival value**, not by search-result popularity alone.

For places, seek at least one location source plus one independent food/context source before high-confidence publication. For dishes, prefer primary heritage sources and then map modern Patna availability. For creators, require a canonical profile plus individual content links before linking a reel to a place. For events, store start/end dates and refresh status from current reporting.

## Next highest-value build target

Build the **Patna Locality Atlas**: canonical locality records with aliases, pincodes, food corridors, signature dishes, creator coverage, source density and freshness. This becomes the geographic spine connecting search, map, dish pages, reels and Crave Hunts.
