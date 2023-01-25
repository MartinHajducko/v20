
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { EditQuestionsTable } from "@/components/dashboard/edit-questions-table"
//import { useState } from "react"
import { db } from "@/lib/db"

 export async function queryQuestions()  {
    return await db.question.findMany({
        include: {
            answers: true
        }
    //   where: { 
    //     schoolId: schoolId,
    //     category: category 
    // },
    });
    // return {
    //   props: { feed },
    //   revalidate: 10,
    // };
  }

export default async function QuestionsEditPage() {

    const data = await queryQuestions();
  //const [schoolId, setSchool] = useState("---")
  //const [category, setCat] = useState("---")
//   let data;

//   if(category !== "---" && schoolId !== "---"){
//     data = await getQuestions(schoolId, category);
//   }

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Zoznam otázok"
        text=""
      />
        <EditQuestionsTable data={data}/>
      
    </DashboardShell>
  )
}