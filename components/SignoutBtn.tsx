'use client'

import { supabaseClientClient } from "@/lib/supabase/supabaseClient"
import { useToast } from "./ui/use-toast"
import {useRouter} from "next/navigation"

const SignoutBtn = () => {

    const supabase = supabaseClientClient()
    const router = useRouter()
    const { toast } = useToast()

    const handleSignout = async () => {

        const { error } = await supabase.auth.signOut()
        
        if(error) {
            toast({title: "Error", description: "Could not sign out"})
        }

        router.push('/')
        
    }

    return ( 
        <button onClick={handleSignout}>Signout</button>
     );
}
 
export default SignoutBtn;