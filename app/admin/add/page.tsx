"use client";

import { useEffect, useState } from "react";
import PromptForm from "@/components/PromptForm";
import ScenarioFormPreview from "@/components/ScenarioAddFormPreview";

const AddScenario = () => {

  const [scenarioData, setScenarioData] = useState({
    id: 0,
    title: "",
    description: "",
    category: "",
    unhealthyconvo: "",
    healthyconvo: "",
  });

  return (
    <>
      <h1 className="text-center text-4xl mb-10">Admin</h1>

      <div className="max-w-5xl mx-auto">
        <PromptForm setScenarioData={setScenarioData} />
        <ScenarioFormPreview scenarioData={scenarioData}/>
      </div>
    </>
  );
};

export default AddScenario;
