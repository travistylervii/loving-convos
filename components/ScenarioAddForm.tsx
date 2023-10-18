"use client";

import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useToast } from "./ui/use-toast";


interface Props {
  scenarioData: FormScenarioData;
  setCategoryOptions: (value: any) => void;
  categoryOptions: CategoriesData[];
}


const ScenarioAddForm = (props:Props) => {

  const {categoryOptions, setCategoryOptions, scenarioData} = props
  const {title, description, unhealthyconvo, healthyconvo} = scenarioData
  const { toast } = useToast()

  const { register, handleSubmit, setValue, formState: { errors }, } = useForm<FormScenarioData>();


  const onSubmitDb: SubmitHandler<FormScenarioData> = async (formData) => {

    const { title, description, categories, unhealthyconvo, healthyconvo } =
      formData;

    const dbRes = await fetch('/api/upsertScenarioIntoDb', {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: '',
          title,
          description,
          categories,
          unhealthyconvo,
          healthyconvo,
        })

    })

    if(!dbRes.ok) {
        return <>Not ok</>
    }

    toast({title: "Great Success", description: "Your Scenario has been inserted into the database."})

  };


  useEffect(() => {
    
    setValue('title', title)
    setValue('description', description)
    setValue('unhealthyconvo', JSON.stringify(unhealthyconvo, null, 2))
    setValue('healthyconvo', JSON.stringify(healthyconvo, null, 2))

  },[title, description, unhealthyconvo, healthyconvo, setValue])


  const handleCheckChanged = (catId: number) => {

    if(categoryOptions) {
      const modifiedCategories = categoryOptions.map((cat) => {

        if(cat.id === catId) {
          return {...cat, isChecked: !cat.isChecked}
        } else {
          return {...cat}
        }
      })

      setCategoryOptions(modifiedCategories)
    }
  }

  return (
    <>
      <div>
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
                   <ul>

                      {categoryOptions && categoryOptions.map((cat) => {
                        return (
                          
                        <li key={cat.id}>
                          <input 
                            type="checkbox" 
                            value={cat.id} 
                            checked={cat.isChecked} 
                            {...register('categories')} 
                            onChange={() => handleCheckChanged(cat.id)}
                            /> {cat.name}
                        </li>
                        )
                      })}
                      
                      </ul>
              
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
                      {...register("unhealthyconvo")}
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
                      {...register("healthyconvo")}
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

export default ScenarioAddForm;
