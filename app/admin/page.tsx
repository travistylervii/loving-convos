import PromptForm from "@/components/PromptForm";
import ScenarioForm from "@/components/ScenarioForm";
import SignoutBtn from "@/components/SignoutBtn";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const AdminPage = async () => {
  // const supabase = createServerComponentClient({cookies})

  // const {data: {session}} = await supabase.auth.getSession()

  // console.log(session)

  // if(!session) {
  //   return <>YOU SHALL NOT PASS!</>
  // }

  return (
    <>
      <h1 className="text-center text-4xl mb-10">Admin</h1>
      <div className="flex gap-10">
        <div className="w-1/4">
          <PromptForm />
        </div>
        <div className="grow">Main Content</div>
      </div>

      <div className="text-center mt-20">
        <SignoutBtn />
      </div>
    </>
  );
};

export default AdminPage;
