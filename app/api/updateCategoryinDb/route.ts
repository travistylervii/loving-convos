import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export const dynamic = 'force-dynamic'

export async function POST(req: Request) {

    const {formPayload} = await req.json()
    const {id, name, slug} = formPayload

    const supabase = createServerComponentClient({cookies})

    try {

        const {data, error} = await supabase
            .from('categories')
            .update([{slug: slug, name: name}])
            .eq('id', id)
            .select()

            if(error) {
                console.log(error)
            }

        return NextResponse.json({status: 200})
        
    } catch(e) {
        
        console.log("Error", e)
        return NextResponse.json({status: 500})
    }



}