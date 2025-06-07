import { SectionCards } from "@/features/dashboard/home/components/section-cards";
import { AppSidebar } from "@/shared/components/sidebar";
import { SiteHeader } from "@/shared/components/site-header";
import { SidebarInset, SidebarProvider } from "@/shared/components/ui/sidebar";
import { SalesPerDayChart } from "./components/sales-per-day-chart";

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
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
            </div>
            <div className="flex flex-col gap-4 py-4 md:gap-6">
              <SalesPerDayChart />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
