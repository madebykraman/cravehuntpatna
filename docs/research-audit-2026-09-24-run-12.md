# Crave Hunt Patna Research Audit — Run 12

Date: 2026-09-24

## Strategy change
This run reduced broad restaurant discovery and increased the weight of entity-state contradictions, community-to-fact conversion, district-level culinary geography, and product-pattern research. Fresh sources were deliberately varied across news, institutional culture, Reddit, third-party place listings and current food-discovery products.

## Material findings

- Bihar Saras Mela remains a high-signal live event record. Current reporting places it at Gyan Bhawan from Sep 20-29, 2026, with 135+ stalls; a Sep 23 report records more than Rs 68.56 lakh business in the first three days. These remain dated observations, not immutable event totals.
- Chaat Guru on Exhibition Road exposes an important data-quality pattern: a third-party page retains historical menu material while also stating that the outlet has shut down and showing an inconsistent open-now label. This should be modeled as a contradiction requiring recheck.
- Reddit provides a useful historical/community layer: a Mar 31, 2026 Patna discussion reports Freshbox as closed and contains repeated positive local recollections. This is a community signal, not a verified closure fact.
- Bihar Foundation provides strong institutional support for district-level culinary geography, including Khoye-ki-Laai from Barh in Patna district and Chandrakala as a traditional Bihar sweet.
- Crvyn demonstrates a current market pattern around craving-language, taste attributes, dish-level matching and personalization. Crave Hunt should borrow the interaction principle, not the generic restaurant-directory model.

## Data/model change
Added a persistent recheck queue so uncertain, aging and contradictory records have an explicit next action rather than silently remaining stale. Existing historical records are preserved.

## Product implication
The archive now needs two visible concepts: current state and evidence history. A place can have old menu evidence while being closed; an event can accumulate changing attendance/sales observations; a community report can remain useful without becoming fact.

## Next highest-value build
Connect `data/recheck-queue-2026-09-24.json` to the UI as an internal/editorial research queue, then expose a lightweight public evidence timeline on entity pages.

No exhaustive coverage is claimed.
