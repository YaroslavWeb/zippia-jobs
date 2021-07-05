// Wrapper for pages. It contains a header and a footer

import { ReactNode } from 'react'
import Head from 'next/head'

import { AppNavbar } from 'components/app-navbar'
import { AppFooter } from 'components/app-footer'
import { LayoutContainer } from './styles'

interface MainLayoutProps {
  children: ReactNode
  title: string
  subtitle?: string
}

export function BaseLayout({
  children,
  title,
  subtitle = 'Zippia',
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
      <AppNavbar />
      <LayoutContainer>{children}</LayoutContainer>
      <AppFooter />
    </>
  )
}
