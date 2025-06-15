import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, Users, UserPlus, CreditCard } from "lucide-react"
import { LineChartComponent } from "@/components/dashboard/line-chart"
import { getOverviewData } from "@/app/action"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default async function OverviewPage() {
  const result = await getOverviewData()

  if (!result.success || !result.data) {
    return (
      <Alert variant="destructive">
        <AlertDescription>Failed to load overview data: {result.error || "Unknown error"}</AlertDescription>
      </Alert>
    )
  }

  const { totalSignups, freeRegistrations, paidUsers, totalRevenue, dailyRegistrationsData } = result.data

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Signups</CardTitle>
          <UserPlus className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalSignups.toLocaleString()}</div>
          <p className="text-xs text-muted-foreground">
            {freeRegistrations + paidUsers > 0
              ? `${freeRegistrations} free, ${paidUsers} paid`
              : "No registrations yet"}
          </p>
        </CardContent>
      </Card>
      <Card className="shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Free Registrations</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{freeRegistrations.toLocaleString()}</div>
          <p className="text-xs text-muted-foreground">
            {totalSignups > 0
              ? `${Math.round((freeRegistrations / totalSignups) * 100)}% of total`
              : "No registrations yet"}
          </p>
        </CardContent>
      </Card>
      <Card className="shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Paid Users</CardTitle>
          <CreditCard className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{paidUsers.toLocaleString()}</div>
          <p className="text-xs text-muted-foreground">
            {totalSignups > 0 ? `${Math.round((paidUsers / totalSignups) * 100)}% conversion` : "No registrations yet"}
          </p>
        </CardContent>
      </Card>
      <Card className="shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Revenue</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ${((totalRevenue || 0) / 100).toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </div>
          <p className="text-xs text-muted-foreground">
            {paidUsers > 0
              ? `$${((totalRevenue / paidUsers) / 100).toFixed(2)} avg per user`
              : "No revenue yet"}
          </p>
        </CardContent>
      </Card>

      <Card className="col-span-full shadow-sm">
        <CardHeader>
          <CardTitle>Daily Registrations (Last 7 Days)</CardTitle>
        </CardHeader>
        <CardContent>
          {dailyRegistrationsData.length > 0 ? (
            <LineChartComponent data={dailyRegistrationsData} />
          ) : (
            <div className="flex items-center justify-center h-[300px] text-muted-foreground">
              No registration data available
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}