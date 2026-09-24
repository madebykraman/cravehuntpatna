# Crave Hunt Patna · Research Audit · Run 08

Date: 2026-09-24

## What changed

- Added a presentation layer for the Locality Atlas in `data/atlas-surface.json`.
- Connected the Locality Atlas directly to the homepage instead of leaving geography as a planned concept.
- Added six visible geographic research entities with status, food signal, pincode confidence, evidence count, freshness and unresolved research questions.
- Added a creator discovery lead for `@foodiesfood_court`, kept separate from editorial quality claims.
- Preserved the existing canonical `data/locality-atlas.json`; the new file is a UI presentation layer, not a replacement corpus.

## New research signals

1. Exhibition Road has a current 2026 editorial guide describing a dense street-food geography and multiple food clusters. This remains medium confidence because the source is secondary and vendor-level claims are not independently verified.
   https://travell.cc/bihar/exhibition-road-food-guide/

2. Kankarbagh continues to behave like a distributed neighbourhood food geography rather than one walkable corridor. Current research describes multiple clusters including the main road, Kankarbagh More and Lohia Nagar.
   https://travell.cc/bihar/kankarbagh-food-guide/

3. JP Ganga Path / Digha is a transition case. Reporting describes a revised proposal for roughly 85 branded food cafes after an earlier street-stall model. It must remain a lifecycle entity with proposed/operational states.
   https://patnapress.com/patna-ganga-path-food-cafes-vending-zone-revamp/

4. PMC's reported food-hub proposal names Digha Golambar, Khatal Gali and Mithapur. These are infrastructure-backed research leads, not automatically operational food destinations.
   https://patnapress.com/patna-food-hub-bihar-street-food-project/

5. `@foodiesfood_court` is a new creator discovery lead. A third-party creator index currently associates the account with Patna and reports substantial food-content reach. Reach is stored only as a distribution signal.
   https://qoruz.com/foodiesfood_court

6. Bihar Tourism remains the primary heritage layer for dishes such as Khichdi, Litti Chokha and Thekua. These sources support culinary identity/context, not claims about the best places to eat them in Patna.
   https://tourism.bihar.gov.in/en/experiences/food-and-cuisine/main-course/khichdi
   https://tourism.bihar.gov.in/en/experiences/food-and-cuisine/main-course/litti-chokha
   https://tourism.bihar.gov.in/en/experiences/food-and-cuisine/sweet/thekua

7. Bihar Saras Mela remains an active temporal food/culture record through September 29, 2026. Current reporting says the fair has 135+ stalls and recorded more than Rs 68.56 lakh in business in its first three days. The financial figure remains reported event data, not independently audited data.
   https://timesofindia.indiatimes.com/city/patna/saras-mela-featuring-rural-products-traditional-food-items-to-open-at-gyan-bhawan-today/articleshow/134354530.cms
   https://patnapress.com/bihar-saras-mela-patna-rs-68-56-lakh-business-rural-women/

## Product learning

The Locality Atlas should not become another neighbourhood list. Its useful unit is a geographic research state:

`locality → corridor/zone → dishes → places → creators → events → evidence → freshness → unresolved claims`

The UI now exposes this model. The next step is to make those relationships navigable rather than merely visible.

## Remaining gaps

- Exact address-to-pincode resolution remains incomplete for several large neighbourhoods.
- Creator-to-place and creator-to-dish relationships need post-level evidence rather than profile-level discovery leads.
- Exhibition Road and several other corridors need independent corroboration beyond editorial guides.
- The event layer needs an expiry/archive transition after each event ends.
- The homepage still uses the discovery feed as a flat record collection; the next architecture step is entity pages and relationship-aware search.

## Next highest-value build

Build canonical entity pages and a relationship-aware search index. A locality page should expose its verified corridors, dishes, place records, creator coverage, events, source count, freshness and unresolved claims without collapsing community signals into ratings.
