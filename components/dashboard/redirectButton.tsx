"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"


//interface RedirectButtonProps extends React.HTMLAttributes<HTMLDivElement> {}

export function RedirectButton({ className, ...props }) {

   // const router = useRouter()
    const path = props.path
    const text = props.text
    return (
        <Link
        href={path}
        className={cn("relative inline-flex h-8 items-center rounded-md border border-transparent bg-brand-500 px-6 py-1 text-sm font-medium text-white hover:bg-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2", className)}
        >
        {text}
        </Link>
    )
  }
  