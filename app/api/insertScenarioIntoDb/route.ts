import { NextResponse } from "next/server"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

const supabase = createServerComponentClient({cookies})

export async function POST(req: Request, res: Response) {

    const { formData } = await req.json()

    const {title, description, category, unhealthyConvo, healthyConvo,} = formData

    try {
        
        const {data, error} = await supabase
            .from('scenarios')
            .insert([{
                title,
                description,
                category,
                unhealthyconvo: JSON.parse(unhealthyConvo),
                healthyconvo: JSON.parse(healthyConvo),
            }])
            .select()
    
        if(error) {
            console.log(error)
            throw Error()
        }

        return NextResponse.json({status: 200, data})
    
    } catch(e) {

        return NextResponse.json({status: 500})

    } finally {

    }


}