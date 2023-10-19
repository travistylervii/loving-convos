import { supabaseServerClient } from "@/lib/supabase/supabaseServer";;

import CategoryForm from "@/components/CategoryUpdateForm";

const EditCategory = async ({params}: {params: Params}) => {

    const { id } = params

    const supabase = supabaseServerClient()
    const {data} = await supabase.from('categories').select().eq('id', id).single()

    if(!data) {
        console.log("Error")
        return <>No category</>
    }

    return ( 
        <>
        <div className="max-w-2xl mx-auto">
        <CategoryForm categoryData={data} />
        </div>
        </>
     );
}
 
export default EditCategory;