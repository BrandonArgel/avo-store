import React from 'react'
import Header from '@components/Header/Header'
import Footer from '@components/Footer/Footer'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  //Function Component
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
