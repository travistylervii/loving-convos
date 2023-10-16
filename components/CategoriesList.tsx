'use client'

import { Edit } from "lucide-react";

const CategoriesList = (props) => {

    const { categoryData } = props

    return ( 
        <>
        <ul>
            <li className="mb-5"><a href="/admin/categories/add" className="py-2 px-5 border border-border rounded-md">Add Category</a></li>
            {categoryData && categoryData.map((category) => {
                return <li key={category.id} className="flex items-center gap-3"><a href={`/admin/categories/edit/${category.id}`}><Edit size={15}/></a>{category.name}</li>
            })}
        </ul>
        </>
     );
}
 

export default CategoriesList;