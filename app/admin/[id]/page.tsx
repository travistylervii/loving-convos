import { supabaseServerClient } from "@/lib/supabase/supabaseServer";
import ScenarioFormPreview from "@/components/ScenarioUpdateFormPreview";

export const dynamic = 'force-dynamic'

const ScenarioDetailPage = async ({params}: {params: Params}) => {

    const scenarioId = params.id

    const supabase = supabaseServerClient()

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