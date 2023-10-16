import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import CategoriesList from "@/components/CategoriesList";

const CategoriesPage = async () => {

    const supabase = createServerComponentClient({cookies})
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