import { caseStudies } from "../data";
import { notFound } from "next/navigation";
import Scroller from "@/app/case-study/Scrollersidebar";

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    id: study.id.toString(),
  }));
}

export default async function CaseStudyDetail(props) {
  const params = await props.params;
  const id = params.id;

  const content = caseStudies.find((item) => item.id === id);
  if (!content) notFound();

  return <Scroller data={content} />;
}
