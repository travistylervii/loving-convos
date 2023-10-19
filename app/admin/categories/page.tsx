import { supabaseServerClient } from "@/lib/supabase/supabaseServer";;
import CategoriesList from "@/components/CategoriesList";

export const dynamic = 'force-dynamic'

const CategoriesPage = async () => {

    const supabase = supabaseServerClient()
    const {data} = await supabase.from('categories').select()

    if(!data) {
        console.log("No Data")
        return <>Could not fetch data</>
    }

    return ( 
        <>
        <CategoriesList categoryData={data} />
        </>
     );
}
 
export default CategoriesPage;