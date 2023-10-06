import React from 'react'
import CardsCont from './CardsCont.js'
function Home() {
  return (
    
   
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="banner1.webp" class="d-block " style={{width:"100%"}} alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="banner1.webp" class="d-block " alt="..." style={{width:"100%"}}/>
    </div>
    <div class="carousel-item">
      <img src="banner1.webp" class="d-block " alt="..."style={{width:"100%"}}/>
    </div>
  </div>
 <CardsCont/>
</div>

    

  )
}

export default Home