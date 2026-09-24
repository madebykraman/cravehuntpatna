import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Crave Hunt Patna", description: "Find the food worth leaving home for.", metadataBase: new URL("https://cravehuntpatna.vercel.app") };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}