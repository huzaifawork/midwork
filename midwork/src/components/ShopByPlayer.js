import React, { useState } from 'react'

function ShopByPlayer() {
    const [player, setplayer] = useState([
        { name:"Courto-1",
        img:"https://shop.realmadrid.com/cdn/shop/files/courtois-shopbyplayer_2048x.png?v=1686665636"
    },
        { name:"Lunin - 13",
        img:"https://shop.realmadrid.com/cdn/shop/files/lunin-shopbyplayer_2048x.png?v=1686665701"
    },
        { name:"Arriza-25",
        img:"https://shop.realmadrid.com/cdn/shop/files/KEPA_GHOST_2048x.png?v=1692192002"
    },
        { name:"Carva-2",
        img:"https://shop.realmadrid.com/cdn/shop/files/carvajal-shop_2048x.png?v=1686746403"
    },
        { name:"Militiao-3",
        img:"https://shop.realmadrid.com/cdn/shop/files/militao-shop_2048x.png?v=1686746498"
    },
        { name:"Alaba - 4",
        img:"https://shop.realmadrid.com/cdn/shop/files/alaba-shop_2048x.png?v=1686746328"
    },
        { name:"Bella - 5",
        img:"https://shop.realmadrid.com/cdn/shop/files/shop-bellingham_2048x.png?v=1686836062"
    },
        { name:"Nacho - 6",
        img:"https://shop.realmadrid.com/cdn/shop/files/nacho-shop_2048x.png?v=1686746571"
    },
        { name:"Vini jr - 7",
        img:"https://shop.realmadrid.com/cdn/shop/files/vini-shop_2048x.png?v=1686746915"
    },
        { name:"Rudig-22",
        img:"https://shop.realmadrid.com/cdn/shop/files/rudiger-shop_2048x.png?v=1686746747"
    },
        { name:"Mendy-23",
        img:"https://shop.realmadrid.com/cdn/shop/files/f-mendy-shopbyplayer_2048x.png?v=1686666244"
    },
        { name:"Kroos - 8",
        img:"https://shop.realmadrid.com/cdn/shop/files/kroos-shop_2048x.png?v=1686746435"
    },
        { name:"Modric-10",
        img:"https://shop.realmadrid.com/cdn/shop/files/modric-shop_2048x.png?v=1686746538"
    },
        { name:"Rodrigo-11",
        img:"https://shop.realmadrid.com/cdn/shop/files/rodrygo-shop_2048x.png?v=1686746691"
    },
        { name:"Valve-15",
        img:"https://shop.realmadrid.com/cdn/shop/files/valverde-shop_2048x.png?v=1686746874"
    },
        { name:"Lucas V-17",
        img:"https://shop.realmadrid.com/cdn/shop/files/lucas-v-shopbyplayer_2048x.png?v=1686666383"
    },
        { name:"Cama-12",
        img:"https://shop.realmadrid.com/cdn/shop/files/camavinga-shop_2048x.png?v=1686746370"
    },
])
  return (
    <div>
    <div className='container'></div>
        <div className="row">
        {player.map((player) => (

          <div className="col-md-3 " >
          <h2 style={{color:"black"}}> {player.name}</h2>
            <div className=" mb-3 " style={{width:"100%",  justifyContent:"space-between",height:"90%"}}>
              <img
                src={player.img}
                alt=""
                className="img-top img-fluid" // Added 'img-fluid' class for responsive images
                style={{ width: '250px', height: '250px',textAlign:"center" }} // Adjust width and height here
              />
              
            </div>
          </div>
        ))}  
    </div>
    </div>
  )
}

export default ShopByPlayer