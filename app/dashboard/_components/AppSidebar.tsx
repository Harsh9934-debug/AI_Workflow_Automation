"use client"

import { Calendar, Command, Home, Inbox, Search, Settings, ShieldCheck, Zap } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from "@/components/ui/sidebar"
import { useUser, UserButton } from "@clerk/nextjs"

// Menu items.
const items = [
    {
        title: "Home",
        url: "#",
        icon: Home,
    },
    {
        title: "Inbox",
        url: "#",
        icon: Inbox,
    },
    {
        title: "Calendar",
        url: "#",
        icon: Calendar,
    },
    {
        title: "Search",
        url: "#",
        icon: Search,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
]

export function AppSidebar() {
    const { user } = useUser()
    const GetUserDetail = useQuery(api.users.getUser, { email: user?.primaryEmailAddress?.emailAddress ?? "" })

    return (
        <Sidebar collapsible="icon">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <a href="#">
                                <div className="bg-primary text-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                                    <Command className="size-4" />
                                </div>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-semibold">Workflow AI</span>
                                    <span className="truncate text-xs">Enterprise</span>
                                </div>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild tooltip={item.title}>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <div className="p-2">
                    <div className="bg-gradient-to-r from-sidebar-accent/50 to-sidebar-accent/30 rounded-lg p-4 border border-sidebar-border/50 flex flex-col gap-3 shadow-sm">
                        <div className="flex items-center gap-2">
                            <div className="bg-primary/15 p-1.5 rounded-md text-primary ring-1 ring-primary/10">
                                <Zap className="size-4 fill-primary/20" />
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <span className="text-xs font-semibold leading-none">Available Credits</span>
                                <span className="text-[10px] text-muted-foreground font-medium">
                                    {GetUserDetail?.token ?? 0} tokens remaining
                                </span>
                            </div>
                        </div>

                        <Button className="w-full gap-2 shadow-sm" size="sm" variant="default">
                            <ShieldCheck className="size-3.5" />
                            Upgrade to Unlimited
                        </Button>
                    </div>
                </div>

                <div className="flex items-center gap-4 p-4 border-t border-sidebar-border/50">
                    <UserButton
                        appearance={{
                            elements: {
                                userButtonAvatarBox: "w-9 h-9 border border-sidebar-border"
                            }
                        }}
                    />
                    <div className="flex flex-col flex-1 min-w-0">
                        <span className="text-sm font-medium leading-none truncate">{user?.fullName}</span>
                        <span className="text-xs text-muted-foreground truncate mt-1">{user?.primaryEmailAddress?.emailAddress}</span>
                    </div>
                </div>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}