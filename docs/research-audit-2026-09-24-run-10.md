# Crave Hunt Patna — Research Audit Run 10

Date: 2026-09-24

## Research shift
This run moved away from another broad venue/dish sweep and tested the corpus for lifecycle errors, source-role diversity, creator geographic specificity, and current event relevance.

## Material findings

### 1. Venue state must be separated from historical metadata
A current Magicpin page for Chaat Guru on Exhibition Road marks the outlet as shut down while retaining older menu/review content. This is a useful corpus warning: historical menu evidence must not imply current availability. The status is retained as a medium-confidence recheck trigger because it is a single-platform observation.

### 2. Creator records need geographic and editorial qualification
Socialveins currently indexes Rajesh Rawani (@r_rajesh_07) as a Patna-based creator in food/entertainment/home-chef categories and reports more than 2M followers. This is useful discovery evidence, but follower scale alone does not establish Patna-food depth, editorial quality, or current activity. The record is therefore a discovery lead, not an authority endorsement.

### 3. Saras Mela remains a strong current food/culture event signal
Two recent reports place the Bihar Saras Mela at Gyan Bhawan through September 29, with roughly 135 stalls and traditional food among the offerings. The event remains one canonical entity; new reporting is treated as dated observations rather than duplicate events.

### 4. Product pattern: dish-level trust is a defensible differentiator
Eatables continues to foreground reviews from people who actually ate the dish, neighbourhood activity, saved must-try lists and non-paid ranking. Crave Hunt should borrow the underlying trust principle, not copy the product surface: every recommendation should expose what was observed, by whom/source type, when, and with what confidence.

## Deduplication / contradiction policy
- No duplicate Exhibition Road locality was created.
- Chaat Guru is not promoted to a current closed venue without independent corroboration.
- Rajesh Rawani remains a creator research lead until Patna-specific food coverage is independently established.
- Saras Mela remains one event with multiple dated observations.

## Implementation direction
The next production improvement is a first-class evidence timeline/state model on entity pages. A place should be able to show: current status, historical observations, source roles, last checked date, unresolved conflicts, and a recheck flag. Search should rank current verified entities separately from historical/uncertain records.

## Remaining gaps
- Independent current-status corroboration for venue lifecycle changes.
- Primary creator-profile or direct-channel evidence for creator quality and Patna specificity.
- More primary/official event calendars rather than event aggregators.
- Exact locality-to-pincode evidence at address/sub-area level.

## Next highest-value build target
Implement the entity evidence timeline and current-state badges across place, locality, dish and event pages. This is more valuable than adding another batch of loosely verified restaurants because it makes the growing research corpus operationally trustworthy.
