import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
import ScrollToTop from "../../components/ScrollToTop";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohit Mishra | Aspiring Data Scientist Portfolio",
  description: "Portfolio of Mohit Mishra, a B.Tech student and aspiring Data Scientist specializing in Machine Learning and Data Analysis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <link rel="preload" href="/mohit2.jpeg" as="image" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-indigo-500/30`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
        >
          <ScrollToTop />
          <Navbar />
          {children}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function () {
                  const btn = document.querySelector('#darkToggle, #themeToggle, .dark-toggle, .theme-btn');
                  if (!btn) return;

                  const saved = localStorage.getItem('theme');
                  if (saved === 'dark') {
                    document.body.classList.add('dark');
                    document.documentElement.classList.add('dark');
                  } else {
                    document.body.classList.remove('dark');
                    document.documentElement.classList.remove('dark');
                  }

                  btn.addEventListener('click', function () {
                    const isDark = document.body.classList.toggle('dark');
                    document.documentElement.classList.toggle('dark', isDark);
                    localStorage.setItem('theme', isDark ? 'dark' : 'light');
                    btn.textContent = isDark ? '☀️' : '🌙';
                  });

                  btn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
                })();
              `,
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
