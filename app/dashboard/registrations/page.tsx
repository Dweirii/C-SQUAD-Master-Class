"use client"

import { useState, useEffect, useMemo } from "react"
import { format } from "date-fns"
import type { FreeOrder, PaidOrder, ColumnDefinition } from "@/lib/types"

import { Badge } from "@/components/ui/badge"
import { RegistrationsTableCard } from "@/components/registrations/registrations-table-card"
import {
  getFreeRegistrations,
  getPaidRegistrations,
  getUnpaidRegistrations,
} from "@/app/action" 

export default function RegistrationsPage() {
  const [freeOrders, setFreeOrders] = useState<FreeOrder[]>([])
  const [paidOrders, setPaidOrders] = useState<PaidOrder[]>([])
  const [unpaidOrders, setUnpaidOrders] = useState<PaidOrder[]>([])
  const [isLoadingFree, setIsLoadingFree] = useState(true)
  const [isLoadingPaid, setIsLoadingPaid] = useState(true)
  const [isLoadingUnpaid, setIsLoadingUnpaid] = useState(true)
  const [freeError, setFreeError] = useState<string | null>(null)
  const [paidError, setPaidError] = useState<string | null>(null)
  const [unpaidError, setUnpaidError] = useState<string | null>(null)

  useEffect(() => {
    const fetchAllRegistrations = async () => {
      setIsLoadingFree(true)
      setIsLoadingPaid(true)
      setIsLoadingUnpaid(true)
      setFreeError(null)
      setPaidError(null)
      setUnpaidError(null)

      try {
        const [freeResult, paidResult, unpaidResult] = await Promise.all([
          getFreeRegistrations(),
          getPaidRegistrations(),
          getUnpaidRegistrations(),
        ])

        if (freeResult.success && freeResult.data) setFreeOrders(freeResult.data)
        else setFreeError(freeResult.error || "Unknown error fetching free registrations.")

        if (paidResult.success && paidResult.data) setPaidOrders(paidResult.data)
        else setPaidError(paidResult.error || "Unknown error fetching paid registrations.")

        if (unpaidResult.success && unpaidResult.data) setUnpaidOrders(unpaidResult.data)
        else setUnpaidError(unpaidResult.error || "Unknown error fetching unpaid registrations.")
      } catch (err) {
        const errorMessage = "Unexpected error while fetching registrations."
        setFreeError((prev) => prev || errorMessage)
        setPaidError((prev) => prev || errorMessage)
        setUnpaidError((prev) => prev || errorMessage)
        console.error("Registration fetch error:", err)
      } finally {
        setIsLoadingFree(false)
        setIsLoadingPaid(false)
        setIsLoadingUnpaid(false)
      }
    }

    fetchAllRegistrations()
  }, [])

  const handleExport = <T extends Record<string, any>>(data: T[], type: string) => {
    if (data.length === 0) {
      // Toast notification for no data is handled in RegistrationsTableCard
      return;
    }

    const headers = Object.keys(data[0]).join(",");
    const csvRows = data.map(row =>
      Object.values(row).map(value => {
        const stringValue = String(value);
        if (stringValue.includes(",") || stringValue.includes("\"") || stringValue.includes("\n")) {
          return `"${stringValue.replace(/"/g, "\"\"")}"`;
        }
        return stringValue;
      }).join(",")
    );

    const csvContent = [headers, ...csvRows].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.setAttribute("download", `${type.replace(/\s+/g, "_").toLowerCase()}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url);
  }

  const getPaymentStatusVariant = (status: string): "default" | "secondary" | "destructive" | "outline" => {
    switch (status?.toLowerCase()) {
      case "completed": return "default"
      case "pending": return "secondary"
      case "failed": return "destructive"
      case "refunded": return "outline"
      default: return "secondary"
    }
  }

  const freeOrderColumns: ColumnDefinition<FreeOrder>[] = useMemo(() => [
    { key: "name", header: "Name", cell: (o) => <span className="font-medium">{o.name}</span> },
    { key: "email", header: "Email", cell: (o) => o.email },
    { key: "phone", header: "Phone", cell: (o) => o.phone || "N/A" },
    { key: "code", header: "Code Used", cell: (o) => <Badge variant="outline" className="font-mono text-xs">{o.code}</Badge> },
    { key: "createdAt", header: "Registered At", cell: (o) => format(new Date(o.createdAt), "MMM d, yyyy h:mm a"), headClassName: "text-right", cellClassName: "text-right whitespace-nowrap" },
  ], [])

  const paidOrderColumns: ColumnDefinition<PaidOrder>[] = useMemo(() => [
    { key: "name", header: "Name", cell: (o) => <span className="font-medium">{o.name}</span> },
    { key: "email", header: "Email", cell: (o) => o.email },
    { key: "amount", header: "Amount", cell: (o) => <span className="font-mono">${(o.amount / 100).toFixed(2)}</span>, headClassName: "text-right", cellClassName: "text-right" },
    { key: "paymentStatus", header: "Status", cell: (o) => <Badge variant={getPaymentStatusVariant(o.paymentStatus)} className="text-xs capitalize">{o.paymentStatus}</Badge>, cellClassName: "text-center", headClassName: "text-center" },
    { key: "createdAt", header: "Registered At", cell: (o) => format(new Date(o.createdAt), "MMM d, yyyy h:mm a"), headClassName: "text-right", cellClassName: "text-right whitespace-nowrap" },
  ], [])

  return (
    <div className="container mx-auto py-8 px-4 md:px-6 lg:py-12">
      <header className="mb-8 md:mb-12">
        <h1 className="text-2xl font-bold tracking-tight text-center sm:text-3xl md:text-4xl">
          Event Registrations Overview
        </h1>
      </header>
      <div className="flex flex-col gap-8 md:gap-12">
        <RegistrationsTableCard
          title="Free Registrations"
          data={freeOrders}
          columns={freeOrderColumns}
          isLoading={isLoadingFree}
          error={freeError}
          onExport={(dataToExport) => handleExport(dataToExport, "Free_Registrations")}
          itemCount={freeOrders.length}
          loadingText="Loading free registrations..."
          emptyText="No free registrations found."
        />
        <RegistrationsTableCard
          title="Paid Registrations"
          data={paidOrders}
          columns={paidOrderColumns}
          isLoading={isLoadingPaid}
          error={paidError}
          onExport={(dataToExport) => handleExport(dataToExport, "Paid_Registrations")}
          itemCount={paidOrders.length}
          loadingText="Loading paid registrations..."
          emptyText="No paid registrations found."
        />
        <RegistrationsTableCard
          title="Unpaid/Failed Registrations"
          data={unpaidOrders}
          columns={paidOrderColumns}
          isLoading={isLoadingUnpaid}
          error={unpaidError}
          onExport={(dataToExport) => handleExport(dataToExport, "Unpaid_Registrations")}
          itemCount={unpaidOrders.length}
          loadingText="Loading unpaid/failed registrations..."
          emptyText="No unpaid or failed registrations found."
        />
      </div>
    </div>
  )
}
