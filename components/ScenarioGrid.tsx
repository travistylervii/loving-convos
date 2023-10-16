'use client'

import { useState } from 'react'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import ConvoModal from './ScenarioModal';
import ScenarioButton from "@/components/ScenarioButton";

export default function ScenarioGrid(props) {

  const {scenarioData} = props;

  const [modalData, setModalData] = useState()
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {openModal && 
      <ConvoModal openModal={openModal} setOpenModal={setOpenModal} modalData={modalData}  />}
      
      <div className="grid grid-cols-2 py-10 gap-5 max-w-5xl mx-auto">
        {scenarioData &&
          scenarioData.map((scenario) => {
            return (
              <div key={scenario.id}>
                <ScenarioButton scenarioData={scenario} setModalData={setModalData} openModal={openModal} setOpenModal={setOpenModal} />
              </div>
            );
          })}
      </div>
    </>
  );
}
