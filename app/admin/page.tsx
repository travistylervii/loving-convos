import { supabaseServerClient } from "@/lib/supabase/supabaseServer";
import ScenarioTable from "@/components/admin/ScenarioTable";

const AdminPage = async () => {
  const supabase = supabaseServerClient()
  
  let { data, error } = await supabase
  .from('scenarios')
  .select(`*, categories(name)`)

  if (error) {
    console.log(error);
    return <>Data Error</>
  }


  return (
    <>
      <h1 className="text-center text-4xl mb-10">Admin</h1>
      <ScenarioTable scenarioData={data} />
    </>
  );
};

export default AdminPage;
