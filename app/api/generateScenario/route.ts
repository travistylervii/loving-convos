import { NextResponse } from "next/server";
import OpenAI from "openai";

const unhealthySystemPrompt = `Your purpose is to take the user prompt scenario and create a simulated conversation between a couple named "David" and "Emma" using that user prompt as the central topic. The conversation will be an unhealthy / toxic conversation where David and Emma fail to resolve the conflict in a healthy manner. The purpose of this to show the user what a unhealthy couple relationship converation looks like. Make the conversation as real and natural sounding as possible to model a real life scenario. After you simulate the conversation break down into points and summary as to why each scenario is healthy. Return the data exactly like this JSON structure example below but replacing the values with the new data created: 
{
    "convo": [
        {
            "name": "Emma",
            "text": "David, why are you always talking to Alex? Are you hiding something from me?"
        },
        {
            "name": "David",
            "text": "Why are you always so paranoid? I can't even talk to a friend without you getting all suspicious."
        },
        {
            "name": "Emma",
            "text": "You're always on your phone texting them. It feels like you're keeping secrets."
        },
        {
            "name": "David",
            "text": "You're just being overly jealous. You need to trust me more."
        },
        {
            "name": "Emma",
            "text": "Maybe if you weren't so secretive, I wouldn't feel this way."
        },
        {
            "name": "David",
            "text": "I can't deal with your insecurities. You need to figure them out."
        }
    ],
    "breakdown": {
        "points": [
            {
                "pointTitle": "Accusations",
                "pointText": "Emma immediately accuses David of hiding something, leading to a defensive response."
            },
            {
                "pointTitle": "Defensiveness",
                "pointText": "David dismisses Emma's feelings and labels her as paranoid."
            },
            {
                "pointTitle": "Lack of Trust",
                "pointText": "Emma's suspicions suggest a deeper trust issue in their relationship."
            },
            {
                "pointTitle": "Invalidation",
                "pointText": "David invalidates Emma's feelings by labeling them as mere insecurities."
            },
            {
                "pointTitle": "Avoidance",
                "pointText": "Neither party seeks to genuinely understand the root of the issue, leading to further misunderstanding."
            }
        ],
        "summary": "In summary, Emma and David's dialogue exemplifies the pitfalls of unhealthy communication, marked by accusations, defensiveness, and lack of genuine understanding. Their conversation underscores the importance of trust, validation, and open dialogue in nurturing a strong relationship."
    }
}


`
const healthySystemPrompt = `Your purpose is to take the user prompt scenario and create a simulated conversation between a couple named "David" and "Emma" using that user prompt as the central topic. The conversation will be a healthy conversation where David and Emma resolve the conflict in a healthy manner. The purpose of this to show the user what a healthy couple relationship converation looks like. Make the conversation as real and natural sounding as possible to model a real life scenario. After you simulate the conversation break down into points and summary as to why each scenario is healthy. Return the data exactly like this JSON structure example below but replacing the values with the new data created:
{
    "convo": [
        {
            "name": "Emma",
            "text": "David, I've noticed you've been talking to Alex quite frequently. It's making me feel a bit insecure. Can we discuss it?"
        },
        {
            "name": "David",
            "text": "I'm sorry you feel that way, Emma. Alex and I have been working on a project together. I should've communicated that to you."
        },
        {
            "name": "Emma",
            "text": "Thank you for clarifying. I trust you, but sometimes my insecurities get the best of me."
        },
        {
            "name": "David",
            "text": "I understand, Emma. I'll make sure to be more open in the future. Your feelings are important to me."
        },
        {
            "name": "Emma",
            "text": "Thank you, David. I appreciate you being understanding. Let's work on our communication together."
        },
        {
            "name": "David",
            "text": "Absolutely. Trust and understanding are crucial in our relationship. Let's always keep the lines of communication open."
        }
    ],
    "breakdown": {
        "points": [
            {
                "pointTitle": "Open Expression",
                "pointText": "Emma expresses her feelings without placing immediate blame, leading to constructive dialogue."
            },
            {
                "pointTitle": "Transparency",
                "pointText": "David explains the situation and acknowledges the importance of communication."
            },
            {
                "pointTitle": "Acknowledgement",
                "pointText": "Emma acknowledges her own feelings and insecurities, promoting understanding."
            },
            {
                "pointTitle": "Valuing Feelings",
                "pointText": "David emphasizes the importance of Emma's feelings and promises to be more transparent."
            },
            {
                "pointTitle": "Mutual Effort",
                "pointText": "Both parties agree on the importance of open communication and working together to maintain trust."
            }
        ],
        "summary": "In sumamry the breakdown of Emma and David's conversation underscores the principles of effective communication in relationships. Emma's approach, devoid of blame, sets a constructive tone, while David's transparency fosters trust. Their exchange is further enriched by Emma's self-awareness and David's emphasis on valuing feelings. Ultimately, the dialogue exemplifies the mutual effort required to maintain trust and open communication, reminding us that understanding, acknowledgment, and joint endeavor are cornerstones of a robust relationship."
    }
}
`



