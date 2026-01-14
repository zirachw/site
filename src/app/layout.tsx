import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import { styled } from "@linaria/react";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
export const metadata: Metadata = {
  title: "Razi's Personal Site",
  description: "Lifetime Project :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-color-mode="light">
      <body className={`${lora.variable} ${inter.variable}`}>
        <Main>{children}</Main>
      </body>
    </html>
  );
}

const Main = styled.main`
  @media (max-width: 768px) {
    margin-top: 3rem;
  }

  @media (max-width: 640px) {
    margin-top: 2rem;
  }
`;
