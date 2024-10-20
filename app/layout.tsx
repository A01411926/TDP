"use client";

import localFont from "next/font/local";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    const auth = localStorage.getItem('isAuthenticated');
    if (!auth && pathname !== '/login') {
      router.replace('/login');
    } else {
      setIsAuthenticated(!!auth);
    }
    setIsCheckingAuth(false);
  }, [pathname, router]);

  if (isCheckingAuth) return null;

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
