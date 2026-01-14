import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import { styled } from "@linaria/react";
import "./globals.css";

import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";

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
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const THEME_COOKIE_NAME = 'theme-preference';
                const DEFAULT_THEME = 'light';
                
                let theme;
                const cookies = document.cookie ? document.cookie.split('; ') : [];
                
                cookies.some((cookiePair) => {
                  const [key, value] = cookiePair.split('=');
                  if (key === THEME_COOKIE_NAME) {
                    theme = value;
                    return true;
                  }
                });
                
                if (!theme) {
                  theme = window.matchMedia('(prefers-color-scheme: dark)').matches
                    ? 'dark'
                    : 'light';
                }
                
                if (!['light', 'dark'].includes(theme)) {
                  theme = DEFAULT_THEME;
                }
                
                document.documentElement.setAttribute('data-theme', theme);
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${lora.variable} ${inter.variable}`}>
        <ThemeProvider>
          <Navbar />
          <Main>{children}</Main>
        </ThemeProvider>
      </body>
    </html>
  );
}

const Main = styled.main`
  @media (max-width: 768px) {
    margin-top: 4rem;
  }

  @media (max-width: 640px) {
    margin-top: 3rem;
  }
`;
