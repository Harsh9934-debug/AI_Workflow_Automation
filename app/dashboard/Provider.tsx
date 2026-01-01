import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

function DashboardProvider({ children }: any) {
    return (
        <SidebarProvider>
            <SidebarTrigger />
            {children}  
        </SidebarProvider>

    )
}

export default DashboardProvider