import {  NextApiRequest, NextApiResponse } from "next"
import { db } from "@/lib/db"
import { withMethods } from "@/lib/api-middlewares/with-methods"

async function handler(req: NextApiRequest, res: NextApiResponse) {
    //console.log("handler")
    if (req.method !== 'POST') {
        //console.log("ak nie je POST request")
        res.status(405).send({ message: 'Only POST requests allowed' })
        return
      }
      let result
      //console.log("ak je POST request")
    const { schoolId, category, question, 
            ansA, ansB, ansC, ansD, ansE, ansF, ansG, ansH,
            corA, corB, corC, corD, corE, corF, corG, corH } = req.body;
    //console.log(req.body)
    try {
        result = await db.question.create({
            data: {
                schoolId: schoolId,
                category: category,
                text: question,
                answers: {
                    createMany: {
                        data: [
                            { text: ansA, isCorrect: corA }, { text: ansB, isCorrect: corB },
                            { text: ansC, isCorrect: corC }, { text: ansD, isCorrect: corD },
                            { text: ansE, isCorrect: corE }, { text: ansF, isCorrect: corF },
                            { text: ansG, isCorrect: corG }, { text: ansH, isCorrect: corH },
                        ],
                    },
                },
            },
            include: {
                answers: true,
            }
        })
        
    return res.json(result)
    } catch (error) {
        console.log(error)
    return res.status(500).end()
    }
    //res.redirect(302, "/dashboard/admin/questions/")
}
export default withMethods(["GET", "POST"], handler)