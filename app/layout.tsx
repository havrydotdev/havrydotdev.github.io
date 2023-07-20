import "./globals.css";
import type { Metadata } from "next";
import { sora } from "./fonts";

export const metadata: Metadata = {
  title: "Havrylenko Ivan",
  description: "My website portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sora.className}>{children}</body>
    </html>
  );
}
