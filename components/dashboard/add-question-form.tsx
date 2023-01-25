"use client"

import React, { useState } from "react";
//import { useForm } from "react-hook-form"
import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'
import { useRouter } from "next/navigation"
import { Icons } from "@/components/icons"
import { toast } from "@/ui/toast"

export function AddTask(props) {
    
    const category = props.cat
    const schoolId = props.school;

    const [question, setQuest] = useState("")
    
    const [ansA, setansA] = useState("");const [corA, setcorA] = useState(false)
    const [ansB, setansB] = useState("");const [corB, setcorB] = useState(false)
    const [ansC, setansC] = useState("");const [corC, setcorC] = useState(false)
    const [ansD, setansD] = useState("");const [corD, setcorD] = useState(false)
    const [ansE, setansE] = useState("");const [corE, setcorE] = useState(false)
    const [ansF, setansF] = useState("");const [corF, setcorF] = useState(false)
    const [ansG, setansG] = useState("");const [corG, setcorG] = useState(false)
    const [ansH, setansH] = useState("");const [corH, setcorH] = useState(false)
    const [isSaving, setIsSaving] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        console.log(corA, corB, corC, corD, corE, corF, corG, corH)
      };

      const router = useRouter()
    //var Latex = require('react-latex');
    if (category === "---"){ return (<></> )}

    //const [error, setError] = useState("");
    //const [message, setMessage] = useState("");

    
    
    const handleSubmit = async e => {
        e.preventDefault();
        if (category !== "---") {
            // send a request to the server.
            setIsSaving(true)
            const response = {
                schoolId, category, question,
                ansA, ansB, ansC, ansD, ansE, ansF, ansG, ansH,
                corA, corB, corC, corD, corE, corF, corG, corH
            };
            console.log("parsujeme body")
            await fetch(`/api/questions/`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(response),
            });
            setIsSaving(false)

            if (!response) {
                return toast({
                    title: "Chyba.",
                    message: "Otázka sa neuložila. Skús znovu",
                    type: "error",
                })
            }

            router.refresh()
            setQuest("");
            setansA("");setansB("");setansC("");setansD("");setansE("");setansF("");setansG("");setansH("");
            setcorA(false);setcorB(false);setcorC(false);setcorD(false);setcorE(false);setcorF(false);setcorG(false);setcorH(false);
            return toast({
                message: "Otázka sa uložila.",
                type: "success",
            })

        }
    }

    return (
        <>

        <div className="relative block rounded-xl border border-gray-200 p-8 shadow-lg hover:shadow-xl">
            <div className=" mx-auto">

                <div className="flex flex-row">

                    <div className="flex basis-10/12 items-center space-x-5">
                        <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">?</div>
                        <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                            <h2 className="leading-relaxed">Pridaj otázku</h2>
                            <p className="text-sm text-gray-500 font-normal leading-relaxed">Kategória: <strong className="bg-yellow-200 text-gray-800 rounded-full px-2 py-1">{category === "BIO"? "Biológia":"Chémia"}</strong></p>
                        </div>
                    </div>

                    <div className="flex flex-col basis-2/12 pl-2 font-semibold text-md self-end text-gray-700">
                        <h2 className="flex leading-relaxed self-end">Č. otázky: </h2>
                        <input type="number" className="disabled flex py-2 px-2 self-end border focus:ring-gray-500 focus:border-gray-900 w-20 sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"/>
                    </div>
                    
                </div>

                <div className="divide-y divide-gray-200">
                    <form onSubmit={handleSubmit}>
                        <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">

                            {/* Otazka */}
                            <div className="flex flex-col">
                                <label className="leading-loose">Otázka</label>
                                <textarea onChange={(e) => setQuest(e.target.value)} value={question} name="question" rows={3} className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Znenie otázky" />
                            </div>
                            <p className='space-y-4 text-gray-700 text-sm'><Latex>{question}</Latex></p>

                            {/* Odpoved A */}
                            <div className="flex items-center justify-center">
                                <textarea rows={1} name="ans-a" onChange={(e) => setansA(e.target.value)} value={ansA} className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Odpoveď a)" />
                                <input onChange={e => setcorA(e.target.checked)} id="ansA" type="checkbox" className="ml-2 w-6 h-6 text-green-600 border-grey-300 rounded-md focus:ring focus:ring-offset-0 focus:ring-green-200 focus:ring-opacity-50"></input>
                            </div>
                            <p className='space-y-4 text-gray-700 text-sm'><Latex>{ansA?"a) " + ansA:""}</Latex></p>

                            {/* Odpoved B */}
                            <div className="flex items-center justify-center">
                                <textarea rows={1} name="ans-b" onChange={(e) => setansB(e.target.value)} value={ansB} className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Odpoveď b)" />
                                <input onChange={e => setcorB(e.target.checked)} id="ansB" type="checkbox" className="ml-2 w-6 h-6 text-green-600 border-grey-300 rounded-md focus:ring focus:ring-offset-0 focus:ring-green-200 focus:ring-opacity-50"></input>
                            </div>
                            <p className='space-y-4 text-gray-700 text-sm'><Latex>{ansB?"b) " + ansB:""}</Latex></p>

                            {/* Odpoved C */}
                            <div className="flex items-center justify-center">
                                <textarea rows={1} name="ans-c" onChange={(e) => setansC(e.target.value)} value={ansC} className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Odpoveď c)" />
                                <input onChange={e => setcorC(e.target.checked)} id="ansC" type="checkbox" className="ml-2 w-6 h-6 text-green-600 border-grey-300 rounded-md focus:ring focus:ring-offset-0 focus:ring-green-200 focus:ring-opacity-50"></input>
                            </div>
                            <p className='space-y-4 text-gray-700 text-sm'><Latex>{ansC?"c) " + ansC:""}</Latex></p>

                            {/* Odpoved D */}
                            <div className="flex items-center justify-center">
                                <textarea rows={1} name="ans-d" onChange={(e) => setansD(e.target.value)} value={ansD} className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Odpoveď d)" />
                                <input onChange={e => setcorD(e.target.checked)} id="ansD" type="checkbox" className="ml-2 w-6 h-6 text-green-600 border-grey-300 rounded-md focus:ring focus:ring-offset-0 focus:ring-green-200 focus:ring-opacity-50"></input>
                            </div>
                            <p className='space-y-4 text-gray-700 text-sm'><Latex>{ansD?"d) " + ansD:""}</Latex></p>

                            {/* Odpoved E */}
                            <div className="flex items-center justify-center">
                                <textarea rows={1} name="ans-e" onChange={(e) => setansE(e.target.value)} value={ansE} className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Odpoveď e)" />
                                <input onChange={e => setcorE(e.target.checked)} id="ansE" type="checkbox" className="ml-2 w-6 h-6 text-green-600 border-grey-300 rounded-md focus:ring focus:ring-offset-0 focus:ring-green-200 focus:ring-opacity-50"></input>
                            </div>
                            <p className='space-y-4 text-gray-700 text-sm'><Latex>{ansE?"e) " + ansE:""}</Latex></p>

                            {/* Odpoved F */}
                            <div className="flex items-center justify-center">
                                <textarea rows={1} name="ans-f" onChange={(e) => setansF(e.target.value)} value={ansF} className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Odpoveď f)" />
                                <input onChange={e => setcorF(e.target.checked)} id="ansF" type="checkbox" className="ml-2 w-6 h-6 text-green-600 border-grey-300 rounded-md focus:ring focus:ring-offset-0 focus:ring-green-200 focus:ring-opacity-50"></input>
                            </div>
                            <p className='space-y-4 text-gray-700 text-sm'><Latex>{ansF?"f) " + ansF:""}</Latex></p>

                            {/* Odpoved G */}
                            <div className="flex items-center justify-center">
                                <textarea rows={1} name="ans-g" onChange={(e) => setansG(e.target.value)} value={ansG} className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Odpoveď g)" />
                                <input onChange={e => setcorG(e.target.checked)} id="ansG" type="checkbox" className="ml-2 w-6 h-6 text-green-600 border-grey-300 rounded-md focus:ring focus:ring-offset-0 focus:ring-green-200 focus:ring-opacity-50"></input>
                            </div>
                            <p className='space-y-4 text-gray-700 text-sm'><Latex>{ansG?"g) " + ansG:""}</Latex></p>

                            {/* Odpoved H */}
                            <div className="flex items-center justify-center">
                                <textarea rows={1} name="ans-h" onChange={(e) => setansH(e.target.value)} value={ansH} className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Odpoveď h)" />
                                <input onChange={e => setcorH(e.target.checked)} id="ansH" type="checkbox" className="ml-2 w-6 h-6 text-green-600 border-grey-300 rounded-md focus:ring focus:ring-offset-0 focus:ring-green-200 focus:ring-opacity-50"></input>
                            </div>
                            <p className='space-y-4 text-gray-700 text-sm'><Latex>{ansH?"h) " + ansH:""}</Latex></p>

                        </div>
                        <div className="pt-4 flex items-center space-x-4">
                            <button onClick={handleClick} className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none">
                                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg> Check
                            </button>
                            <button 
                            type="submit" 
                            className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
                            >
                            {isSaving && (
                                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                            )}
                            <span>Uložiť</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
    )
  }