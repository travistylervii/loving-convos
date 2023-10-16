import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import ScenarioFormPreview from "@/components/ScenarioFormPreview";

const ScenarioDetailPage = async ({params}) => {

    const scenarioId = params.id

    const supabase = createServerComponentClient({cookies})

    const {data, error} = await supabase
        .from('scenarios')
        .select(`*,
        categories(*)
        `)
        .eq('id', scenarioId).single()

    if(!data) {
        return <>No Data</>
    }

    const scenarioData = data
    
    return ( 

        <>
        <ScenarioFormPreview scenarioData={scenarioData}/>
        </>
     );
}
 
export default ScenarioDetailPage;