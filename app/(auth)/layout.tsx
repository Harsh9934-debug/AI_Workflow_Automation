import { Hero } from "@/components/ui/helix-hero";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Hero
            title="Welcome to AI Workflow Automation"
            description="Streamline your processes with intelligent automation."
        >
            {children}
        </Hero>
    );
}
