# Crave Hunt Patna — Research Audit Run 19

Date: 24 September 2026

## Strategy change
Run 19 deliberately avoided another broad restaurant sweep. The search emphasis was operational-state conflict detection, micro-specialist dish outlets, creator-metric reliability, and district-to-city culinary provenance.

## Material findings

1. **Litti Hut exposes a real state-resolution failure mode.** The Magicpin record simultaneously says the outlet has shut down and shows "Open now" while retaining menu and hours. This is strong evidence that a third-party current-state field must never be treated as authoritative by itself.

2. **D.K Litti is a useful new dish-specialist lead.** A July 2026 Magicpin record places it at Patna One Mall, Hariniwas/Dak Bunglow and supplies menu, price and hours data. It remains a research lead until independently current-verified.

3. **Patna's Paradise is a creator research lead.** Third-party creator databases currently place @patna_paradise_ in Patna and classify the account around food/food blogging. Audience and engagement metrics are retained only as dated observations because analytics vendors can disagree or become stale.

4. **Barh provenance remains stronger than Patna availability.** Bihar Foundation explicitly associates Khoye-Ki-Laai with Barh in Patna district. The model must keep origin district separate from whether a specific Patna city vendor currently sells it.

5. **Government culinary taxonomies are useful controlled vocabulary.** Reporting on Bihar's official 18-delicacy showcase list provides a high-value canonical reference layer, but listed dishes must not automatically become Patna venue records.

## Contradictions / quality notes

- Litti Hut: unresolved shutdown vs open-now contradiction.
- Creator metrics: third-party follower/engagement figures are unstable and should not affect editorial authority without content evidence.
- Exhibition Road guide: strong density/quality claims are useful discovery leads but lack transparent methodology; they do not independently upgrade corridor confidence.

## Dedupe decisions

- No duplicate Khoye-Ki-Laai entity created.
- Creator lead kept separate from previously researched creators until identity/content overlap is verified.
- D.K Litti kept as an outlet lead rather than a generic litti dish duplicate.
- Litti Hut remains one entity with conflicting state observations.

## Implementation impact

The next schema/UI iteration should support:

- conflict-aware current-state resolution;
- source-level reliability classes for creator metrics;
- observed_at timestamps for audience/engagement values;
- origin_place and origin_district for dishes;
- controlled culinary vocabulary sourced from government/tourism references;
- automatic recheck queue insertion when an entity has mutually incompatible operational states.

## Next highest-value build
Implement the conflict-resolution layer first. Then expose the resulting state history and source reliability in the public evidence timeline. This will materially improve trust before expanding the corpus further.
