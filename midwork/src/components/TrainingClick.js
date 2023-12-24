import React, { useState,useRef,useEffect,useContext } from 'react';
import { Link } from 'react-router-dom';
import { Data } from '../App';
function TrainingClick() {
    const{parg}=useContext(Data);
    const {cart,setcart}=useContext(Data)
    const handleonclick=()=>{
      setcart(cart+1)
    }    
    const [Training, setTraining] = useState([
        {
          id:"1" ,
          name: "travel sweatshirt",
          image: "https://shop.realmadrid.com/cdn/shop/files/RMCFMS0223-02_720x.jpg?v=1686657209",
          price: "90$",
        },
        {
          id: 2,
          name: "Training Shirt 23/24",
          image: "https://shop.realmadrid.com/cdn/shop/files/RMCFMT0247-02_720x.jpg?v=1690818135",
          price: "45$",
        },
        {
          id: 3,
          name: "travel pant",
          image: "https://shop.realmadrid.com/cdn/shop/files/RMCFMP0152-02_720x.jpg?v=1686656494",
          price: "80$",
        },
        {
          id: 4,
          name: "training 23/24 polo navy",
          image: "https://shop.realmadrid.com/cdn/shop/files/RMCFMG0079-02_720x.jpg?v=1687360602",
          price: "50$",
        },
        {
          id: 5,
          name: "Zip Hoodie",
          image: "https://shop.realmadrid.com/cdn/shop/files/RMCFMS0222-05_720x.jpg?v=1686313933",
          price: "140$",
        },
        {
          id: 6,
          name: "Windbreaker 23/24",
          image: "https://shop.realmadrid.com/cdn/shop/files/RMCFMJ0099-02_720x.jpg?v=1693218003",
          price: "80$",
        },
        {
          id: 7,
          name: "Training Short",
          image: "https://shop.realmadrid.com/cdn/shop/files/RMCFMP0158-02_720x.jpg?v=1687424005",
          price: "75$",
        },
        {
          id: 8,
          name: "training tracksuit",
          image: "https://shop.realmadrid.com/cdn/shop/files/RMCFYS0050-03_720x.jpg?v=1687424570",
          price: "75$",
        },
        {
          id: 9,
          name: "Stripes cap",
          image: "https://shop.realmadrid.com/cdn/shop/products/RMCFMH0073-02_720x.jpg?v=1685973669",
          price: "23$",
        },
        {
          id: 10,
          name: "Blue backpack",
          image: "https://shop.realmadrid.com/cdn/shop/products/RMCFBG0018-02_720x.jpg?v=1685973632",
          price: "45$",
        },
        {
          id: 11,
          name: "Basketball warmup 23/24",
          image: "https://shop.realmadrid.com/cdn/shop/files/RMCFMS0212-2_360x.jpg?v=1692021046",
          price: "80$",
        },
        {
          id: 12,
          name: "Basketball warmup t-shirt 23/24",
          image: "https://shop.realmadrid.com/cdn/shop/files/RMCFMS0212-2_360x.jpg?v=1692021046",
          price: "50$",
        },
        {
          id: 13,
          name: "Captain Armband",
          image: "https://shop.realmadrid.com/cdn/shop/products/RMCFEQ0070-brazo_0c454f31-f70c-44b5-940a-7becaf7eea8c_720x.jpg?v=1691486334",
          price: "15$",
        },
        {
          id: 14,
          name: "Training winter set",
          image: "https://shop.realmadrid.com/cdn/shop/files/RMCFMJ0105-02_720x.jpg?v=1694537838",
          price: "85$",
        },
        {
          id: 15,
          name: "training all weather",
          image: "https://shop.realmadrid.com/cdn/shop/files/RMCFMJ0104-03_720x.jpg?v=1693215592",
          price: "100$",
        },
        {
          id: 16,
          name: "ucl tarining shirt",
          image: "https://shop.realmadrid.com/cdn/shop/products/RMCFMT0254-02_720x.jpg?v=1691153313",
          price: "80$",
        },
          ]);
          const myRef = useRef(null);

          const handleClick = () => {
            myRef.current.style.backgroundColor = 'blue'; // Change the background color
          };

          // Example of a side effect when the "Add to Cart" button is clicked
          useEffect(() => {
            // Perform some action when the "Add to Cart" button is clicked
            // For example, you can log the contents of the cart whenever it changes
            alert("Item Added To Cart", cart);
          }, [cart]); // Dependency array includes 'cart', so the effect runs when 'cart' changes
        

        
  return (
    <div ref={myRef}>    
    <div className="container">
      <h1 className="text-center mt-4 mb-4" style={{textAlign:"center", margin:"auto"} }>Training Products</h1>
      <div className="row">
        {Training.map((product) => (
          <div className="col-md-3" key={product.id}>
            <div className="card mb-3 " style={{width:"100%",  justifyContent:"space-between",height:"90%"}}>
              <img
                src={product.image}
                alt={product.name}
                className="card-img-top img-fluid" // Added 'img-fluid' class for responsive images
                style={{ width: '250px', height: '250px',textAlign:"center" }} // Adjust width and height here
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <hr></hr>
                <p className="card-text" style={{textAlign:"center",margin:"auto"}}><strong>{parg}</strong>  {product.price}</p><hr></hr>
                
                  <button onClick={(handleonclick)}  className="btn btn-primary" style={{ width: "70%", margin: "auto", backgroundColor: "red", color: "white", border: "none", marginTop: "auto" }}>Add to Cart</button>      
              </div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleClick}>Change Background Color</button>
      
      </div>
    </div>
  );
}

export default TrainingClick;