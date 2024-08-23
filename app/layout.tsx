import { GeistSans } from "geist/font/sans";
import "./globals.css";
import AuthButton from "@/components/auth/auth-button";
import Link from "next/link";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Tournament Planner",
  description: "Plan freestyle tournaments with ease",
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
            <div className="flex gap-4">
              <Link href="/">Tournament Planner</Link>
              <Link href="/tournaments">Tournaments</Link>
            </div>
            <AuthButton />
          </header>

          {children}
        </main>
      </body>
    </html>
  );
}
