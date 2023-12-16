import React from 'react'
import DropMenu from './DropMenu'
import MainContent from './MainContent'
import Aboutus from './Aboutus'
import Collections from './Collections'
import Kits from './Kits'
import Bags from './Bags'
import Navbar from './Navbar'
import Header from './Header'

function Home() {
  return (
    <div>
  <Header />
        <Navbar />
        <DropMenu />
        
    <MainContent/>
    <Aboutus/>
    <Collections/>
   
    <Kits/>

    <Bags/> 
    </div>
    
  )
}

export default Home