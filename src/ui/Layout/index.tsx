import React, { ReactNode, Fragment } from "react";
import { Header, Footer, SeoHead, SeoHeadProps } from "@/app/components";

interface LayoutProps {
  seoProps: SeoHeadProps;
  children?: ReactNode;
}

export function Layout({ children, seoProps }: LayoutProps) {
  return (
    <Fragment>
      <SeoHead {...seoProps} />
      <main className="bg-white min-h-screen">
        <Header />
        {children}
        <Footer />
      </main>
      <style global jsx>{`
        img {
          pointer-events: none;
        }
      `}</style>
    </Fragment>
  );
}
