# Crave Hunt Patna — Research Audit

Date: 2026-09-24

## This pass

The research strategy shifted from broad restaurant discovery toward evidence density, geographic specificity, primary culinary heritage, event freshness and entity quality.

## Material findings

- Bihar Tourism currently provides a substantially richer primary culinary corpus than the seed dataset had captured. New source-backed heritage records include Thekua, Khichdi, Sattu Sharbat, Dal Pittha, Dahi Chuda, Laung Lata and Maner Laddoo, plus the previously captured Litti Chokha and Champaran Meat/Ahuna.
- The heritage model should therefore represent Patna as an access point into wider Bihar foodways, not reduce the city to Litti Chokha.
- BRLPS's official archive independently confirms the 2026 Saras Mela at Gyan Bhawan for 20–29 September. News reports add visitor and sales figures, but those remain reported claims rather than audited Crave Hunt metrics.
- Mandiri–Chhajjubag has an emerging organised street-food infrastructure signal through the reported Square Street municipal vending-zone project. Current operating status still requires field/map verification.
- Current map discovery surfaced Harilal's Sweets Bakery & Restaurant in S.K. Puri with a concrete address. It remains a discovery lead, not an editorial endorsement.

## Contradictions / data hygiene

- Earlier seed geography included broad or weak pincode assignments. Weak locality claims are now quarantined rather than silently published.
- Food corridors, restaurants and dishes must remain separate canonical entity types.
- Community recommendations frequently disagree on restaurant quality. They remain sentiment signals and are not converted into objective ratings.
- Existing UI still contains placeholder restaurant cards and placeholder reel URLs. These should not be treated as research records.
- The old Sattu type value `drink|ingredient` remains a migration item; the schema now expects one controlled type per dish record.

## New search metric

Prioritize research by:

`evidence density × locality specificity × novelty × freshness × archival value`

For places, seek a location source plus an independent food/context source before high-confidence publication. For dishes, prefer primary heritage sources and then map modern Patna availability. For creators, require canonical profiles and individual content before attaching media to entities. For events, maintain explicit lifecycle dates and refresh status.

## Product implication

The **Patna Locality Atlas** is now the geographic spine of the product. A locality/pincode should eventually resolve to food corridors, dishes, places, media, events, source density, confidence and freshness.

Core relationship:

`place ↔ locality ↔ dish ↔ evidence ↔ media ↔ event ↔ field note`

## Next highest-value build

Replace hardcoded UI cards with structured research data, then build canonical locality and place pages on top of that data. This will remove the remaining gap between the research corpus and the actual product experience.
