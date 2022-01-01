import React, { ReactNode } from "react";
import { SeoHead, SeoHeadProps } from "@/app/components";
import { GonzuFooter } from "@/app/entities/gonzu/ui/Footer";
import { GonzuHeader } from "@/app/entities/gonzu/ui/Header";
import { GonzuBodyWrapper } from "@/app/entities/gonzu/ui/BodyWrapper";
import { DarkModeProvider } from "@/app/entities/gonzu/components/Providers";

interface BodyContentProps extends React.ComponentProps<"div"> {}

const BodyContent = ({ children, ...props }: BodyContentProps) => {
  return (
    <div {...props} className="pt-4">
      {children}
    </div>
  );
};

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
        <BodyContent>{children}</BodyContent>
        <GonzuFooter />
      </GonzuBodyWrapper>
      <DarkModeProvider />
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
