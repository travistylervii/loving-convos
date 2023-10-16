'use client'

import { useState } from "react";
import ScenarioForm from "@/components/ScenarioForm";
import ConvoDisplay from "@/components/ScenarioPreview";
import Switch from "@/components/SwitchBtn";


const ScenarioFormPreview = (props) => {

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
            <ScenarioForm scenarioData={scenarioData} />
          )}
        </div>
        </>
     );
}
 
export default ScenarioFormPreview;