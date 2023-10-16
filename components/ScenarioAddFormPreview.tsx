'use client'

import { useState, useEffect } from "react";
import ScenarioAddForm from "@/components/ScenarioAddForm";
import ConvoDisplay from "@/components/ScenarioPreview";
import Switch from "@/components/SwitchBtn";


const ScenarioAddFormPreview = (props) => {

  const [categoryOptions, setCategoryOptions] = useState([{
    id: 0,
    created_at: '',
    name: '',
    slug: '',
    isChecked: false
  }])

  useEffect(() => {

    const getCategoriesfromDb = async () => {
      const res = await fetch('/api/fetchCategories', {
        method: 'GET',
      })

      if(!res.ok) {
        return <>No Cat data</>
      }

      const data = await res.json()
      const categoryData = data.data

      const mutatedCats = categoryData.map((cat) => {

        cat.isChecked = false

        return cat

      })

      setCategoryOptions(mutatedCats)

    }
    getCategoriesfromDb()

  },[])

    const { scenarioData } = props

    const [showPreview, setShowPreview] = useState(true);

    return ( 
        <>
        <div className="flex justify-center items-center gap-3 mb-5">
          <Switch setShowPreview={setShowPreview} showPreview={showPreview} />
          {showPreview ? <span>Preview</span> : <span>Code</span>}
        </div>
        <div>
          {showPreview ? (
            <ConvoDisplay scenarioData={scenarioData} />
          ) : (
            <ScenarioAddForm scenarioData={scenarioData} categoryOptions={categoryOptions} setCategoryOptions={setCategoryOptions} />
          )}
        </div>
        </>
     );
}
 
export default ScenarioAddFormPreview;