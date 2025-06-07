import { SectionCards } from "@/features/dashboard/home/components/section-cards";
import { AppSidebar } from "@/shared/components/sidebar";
import { SiteHeader } from "@/shared/components/site-header";
import { SidebarInset, SidebarProvider } from "@/shared/components/ui/sidebar";
import { SalesPerDayChart } from "./components/sales-per-day-chart";
import { ClientsTable } from "./components/clients-table";
import { Button } from "@/shared/components/ui/button";

export function DashboardHomePage() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2 space-y-4">
            <div className="flex flex-col gap-4 mt-4 md:mt-6 md:gap-6">
              <SectionCards />
            </div>
            <div className="flex flex-col md:gap-6">
              <SalesPerDayChart />
            </div>
            <div className="flex flex-col md:gap-6">
              <Button className="w-fit mx-6 self-end">Adicionar cliente</Button>
              <ClientsTable />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
