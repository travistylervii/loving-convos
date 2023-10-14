import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const ScenarioDetailPage = async ({params}) => {

    const scenarioId = params.id

    const supabase = createServerComponentClient({cookies})

    const {data, error} = await supabase.from('scenarios').select().eq('id', scenarioId).single()

    console.log(data)
    

    return ( 

        <>
        {data.title}
        </>
     );
}
 
export default ScenarioDetailPage;