import { supabaseServerClient } from "@/lib/supabase/supabaseServer";
import { redirect } from "next/navigation";
import SignoutBtn from "@/components/SignoutBtn";

export const dynamic = 'force-dynamic'

export default async function AdminLayout({ children, }: { children: React.ReactNode; }) {

  const supabase = supabaseServerClient()

  const {data: {session}} = await supabase.auth.getSession()

  if(!session) {
    redirect('/login')
  }


  return (
    <>
      <div className="container mx-auto py-10">
      <div className="text-center mb-10">
        <ul className="inline-flex gap-5">
          <li className="border border-border py-1 px-5 rounded-md"><a href="/admin/">View Scenarios</a></li>
          <li className="border border-border py-1 px-5 rounded-md"><a href="/admin/add">Add Scenario</a></li>
          <li className="border border-border py-1 px-5 rounded-md"><a href="/admin/categories">Categories</a></li>
        </ul>
      </div>
        {children}
      </div>
      <div className="text-center mt-20">
        <SignoutBtn />
      </div>
    </>
  );
}
