import { redirect } from "next/navigation"

import { getCurrentUser } from "@/lib/session"
import { authOptions } from "@/lib/auth"
//import { UserRole } from "types"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { UserNameForm } from "@/components/dashboard/user-name-form"
import { db } from "@/lib/db"
import { RedirectButton } from "@/components/dashboard/redirectButton"
//import { Card } from "@/ui/card"
//import { Icons } from "@/components/icons"
//import { cn } from "@/lib/utils"



export default async function SettingsPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions.pages.signIn)
  }

  const getUser: object | null = await db.user.findUnique({
    where: {
      id: user.id,
    },
    select: {
      role: true,
    },
  })
  console.log(getUser);

  return (
    <>
    <DashboardShell>
      <DashboardHeader
        heading="Nastavenia"
        text="Manage account and website settings."
      />
      <div className="grid gap-10">
        <UserNameForm user={{ id: user.id, name: user.name }} />
      </div>
      {getUser.role === 'ADMIN' && 
      <div>
      <RedirectButton path='/dashboard/admin' text='Admin Panel'></RedirectButton>
      </div>
      }
      
    </DashboardShell>
    </>
  )
}
