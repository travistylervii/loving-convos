"use client";

import { useEffect, useState } from "react";
import PromptForm from "@/components/PromptForm";
import ScenarioForm from "@/components/ScenarioForm";
import SignoutBtn from "@/components/SignoutBtn";
import ConvoDisplay from "@/components/ConvoDisplay";
import Switch from "@/components/SwitchBtn";

const AddScenario = () => {
  const [scenarioData, setScenarioData] = useState({
    title: "",
    description: "",
    category: "",
    unhealthyConvo: "",
    healthyConvo: "",
  });
  const [showPreview, setShowPreview] = useState(true);

  useEffect(() => {
    console.log(scenarioData);
  }, [scenarioData]);

  return (
    <>
      <h1 className="text-center text-4xl mb-10">Admin</h1>

      <div className="max-w-5xl mx-auto">
        <PromptForm setScenarioData={setScenarioData} />
        <div className="flex justify-center items-center gap-3">
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
      </div>
    </>
  );
};

export default AddScenario;
