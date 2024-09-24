import products from "../components/Database/Database"
import { Link } from "react-router-dom";
import { useState } from "react";
import SearchNavBar from "../SearchNavBar";
import { CartContext } from "../Features/ContextProvider";
import { useContext } from "react";

function Services() {


  const [item , setItem] = useState(products);
    
  const {dispatch} = useContext(CartContext)

   const filteritem = ( name) =>{
   const allproducts = (products.filter(button=>{
   return button.name === name  

   }))
     setItem(allproducts)
   }



  return (
    
    <><SearchNavBar /><div className="services">

      <h1 className='services--h1'>Shop Our Wide Selection of Shoes</h1>

      <div className="linlkis">
        <button className="a--a" onClick={() => setItem(products)}>All Types</button>
        <button className="a--a" onClick={() => filteritem('Nike Boots')}>Formal Shoes</button>
        <button className="a--a" onClick={() => filteritem('Sneakers Air force')}>Drip Shoes</button>
        <Link className="a--a" to='/src/components/Login.jsx'>Purchase</Link>
      </div>


      <div className="services--products">

        {item.map(product => <div className="service--text" key={product.id}>

          <img src={product.img} alt="" className="services-img" />

          
          <p className="product-name">{product.name}</p>
        
          <p className="serve-text">{product.text}</p>

       <div className="services-text-add">

          <div className="services-stars">
            <img src={product.rate} alt="" className="serve-stars"  loading="lazy"/>
            <img src={product.rate} alt="" className="serve-stars"  loading="lazy"/>
            <img src={product.rate} alt="" className="serve-stars"  loading="lazy"/>
          </div>

          <p className="price">${product.price}</p>
       </div>
       <div className="buy">
          <button onClick={() => dispatch({ type: "Add", product:product })} className="services-btn">{product.btn}</button>
        </div>

        </div>

        )}

      </div>
    </div>
     
    </>
  )
}

export default Services;


