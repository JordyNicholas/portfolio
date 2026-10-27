import "./globals.css";
import type { Metadata } from "next";
import { soraSans, sourceSans3 } from "./styles/fonts";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Welcome! This is my portfolio.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      className={`${soraSans.variable} ${sourceSans3.variable}`}
    >
      <body>
        <AppRouterCacheProvider>
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
