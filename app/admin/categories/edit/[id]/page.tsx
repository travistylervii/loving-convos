import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import CategoryForm from "@/components/CategoryUpdateForm";


const EditCategory = async ({params}) => {

    const { id } = params

    const supabase = createServerComponentClient({cookies})
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