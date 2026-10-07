import Navbar from "@/components/layout/Navbar";
import { WorkoutProvider } from "@/context/WorkoutContext";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
    title: "Fit Log",
    description: "Workout Library and Planning Application",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={cn("font-sans", geist.variable)}>
            <body>
                <WorkoutProvider>
                    <Navbar />
                    {children}
                    <Toaster position="bottom-right" />
                </WorkoutProvider>
            </body>
        </html>
    );
}
