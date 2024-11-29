import type { Metadata } from "next";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import "nextra-theme-docs/style.css";
import { ReactNode } from "react";
import "@/styles/global.css";

export const { viewport } = Head;

export const metadata: Metadata = {
  title: {
    template: "%s - HPL Docs",
    default: "HPL Docs",
  },
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const navbar = (
    <Navbar
      logo={
        <div>
          <b>Homing Pigeon</b> <span style={{ opacity: "60%" }}>Docs</span>
        </div>
      }
    />
  );
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="✦" />
      <body>
        <Layout
          banner={<Banner storageKey="under-development-2024-11-28">Homing Pigeon is under development</Banner>}
          navbar={navbar}
          footer={<Footer />}
          editLink="Edit this page on GitHub"
          docsRepositoryBase="https://github.com/homingpigeonlabs/docs.homingpigeon"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={await getPageMap()}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
