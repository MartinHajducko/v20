import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { Card } from "@/ui/card"

export default function DashboardBillingLoading() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Admin panel - [dočasne takto]"
        text="-"
      />
      <div className="grid gap-10">
        <Card.Skeleton />
        <Card.Skeleton />
      </div>
    </DashboardShell>
  )
}
