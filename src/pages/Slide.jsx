
import { useState } from "react";
import sur from '../components/Database/Images/fill.jpg';
import big from '../components/Database/Images/red.jpg'
import kim from '../components/Database/Images/black shoe.jpg'
import safe from '../components/Database/Images/others 1.jpg'
import lim from "../components/Database/Images/formal.jpg"
import white from '../components/Database/Images/blue 1 (1).jpg'

function Slide() {

    const [first, setFirst] = useState({
        ImgUrl: big,
        text:"Why Us",
        age: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos deserunt magnam minima nisi, soluta sit quae accusantium possimus numquam laboriosam deleniti dolor iste iusto itaque voluptates? Natus, veritatis officiis culpa velit doloribus fugiat, tempore vel cumque cupiditate voluptatibus sequi? Aliquam?',
        supImg: kim,
        color: "rgba(123,134,132,1)"
      });

      const [key, setKey] = useState(0);

 const handleClick3= () => {
      setFirst({
      ImgUrl: big,
      text:"Why Us",
      age: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos deserunt magnam minima nisi, soluta sit quae accusantium possimus numquam laboriosam deleniti dolor iste iusto itaque voluptates? Natus, veritatis officiis culpa velit doloribus fugiat, tempore vel cumque cupiditate voluptatibus sequi? Aliquam?',
      supImg: kim
    });
    setKey(prevKey => prevKey + 1);
 }

 
  const handleClick1= () => {
       setFirst({
        ImgUrl:sur,
        text:"How to find us",
        age: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos deserunt magnam minima nisi, soluta sit quae accusantium possimus numquam laboriosam deleniti dolor iste iusto itaque voluptates? Natus, veritatis officiis culpa velit doloribus fugiat, tempore vel cumque cupiditate voluptatibus sequi? Aliquam?',
        supImg: lim

        });
        setKey(prevKey => prevKey + 1);
      }

  const handleClick2= () => {
        setFirst({
         ImgUrl: white,
         text:"When to find us ",
         age: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga exercitationem nam aspernatur soluta alias ab inventore, facere modi molestiae iure!',
         supImg: safe 
 
         });
         setKey(prevKey => prevKey + 1); 
       }

  return (
     <div className='full'>
      <img key={key}  src={first.ImgUrl} alt="shoeimage" className="img2 animate-slide"  loading="lazy" />


    <div className="verif">

    <div className="smart animate-slide">
          <h1>{first.text}</h1>
          <p>{first.age}</p>
      </div>
        <img key={key} src={first.supImg} alt="oneofimages" className="superimg animate-slide"  loading="lazy" />

    </div>

   <div className="sim">
  
       <div className="mann">
           <button className="next-btn" onMouseOver={handleClick3}>Why Us</button>
           <button className="next-btn" onMouseOver={handleClick1}>How</button>
           <button className="next-btn" onMouseOver={handleClick2}>Why</button>
        </div>
   </div>

</div>
  )

}
export default Slide