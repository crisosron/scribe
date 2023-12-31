import SidebarContextProvider from "@/lib/contexts/sidebar-context";
import "./globals.css";
import { Open_Sans as OpenSans } from "next/font/google";
import GlobalContextProvider from "@/lib/contexts/global-context";

const font = OpenSans({ subsets: ["latin"] });

export const metadata = {
  title: "Scribe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GlobalContextProvider>
      <SidebarContextProvider>
        <html lang="en">
          <body className={font.className}>{children}</body>
        </html>
      </SidebarContextProvider>
    </GlobalContextProvider>
  );
}
