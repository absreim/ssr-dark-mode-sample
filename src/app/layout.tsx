import type { Metadata } from "next";
import "./style.scss";
import Script from "next/script";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "ssr-dark-mode-example",
  description:
    "Educational sample code for dark mode with Next.js and Bootstrap",
};

const cookieStore = await cookies();
const theme = cookieStore.get("theme")?.value ?? "system";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-bs-theme={theme} suppressHydrationWarning>
      <body>
        <Script src="/dark-mode.js" strategy="beforeInteractive" />
        {children}
      </body>
    </html>
  );
}
