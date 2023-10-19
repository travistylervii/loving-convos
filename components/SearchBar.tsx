import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";

type Props = {
    selectedCategory: CategoriesData,
    setSelectedCategory: (value: CategoriesData) => void,
    categories: CategoriesData[],
    setSearchTerm: (value: string) => void,
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

const SearchBar = (props: Props) => {

    const {selectedCategory, setSelectedCategory, categories, setSearchTerm} = props

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
              <Listbox value={selectedCategory} onChange={setSelectedCategory}>
                {({ open }) => (
                  <>
                    <div className="relative">
                      <Listbox.Button className="relative w-full cursor-default rounded-md bg-white p-2 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        <span className="block truncate">{selectedCategory.name}</span>
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
        </>
     );
}
 
export default SearchBar;