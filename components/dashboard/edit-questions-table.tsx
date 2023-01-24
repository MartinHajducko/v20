"use client"

import React, { useState } from "react";
//import { useForm } from "react-hook-form"
import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'
import { db } from "@/lib/db";
import { useRouter } from "next/navigation"
import { Icons } from "@/components/icons"
import Table from 'react-tailwind-table';
import 'react-tailwind-table/dist/index.css';
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    ChevronDoubleRightIcon,
    ChevronDoubleLeftIcon
  } from "@heroicons/react/solid";
  import { Button, PageButton } from "./Table/Button";
  import { SortDownIcon, SortUpIcon, SortIcon } from "./Table/Icon";
  import { classNames } from "./Table/Utils";
import questions from "pages/api/questions";

export function EditQuestionsTable(props) {

    const [schoolId, setSchool] = useState("---")
    const [category, setCat] = useState("---")
    const data = props.data
    console.log(data);

    //if(category === "---" || schoolId === "---"){return(<></>)}
    let inc = 0;
    // const getData = () => [
    //     data.map((question) => (
    //         {
    //            index: {inc++},
    //            id: questions.id 
    //         }
    //     ))   
    // ]
    const columns = React.useMemo(
        () => [
          {
            use: "ID otázky",
            field: "id"
          },
          {
            use: "ID školy",
            field: "schoolId"
          },
          {
            use: "Kategoria",
            field: "category",
          },
          {
            use: "Obsah otázky",
            field: "text",
          },
          {
            use: "Vytvorená",
            field: "createdAt",
          }
        ],
        []
      );
    return (
        <>
        {/* <Table columns={columns} data={data} /> */}
        <div>
          {data.map((question) => {
            return <div key={question.id}>
              <h1>{question.text}</h1>
              <h2>{question.category}</h2>
              <h3>{question.schoolId}</h3>
              <ul>
              {question.answers.map((answer, index) => {
                <li key={index}>{answer.text}</li>
              })}</ul>
            </div>
          })}
        </div>
        </>
    )
}