import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import ScenarioGrid from "@/components/ScenarioGrid";

export default async function Home() {

  const supabase = createServerComponentClient({ cookies });

  const { data, error } = await supabase
  .from("scenarios")
  .select(`*,categories(*)`);

  if(error) {
    console.log(error)
    return <>No data</>
  }

  return (
    <>
    <div className="bg-slate-300 py-20 text-center">
      <h1 className="text-4xl font-bold mb-3">Explore the Landscape of Effective Communication</h1>
      <p className="text-lg">Discover Rich Examples of Healthy Dialogues That Cultivate Stronger Bonds.</p>
    </div>
    <main>
        <ScenarioGrid scenarioData={data}/>
    </main>
    </>
  );
}
