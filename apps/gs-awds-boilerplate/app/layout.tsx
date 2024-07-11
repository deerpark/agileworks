import "gs-awds/globals.css";

import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
import { Logo, UsersIcon } from "@/components/icons";
import { ThemeProvider } from "@/components/provider";

export const metadata = {
  title: "Next.js App Router + NextAuth + Tailwind CSS",
  description:
    "A user admin dashboard configured with Next.js, Postgres, NextAuth, Tailwind CSS, TypeScript, and Prettier.",
};

export default function RootLayout({
  children,
  test,
  search,
}: {
  children: React.ReactNode;
  test: React.ReactNode;
  search: React.ReactNode;
}) {
  console.log(test, search);
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <ThemeProvider enableSystem attribute="class">
          <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
            <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
              <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-[60px] items-center border-b px-5">
                  <Link
                    className="flex items-center gap-2 font-semibold"
                    href="/"
                  >
                    <Logo />
                    <span className="">agileworks</span>
                  </Link>
                </div>
                <div className="flex-1 overflow-auto py-2">
                  <nav className="grid items-start px-4 text-sm font-medium">
                    nav
                  </nav>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40 justify-between lg:justify-end">
                <Link
                  className="flex items-center gap-2 font-semibold lg:hidden"
                  href="/"
                >
                  <Logo />
                  <span className="">ACME</span>
                </Link>
                <UsersIcon />
              </header>
              <div className="">{test}</div>
              <div className="">{search}</div>
              {children}
            </div>
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
