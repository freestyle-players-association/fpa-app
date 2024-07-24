import { GeistSans } from "geist/font/sans";
import "./globals.css";
import AuthButton from "@/components/auth/auth-button";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <main className="min-h-screen flex flex-col items-center">
          <header className="flex w-full justify-between border-2 p-2">
            <h1>Tournament Planner</h1>
            <AuthButton />
          </header>

          {children}
        </main>
      </body>
    </html>
  );
}
