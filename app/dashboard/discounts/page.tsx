"use client"

import { useState, useEffect } from "react"
import { format } from "date-fns"
import { MoreHorizontal, PlusCircle, Loader2 } from "lucide-react"
import type { DiscountCode } from "@/lib/types"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useToast } from "@/hooks/use-toast"

import { getDiscountCodes, addDiscountCode, deleteDiscountCode } from "@/app/action"

export default function DiscountsPage() {
  const [discountCodes, setDiscountCodes] = useState<DiscountCode[]>([])
  const [newCode, setNewCode] = useState("")
  const [newPercentage, setNewPercentage] = useState<number | string>("")
  const [newOwnerName, setNewOwnerName] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { toast } = useToast()

  useEffect(() => {
    const fetchCodes = async () => {
      setIsLoading(true)
      setError(null)

      const result = await getDiscountCodes()

      if (result.success && result.data) {
        setDiscountCodes(result.data)
      } else {
        setError(result.error || "Failed to fetch discount codes")
      }

      setIsLoading(false)
    }

    fetchCodes()
  }, [])

  const handleAddDiscount = async () => {
    if (!newCode.trim() || !newPercentage || !newOwnerName.trim()) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields",
        variant: "destructive",
      })
      return
    }

    const percentage = Number(newPercentage)
    if (isNaN(percentage) || percentage < 0 || percentage > 100) {
      toast({
        title: "Validation Error",
        description: "Percentage must be between 0 and 100",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    const result = await addDiscountCode({
      code: newCode.trim(),
      percentage,
      ownerName: newOwnerName.trim(),
    })

    if (result.success && result.data) {
      setDiscountCodes((prev) => [result.data as DiscountCode, ...prev])
      setNewCode("")
      setNewPercentage("")
      setNewOwnerName("")
      setIsDialogOpen(false)
      toast({
        title: "Success",
        description: "Discount code added successfully",
      })
    } else {
      toast({
        title: "Error",
        description: result.error || "Failed to add discount code",
        variant: "destructive",
      })
    }

    setIsSubmitting(false)
  }

  const handleDeleteDiscount = async (id: string, code: string) => {
    if (!confirm(`Are you sure you want to delete the discount code "${code}"?`)) {
      return
    }

    const result = await deleteDiscountCode(id)

    if (result.success) {
      setDiscountCodes((prev) => prev.filter((item) => item.id !== id))
      toast({
        title: "Success",
        description: "Discount code deleted successfully",
      })
    } else {
      toast({
        title: "Error",
        description: result.error || "Failed to delete discount code",
        variant: "destructive",
      })
    }
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    )
  }

  return (
    <div className="grid gap-4">
      <Card className="shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Discount Codes</CardTitle>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button size="sm" className="h-8 gap-1">
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Add Discount</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Discount Code</DialogTitle>
                <DialogDescription>Fill in the details for the new discount code.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="code" className="text-right">
                    Code
                  </Label>
                  <Input
                    id="code"
                    value={newCode}
                    onChange={(e) => setNewCode(e.target.value)}
                    className="col-span-3"
                    placeholder="e.g., SUMMER20"
                    disabled={isSubmitting}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="percentage" className="text-right">
                    Percentage (%)
                  </Label>
                  <Input
                    id="percentage"
                    type="number"
                    min="0"
                    max="100"
                    value={newPercentage}
                    onChange={(e) => setNewPercentage(e.target.value)}
                    className="col-span-3"
                    placeholder="e.g., 20"
                    disabled={isSubmitting}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="ownerName" className="text-right">
                    Owner Name
                  </Label>
                  <Input
                    id="ownerName"
                    value={newOwnerName}
                    onChange={(e) => setNewOwnerName(e.target.value)}
                    className="col-span-3"
                    placeholder="e.g., John Doe"
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" onClick={handleAddDiscount} disabled={isSubmitting}>
                  {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Add Discount
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Code</TableHead>
                  <TableHead>Percentage</TableHead>
                  <TableHead>Owner Name</TableHead>
                  <TableHead>Created At</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-8">
                      <Loader2 className="h-6 w-6 animate-spin mx-auto" />
                      <p className="mt-2 text-sm text-muted-foreground">Loading discount codes...</p>
                    </TableCell>
                  </TableRow>
                ) : discountCodes.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-8">
                      <p className="text-muted-foreground">No discount codes found.</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Create your first discount code to get started.
                      </p>
                    </TableCell>
                  </TableRow>
                ) : (
                  discountCodes.map((discount) => (
                    <TableRow key={discount.id}>
                      <TableCell className="font-medium font-mono">{discount.code}</TableCell>
                      <TableCell>{discount.percentage}%</TableCell>
                      <TableCell>{discount.ownerName}</TableCell>
                      <TableCell>{format(new Date(discount.createdAt), "PPP")}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button aria-haspopup="true" size="icon" variant="ghost">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Toggle menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem
                              onClick={() => handleDeleteDiscount(discount.id, discount.code)}
                              className="text-destructive"
                            >
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}