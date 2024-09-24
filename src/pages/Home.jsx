import { Link } from "react-router-dom";
import pic from '../components/Database/Images/zii.png';
import { useState } from "react";
import nice from '../components/Database/Images/kime.png'
import big from '../components/Database/Images/vivo.png'
import Map from "./Map";
import GetSignedUp from "./GetSignedUp";
import Reviews from "./Reviews";

const Home = () => {

  const [name, setName] = useState(big)

  const handleClick = () => {
    setName(big)
  }

  const handleClick1= () => {
    setName(nice)
  }

  const handleClick2 = () => {
    setName(pic)
  }
 
  return (
    <>
    <div className="much">
    <div className="banner">

      <div className="banner-1">
        <h1 className="h1--home">Step Into Style</h1>
        <p className="banner-text">Explore our wide range of shoes designed for comfort and style. Whether youre looking for athletic shoes or chic sandals, we have something for everyone. Don’t miss out—find your fit today!</p>
        <Link to='/Dashboard' className="banner-btn">Buy Now </Link>
      </div>

      <div className="prod-img">
        <img src={name}
          alt="product-image"
          id="prod-img"
          className="banner-img"
           loading="lazy"
          />
          
      </div>

    </div>

<div className="banner-change">

        <div className="numbers">

          <div className="num1">
            <h4>900K</h4>
            <p>Products Sold</p>
          </div>

          <span className="lini"></span>

          <div className="num2">
            <h4>900K</h4>
            <p>Customers</p>
          </div>

        </div>

        <div className="carousel">
          <div className="card" id="card1" onClick={handleClick}></div>
          <div className="card" id="card2" onClick={handleClick1}></div>
          <div className="card" id="card3" onClick={handleClick2}></div>
        </div>

   </div>

  </div>
    <GetSignedUp /> 
    <Reviews />
    <Map />

    </>
  )
}

export default Home;