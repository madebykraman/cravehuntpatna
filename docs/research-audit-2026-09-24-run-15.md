# Crave Hunt Patna — Research Audit Run 15

Date: 2026-09-24

## Strategy change
This run deliberately moved away from another broad restaurant/corridor sweep. The research metrics focused on media authenticity, institutional food-culture events, geographic resolution of creator media, and adjacent non-restaurant food discovery.

## Material findings

### 1. Institutional food events are part of the food archive
PIB reports that RARI Agamkuan, Patna held an exhibition-cum-mini-expo and traditional food programme for the 11th Ayurveda Day on 23 September 2026, featuring local food items, millets and nutrition-focused preparations. This is high-confidence institutional evidence and expands the event layer beyond commercial fairs. Source: `s15-01`.

### 2. Viral food media can be factually unsafe
A current fact-check reports that a viral video said to show a Patna food vendor being assaulted was scripted. A separate lower-confidence report shows how the same footage could be interpreted as a real Patna street-food incident. This is a concrete reason to prevent unverified viral media from strengthening place/vendor claims. Sources: `s15-03`, `s15-04`.

### 3. Historical creator media can still be geographically valuable
India Today documented a 2024 viral Patna dosa-machine video, including the reported location near Patna College and its spread from Instagram to X. This demonstrates the value of storing geographic resolution and publication date separately from current venue status or creator reach. Source: `s15-05`.

### 4. Home-food discovery is an adjacent market layer
TiffinPatna positions home-cooked meals, catering and hostel mess discovery specifically for Patna. This is useful market intelligence but does not justify changing Crave Hunt into a delivery directory. Source: `s15-06`.

### 5. Culinary identity remains geographically contextual
Bihar Tourism continues to document Tilkut and Balushahi as regionally specific foods. These references support keeping canonical culinary identity separate from today's Patna venue graph. Sources: `s15-07`, `s15-08`.

## Repo changes
- Added `data/research-run-2026-09-24-15.json`.
- Added `data/source-registry-2026-09-24-15.json`.
- Added `fact_check` as a source type.
- Added media `authenticity` states: `unverified`, `authenticity_unchecked`, `verified`, `fact_checked_false_context`, `scripted`, `historical_reenactment`, `promotional`.
- Added a media-integrity recheck rule and queue item.
- Updated README product architecture and next build sequence.

## Dedupe / contradiction policy
No new canonical place was created from the RARI event or viral-video reporting. The event is a dated observation; the scripted video is media-integrity evidence. Historical media is not promoted to current venue status without current operating evidence.

## Next highest-value build
Implement public evidence timelines and media-context badges on place, dish, locality and event pages. The UI should make it visually obvious whether a statement is a verified fact, dated observation, community signal, discovery lead, or media item with unresolved/negative authenticity context.