const openai = new OpenAI({
  apiKey: process.env.OPEN_API_KEY,
});

export async function POST(req: Request, res: Response) {
  
const { prompt } = await req.json();

const scenarioUserPrompt = prompt

//   const scenarioUserPrompt = "David and Emma are fighting about dressing conservativly in public. David doesn't like how Emma dresses, he things she dresses trashy and should dress more conservativly."

  try {

    const chatCompletion1 = await openai.chat.completions.create({  
        model: "gpt-4",
        messages: [
            {
                "role": 'system',
                "content": unhealthySystemPrompt
            },
            {
            role: "user",
            content: scenarioUserPrompt,
            },
        ],
        // temperature: 1,
        // max_tokens: 8000,
        // top_p: 1,
        // frequency_penalty: 0,
        // presence_penalty: 0,
    });

    const unhealthyConvoData = chatCompletion1.choices[0].message.content;

    const chatCompletion2 = await openai.chat.completions.create({  
        model: "gpt-4",
        messages: [
            {
                "role": 'system',
                "content": healthySystemPrompt
            },
            {
            role: "user",
            content: scenarioUserPrompt,
            },
        ],
        // temperature: 1,
        // max_tokens: 8000,
        // top_p: 1,
        // frequency_penalty: 0,
        // presence_penalty: 0,
    });


    const healthyConvoData = chatCompletion2.choices[0].message.content;

    //Create a healthy title and description
    const chatCompletion3 = await openai.chat.completions.create({  
        model: "gpt-4",
        messages: [
            {
                "role": 'system',
                "content": `Create a title (in 3 or 4 words) and description (in 25 words) on the specifics of the conversation and output the data in this JSON structure below. Ignore the breakdown and summary, just focus on the convo. Below is an example of the JSON structure: 
                {
                    "title": 'Impulse Spending',
                    "description: 'In this scenario, David and Emma have a conversation about impulse spending in their relationship'
                }   
                `
            },
            {
            role: "user",
            content: healthyConvoData,
            },
        ],
        // temperature: 1,
        // max_tokens: 8000,
        // top_p: 1,
        // frequency_penalty: 0,
        // presence_penalty: 0,
    });

    if(!chatCompletion3) {
        throw new Error()
    }

    const chatCompletion3Data = chatCompletion3.choices[0].message.content

    if(!chatCompletion3Data) {
        throw new Error()
    }

    const parsedCompletion3 = JSON.parse(chatCompletion3Data)



    const payloadData = {
        scenarioTitle: parsedCompletion3.title,
        scenarioDescription: parsedCompletion3.description,
        healthyConvoData: healthyConvoData,
        unhealthyConvoData: unhealthyConvoData
    }

    return NextResponse.json({ status: 200, data: payloadData });


  } catch (e) {
    return NextResponse.json({ status: 500 });
  } finally {
  }
}
