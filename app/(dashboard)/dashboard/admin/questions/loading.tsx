import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { Card } from "@/ui/card"

export default function QuestionsLoading() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Manažment otázok"
        text="Vyber školu"
      />
      <div className="grid gap-10">
        <Card.Skeleton />
        <Card.Skeleton />
      </div>
    </DashboardShell>
  )
}
