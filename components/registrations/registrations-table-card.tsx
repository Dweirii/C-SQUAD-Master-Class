"use client"
import { FileDown, Loader2, AlertTriangle } from 'lucide-react'
import type { ColumnDefinition } from "@/lib/types"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { useMemo, useState } from 'react'

interface RegistrationsTableCardProps<T extends { id: string | number }> {
  title: string
  data: T[]
  columns: ColumnDefinition<T>[]
  isLoading: boolean
  error: string | null
  onExport: (data: T[]) => void
  itemCount: number
  loadingText: string
  emptyText: string
}

export function RegistrationsTableCard<T extends { id: string | number }>({
  title,
  data,
  columns,
  isLoading,
  error,
  onExport,
  itemCount,
  loadingText,
  emptyText,
}: RegistrationsTableCardProps<T>) {
  const pageSize = 10
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(data.length / pageSize)

  const paginatedData = useMemo(
    () => data.slice((currentPage - 1) * pageSize, currentPage * pageSize),
    [data, currentPage]
  )

  const handleExportClick = () => {
    if (itemCount > 0 && data.length > 0) {
      onExport(data)
      toast.success(`${title} data exported successfully as CSV.`)
    } else {
      toast.info(`No data to export for ${title}.`)
    }
  }

  const handlePrevious = () => setCurrentPage((p) => Math.max(p - 1, 1))
  const handleNext = () => setCurrentPage((p) => Math.min(p + 1, totalPages))

  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-4">
        <div>
          <CardTitle className="text-lg sm:text-xl font-semibold">{title}</CardTitle>
          <CardDescription>
            {isLoading ? 'Counting...' : `${itemCount} registration(s)`}
          </CardDescription>
        </div>
        <Button
          size="sm"
          variant="outline"
          className="h-9 gap-1.5 text-sm shrink-0"
          onClick={handleExportClick}
          disabled={isLoading || itemCount === 0 || !!error}
        >
          <FileDown className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Export CSV</span>
        </Button>
      </CardHeader>
      <CardContent>
        {error ? (
          <Alert variant="destructive" className="mb-4">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        ) : (
          <>
            <div className="overflow-x-auto rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    {columns.map((col) => (
                      <TableHead key={col.key as string} className={`py-3 px-4 ${col.headClassName || ''}`}>
                        {col.header}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {isLoading ? (
                    <TableRow>
                      <TableCell colSpan={columns.length} className="h-48 text-center">
                        <div className="flex flex-col items-center justify-center gap-2">
                          <Loader2 className="h-8 w-8 animate-spin text-primary" />
                          <p className="text-sm text-muted-foreground">{loadingText}</p>
                        </div>
                      </TableCell>
                    </TableRow>
                  ) : paginatedData.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={columns.length} className="h-48 text-center">
                        <p className="text-muted-foreground">{emptyText}</p>
                      </TableCell>
                    </TableRow>
                  ) : (
                    paginatedData.map((item) => (
                      <TableRow key={item.id} className="hover:bg-muted/50 transition-colors">
                        {columns.map((col) => (
                          <TableCell
                            key={`${item.id}-${col.key as string}`}
                            className={`py-3 px-4 ${col.cellClassName || ''}`}
                          >
                            {col.cell(item)}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>

            {/* Pagination Controls */}
            {data.length > pageSize && (
              <div className="flex items-center justify-between mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handlePrevious}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
                <span className="text-sm text-muted-foreground">
                  Page {currentPage} of {totalPages}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            )}
          </>
        )}
      </CardContent>
    </Card>
  )
}