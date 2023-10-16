"use client";

import { AiOutlineHeart } from "react-icons/ai";
import { CheckIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useEffect } from "react";

interface ScenarioData {
  id: number;
  title: string;
  description: string;
  category: string;
  healthyconvo: string;
  unhealthyconvo: string;
}

interface Props {
  setOpenModal: (value: boolean) => void
  setModalData: (value: ScenarioData) => void;
  scenarioData: ScenarioData
}

const ConvoButton = (props: Props) => {

    const {setModalData, setOpenModal, scenarioData} = props
    const {title, description, categories } = scenarioData

    const [iconBgcolor, setIconBgColor] = useState('text-slate-300')
    const [iconTextColor, setIconTextColor] = useState('text-slate-700')

  const handleModal = () => {

    setOpenModal(false)
    setModalData(props.scenarioData)
    setOpenModal(true)

  }

  return (
    <div>
      <button
        onClick={() => handleModal()}
        className="flex w-full gap-4 bg-white shadow-lg shadow-slate-200 rounded-md p-4 col-span-1 hover:shadow-slate-300 text-left"
      >
        <div>
          <div className={`w-14 h-14 rounded-md flex justify-center items-center ${iconBgcolor}`}>
            <AiOutlineHeart size={25} className={iconTextColor} />
          </div>
        </div>
        <div className="w-full">
          <h2 className="text-slate-600 font-bold text-md">{title}</h2>
          <p className="text-slate-500">{description}</p>
          <div className="flex flex-wrap justify-end text-sm text-slate-400 text-right pt-3">
            {categories && categories.map(cat => <span key={cat.id} className="px-1">#{cat.name}</span>)}
          </div>
        </div>
      </button>
    </div>
  );
};

export default ConvoButton;
