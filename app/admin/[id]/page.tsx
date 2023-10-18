import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import ScenarioFormPreview from "@/components/ScenarioUpdateFormPreview";


const ScenarioDetailPage = async ({params}: {params: Params}) => {

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
        <ScenarioFormPreview scenarioData={scenarioData} scenarioId={scenarioId}/>
        </>
     );
}
 
export default ScenarioDetailPage;