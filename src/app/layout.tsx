import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const roobert = localFont({
  src: "./fonts/Roobert.woff2",
  variable: "--font-roobert",
  weight: "400 800",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clerk Auth Test",
  description: "Testing Clerk sign-in / sign-up flows",
};

const marketerAppearance = {
  options: {
    logoImageUrl: "/marketer-logo.svg",
    logoPlacement: "inside" as const,
  },
  variables: {
    colorPrimary: "#11271f",
    colorBackground: "#ffffff",
    colorText: "#11271f",
    colorTextSecondary: "#4b5563",
    colorInputBackground: "#ffffff",
    colorInputText: "#11271f",
    colorNeutral: "#11271f",
    borderRadius: "10px",
    fontFamily: 'roobert, "Inter", system-ui, -apple-system, sans-serif',
    fontSize: "15px",
  },
  elements: {
    rootBox: "w-full",
    card: "shadow-none border border-black/10 rounded-2xl",
    headerTitle: "text-2xl font-semibold tracking-tight",
    headerSubtitle: "text-[#4b5563]",
    socialButtonsBlockButton:
      "border border-black/10 hover:bg-black/[0.02] rounded-lg",
    socialButtonsBlockButtonText: "font-medium",
    dividerLine: "bg-black/10",
    dividerText: "text-[#4b5563]",
    formFieldLabel: "font-medium",
    formFieldInput:
      "border border-black/10 rounded-lg focus:border-[#11271f] focus:ring-2 focus:ring-[#11271f]/20",
    formButtonPrimary:
      "bg-[#11271f] hover:bg-[#1d4334] text-white rounded-lg font-medium shadow-none normal-case tracking-normal",
    footerActionLink: "text-[#11271f] hover:text-[#1d4334] font-medium",
    footer: "bg-transparent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={marketerAppearance}>
      <html
        lang="en"
        className={`${roobert.variable} ${geistMono.variable} h-full antialiased`}
      >
        <body className="min-h-full flex flex-col font-[family-name:var(--font-roobert)]">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
