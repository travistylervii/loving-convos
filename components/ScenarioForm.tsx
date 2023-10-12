"use client";

import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface Input {
  title: string;
  description: string;
  category: string;
  unhealthyConvo: string;
  healthyConvo: string;
}

const ScenarioForm = (props) => {

  const {scenarioData} = props


  const { register, handleSubmit, setValue, formState: { errors }, } = useForm();

  const onSubmitDb: SubmitHandler<Input> = async (formData) => {

    console.log(formData)

    console.log("starting insertScenarioIntoDb Api")

    const dbRes = await fetch('/api/insertScenarioIntoDb', {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            formData
        })

    })

    if(!dbRes.ok) {
        return <>Not ok</>
    }

    console.log("Inserted")

    
  };


  useEffect(() => {
    
    setValue('title', scenarioData.title)
    setValue('description', scenarioData.description)
    setValue('category', scenarioData.category)
    setValue('unhealthyConvo', scenarioData.unhealthyConvo)
    setValue('healthyConvo', scenarioData.healthyConvo)

  },[scenarioData, setValue])




  

  return (
    <>
      <div className="max-w-2xl">
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
                      className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                      className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                      className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                      className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                      className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-x-6">
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit to DB
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ScenarioForm;
