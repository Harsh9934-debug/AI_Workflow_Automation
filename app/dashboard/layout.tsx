
import react from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/app/dashboard/_components/AppSidebar"

function DashboardLayout({ children }: any) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="w-full">
                <SidebarTrigger />
                {children}
            </main>
        </SidebarProvider>
    )
}

export default DashboardLayout