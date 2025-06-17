"use client"

import {
  SidebarProvider,
  Sidebar,
  SidebarTrigger,
  SidebarInset,
  SidebarHeader,
  SidebarContent,
  SidebarMenuItem,
  SidebarMenu,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { usePathname } from "next/navigation"
import { capitalize } from "@/lib/utils"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const pageTitle = pathname.split("/").pop() || "Dashboard"

  return (
    <SidebarProvider defaultOpen={true} lang="en">
      <div className="flex w-full min-h-screen" dir="ltr">
        {/* ✅ Sidebar */}
        <Sidebar variant="inset">
          <SidebarHeader>
            <h2 className="text-lg font-semibold text-sidebar-foreground">C-SQUAD</h2>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/dashboard/overview"}>
                  <a href="/dashboard/overview">
                    <span>Overview</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/dashboard/registrations"}>
                  <a href="/dashboard/registrations">
                    <span>Registrations</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/dashboard/discounts"}>
                  <a href="/dashboard/discounts">
                    <span>Discount Codes</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>

        {/* ✅ Main Layout */}
        <SidebarInset>
          <header className="flex h-16 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <h1 className="text-lg font-semibold md:text-xl">
              {capitalize(pageTitle)}
            </h1>
          </header>
          <main className="flex-1 p-4 text-right">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
