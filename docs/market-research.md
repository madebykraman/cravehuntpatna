# Crave Hunt Patna — Market Research

Research pass: 24 Sep 2026

## Product patterns worth stealing

### Eat List
Eat List is explicitly built around the modern discovery problem: people find restaurants in Instagram/TikTok content, screenshot or forget them, and need a frictionless save-and-return workflow. Its core loop is share from social → auto-fill restaurant → save → map → visit → notes/community. This validates making Crave Hunt's media layer actionable rather than decorative.
Source: https://eatlist.io/

### Spoto
Spoto positions short authentic food videos as the discovery interface, then converts them into a personal map and dining diary. The useful pattern is video + context + map, not video alone.
Source: https://spotoapp.com/en

### Beli
Beli combines personal restaurant tracking, ranked lists/maps, friends' activity, taste profiles, notes and favorite dishes. The strongest transferable idea is that a food app can become a personal memory system rather than only a search directory.
Source: https://mwm.ai/apps/beli/1478375386

### HOGR
HOGR combines social recommendations, creator/influencer discovery, food video and incentives for recommendations. The relevant pattern is a creator/community layer with an economic loop, although Crave Hunt should not copy incentives before trust and editorial quality are established.
Source: https://www.hogr.app/

### Plateful
Plateful explicitly attacks restaurant-first discovery and replaces it with dish-first recommendations, taste learning and social discovery. This is highly relevant to Crave Hunt because the user's actual intent is often "I want litti/momo/chaat" rather than "show me restaurants."
Source: https://www.plateful.live/

### Savrli
Savrli is testing vibe-first discovery: users describe the mood or kind of night, and recommendations adapt to that context. This supports Crave Hunt's existing "What's your craving?" direction, but Patna-specific context should be richer than generic mood filters.
Source: https://app.savrli.com/

## Patna market signal

Zomato's Patna street-food directory demonstrates the scale and fragmentation of the city market: listings span street food, mithai, beverages, momos, biryani, kebab, South Indian food and more, while the interface remains fundamentally restaurant/listing oriented.
Source: https://www.zomato.com/patna/restaurants/street-food

Magicpin adds another useful signal: local listings can expose dish-level menu items, approximate spend, hours, address and verification state. A Crave Hunt record should eventually capture these fields independently rather than copying a generic star rating.
Example: Rahul Chaat, Chajju Bagh / Maurya Lok listing.
Source: https://magicpin.in/Patna/Chajju-Bagh/Restaurant/Rahul-Chaat/store/5cab7b

## New Patna entity signal

Patna Municipal Corporation's planned Square Street food zone in the Mandiri–Chhajjubag area is important because it shows organised street-food infrastructure becoming part of the city's food geography. It should be represented as a food corridor / food infrastructure entity, not merely as one restaurant.
Source: https://patnapress.com/patna-square-street-vending-zone-mandiri-road-2026/

## New creator signal

@urgeforfood is indexed as a Patna food creator with approximately 19.9K followers and substantial reel activity. @patna_paradise_ is another Patna-indexed creator with approximately 21.4K followers and strong food/street-food/Bihar content signals. These are discovery leads only; creator metrics should be periodically refreshed and never treated as editorial quality scores.
Sources:
https://getreelax.com/instagram/urgeforfood
https://getreelax.com/instagram/patna_paradise_/

## Product conclusion

Crave Hunt should not compete with Zomato on breadth of restaurant listings. Its defensible layer is a Patna-specific food intelligence graph:

1. Dish-first intent.
2. Locality and pincode context.
3. Short-form media attached to real food entities.
4. Editorially verified claims separated from community sentiment.
5. Historical/cultural context attached to dishes and places.
6. Personal saves/hunts that become a private-to-public food diary.
7. Event and temporary food-corridor records.
8. Freshness and contradiction tracking.

The key UX loop should become: **Craving → dish/entity → evidence/media → nearby places → save/hunt → field visit → user note → stronger local intelligence.**
