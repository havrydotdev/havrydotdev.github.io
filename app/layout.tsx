import "./globals.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Havrylenko Ivan",
  description: "My personal website, aka Visual Studio Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
