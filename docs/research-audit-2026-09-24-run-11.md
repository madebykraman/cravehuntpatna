# Crave Hunt Patna Research Audit — Run 11

Date: 2026-09-24

## What changed

This run shifted away from another broad restaurant sweep and tested four narrower dimensions: current operating-state evidence, micro-place discovery, live event observations, and creator signal quality.

### New evidence

* A 2026 third-party listing surfaced A 1 Chandrakala Shop on Chandrakala Gali, opposite Pillar 6, New Market, as a current street-food discovery lead. It remains medium-confidence and unpublished as an editorial recommendation until independently corroborated.
* Current Saras Mela reporting adds dated commercial observations: more than Rs 68.56 lakh business in the first three days and 135+ stalls from 15 states. These are stored as reported observations rather than immutable event attributes.
* A current creator index gives @urgeforfood a Patna identity and a performance snapshot. The snapshot is useful for discovery but is not treated as an editorial quality score.
* Square Street remains a temporal infrastructure lead. The available source describes a planned opening in February 2026, but this run did not find strong fresh evidence proving its present operational state.

## Contradictions and quality controls

* Event attendance and sales figures vary by reporting window. The archive therefore stores each figure with its observation date and source instead of choosing one canonical number.
* Planned vending infrastructure and operating food corridors are kept in separate lifecycle states.
* Third-party creator metrics are separated from editorial relevance and authenticity.
* Third-party place listings are treated as discovery leads until corroborated.

## Product implication

The research corpus now supports a stronger distinction between `entity`, `claim`, `observation`, and `research lead`. The next UI should expose state evidence and last-checked dates instead of presenting every record as equally current.

## Next highest-value build

Implement a research/recheck queue and entity state timeline across place, corridor and event pages. The queue should prioritize aging infrastructure claims, uncertain operating status, stale creator metrics and contradictory event observations.

No exhaustive coverage is claimed.
