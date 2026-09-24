"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Bookmark, ExternalLink, Flame, Heart, MapPin, Play, Search, Send, Sparkles, X } from "lucide-react";
import feed from "../data/discovery-feed.json";

type RecordItem = (typeof feed.records)[number];

const chips = ["Litti Chokha", "Street Food", "Chaat", "Biryani", "Sweets", "Coffee", "Kankarbagh", "Boring Road"];

const sourceById = Object.fromEntries(feed.sources.map((source) => [source.id, source]));

const sourceLink = (record: RecordItem) => sourceById[record.source_ids[0]]?.url ?? "#";

export default function Home() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("Everything");
  const [hunt, setHunt] = useState(false);
  const [saved, setSaved] = useState<string[]>([]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return feed.records.filter((record) => {
      const haystack = [record.title, record.subtitle, record.area, ...record.tags].join(" ").toLowerCase();
      const chipMatch = active === "Everything" || record.tags.some((tag) => tag.toLowerCase() === active.toLowerCase()) || record.area.toLowerCase() === active.toLowerCase();
      return chipMatch && (!q || haystack.includes(q));
    });
  }, [active, query]);

  const toggle = (id: string) => setSaved((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);

  return <main>
    <nav className="nav">
      <div className="brand"><span className="brandMark">CH</span><div><b>CRAVE HUNT</b><small>PATNA</small></div></div>
      <div className="navlinks"><a href="#discover">Discover</a><a href="#hunts">Crave Hunts</a><a href="#atlas">Atlas</a><a href="#reels">Food Reels</a></div>
      <button className="huntBtn" onClick={() => setHunt(true)}>List a craving <ArrowRight size={16}/></button>
    </nav>

    <section className="hero">
      <div className="heroNoise"/>
      <div className="heroCopy">
        <p className="eyebrow"><span/> PATNA'S STREET FOOD INTELLIGENCE</p>
        <h1>What's your<br/><i>craving?</i></h1>
        <p className="lede">Not another restaurant directory. A living map of the food Patna people actually chase.</p>
        <div className="search"><Search size={20}/><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search a dish, place, area or pincode…"/><kbd>⌘ K</kbd></div>
        <div className="micro"><span><MapPin size={13}/> Patna, Bihar</span><span><Flame size={13}/> Source-backed</span><span><Sparkles size={13}/> Human reviewed</span></div>
      </div>
      <div className="heroPlate"><div className="plateGlow"/><div className="foodEmoji">🥟</div><div className="scribble">GO<br/>HUNT<br/>IT.</div><div className="heroCard"><small>RESEARCH NOW</small><b>Patna is changing fast</b><span>Track corridors, creators, events and the evidence behind them.</span></div></div>
    </section>

    <section className="section" id="discover">
      <div className="sectionHead"><div><p className="eyebrow">DISCOVER BY SIGNAL</p><h2>Follow the<br/>evidence.</h2></div><p className="muted">Places, food corridors, creators and events are treated as research entities. Community mentions are signals, not automatic facts.</p></div>
      <div className="chips"><button className={active === "Everything" ? "active" : ""} onClick={() => setActive("Everything")}>Everything</button>{chips.map((chip) => <button key={chip} className={active === chip ? "active" : ""} onClick={() => setActive(chip)}>{chip}</button>)}</div>
      <div className="grid">
        {filtered.map((record) => <article className="foodCard" key={record.id}>
          <div className="photo researchPhoto"><span className="tag">{record.kind.replace("_", " ")}</span><span className="confidence">{record.confidence} confidence</span><button className="save" aria-label={`Save ${record.title}`} onClick={() => toggle(record.id)}>{saved.includes(record.id) ? <Heart fill="currentColor" size={17}/> : <Bookmark size={17}/>}</button><div className="researchIndex">{String(feed.records.indexOf(record) + 1).padStart(2, "0")}</div></div>
          <div className="cardBody"><div className="meta"><span>{record.tags[0]}</span><span>{record.area}</span></div><h3>{record.title}</h3><p>{record.subtitle}</p><div className="location"><MapPin size={14}/>{record.area}<a href={sourceLink(record)} target="_blank" rel="noreferrer" aria-label={`Open source for ${record.title}`}><ExternalLink size={15}/></a></div></div>
        </article>)}
      </div>
      {filtered.length === 0 && <div className="empty">No verified research record matches that hunt yet. Submit it and make the gap visible.</div>}
    </section>

    <section className="dark" id="hunts"><div className="huntVisual"><div className="circle">CRAVE<br/>HUNT<br/><span>∞</span></div><div className="orbit o1">LITTI</div><div className="orbit o2">MOMO</div><div className="orbit o3">CHAAT</div></div><div className="huntCopy"><p className="eyebrow">THE FEATURE THAT BUILDS THE DATABASE</p><h2>Can't find<br/><i>your craving?</i></h2><p>Tell us exactly what you're hunting. Dish. Area. A reel you saw. A stall your friend swears by. We'll investigate it, preserve the evidence and decide what belongs in the archive.</p><button className="creamBtn" onClick={() => setHunt(true)}>Start a Crave Hunt <Send size={16}/></button><small>No anonymous star spam. No pay-to-win rankings. Better local intelligence.</small></div></section>

    <section className="section reels" id="reels"><div className="sectionHead"><div><p className="eyebrow">WATCH BEFORE YOU WALK</p><h2>Creators are<br/>part of the map.</h2></div><p className="muted">Creator discovery is indexed separately from editorial truth. Reach is a distribution signal, not a quality score.</p></div><div className="reelGrid">{feed.records.filter((record) => record.kind === "creator").map((record, i) => <a className="reel" href={sourceLink(record)} target="_blank" rel="noreferrer" key={record.id}><div className="play"><Play fill="currentColor" size={17}/></div><div><small>INSTAGRAM LEAD · {String(i + 1).padStart(2, "0")}</small><h3>{record.title}</h3><p>{record.subtitle}</p></div><ExternalLink size={16}/></a>)}</div></section>

    <section className="legacy"><div className="legacyIntro"><p className="eyebrow">THE PATNA FOOD ATLAS</p><h2>A city is<br/><i>what it eats.</i></h2><p>Crave Hunt is becoming a living archive of Patna's food: dishes, streets, people, memories, seasons and changing places, with the evidence left visible.</p></div><div className="legacyCards"><article><span>01</span><b>Legacy</b><p>Litti, sattu, ghugni, sweets, meat traditions, chai and the foodways that make Bihar recognisable.</p></article><article><span>02</span><b>Begin here</b><p>New to Patna? Start with curated first-day trails, dish primers and locality-led hunts.</p></article><article><span>03</span><b>Food now</b><p>Markets, pop-ups, festivals, food walks and changing vending corridors, linked to sources.</p></article><article><span>04</span><b>Go deeper</b><p>See the source, distinguish signal from fact, then decide where the craving takes you.</p></article></div></section>

    <section className="atlas" id="atlas"><div><p className="eyebrow">RESEARCH LIBRARY · 24 SEP 2026</p><h2>Not a list.<br/><i>An archive.</i></h2></div><div className="atlasStats"><div><b>{feed.sources.filter((source) => source.type === "news" || source.type === "official").length.toString().padStart(2, "0")}</b><span>high-signal sources</span></div><div><b>{feed.records.filter((record) => record.kind === "locality" || record.kind === "corridor").length.toString().padStart(2, "0")}</b><span>geography records</span></div><div><b>{feed.records.filter((record) => record.kind === "creator").length.toString().padStart(2, "0")}</b><span>creator leads</span></div><div><b>{feed.records.filter((record) => record.kind === "event").length.toString().padStart(2, "0")}</b><span>live event records</span></div></div></section>

    <section className="events"><div className="sectionHead"><div><p className="eyebrow">WHAT'S HAPPENING</p><h2>Food beyond<br/>the menu.</h2></div><p className="muted">Events are temporal records. They should expire, retain their source, and never become permanent listings just because they once existed.</p></div>{feed.records.filter((record) => record.kind === "event").map((record) => <a className="eventCard" href={sourceLink(record)} target="_blank" rel="noreferrer" key={record.id}><div><small>ONGOING · SEP 20–29 2026</small><h3>{record.title}</h3><p>{record.subtitle}</p></div><ExternalLink size={18}/></a>)}</section>

    <footer><div className="brand"><span className="brandMark">CH</span><div><b>CRAVE HUNT</b><small>PATNA</small></div></div><p>A community-built food intelligence layer for Patna.</p><span>v0.2 · evidence over hype</span></footer>

    {hunt && <div className="modal" onClick={() => setHunt(false)}><div className="modalCard" onClick={(e) => e.stopPropagation()}><button className="close" onClick={() => setHunt(false)}><X/></button><p className="eyebrow">SUBMIT A CRAVING</p><h2>What are you<br/><i>hunting?</i></h2><p className="muted">Send us the craving. We'll do the digging.</p><input placeholder="e.g. best chicken roll near Kankarbagh"/><input placeholder="Area / pincode (optional)"/><textarea placeholder="Drop a reel, YouTube link, stall name, or tell us why you think it deserves a hunt…"/><button className="submit" onClick={() => setHunt(false)}>Send the hunt <ArrowRight size={16}/></button></div></div>}
  </main>;
}
