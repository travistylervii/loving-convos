'use client'

import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form'
import { useToast } from './ui/use-toast';

interface Inputs {
    name: string;
    slug: string;
}

const CategoryInsertForm = () => {

    const { register, handleSubmit } = useForm<Inputs>()
    const { toast } = useToast()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {

        const formPayload = {
            name: data.name,
            slug: data.slug,
        }

        console.log(formPayload)

        const res = await fetch('/api/insertCategoryinDb', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                formPayload
            })
        })

        if(!res.ok) {
            console.log("Something went wrong")
            return <>Something went wrong</>
        }

        toast({title: "Great Success", description: "The category has been inserted!"})

    }

    return ( 
        <>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                  Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    {...register('name')}
                    type="text"
                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="slug" className="block text-sm font-medium leading-6 text-gray-900">
                    Slug
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="slug"
                    {...register('slug')}
                    type="text"
                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Submit
                </button>
              </div>
            </form>
        </>
     );
}
 
export default CategoryInsertForm;