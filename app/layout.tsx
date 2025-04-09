import type { Metadata } from "next";
import "@fontsource/cormorant-infant/300.css";
import "@fontsource/cormorant-infant/400.css";
import "@fontsource/cormorant-infant/500.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "GUARDS Autohaus | Luxury Car Consulting",
  description: "Premium automotive consulting services for discerning clients",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
