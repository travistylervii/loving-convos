"use client";

import { useEffect, useState, Fragment } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

import ScenarioGrid from "@/components/ScenarioGrid";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  const supabase = createClientComponentClient();
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([{ id: 0, name: "" }]);
  const [selected, setSelected] = useState({
    id: 0,
    name: "Any Category",
  });
  const [scenarioData, setScenarioData] = useState<ScenarioData[]>([]);

  useEffect(() => {
    const loadCategories = async () => {
      const { data: catData, error: catError } = await supabase
        .from("categories")
        .select("id, name");

      if (!catData) {
        return null;
      }

      catData.unshift({id: 0, name: "Any Category"})

      setCategories(catData);
    };

    loadCategories();
  }, [supabase]);


  useEffect(() => {

    const loadScenarios = async () => {

      let query = supabase.from("scenarios")
        .select(`*, categories(*)`)
        .or(`description.ilike.%${searchTerm}%,title.ilike.%${searchTerm}%`);

      if(selected.id !== 0) {
        query = query.eq('categories.id', selected.id)
      }

      const { data: scenarioData, error: scenarioError } = await query
      
      if (scenarioError) {
        console.log(scenarioError);
        return <>No data</>;
      }

      const filteredRes = scenarioData.filter((scenario) => {

        if(!!scenario.categories.length) {
          return scenario
        }

      })

      setScenarioData(filteredRes);
    };

    const timeoutId = setTimeout(() => {
      loadScenarios();
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [supabase, searchTerm, selected]);

  return (
    <>
      <div className="bg-slate-300 py-20 text-center">
        <h1 className="text-4xl font-bold mb-3">
          Explore the Landscape of Effective Communication
        </h1>
        <p className="text-lg">
          Discover Rich Examples of Healthy Dialogues That Cultivate Stronger
          Bonds.
        </p>
        <div>
          <div className="mt-5 max-w-xl mx-auto flex gap-3 items-center">
            <div className="w-3/5">
              <input
                type="text"
                name="search"
                id="searchbar"
                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Search Scenarios..."
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="w-2/5">
              <Listbox value={selected} onChange={setSelected}>
                {({ open }) => (
                  <>
                    <div className="relative">
                      <Listbox.Button className="relative w-full cursor-default rounded-md bg-white p-2 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        <span className="block truncate">{selected.name}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <ChevronUpDownIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm text-left">
                          {categories &&
                            categories.map((category) => (
                              <Listbox.Option
                                key={category.id}
                                className={({ active }) =>
                                  classNames(
                                    active
                                      ? "bg-indigo-600 text-white"
                                      : "text-gray-900",
                                    "relative cursor-default select-none py-2 pl-3 pr-9"
                                  )
                                }
                                value={category}
                              >
                                {({ selected, active }) => (
                                  <>
                                    <span
                                      className={classNames(
                                        selected
                                          ? "font-semibold"
                                          : "font-normal",
                                        "block truncate"
                                      )}
                                    >
                                      {category.name}
                                    </span>

                                    {selected ? (
                                      <span
                                        className={classNames(
                                          active
                                            ? "text-white"
                                            : "text-indigo-600",
                                          "absolute inset-y-0 right-0 flex items-center pr-4"
                                        )}
                                      >
                                        <CheckIcon
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                        />
                                      </span>
                                    ) : null}
                                  </>
                                )}
                              </Listbox.Option>
                            ))}
                          
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </>
                )}
              </Listbox>
            </div>
          </div>
        </div>
      </div>
      <main>
        <ScenarioGrid scenarioData={scenarioData} />
      </main>
    </>
  );
}
