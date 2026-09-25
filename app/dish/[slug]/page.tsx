import { notFound } from "next/navigation";
import EntityPage from "../../../components/EntityPage";
import data from "../../../data/entity-pages.json";
import timeline from "../../../data/evidence-timeline-surface.json";

export function generateStaticParams(){ return data.dishes.map((item)=>({slug:item.slug})); }
export default async function DishPage({params}:{params:Promise<{slug:string}>}){ const {slug}=await params; const entity=data.dishes.find((item)=>item.slug===slug); if(!entity) notFound(); return <EntityPage entity={entity} timeline={timeline.records}/>; }