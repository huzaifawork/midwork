import React from 'react'
import DropMenu from './DropMenu'
import MainContent from './MainContent'
import Aboutus from './Aboutus'
import Collections from './Collections'
import Kits from './Kits'
import Bags from './Bags'

function Home() {
  return (
    <div>

        
    <MainContent/>
    <Aboutus/>
    <Collections/>
   
    <Kits/>

    <Bags/> 
    </div>
    
  )
}

export default Home