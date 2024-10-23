import { useState } from 'react';
//  import now2 from '../components/Database/Images/now1 - Copy.png';
import one from '../components/Database/Images/nhasi.png';
import two from '../components/Database/Images/nhasi1.png';
import three from '../components/Database/Images/nhasi3.png';
import plus from '../components/Database/Images/plus_5345954.png';
import { Link } from 'react-router-dom';

function GetSignedUp() {
  
  const [shoe, setShoe] = useState([
    {
      id: '09',
      img: two,
      text: "Balenciaga One",
      smallText: "Balenciaga One is known for its unique, chunky design and luxurious comfort. A top choice for sneakerheads seeking a bold statement in style."
    },
    {
      id: '25',
      img: one,
      text: "Sock Boots",
      smallText: "Sock Boots offer a snug, sleek fit with an ultra-modern look. These boots combine comfort with a high-fashion aesthetic, perfect for urban wear."
    },
    {
      id: '323',
      img: three,
      text: "The Mega",
      smallText: "The Mega brings a futuristic silhouette with exaggerated soles, providing maximum support and standout style for those who want to be noticed."
    }
  ]);

  const handleClick = () => {
    setShoe;
  }

  return (
    <div className="saini">
      <h3>Popular Products</h3>
      <div className="piks">
        {shoe.map((sup) => 
          <div className="pikis" key={sup.id}>
            <img src={sup.img} alt="shoe pic" className='piks--img' loading="lazy" />
            <h1>{sup.text}</h1>
            <p onClick={handleClick}>{sup.smallText}</p>

            <div className="adds">
              <p>$123</p>
              <Link to='/Services'>
                <img src={plus} alt="" className='plus-img' loading="lazy" />
              </Link>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}

export default GetSignedUp;
