import { SectionCards } from "@/features/dashboard/home/components/section-cards";
import { AppSidebar } from "@/shared/components/sidebar";
import { SiteHeader } from "@/shared/components/site-header";
import { SidebarInset, SidebarProvider } from "@/shared/components/ui/sidebar";
import { SalesPerDayChart } from "./components/sales-per-day-chart";
import { CustomersTable } from "./components/customers-table";
import { getCustomersAction } from "./actions/get-customers";
import { getTotalSalesPerDay } from "./helpers/statistics";
import { AddCustomerDialog } from "./components/add-customer-dialog";
import { ResetCustomersButton } from "./components/reset-customers";

export async function DashboardHomePage() {
  const customersResponse = await getCustomersAction();

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
              <SectionCards customers={customersResponse.customers} />
            </div>
            <div className="flex flex-col md:gap-6">
              <SalesPerDayChart
                customerStatistics={getTotalSalesPerDay(
                  customersResponse.customers
                )}
              />
            </div>
            <div className="flex flex-col md:gap-6">
              <div className="flex gap-2 mx-6 self-end">
                <ResetCustomersButton />
                <AddCustomerDialog />
              </div>
              <CustomersTable customers={customersResponse.customers} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
