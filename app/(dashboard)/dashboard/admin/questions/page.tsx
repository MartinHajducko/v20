/* import { redirect } from "next/navigation"

import { getCurrentUser } from "@/lib/session"
import { authOptions } from "@/lib/auth"
import { stripe } from "@/lib/stripe"
import { getUserSubscriptionPlan as getUserSubscriptionPlan } from "@/lib/subscription"
import { Card } from "@/ui/card" */
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { BillingForm } from "@/components/dashboard/billing-form"
import { Newcard } from "@/ui/newcard"

export default async function QuestionsPage() {
  /* const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions.pages.signIn)
  } */

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Manažment otázok"
        text="Vyber školu"
      />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <Newcard path="/dashboard/admin/questions/lfuk" title="UNIVERZITA KOMENSKÉHO" text="Lekárska fakulta UK" num="Bratislava" img="/images/unilogos/lfuk-logo.png" />
      <Newcard path="/dashboard/admin/questions/szu" title="SLOVENSKÁ ZDRAVOTNÍCKA UNIVERZITA" text="Lekárska fakulta" num="Bratislava" img="/images/unilogos/szu-logo.png" />
      <Newcard path="/dashboard/admin/questions/upjs" title="Univerzita Pavla Jozefa Šafárika" text="Lekárska fakulta" num="Košice" img="/images/unilogos/upjs-logo.png" />
      </div>
    </DashboardShell>
  )
}
