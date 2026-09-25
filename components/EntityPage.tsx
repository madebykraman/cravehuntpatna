import Link from "next/link";
import { ArrowLeft, ExternalLink, MapPin, ShieldCheck } from "lucide-react";

type Entity = {
  name:string; type:string; state:string; confidence:string; area:string; intro:string;
  tags:string[]; timeline_id:string|null; next:string;
  sources:{label:string;href:string}[];
};

export default function EntityPage({entity,timeline}:{entity:Entity;timeline:any[]}) {
  const evidence=entity.timeline_id ? timeline.find((item)=>item.entity===entity.timeline_id) : null;
  return <main className="entityPage">
    <nav className="entityNav"><Link href="/"><ArrowLeft size={16}/> Crave Hunt Patna</Link><span>Evidence-led archive</span></nav>
    <section className="entityHero">
      <div>
        <p className="eyebrow">{entity.type.toUpperCase()} · PATNA FOOD INTELLIGENCE</p>
        <h1>{entity.name}</h1>
        <p className="entityIntro">{entity.intro}</p>
        <div className="entityTags">{entity.tags.map(tag=><span key={tag}>{tag}</span>)}</div>
      </div>
      <aside className="statePanel">
        <div className="stateRow"><small>DERIVED STATE</small><b>{entity.state}</b></div>
        <div className="stateRow"><small>CONFIDENCE</small><b>{entity.confidence}</b></div>
        <div className="stateRow"><small>GEOGRAPHY</small><b><MapPin size={13}/>{entity.area}</b></div>
      </aside>
    </section>
    <section className="entityBody">
      <div className="entityColumn">
        <p className="eyebrow">EVIDENCE</p>
        {evidence ? <article className="entityEvidence"><div className="evidenceLine"><span>DATED TIMELINE</span><b>{evidence.state}</b></div>{evidence.timeline.map((item:any)=><div className="evidenceItem" key={item.date+item.label}><small>{item.date}</small><div><strong>{item.label}</strong><p>{item.text}</p></div></div>)}<div className="nextCheck"><ShieldCheck size={17}/><div><small>NEXT VERIFICATION</small><b>{evidence.action}</b></div></div></article> : <article className="entityEvidence"><div className="evidenceLine"><span>RESEARCH STATE</span><b>{entity.confidence}</b></div><p>No temporal conflict is currently attached to this entity. Its evidence remains separate from assumptions about current availability.</p></article>}
        <div className="sourceList"><p className="eyebrow">SOURCES</p>{entity.sources.map(source=><a href={source.href} target={source.href.startsWith("http")?"_blank":undefined} rel="noreferrer" key={source.href}><span>{source.label}</span><ExternalLink size={15}/></a>)}</div>
      </div>
      <aside className="researchAside"><p className="eyebrow">WHAT HAPPENS NEXT</p><h2>Keep the archive honest.</h2><p>{entity.next}</p><Link href="/#evidence">Open evidence timeline <ArrowLeft size={15}/></Link></aside>
    </section>
  </main>;
}