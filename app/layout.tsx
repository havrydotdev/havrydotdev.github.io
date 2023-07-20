import "./globals.css";
import type { Metadata } from "next";
import { sora } from "./fonts";

export const metadata: Metadata = {
  title: "Havrylenko Ivan",
  description:
    "My personal website with information about my work and experience",
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
