import { ReactNode } from "react";
import Head from "next/head";

import { LayoutHeader, LayoutContainer, LayoutFooter } from "./styles";

interface MainLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

export function BaseLayout({
  children,
  title,
  subtitle = "Zippia",
}: MainLayoutProps) {
  return (
    <>
      <Head>
        <title>
          {title} | {subtitle}
        </title>
        <meta name="keywords" content="job, jobs, work, vacancy" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutHeader>Header</LayoutHeader>
      <LayoutContainer>{children}</LayoutContainer>
      <LayoutFooter>Footer</LayoutFooter>
    </>
  );
}
