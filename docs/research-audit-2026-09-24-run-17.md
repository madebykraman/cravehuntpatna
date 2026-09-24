# Crave Hunt Research Audit — Run 17

Date: 24 September 2026

## Strategy change

Run 16 focused on seasonal corridors and creator-to-locality resolution. Run 17 deliberately moved upstream into canonical culinary context, event-to-dish relationships and source independence.

New metrics:

- primary source coverage
- event-to-dish resolution
- dish-to-occasion resolution
- source independence score
- creator discovery versus editorial resolution
- market pattern recency

## Material findings

### 1. Official culinary context is richer than the current place-first model

Bihar Tourism currently documents Thekua as a traditional Bihar sweet associated with Chhath Puja and Khichdi as a common Bihar food with Makar Sankranti and broader festive associations.

These claims strengthen dish identity and cultural context, but they do not establish that a particular Patna vendor currently sells the dish.

### 2. Saras Mela is an event-food relationship, not merely an event listing

The 2026 Bihar Saras Mela at Gyan Bhawan is scheduled through September 29 with around 135 stalls and traditional food participation. Current reporting also records more than Rs 68.56 lakh in business in the first three days.

The event should therefore connect to food categories and dated observations while keeping those observations separate from permanent place or demand claims.

### 3. Reddit remains a high-resolution discovery source

The March 2026 litti hunt surfaces Chaurasiya Litti and Gopi Krishna Litti around Mahavir Mandir/GPO Golambar and other local street-style leads. These remain community signals until independently corroborated.

### 4. Creator discovery is still noisy

Current third-party indexes surface Foodie Robin and multiple Patna food creators, but follower and engagement values vary between providers. Crave Hunt should store creator metrics as dated observations and rank editorial usefulness using geographic resolution, dish/place linkage, source quality and recency.

### 5. The market is converging on social-to-map capture

Waybites, TasteMap, BiteVault and rec'd all address the gap between discovering food through social content and retaining it as a usable map or saved state.

Crave Hunt should not compete by copying generic save/map mechanics. Its defensible layer is source-backed local intelligence: dish specificity, locality context, evidence state, historical state, season/occasion and corroboration.

## Deduplication

No new canonical venue was promoted from the Reddit or creator discovery sources. Saras Mela remains a single event entity with dated observations. Thekua and Khichdi are strengthened as canonical culinary context, not Patna availability claims.

## Contradictions

No new contradiction was promoted to the corpus during this run.

## Implementation

Added:

- `data/research-run-2026-09-24-17.json`
- `data/source-registry-2026-09-24-17.json`

Product architecture should now add a reusable culinary-context layer with separate fields for dish identity, occasion, season, ritual role and Patna availability. Research scoring should also distinguish independent corroboration from multiple sources repeating the same upstream claim.

## Next target

Implement evidence timelines and contextual dish/event relationships on public locality, dish, place and event pages. Show independent-source counts and explicit Patna-availability state so cultural context cannot be mistaken for current vendor availability.
