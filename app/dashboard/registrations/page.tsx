"use client"

import { useState, useEffect } from "react"
import { format } from "date-fns"
import { FileDown, Loader2 } from "lucide-react"
import type { FreeOrder, PaidOrder } from "@/lib/types"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"

import { getFreeRegistrations, getPaidRegistrations } from "@/app/action"

export default function RegistrationsPage() {
  const [freeOrders, setFreeOrders] = useState<FreeOrder[]>([])
  const [paidOrders, setPaidOrders] = useState<PaidOrder[]>([])
  const [isLoadingFree, setIsLoadingFree] = useState(true)
  const [isLoadingPaid, setIsLoadingPaid] = useState(true)
  const [freeError, setFreeError] = useState<string | null>(null)
  const [paidError, setPaidError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRegistrations = async () => {
      setIsLoadingFree(true)
      setFreeError(null)
      const freeResult = await getFreeRegistrations()
      if (freeResult.success && freeResult.data) {
        setFreeOrders(freeResult.data)
      } else {
        setFreeError(freeResult.error || "Failed to fetch free registrations")
      }
      setIsLoadingFree(false)

      setIsLoadingPaid(true)
      setPaidError(null)
      const paidResult = await getPaidRegistrations()
      if (paidResult.success && paidResult.data) {
        setPaidOrders(paidResult.data)
      } else {
        setPaidError(paidResult.error || "Failed to fetch paid registrations")
      }
      setIsLoadingPaid(false)
    }

    fetchRegistrations()
  }, [])

  const handleExport = () => {
    alert("Export functionality would be implemented here with proper CSV generation!")
  }

  const getPaymentStatusVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "default"
      case "pending":
        return "secondary"
      case "failed":
        return "destructive"
      case "refunded":
        return "outline"
      default:
        return "secondary"
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Free Registrations Card */}
      <Card className="shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Free Registrations ({freeOrders.length})</CardTitle>
          <Button size="sm" className="h-8 gap-1" onClick={handleExport} disabled={freeOrders.length === 0}>
            <FileDown className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Export</span>
          </Button>
        </CardHeader>
        <CardContent>
          {freeError ? (
            <Alert variant="destructive">
              <AlertDescription>{freeError}</AlertDescription>
            </Alert>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Code Used</TableHead>
                    <TableHead>Registered At</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {isLoadingFree ? (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-8">
                        <Loader2 className="h-6 w-6 animate-spin mx-auto" />
                        <p className="mt-2 text-sm text-muted-foreground">Loading free registrations...</p>
                      </TableCell>
                    </TableRow>
                  ) : freeOrders.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-8">
                        <p className="text-muted-foreground">No free registrations found.</p>
                      </TableCell>
                    </TableRow>
                  ) : (
                    freeOrders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.name}</TableCell>
                        <TableCell>{order.email}</TableCell>
                        <TableCell>{order.phone}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="font-mono">
                            {order.code}
                          </Badge>
                        </TableCell>
                        <TableCell>{format(new Date(order.createdAt), "PPP p")}</TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Paid Registrations Card */}
      <Card className="shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Paid Registrations ({paidOrders.length})</CardTitle>
          <Button size="sm" className="h-8 gap-1" onClick={handleExport} disabled={paidOrders.length === 0}>
            <FileDown className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Export</span>
          </Button>
        </CardHeader>
        <CardContent>
          {paidError ? (
            <Alert variant="destructive">
              <AlertDescription>{paidError}</AlertDescription>
            </Alert>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Registered At</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {isLoadingPaid ? (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-8">
                        <Loader2 className="h-6 w-6 animate-spin mx-auto" />
                        <p className="mt-2 text-sm text-muted-foreground">Loading paid registrations...</p>
                      </TableCell>
                    </TableRow>
                  ) : paidOrders.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-8">
                        <p className="text-muted-foreground">No paid registrations found.</p>
                      </TableCell>
                    </TableRow>
                  ) : (
                    paidOrders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.name}</TableCell>
                        <TableCell>{order.email}</TableCell>
                        <TableCell className="font-mono">
                          $
                          {(order.amount / 100).toLocaleString (undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </TableCell>
                        <TableCell>
                          <Badge variant={getPaymentStatusVariant(order.paymentStatus)}>{order.paymentStatus}</Badge>
                        </TableCell>
                        <TableCell>{format(new Date(order.createdAt), "PPP p")}</TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}