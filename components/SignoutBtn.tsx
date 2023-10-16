'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useToast } from "./ui/use-toast"

const SignoutBtn = () => {

    const supabase = createClientComponentClient()
    const { toast } = useToast()

    const handleSignout = async () => {

        const { error } = await supabase.auth.signOut()
        
        if(error) {
            toast({title: "Error", description: "Could not sign out"})
        }
    }

    return ( 
        <button onClick={() => {handleSignout}}>Signout</button>
     );
}
 
export default SignoutBtn;