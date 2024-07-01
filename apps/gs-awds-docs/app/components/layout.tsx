import { ScrollArea } from "gs-awds";
import Link from "next/link";

export default function ComponentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container px-6 flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
      <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
        <ScrollArea className="relative overflow-hidden h-full py-6 pr-6 lg:py-8">
          <div className="w-full">
            <div className="pb-4">
              <h3 className="mb-1 rounded-md px-2 py-1 text-label1">
                Getting Started
              </h3>
              <div className="grid grid-flow-row auto-rows-max text-sm">
                <Link
                  href="/introduction"
                  className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                >
                  introduction
                </Link>
              </div>
            </div>
            <div className="pb-4">
              <h3 className="mb-1 rounded-md px-2 py-1 text-label1">
                Components
              </h3>
              <div className="grid grid-flow-row auto-rows-max text-sm">
                <Link
                  href="/button"
                  className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                >
                  Button
                </Link>
              </div>
            </div>
          </div>
        </ScrollArea>
      </aside>
      <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
        <div className="mx-auto w-full min-w-0">{children}</div>
        <div className="hidden text-sm xl:block">
          <div className="sticky top-16 -mt-10 pt-4">
            <ScrollArea className="relative overflow-hidden pb-10">
              <div className="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] py-12">
                <div className="space-y-2">
                  <div>aside</div>
                </div>
              </div>
            </ScrollArea>
          </div>
        </div>
      </main>
    </div>
  );
}
