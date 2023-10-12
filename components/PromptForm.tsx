"use client";

import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface Input {
    prompt: string;
}

const PromptForm = () => {


  const { register, handleSubmit, formState: { errors }, } = useForm<Input>();

  const onSubmitPrompt: SubmitHandler<Input> = async (inputData) => {

    const {prompt} = inputData

    const scenarioRes = await fetch("/api/generateScenario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });

    if (!scenarioRes.ok) {
      return <>Not ok</>;
    }

    const data = await scenarioRes.json();
    const completionData = data.data;

    const finalPayload = {
      title: completionData.scenarioTitle,
      description: completionData.scenarioDescription,
      category: '',
      unhealthyConvo: completionData.unhealthyConvoData,
      healthyConvo: completionData.healthyConvoData,
    };

  };


  return (
    <>
      <div className="container mx-auto">
        <form onSubmit={handleSubmit(onSubmitPrompt)}>
          <div className="sm:col-span-6">
            <label
              htmlFor="title"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Describe the scenario
            </label>
            <div className="mt-2">
              <textarea
                {...register("prompt")}
                rows={4}
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="mt-6 flex items-center gap-x-6">
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PromptForm;
