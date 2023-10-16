import { NextResponse } from "next/server"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"


export async function POST(req: Request, res: Response) {
    
    const { formData } = await req.json()
    const {title, description, categories, unhealthyconvo, healthyconvo,} = formData

    console.log(categories)
    
    const supabase = createServerComponentClient({cookies})
    
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

        console.log(scenarioData)

        const scenarioId = scenarioData.id
        
        //create category payload. 
        const categoryPayload = categories.map((catId) => {

            return ({
                'scenario_id': scenarioId,
                'category_id': parseInt(catId)
            })

        })

        console.log(categoryPayload)

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