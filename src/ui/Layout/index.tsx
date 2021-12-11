import React, { ReactNode } from "react";
import { SeoHead, SeoHeadProps } from "@/app/components";
import { GonzuFooter } from "@/app/entities/gonzu/ui/Footer";
import { GonzuHeader } from "@/app/entities/gonzu/ui/Header";
import { GonzuBodyWrapper } from "@/app/entities/gonzu/ui/BodyWrapper";

interface LayoutProps {
  seo: SeoHeadProps;
  children?: ReactNode;
}

export const Layout = ({ children, seo }: LayoutProps) => {
  return (
    <>
      <SeoHead {...seo} />
      <GonzuBodyWrapper>
        <GonzuHeader />
        {children}
        <GonzuFooter />
      </GonzuBodyWrapper>
      <GlobalStyles />
    </>
  );
};

const GlobalStyles = () => {
  return (
    <style global jsx>{`
      img {
        pointer-events: none;
      }
    `}</style>
  );
};
