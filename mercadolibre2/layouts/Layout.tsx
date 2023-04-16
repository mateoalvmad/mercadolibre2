import { Header } from '@/components/Header'
import React from 'react'

interface LayoutProps {
  children: JSX.Element;
}

const Layout = ({children}:LayoutProps) => {
  return (
    <div>
      <Header/> 
      <main>
        {children}
      </main>
    </div>
  )
}

export {Layout}