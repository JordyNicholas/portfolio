import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Welcome! This is my portfolio.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
