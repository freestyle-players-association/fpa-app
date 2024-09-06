import React from "react";
import { GeistSans } from "geist/font/sans";
import "../globals.css";
import AuthButton from "@/components/auth/auth-button";
import { Link } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Event Planner",
  description: "Plan freestyle events with ease",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  return (
    <html lang={locale} className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <NextIntlClientProvider messages={messages}>
          <main className="min-h-screen flex flex-col items-center">
            <header className="flex w-full justify-between border-2 p-2">
              <div className="flex gap-4">
                <Link href="/">Event Planner</Link>
                <Link href="/events">Events</Link>
              </div>
              <AuthButton />
            </header>
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
