'use client'

import { useState } from 'react'

import ScenarioModal from './ScenarioModal';
import ScenarioButton from "@/components/ScenarioButton";

type Props = {
  scenarioData: ScenarioData[]
}

export default function ScenarioGrid(props: Props) {

  const {scenarioData} = props;

  console.log(scenarioData)

  const [modalData, setModalData] = useState<any>()
  const [openModal, setOpenModal] = useState<boolean>(false);


  return (
    <>
      {openModal &&
      <ScenarioModal openModal={openModal} setOpenModal={setOpenModal} modalData={modalData}  />}
      
      <div className="grid grid-cols-2 py-10 gap-5 max-w-5xl mx-auto">
        {scenarioData &&
          scenarioData.map((scenario) => {
            return (
              <div key={scenario.id}>
                <ScenarioButton scenarioData={scenario} setModalData={setModalData} setOpenModal={setOpenModal} />
              </div>
            );
          })}
      </div>
    </>
  );
}
