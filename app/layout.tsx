import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import ContainerLayout from "@/components/ContainerLayout";
import ToggleCategory from "@/context/ToggleCategory";
import dynamic from "next/dynamic";
import HeroGsap from "@/components/HeroGsap";
export const metadata: Metadata = {
  title: "Mo Is Getting Better",
  description: "Mo Is Getting Better  Every Day ",
};
const ToggleMood = dynamic(() => import("@/context/ToggleMood"));
const josefinSans = Josefin_Sans({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Mo Is Getting Better</title>
        <meta
          name="description"
          content="My Name is Mohamed Elmshlay i'm a Frontend Developer that love to create beautiful and functional websites"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body
        suppressHydrationWarning
        className={`${josefinSans.className} text-black antialiased scroll-smooth`}
      >
        <ToggleMood>
          <ContainerLayout>
            <ToggleCategory>
              <main className="px-10">{children}</main>
            </ToggleCategory>
          </ContainerLayout>
          <HeroGsap />
        </ToggleMood>
      </body>
    </html>
  );
}
