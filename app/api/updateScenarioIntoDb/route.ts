import { NextResponse } from "next/server"
import { supabaseServerClient } from "@/lib/supabase/supabaseServer";
import { cookies } from "next/headers"

export async function POST(req: Request, res: Response) {
    
    const { formData } = await req.json()
    const {title, description, categories, unhealthyconvo, healthyconvo,} = formData

    
    const supabase = supabaseServerClient()
    
    try {
        

        //Insert scenario into scanarios table
        const {data: scenarioData, error: scenarioError} = await supabase
            .from('scenarios')
            .insert([{
                title,
                description,
                unhealthyconvo: JSON.parse(unhealthyconvo),
                healthyconvo: JSON.parse(healthyconvo),
            }])
            .select('id')
            .single()
    
        if(scenarioError) {
            console.log(scenarioError)
            throw Error()
        }


        const scenarioId = scenarioData.id
        
        //create category payload. 
        const categoryPayload = categories.map((catId: string) => {

            return ({
                'scenario_id': scenarioId,
                'category_id': parseInt(catId)
            })

        })


        //Insert scanario id and category ids into junction table
        const {data: junctionData, error: juctionError} = await supabase 
            .from('scenarios-categories')
            .insert(categoryPayload)
            .select()

        if(juctionError) {
            console.log(juctionError)
            throw Error()
        }

        return NextResponse.json({status: 200})
    
    } catch(e) {

        console.log("Error", e)
        return NextResponse.json({status: 500})

    }


}