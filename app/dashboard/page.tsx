"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { UserdetailContext } from "@/context/UserdetailContext";

export default function DashboardPage() {
    return (
        <UserdetailContext.Provider value={null}>
            <div>
                <h1>Dashboard</h1>
            </div>
        </UserdetailContext.Provider>
    )
}
