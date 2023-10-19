"use client";

import { Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

type Props = {
  openModal: boolean,
  setOpenModal: (value: boolean) => void
  modalData: ScenarioData
}

const ScenarioModal = (props: Props) => {

  const {openModal, setOpenModal, modalData} = props
 
  if(!modalData) {
    return <>No Modal Data</>
  }
 
  const {title, description, unhealthyconvo, healthyconvo} = modalData

  return (
    <>
      <Transition.Root show={openModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpenModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-scroll">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform bg-white shadow-xl transition-all sm:w-full sm:max-h-fit sm:max-w-6xl sm:p-10">
                  <div>
                    <div className="text-center">
                    <h1 className="text-3xl font-bold text-slate-700 pb-2">{title}</h1>
                    <p>{description}</p>
                    </div>
                    <div className="mt-3 sm:mt-5 text-left">
                  
                      <div className="mt-2">
                        <div className="grid grid-cols-2 divide-x divide-slate-300">
                          <div className="col-span-1 px-6">
                          <AiOutlineClose size={50} className="mx-auto mb-5 text-rose-400" />
                          <h3 className="text-center text-3xl font-bold mb-6 text-rose-400">
                              Unhealthy Conversation
                            </h3>

                            <ul>
                              {unhealthyconvo.convo.map((message) => {
                                if (message.name === "David") {
                                  return (
                                    <>
                                      <li className="my-2">
                                        <div className="pt-3 pb-4 px-4 bg-blue-400 rounded-lg text-white text-left mr-10">
                                          {message.text}
                                        </div>
                                        <div className="flex gap-2 items-center -mt-2 ml-3">
                                          <img src="david-mad.png" className="w-10 h-10 rounded-full bg-slate-500 border-2 border-white shadow-sm shadow-slate-300"/>
                                          <div className="text-sm font-bold">
                                            {message.name}
                                          </div>
                                        </div>
                                      </li>
                                    </>
                                  );
                                } else {
                                  return (
                                    <>
                                      <li className="my-2">
                                        <div className="pt-3 pb-4 pr-4 px-4 bg-pink-400 rounded-lg text-white text-right ml-10">
                                          {message.text}
                                        </div>
                                        <div className="flex gap-2 items-center justify-end -mt-2 m-3">
                                          <div className="text-sm font-bold">
                                            {message.name}
                                          </div>
                                          <img src="emma-mad.png" className="w-10 h-10 rounded-full bg-slate-500 border-2 border-white shadow-sm shadow-slate-300" />
                                        </div>
                                      </li>
                                    </>
                                  );
                                }
                              })}
                            </ul>

                            <hr className="my-8"  />
                            <div className="text-sm">
                              <h4 className="text-lg leading-6 font-bold mb-5">
                              This conversation showcases several elements of an unhealthy conversation:
                              </h4>
                              <ul className="list-disc pl-5">
                                {unhealthyconvo.breakdown.points.map((point) => {
                                  return (
                                    <>
                                      <li className="my-2">
                                        <strong>{point.pointTitle}: </strong>
                                        {point.pointText}
                                      </li>
                                    </>
                                  );
                                })}
                              </ul>
                              <h4 className="text-lg leading-6 font-bold mt-5 mb-1">In Summary:</h4>
                              <p>
                                {unhealthyconvo.breakdown.summary && unhealthyconvo.breakdown.summary}
                              </p>
                            </div>
                          </div>
                          <div className="col-span-1 px-6">
                            <IoMdCheckmarkCircleOutline size={50} className="mx-auto mb-5 text-emerald-400" />
                          <h3 className="text-center text-3xl font-bold mb-6 text-emerald-500">
                              Healthy Conversation
                            </h3>

                            <ul>
                              {healthyconvo.convo.map((message) => {

                                if (message.name === "David") {
                                  return (
                                    <>
                                      <li className="my-2">
                                        <div className="pt-3 pb-4 px-4 bg-blue-400 rounded-lg text-white text-left mr-10">
                                          {message.text}
                                        </div>
                                        <div className="flex gap-2 items-center -mt-2 ml-3">
                                        <img src="david-mad.png" className="w-10 h-10 rounded-full bg-slate-500 border-2 border-white shadow-sm shadow-slate-300"/>
                                          <div className="text-sm font-bold">
                                            {message.name}
                                          </div>
                                        </div>
                                      </li>
                                    </>
                                  );
                                } else {
                                  return (
                                    <>
                                      <li className="my-2">
                                        <div className="pt-3 pb-4 pr-4 px-4 bg-pink-400 rounded-lg text-white text-right ml-10">
                                          {message.text}
                                        </div>
                                        <div className="flex gap-2 items-center justify-end -mt-2 m-3">
                                          <div className="text-sm font-bold">
                                            {message.name}
                                          </div>
                                          <img src="emma-mad.png" className="w-10 h-10 rounded-full bg-slate-500 border-2 border-white shadow-sm shadow-slate-300"/>
                                        </div>
                                      </li>
                                    </>
                                  );
                                }
                              })}
                            </ul>

                            <hr className="my-8" />
                            <div className="text-sm">
                            <h4 className="text-lg leading-6 font-bold mb-5">
                              This conversation showcases several elements of a healthy conversation:
                              </h4>
                              <ul className="list-disc pl-5">
                                {healthyconvo.breakdown.points.map((point) => {
                                  return (
                                    <>
                                      <li className="my-2">
                                        <strong>{point.pointTitle}: </strong>
                                        {point.pointText}
                                      </li>
                                    </>
                                  );
                                })}
                              </ul>
                              
                              <h4 className="text-lg leading-6 font-bold mt-5 mb-1">In Summary:</h4>
                              <p>
                                {healthyconvo.breakdown.summary && healthyconvo.breakdown.summary}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default ScenarioModal;
