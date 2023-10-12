import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const LoginPage = async () => {

    const supabase = createServerComponentClient({cookies})

    // const { data, error } = await supabase.auth.signInWithPassword({
    //     email: 'moorett2002@gmail.com',
    //     password: 'Founder4Life$$',
    //   })

    //   console.log(data)

    return ( 
        <>ssss</>
     );
}
 
export default LoginPage;