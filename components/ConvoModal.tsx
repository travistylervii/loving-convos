"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { AiOutlineClose } from 'react-icons/ai'

const ConvoModal = (props) => {

  const { openModal, setOpenModal, healthyconvo, unhealthyconvo } = props;

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

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
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
                <Dialog.Panel className="relative transform overflow-scroll rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-h-[800px] sm:max-w-6xl sm:p-6">
                  <div>
                    <div className="mt-3 sm:mt-5">
                      {/* <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900 text-center mb-5"
                      >
                        Example
                      </Dialog.Title> */}
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
                              <h4 className="text-lg leading-6 font-bold">
                              {unhealthyconvo.breakdown.header && unhealthyconvo.breakdown.header}
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
                              <p>
                                {unhealthyconvo.breakdown.footer && unhealthyconvo.breakdown.footer}
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
                              <h4 className="text-lg leading-6 font-bold">
                              {healthyconvo.breakdown.header && healthyconvo.breakdown.header}
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
                              <p>
                                {healthyconvo.breakdown.footer && healthyconvo.breakdown.footer}
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

export default ConvoModal;