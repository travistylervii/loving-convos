import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

export function supabaseClientClient() {
    const supabase = createClientComponentClient()
    return supabase
}