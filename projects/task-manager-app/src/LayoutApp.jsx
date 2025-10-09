import React from 'react'
import NavbarApp from './components/NavbarApp.jsx'
import ContentApp from './components/ContentApp.jsx'
import FooterApp from './components/FooterApp.jsx'
export default function LayoutApp() {
  return (
    <div className='w-full min-h-screen flex flex-col'>
      <NavbarApp />
      <ContentApp />
      <FooterApp />
    </div>
  )
}
