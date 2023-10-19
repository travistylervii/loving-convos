import { supabaseServerClient } from "@/lib/supabase/supabaseServer";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {

    const supabase = supabaseServerClient()

    try {

        const {data, error} = await supabase
            .from('categories')
            .select()

        if(error) {
            console.log(error)
            throw Error()
        }

        return NextResponse.json({status: 200, data})
    
    } catch(e) {
        return NextResponse.json({status: 500})
    }




}