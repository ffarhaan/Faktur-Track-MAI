import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faktur Tracker - MAI (Gudang 2)",
  description: "Tracking faktur dan pengiriman - Gudang MAI",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
