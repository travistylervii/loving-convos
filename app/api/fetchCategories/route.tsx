import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {

    const supabase = createServerComponentClient({cookies})

    try {

        const {data, error} = await supabase.from('categories').select()

        if(error) {
            console.log(error)
            throw Error()
        }

        return NextResponse.json({status: 200, data})
    
    } catch(e) {
        return NextResponse.json({status: 500})
    }




}