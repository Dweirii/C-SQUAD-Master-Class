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
import clsx from "clsx"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const pageTitle = pathname.split("/").pop() || "Dashboard"

  return (
    <SidebarProvider defaultOpen={true} lang="en">
      <div className="flex min-h-screen w-full bg-white" dir="ltr">
        {/* ✅ Sidebar */}
        <Sidebar variant="inset" className="border-r bg-white shadow-sm">
          <SidebarHeader className="px-6 py-4 border-b">
            <h2 className="text-xl font-bold tracking-tight text-sidebar-foreground text-right">C-SQUAD</h2>
          </SidebarHeader>
          <SidebarContent className="px-4 py-6">
            <SidebarMenu className="space-y-2">
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === "/dashboard/overview"}
                  className={clsx(
                    "px-4 py-2 rounded-lg transition-colors",
                    pathname === "/dashboard/overview"
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  <a href="/dashboard/overview">Overview</a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === "/dashboard/registrations"}
                  className={clsx(
                    "px-4 py-2 rounded-lg transition-colors",
                    pathname === "/dashboard/registrations"
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  <a href="/dashboard/registrations">Registrations</a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === "/dashboard/discounts"}
                  className={clsx(
                    "px-4 py-2 rounded-lg transition-colors",
                    pathname === "/dashboard/discounts"
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  <a href="/dashboard/discounts">Discount Codes</a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === "/dashboard/emails"}
                  className={clsx(
                    "px-4 py-2 rounded-lg transition-colors",
                    pathname === "/dashboard/emails"
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  <a href="/dashboard/emails">Emails</a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>

        {/* ✅ Main Layout */}
        <SidebarInset className="flex flex-col w-full">
          <header className="flex h-16 items-center gap-2 border-b bg-white px-6 shadow-sm">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="h-6" />
            <h1 className="text-xl font-semibold tracking-tight">
              {capitalize(pageTitle)}
            </h1>
          </header>
          <main className="flex-1 p-6 bg-white text-right">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}