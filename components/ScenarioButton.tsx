"use client";

import { AiOutlineHeart, AiFillAlert } from "react-icons/ai";
import { TbMoodKid, TbMedicalCross, TbMoodHappy, TbMoodAnnoyed2, TbAlertSquare, TbHandStop, TbAlertHexagon } from "react-icons/tb"
import { PiHeartBreakBold, PiWechatLogoBold, PiMoneyBold, PiPillFill, PiGameController} from "react-icons/pi"
import {RiHome7Line} from "react-icons/ri"
import {MdWorkOutline} from "react-icons/md"
import {FaRegKissWinkHeart, FaHandHoldingHeart} from "react-icons/fa"
import {ImSleepy} from "react-icons/im"
import {GiLipstick} from "react-icons/gi"

import { useState, useEffect } from "react";

type IconType = React.ElementType;

interface IIconMapping {
  [key: number]: IconType; // This is the index signature.
}

interface Props {
  setOpenModal: (value: boolean) => void
  setModalData: (value: ScenarioData) => void;
  scenarioData: ScenarioData
}

const iconMapping: IIconMapping = {
  1: PiMoneyBold,
  2: PiWechatLogoBold,
  3: RiHome7Line,
  4: FaRegKissWinkHeart,
  5: PiHeartBreakBold,
  6: MdWorkOutline,
  7: TbMoodHappy,
  8: TbMoodKid,
  9: TbMoodAnnoyed2,
  10: FaHandHoldingHeart,
  11: TbMedicalCross,
  12: TbAlertSquare,
  13: TbHandStop,
  14: ImSleepy,
  15: PiGameController,
  16: PiPillFill,
  17: GiLipstick,
  18: TbAlertHexagon,
}

const CustomIcon = ({Icon, size}: {Icon: any, size: number}) => {

    return <Icon size={size} />

}

const ConvoButton = (props: Props) => {

    const {setModalData, setOpenModal, scenarioData} = props
    const {title, description, categories } = scenarioData

    const [iconBgcolor, setIconBgColor] = useState('text-slate-300')
    const [iconTextColor, setIconTextColor] = useState('text-slate-700')


  const handleModal = () => {

    setOpenModal(false)
    setModalData(scenarioData)
    setOpenModal(true)

  }

  const DefaultIcon = AiOutlineHeart
  
  const IconComponent = categories ? iconMapping[categories[0].id] || DefaultIcon : DefaultIcon



  return (
    <div>
      <button
        onClick={() => handleModal()}
        className="flex gap-2 w-full bg-white shadow-lg shadow-slate-200 rounded-md p-4 col-span-1 hover:shadow-slate-300 text-left"
      >
        <div>
          <div className="w-14 h-14 rounded-md flex justify-center items-center bg-pink-300">
            <CustomIcon Icon={IconComponent} size={25} />
          </div>
        </div>
        <div className="w-full">
          <h2 className="text-slate-600 font-bold text-md">{title}</h2>
          <p className="text-slate-500">{description}</p>
          <div className="flex flex-wrap text-sm text-slate-400 pt-3">
            {categories && categories.map(cat => <span key={cat.id} className="px-1">#{cat.name}</span>)}
          </div>
        </div>
      </button>
    </div>
  );
};

export default ConvoButton;
