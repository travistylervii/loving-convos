"use client";

import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useToast } from "./ui/use-toast";
import LoadingSpinner from "./LoadingSpinner";

interface Input {
  prompt: string;
}
//Emma doesn't like being around David parents as they are rude and somewhat mean to her, but Emma doesn't know how to address it with David
const PromptForm = (props) => {

  const { setScenarioData } = props;
  const { toast } = useToast()
  const [scenarioLoading, setScenarioLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>();

  const onSubmitPrompt: SubmitHandler<Input> = async (inputData) => {
    
    const { prompt } = inputData;

    setScenarioLoading(true)

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
      id: 0,
      title: completionData.scenarioTitle,
      description: completionData.scenarioDescription,
      category: "",
      unhealthyconvo: JSON.parse(completionData.unhealthyConvoData),
      healthyconvo: JSON.parse(completionData.healthyConvoData),
    };

    toast({title: "Great Success", description: "Your scenario has been generated"})
    setScenarioLoading(false)
    setScenarioData(finalPayload);
  };


  return (
    <>
      <div>
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
                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="mt-6 flex items-center gap-x-6">
            <button
              type="submit"
              className="flex gap-3 items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit {scenarioLoading && <LoadingSpinner />}
              
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PromptForm;
