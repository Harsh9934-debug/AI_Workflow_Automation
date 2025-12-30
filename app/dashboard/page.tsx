import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                    <UserButton afterSignOutUrl="/" />
                </div>
            </header>
            <main className="flex-grow p-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-xl font-semibold mb-4">Welcome to your AI Workflow Automation Dashboard</h2>
                        <p className="text-gray-600">
                            Start building your autonomous agents and workflows here.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
