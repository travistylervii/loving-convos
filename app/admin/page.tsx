"use client";

import { useEffect, useState } from "react";
import PromptForm from "@/components/PromptForm";
import ScenarioForm from "@/components/ScenarioForm";
import SignoutBtn from "@/components/SignoutBtn";
import ConvoDisplay from "@/components/ConvoDisplay";
import Switch from "@/components/SwitchBtn";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const AdminPage = () => {
  const [scenarioData, setScenarioData] = useState({
    title: "",
    description: "",
    category: "",
    unhealthyConvo: "",
    healthyConvo: "",
  });
  const [showPreview, setShowPreview] = useState(true);

  // const supabase = createClientComponentClient()

  // const {data: {session}} = await supabase.auth.getSession()

  // console.log(session)

  // if(!session) {
  //   return <>YOU SHALL NOT PASS!</>
  // }

  useEffect(() => {
    console.log(scenarioData);
  }, [scenarioData]);

  return (
    <>
      <h1 className="text-center text-4xl mb-10">Admin</h1>
      <div className="flex gap-10">
        <div className="w-1/4">
          <PromptForm setScenarioData={setScenarioData} />
        </div>
        <div className="w-3/4">
          <div className="flex items-center gap-2 mb-2">
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
      </div>

      <div className="text-center mt-20">
        <SignoutBtn />
      </div>
    </>
  );
};

export default AdminPage;
