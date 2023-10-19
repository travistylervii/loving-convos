"use client";

import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import {defaultData} from '@/model/scenarioData'
import SearchBar from "@/components/SearchBar";

import ScenarioGrid from "@/components/ScenarioGrid";

export default function Home() {

  const supabase = createClientComponentClient();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [categories, setCategories] = useState<CategoriesData[]>([{ id: 0, name: "" }]);
  const [selectedCategory, setSelectedCategory] = useState<CategoriesData>({ id: 0, name: "Any Category", });
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

    setScenarioData(defaultData);
    const loadScenarios = async () => {

      let query = supabase.from("scenarios")
        .select(`*, categories(*)`)
        .or(`description.ilike.%${searchTerm}%,title.ilike.%${searchTerm}%`);

      if(selectedCategory.id !== 0) {
        query = query.eq('categories.id', selectedCategory.id)
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
  }, [supabase, searchTerm, selectedCategory]);


  return (
    <>
      <main>
        <SearchBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} categories={categories} setSearchTerm={setSearchTerm} />
        <div className="max-w-5xl mx-auto -mt-6 pb-10">
        <ScenarioGrid scenarioData={scenarioData} />
        </div>
      </main>
    </>
  );
}
