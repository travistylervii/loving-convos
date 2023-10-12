import ScenarioButton from "@/components/ScenarioButton";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function ScenarioGrid() {
  const supabase = createServerComponentClient({ cookies });

  const { data, error } = await supabase.from("scenarios").select();

  if (error) {
    return <>Not Found</>;
  }

  console.log(data)

  return (
    <>
      <div className="grid grid-cols-2 py-10 gap-5 max-w-5xl mx-auto">
        {data &&
          data.map((scenario, i) => {
            return <ScenarioButton key={i} scenarioData={scenario} />;
          })}
      </div>
    </>
  );
}
