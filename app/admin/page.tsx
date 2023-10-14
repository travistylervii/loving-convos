import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Edit, Delete } from "lucide-react";

const AdminPage = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data, error } = await supabase.from("scenarios").select();

  if (error) {
    console.log("Errror");
  }

  return (
    <>
      <h1 className="text-center text-4xl mb-10">Admin</h1>
      <ul>
        {data &&
          data.map((scenario) => {
            return <li key={scenario.id} className="py-1 flex items-center gap-3"><a href={`/admin/${scenario.id}`}><Edit size={15} /></a>{scenario.title}</li>;
          })}
      </ul>
    </>
  );
};

export default AdminPage;
