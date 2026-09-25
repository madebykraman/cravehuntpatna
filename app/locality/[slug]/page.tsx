import { notFound } from "next/navigation";
import EntityPage from "../../../components/EntityPage";
import data from "../../../data/entity-pages.json";
import timeline from "../../../data/evidence-timeline-surface.json";
import atlas from "../../../data/atlas-surface.json";

export function generateStaticParams(){ return [...data.localities.map((item)=>({slug:item.slug})), ...atlas.records.map((item)=>({slug:item.name.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}))]; }
export default async function LocalityPage({params}:{params:Promise<{slug:string}>}){ const {slug}=await params; let entity=data.localities.find((item)=>item.slug===slug); if(!entity){ const item=atlas.records.find((record)=>record.name.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")===slug); if(item){ entity={slug,name:item.name,type:"locality",state:item.status,confidence:item.pincode_confidence==="unverified"?"low":"medium",area:item.name,intro:`${item.signals.join(", ")}. This is a research geography record; it is not a complete restaurant directory.`,tags:item.signals,timeline_id:null,next:item.open,sources:[]}; }} if(!entity) notFound(); return <EntityPage entity={entity} timeline={timeline.records}/>; }