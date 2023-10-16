import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Edit, Delete } from "lucide-react";

const AdminPage = async () => {
  const supabase = createServerComponentClient({ cookies });
  
  let { data, error } = await supabase
  .from('scenarios')
  .select(`*, categories(name)`)

  console.log(data)

  if (error) {
    console.log(error);
    return <>Data Error</>
  }

  return (
    <>
      <h1 className="text-center text-4xl mb-10">Admin</h1>
      <ul>
        {data &&
          data.map((scenario, i) => {

            return (
            <li key={scenario.id} className="py-1 flex items-center gap-3">
              <a href={`/admin/${scenario.id}`}>
                <Edit size={15} />
              </a>
              
              {scenario.title} | 
              {scenario.categories.map((category, i) => {
                return (
                <span key={i} className="text-gray-400">
                  #{category.name}
                </span>
                )
              })}
            </li>
            );
          })}
      </ul>
    </>
  );
};

export default AdminPage;
