"use client"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { AddTask } from "@/components/dashboard/add-question-form"
import { useState } from "react"


export default function SzuPage() {

  const [category, setCat] = useState("---")
  
  return (
    <DashboardShell>
      <DashboardHeader
        heading="SZU"
        text=""
      />
      <div className="grid grid-cols-1 gap-8 mb-10">
        <div className="relative block rounded-xl border border-gray-200 p-8 shadow-md">
          <label className="leading-loose">Vyber kategóriu</label>
          <select onChange={(e) => setCat(e.target.value)} className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Optional" >
            <option>---</option>
            <option  value={"BIO"}>Biológia</option>
            <option  value={"CHEM"}>Chémia</option>
          </select>
        </div>

        <AddTask cat={category} school={2}/>
      </div>
    </DashboardShell>
  )
}