"use client";

import { AiOutlineHeart } from "react-icons/ai";
import { CheckIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import ConvoModal from "./ConvoModal";
import { useEffect } from "react";

interface Props {
  title: string;
  description: string;
  category: string;
  healthyconvo: string;
  unhealthyconvo: string;
}

const ConvoButton = (props) => {

    const { title, description, category, healthyconvo, unhealthyconvo } = props.scenarioData

    const [openModal, setOpenModal] = useState(false);
    const [iconBgcolor, setIconBgColor] = useState('text-slate-300')
    const [iconTextColor, setIconTextColor] = useState('text-slate-700')

  useEffect(() => {
        if(category === 'Finance') {
          setIconBgColor('bg-emerald-300')
          setIconTextColor('text-emerald-700')
        }
        else if(category === 'Quality Time') {
          setIconBgColor('bg-slate-300')
          setIconTextColor('text-slate-700')
        } else {
          setIconBgColor('bg-slate-300')
          setIconTextColor('text-slate-700')
        }
  },[category])

  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        className="flex gap-4 bg-white shadow-lg shadow-slate-200 rounded-md p-4 col-span-1 hover:shadow-slate-300 text-left"
      >
        <div>
          <div className={`w-14 h-14 rounded-md flex justify-center items-center ${iconBgcolor}`}>
            <AiOutlineHeart size={25} className={iconTextColor} />
          </div>
        </div>
        <div>
          <h2 className="text-slate-600 font-bold text-md">{title}</h2>
          <p className="text-slate-500">{description}</p>
          <p className="text-sm text-slate-400 text-right">#{category}</p>
        </div>
      </button>
      <ConvoModal openModal={openModal} setOpenModal={setOpenModal} healthyconvo={healthyconvo} unhealthyconvo={unhealthyconvo}  />
    </>
  );
};

export default ConvoButton;
