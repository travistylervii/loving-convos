'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

const SignoutBtn = () => {

    const supabase = createClientComponentClient()


    const handleSignout = async () => {

        const { error } = await supabase.auth.signOut()

    }

    return ( 
        <button onClick={() => {handleSignout}}>Signout</button>
     );
}
 
export default SignoutBtn;