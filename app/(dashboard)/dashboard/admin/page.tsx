
import { Card } from "@/ui/card"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { RedirectButton } from "@/components/dashboard/redirectButton"

export default async function AdminPage() {

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Administrácia"
        text=""
      />
      <div className="grid gap-10">
        
        <Card>
          <Card.Header>
            <Card.Title>Manažment otázok</Card.Title>
          </Card.Header>
          <Card.Content className="space-y-4 pb-6 text-sm">
            <p>
              Pridávanie, úprava/mazanie otázok{" "}
            </p>
            <RedirectButton className="mr-2" path='/dashboard/admin/questions' text='Pridať'></RedirectButton>
            <RedirectButton path='/dashboard/admin/questions/edit' text='Upraviť'></RedirectButton>
          </Card.Content>
        </Card>
      </div>
    </DashboardShell>
  )
}
