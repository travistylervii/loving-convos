import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function POST(req: Request) {

    const {formPayload} = await req.json()
    const {name, slug} = formPayload


    const supabase = createServerComponentClient({cookies})

    try {

        const {data, error} = await supabase
            .from('categories')
            .insert([{slug: slug, name: name}])
            .select()

            if(error) {
                console.log(error)
            }
        console.log(data)

        return NextResponse.json({status: 200})
        
    } catch(e) {
        
        console.log("Error", e)
        return NextResponse.json({status: 500})
    }



}