import { Edit } from "lucide-react";

type Props = {
  scenarioData: ScenarioData[] | null
}

const ScenarioTable = (props:Props) => {
  const { scenarioData } = props;

  return (
    <>
      <ul>
        {scenarioData &&
          scenarioData.map((scenario, i) => {
            return (
              <li
                key={scenario.id}
                className="px-3 py-2 mb-2 border border-border"
              >
                <div className="flex gap-3">
                  <div className="pt-1">
                    <a href={`/admin/${scenario.id}`}>
                      <Edit size={15} />
                    </a>
                  </div>
                  <div>
                    <div className="flex">
                      <div className="font-bold">{scenario.title}</div>
                      <div>
                        {scenario.categories?.map(
                          (category: CategoriesData, i: number) => {
                            return (
                              <span key={i} className="text-slate-400 ml-2">
                                #{category.name}
                              </span>
                            );
                          }
                        )}
                      </div>
                    </div>

                    <div>
                      <span className="text-slate-600">
                        {scenario.description}
                      </span>
                    </div>
                  </div>
                </div>
                <div></div>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default ScenarioTable;
