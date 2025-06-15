"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"
import type { DailyRegistration } from "@/lib/types"

interface LineChartProps {
  data: DailyRegistration[]
}

export function LineChartComponent({ data }: LineChartProps) {
  return (
    <div className="h-[300px] w-full">
      <ChartContainer
        config={{
          totalCount: {
            label: "Total Registrations",
            color: "hsl(var(--primary))",
          },
          freeCount: {
            label: "Free Registrations",
            color: "hsl(var(--muted-foreground))",
          },
          paidCount: {
            label: "Paid Registrations",
            color: "hsl(var(--destructive))",
          },
        }}
        className="h-[300px]"
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: 10,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
            <XAxis dataKey="date" stroke="hsl(var(--foreground))" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="hsl(var(--foreground))" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip content={<ChartTooltipContent />} />
            <Line
              type="monotone"
              dataKey="totalCount"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="freeCount"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth={1}
              strokeDasharray="5 5"
            />
            <Line
              type="monotone"
              dataKey="paidCount"
              stroke="hsl(var(--destructive))"
              strokeWidth={1}
              strokeDasharray="5 5"
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  )
}