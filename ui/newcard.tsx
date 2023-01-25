"use client"

import Link from "next/link"
import Image from 'next/image'
/* import { usePathname } from "next/navigation"
import { useRouter } from 'next/router'
import { SidebarNavItem } from "types"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { redirect } from "next/navigation"
import { getCurrentUser } from "@/lib/session"
import { db } from "@/lib/db"
import { authOptions } from "@/lib/auth" */

export function Newcard(props) {

   // const router = useRouter()
    const path = props.path
    const img = props.img
    const title = props.title
    const text = props.text
    const num = props.num
    return (
        <Link
        href={path}
        className="relative block rounded-xl border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-duration: 300ms;"
        >
          <span
            className="absolute right-4 top-4 rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600"
          >
            {num?num:"unset"}
          </span>

          <div className="mt-4 sm:pr-8">
            <Image width={50} height={50} src={img} alt={"logo univerzity " + String(title) + " " + num + " " + text }/>
            <h3 className="mt-4 text-xl font-bold uppercase text-gray-900">{title}</h3>
            <p className="mt-2 hidden text-sm sm:block">{text}</p>
          </div>
        </Link>
    )
  }
  