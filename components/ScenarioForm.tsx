"use client";

import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface Input {
prompt: string;
  title: string;
  description: string;
  category: string;
  unhealthyConvo: string;
  healthyConvo: string;
}

const ScenarioForm = () => {


  const [dbPayload, setDbPayload] = useState({
    title: '',
    description: '',
    category: '',
    unhealthyConvo: '',
    healthyConvo: ''
  });
  const { register, handleSubmit, setValue, formState: { errors }, } = useForm();

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

    setDbPayload(finalPayload)

    
  };

  const onSubmitDb: SubmitHandler<Input> = async (data) => {

    console.log("starting insertScenarioIntoDb Api")

    const dbRes = await fetch('/api/insertScenarioIntoDb', {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            dbPayload
        })

    })

    if(!dbRes.ok) {
        return <>Not ok</>
    }

    console.log("Finishing insertScenarioIntoDb")

    const dbData = await dbRes.json()
    console.log("Database Inserted")
    console.log(dbData)
    
  };


  useEffect(() => {

    setValue('title', dbPayload.title)
    setValue('description', dbPayload.description)
    setValue('category', dbPayload.category)
    setValue('unhealthyConvo', dbPayload.unhealthyConvo)
    setValue('healthyConvo', dbPayload.healthyConvo)

  },[dbPayload, setValue])

  

  return (
    <>
      <div className="container my-10 max-w-[600px] mx-auto">
        <form onSubmit={handleSubmit(onSubmitPrompt)}>
          <div className="sm:col-span-6">
            <label
              htmlFor="title"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Describe the scenario.
            </label>
            <div className="mt-2">
              <input
                type="text"
                {...register("prompt")}
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </form>

        <form onSubmit={handleSubmit(onSubmitDb)}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-6">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Title
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      {...register("title")}
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Category
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      {...register("category")}
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Description
                  </label>
                  <div className="mt-2">
                    <textarea
                      {...register("description")}
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="unhealthyConvo"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Unhealthy conversation
                  </label>
                  <div className="mt-2">
                    <textarea
                      {...register("unhealthyConvo")}
                      rows={10}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="healthyConvo"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Healthy Conversation
                  </label>
                  <div className="mt-2">
                    <textarea
                      {...register("healthyConvo")}
                      rows={10}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ScenarioForm;
