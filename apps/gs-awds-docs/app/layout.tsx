import "gs-awds/globals.css";
import { ThemeProvider } from "@components/provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <ThemeProvider enableSystem attribute="class">
          <div>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
