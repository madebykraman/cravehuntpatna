# Crave Hunt Patna — Research Audit Run 05

Date: 2026-09-24

## What changed

- Shifted the research metric strategy from simple entity accumulation toward geographic integrity and claim quality.
- Added Exhibition Road as a medium-confidence street-food corridor lead.
- Added Digha Golambar / JP Ganga Path as a changing food-infrastructure zone, keeping proposed hubs separate from operating destinations.
- Added current Saras Mela business/attendance reporting as event evidence, explicitly marked as reported rather than audited.
- Added Reddit sentiment and dish-level locality leads as community signals only.
- Found and modeled pincode ambiguity for Kankarbagh and Sri Krishna Puri/Boring Road rather than forcing one locality-wide pincode.
- Upgraded the schema with multi-pincode geography, contradiction tracking, postal source type and claim-level provenance.

## Key research lesson

A Patna locality is not necessarily a postal unit. Large neighbourhood labels can span several PIN codes, while a food place's correct pincode depends on its exact address. Crave Hunt should therefore resolve geography at the place/address level and use locality as a separate editorial grouping.

## Product implication

The Locality Atlas should expose evidence density, pincode confidence, corridor status, creator coverage, community-signal volume and unresolved claims. This is more useful than a single locality rating.

## Remaining

- Connect the locality atlas dataset to the UI.
- Replace the remaining single-source corridor records with independently corroborated claims where possible.
- Build exact place/address → pincode resolution.
- Continue creator → reel/video → place/dish relationship extraction.
- Field-verify high-value community leads before promoting them to editorial records.
