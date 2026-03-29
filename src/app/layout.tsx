import type { Metadata } from "next";
import "./style.scss";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ssr-dark-mode-example",
  description:
    "Educational sample code for dark mode with Next.js and Bootstrap",
};

const darkModeInitScript = `
  let currentTheme = "auto";
  const storedTheme = localStorage.getItem("theme");
  if (["dark", "light"].includes(storedTheme)) {
    currentTheme = storedTheme;
  }

  if (currentTheme === "auto") {
    document.documentElement.setAttribute(
      "data-bs-theme",
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light",
    );
  } else {
    document.documentElement.setAttribute("data-bs-theme", currentTheme);
  }
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: darkModeInitScript }}
        ></script>
      </head>
      <body>
        <Script src="/dark-mode.js" strategy="beforeInteractive" />
        {children}
      </body>
    </html>
  );
}
