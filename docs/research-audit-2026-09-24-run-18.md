# Crave Hunt Research Audit — Run 18

Date: 2026-09-24

## Strategy change
Run 18 moved away from another broad venue sweep. The research metrics were changed toward infrastructure state confirmation, event food economy signals, community discovery chains, branch-level contradiction handling, source lineage and discovery-to-verification conversion.

## Material findings

### 1. Square Street is now a lifecycle record, not a future proposal
Times of India reported that PMC opened Square Street opposite Patna Museum in Chajjubagh in February 2026, with the space completed and vendor relocation preparations underway. A separate February report described the same project as due to open later that month. The later report is stronger evidence for the historical inaugurated state; neither source proves current vendor occupancy in September 2026.

### 2. Saras Mela is a food-economy observation
Current reporting documents the 2026 Bihar Saras Mela at Gyan Bhawan through September 29, with 135+ stalls and traditional food participation. A September 23 report records more than Rs 68.56 lakh in business over the first three days. These values are stored as dated event observations, not permanent popularity or demand scores.

### 3. Reddit is producing an evidence chain, not just recommendations
A September 19 r/Patna post describes Madras Meals and Lavou Bakery as discoveries driven by previous Reddit posts and describes an accidental discovery of Alba. A separate non-veg thread contains branch-specific disagreement about Champaran Meat House. This supports a new model: discovery source -> entity mention -> visit report -> corroboration, with branch identity preserved.

### 4. Food tours deserve their own entity type
Two Reddit posts advertise an October 4 Patna Heritage & Food Tour combining heritage sites, breakfast, lunch, snacks and cultural conversation. The r/Patna thread contains an organiser update claiming seats had begun to fill. This is a useful bridge between heritage, food routes, local knowledge and demand, but remains a community event lead until independently verified.

### 5. District provenance remains distinct from Patna availability
Bihar Foundation identifies Khoye-Ki-Laai with Barh in Patna district. This strengthens district-level provenance for the existing canonical dish record, but does not imply that every Patna locality currently sells it.

## Contradictions and quality controls

- Square Street: historical planning language and inaugurated-state language are preserved separately.
- Champaran Meat House: conflicting branch opinions remain branch-level community observations rather than a brand-wide quality score.
- Repeated Saras Mela articles are not counted as independent corroboration when they trace to the same event facts.

## Implementation completed
- Added Run 18 research ledger.
- Added Run 18 source registry.
- Added the evidence-chain concept to the next schema implementation plan.
- Added food-tour as a distinct planned entity type.
- Added branch-aware identity as a planned integrity rule.
- Strengthened infrastructure lifecycle requirements around effective dates, source priority and current-status recheck.

## Next highest-value build
Implement the evidence-chain and branch-aware entity model, then expose it through public evidence timelines and the recheck queue. The UI should make it possible to distinguish a community discovery, a reported visit, an independently corroborated place, and a current operational claim without collapsing them into one rating.
