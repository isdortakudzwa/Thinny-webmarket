import Stars from '../components/Database/Images/285661_star_icon.png';
import { useState } from 'react';
import more from '../components/Database/Images/pexels-panther-2092450.jpg';
import kim from '../components/Database/Images/pexels-mart-production-8801115.jpg';
import oni from '../components/Database/Images/pexels-danxavier-1239291.jpg';
import nico from '../components/Database/Images/pexels-elsimage-1405963.jpg';
import bule from '../components/Database/Images/pexels-ox-street-3848035-6050921.jpg';

function Reviews() {

      
const [text, setText] = useState ([

    {
      id:'09',
      img:Stars,
      smallText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quo aliquid dolorem harum ex consectetur.",
      Bac:"",
      smallImg:more,
      nice:"Kudzi" 
    },
    
  
    {
      id:'25',
      img:Stars,
      smallText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quo aliquid dolorem harum ex consectetur.",
      Bac:"",
      smallImg:kim,
      nice:"leo" 
  
    },
  
    {
      id:'323',
      img:Stars,
      smallText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quo aliquid dolorem harum ex consectetur.",
      Bac:"",
      smallImg:oni,
      nice:"Everlin" 
  
    },

    {
        id:'323',
        img:Stars,
        smallText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quo aliquid dolorem harum ex consectetur.",
        Bac:"",
        smallImg:nico,
        nice:"Trevor" 
    
    
    },
  
    {
        id:'39',
        img:Stars,
        smallText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quo aliquid dolorem harum ex consectetur.",
        Bac:"",
        smallImg:bule, 
        nice:"Fiona" 
    
    }

  ])



  
  const handleClick = () =>{
    setText;
  }


  return (
    <div className="reviews">
       <h3 >Reviews</h3>
        <div className='stars'>

             {text.map((item) => 
             
        <>


             <div className='okay'>
              
             <div className="stars-img" key={item.id}>

                 <div className="gold-stars">
                   <img src={Stars} alt="starsimgs" className='stars-gold'  loading="lazy" />
                   <img src={Stars} alt="starsimgs" className='stars-gold'  loading="lazy" />
                   <img src={Stars} alt="starsimgs" className='stars-gold'  loading="lazy"/>
                   <img src={Stars} alt="starsimgs" className='stars-gold'  loading="lazy"/>
                 </div>

                 <p onClick={handleClick}>{item.smallText}</p>

               </div>

               <div className="divi">
                   {item.Bac}
                 </div>

               <div className="people">
                   <img src={item.smallImg} alt="manpic" className='voluntiir'  loading="lazy" />
                   <h4>{item.nice}</h4>
                 </div>
               
            </div>

        </> 

               

              
              )}
         </div>
    </div>
  )
}

export default Reviews;