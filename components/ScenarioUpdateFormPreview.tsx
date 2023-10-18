"use client";

import { useState, useEffect } from "react";
import ScenarioUpdateForm from "@/components/ScenarioUpdateForm";
import ConvoDisplay from "@/components/ScenarioPreview";
import Switch from "@/components/SwitchBtn";

type Props = {
  scenarioData: FormScenarioData,
  scenarioId: string
}

const ScenarioUpdateFormPreview = (props: Props) => {
  
  const { scenarioData, scenarioId } = props;
  
  const [showPreview, setShowPreview] = useState(true);
  const [categoryOptions, setCategoryOptions] = useState([
    {
      id: parseInt(scenarioId),
      created_at: "",
      name: "",
      slug: "",
      isChecked: false,
    },
  ]);

  useEffect(() => {
    const getCategoriesfromDb = async () => {
      const res = await fetch("/api/fetchCategories", {
        method: "GET",
      });

      if (!res.ok) {
        return <>No Cat data</>;
      }

      const data = await res.json();
      const categoryData = data.data;

      const mutatedCats = categoryData.map((cat: CategoriesData) => {

        const foundCat = scenarioData.categories?.some(sCat => sCat.id === cat.id)
      
        if(foundCat) {
          cat.isChecked = true;
        } else {
          cat.isChecked = false;
        }
        
        return cat;
      });

      setCategoryOptions(mutatedCats);
    };
    getCategoriesfromDb();
  }, [scenarioData.categories]);

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
          <ScenarioUpdateForm
            scenarioData={scenarioData}
            categoryOptions={categoryOptions}
            setCategoryOptions={setCategoryOptions}
            scenarioId={scenarioId}
          />
        )}
      </div>
    </>
  );
};

export default ScenarioUpdateFormPreview;
