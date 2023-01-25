"use client"

import React, { useState, useMemo } from "react";
//import { useForm } from "react-hook-form"
import 'katex/dist/katex.min.css'
import MaterialReactTable from 'material-react-table';
import type { MRT_ColumnDef } from 'material-react-table';
import { Box, Stack } from '@mui/material';
import Latex from 'react-latex-next'

//Material-UI Imports
import {
  Button,
  ListItemIcon,
  MenuItem,
  Typography,
  TextField,
} from '@mui/material';

export function EditQuestionsTable(props) {

  interface Question {
    answers: {
      id: number
      questID: number
      text: string
      isCorrect: boolean
      updatedAt: string
    }
    category: string
    createdAt: string
    id: number
    schoolId: number
    text: string
  }

  const data: Question[] = props.data
  console.log(data);
  const columns = useMemo<MRT_ColumnDef<Question>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        size: 50, //small column
      },
      {
        accessorKey: 'text',
        header: 'Otázka/odpoveď',
        size: 500,
        Cell: ({ cell }) => (
          <strong><Latex>{cell.getValue<string>()}</Latex></strong>
        ),
      },
      {
        accessorKey: 'schoolId',
        header: 'ID školy',
      },
      {
        accessorKey: 'category',
        header: 'Kategoria',
      },
      
    ],
    [],
  );
    
    return (
        <>
          <MaterialReactTable
          columns={columns}
          data={data}
          enableExpanding
          //getSubRows={(originalRow) => originalRow.answers} //default, can customize
          muiTableProps={{
            sx: {
              tableLayout: 'fixed',
            },
          }}
          ></MaterialReactTable>
        </>
    )
}