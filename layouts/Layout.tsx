import { Header } from '@/components/Header'
import React from 'react'
import {Footer} from '@/components/Footer'

interface LayoutProps {
  children: JSX.Element;
}

const Layout = ({children}:LayoutProps) => {
  return (
    <>
        <Header/>
      <main className='flex flex-col h-full w-full bg-section-background overflow-hidden' >
        {children}
      </main>
    </>
  )
}

export {Layout}