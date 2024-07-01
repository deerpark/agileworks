import "gs-awds/globals.css";
import { ThemeProvider } from "@components/provider";
import {
  GithubLogo,
  List,
  MoonStars,
  Rainbow,
  Sun,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "gs-awds";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="relative flex min-h-screen flex-col bg-background">
          <ThemeProvider enableSystem attribute="class">
            <header className="sticky top-0 z-50 w-full border-b border-border-secondary bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-14 max-w-screen-2xl items-center">
                <div className="mr-4 hidden md:flex">
                  <div className="w-full flex-1 md:w-auto md:flex-none">
                    <Button asChild variant="ghost">
                      <Link
                        href="/"
                        className="mr-6 flex items-center space-x-2 text-content-primary"
                      >
                        <Rainbow size={24} />
                        <span className="hidden text-label1 sm:inline-block">
                          agileworks
                        </span>
                      </Link>
                    </Button>
                  </div>
                  <nav className="flex items-center gap-4 lg:gap-6">
                    <Link
                      href="/docs"
                      className="transition-colors text-label2"
                    >
                      Docs
                    </Link>
                    <Link
                      href="/components"
                      className="transition-colors text-label2"
                    >
                      Components
                    </Link>
                    <Link
                      href="/theme"
                      className="transition-colors text-label2"
                    >
                      Theme
                    </Link>
                    <Link
                      href="/Blocks"
                      className="transition-colors text-label2"
                    >
                      Blocks
                    </Link>
                  </nav>
                </div>
                <Button className="md:hidden">
                  <List size={20} />
                </Button>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                  <Button
                    variant="outline"
                    className="inline-flex items-center whitespace-nowrap relative h-8 w-full justify-start rounded-[0.5rem] sm:pr-12 md:w-40 lg:w-64"
                  >
                    <span className="hidden lg:inline-flex">
                      Search documentation...
                    </span>
                    <span className="inline-flex lg:hidden">Search...</span>
                    <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                      <span className="text-xs">⌘</span>K
                    </kbd>
                  </Button>
                </div>
                <nav className="flex items-center">
                  <Button
                    asChild
                    className="inline-flex items-center justify-center h-9 py-2 w-9 px-0"
                  >
                    <a
                      href="https://github.com/deerpark/agileworks"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <GithubLogo
                        size={20}
                        className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                      />
                    </a>
                  </Button>
                  <Button className="inline-flex items-center justify-center h-9 py-2 w-9 px-0">
                    <Sun
                      size={20}
                      className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                    />
                    <MoonStars
                      size={20}
                      className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                    />
                  </Button>
                </nav>
              </div>
            </header>
            <div className="flex-1">
              <div className="border-b">{children}</div>
            </div>
            <footer className="py-6 md:px-8 md:py-0">
              <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
                  Built by{" "}
                  <a
                    href="https://twitter.com/shadcn"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium underline underline-offset-4"
                  >
                    shadcn
                  </a>
                  . The source code is available on{" "}
                  <a
                    href="https://github.com/deerpark/agileworks"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium underline underline-offset-4"
                  >
                    GitHub
                  </a>
                  .
                </p>
              </div>
            </footer>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
