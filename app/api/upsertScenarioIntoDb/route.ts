import { NextResponse } from "next/server"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export const dynamic = 'force-dynamic'

type UpsertPayload = {
    id?: number;
    title: any; 
    description: any; 
    unhealthyconvo: any; 
    healthyconvo: any; 
  }

export async function POST(req: Request, res: Response) {
    
    const {id, title, description, categories, unhealthyconvo, healthyconvo,} = await req.json()
    const supabase = createServerComponentClient({cookies})
    
    let upsertPayload: UpsertPayload = {
        title,
        description,
        unhealthyconvo: JSON.parse(unhealthyconvo),
        healthyconvo: JSON.parse(healthyconvo),
    }

    if(id) {
        upsertPayload.id = parseInt(id)
    }
    
    try {
        
        //Insert scenario into scanarios table
        const {data: scenarioData, error: scenarioError} = await supabase
            .from('scenarios')
            .upsert([upsertPayload],{onConflict: 'id'})
            .select('id')
            .single()
    

        if(scenarioError) {
            console.log(scenarioError)
            throw Error()
        }

        
        //create category payload. 
        const categoryPayload = categories.map((catId: string) => {

            return ({
                'scenario_id': scenarioData.id,
                'category_id': parseInt(catId)
            })

        })

        //delete all old scenario categories in junction table
        const {error: deleteError} = await supabase
            .from('scenarios-categories')
            .delete()
            .eq('scenario_id', scenarioData.id)

            if(deleteError) {
                console.log(deleteError)
                throw Error()
            }

        //Insert scanario id and category ids into junction table
        const {error: juctionError} = await supabase 
            .from('scenarios-categories')
            .insert(categoryPayload)

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