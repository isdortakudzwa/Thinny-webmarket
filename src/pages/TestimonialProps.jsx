
import { useState } from 'react';
import green from '../components/Database/Images/pexels-panther-2092450.jpg';
import fifi from '../components/Database/Images/pexels-creationhill-1681010.jpg'
import good from '../components/Database/Images/pexels-elsimage-1405963.jpg'
import girl from '../components/Database/Images/pexels-kebs-visuals-742415-3992656.jpg'
function TestimonialProps() {

    const [blog, setBlog] = useState ([
        {
         id:'1',
         name:'Melisa',
         text:'I will always be fan of Thinny shoes ',
         img:girl
       
        },
        {
        id:'2',
        name:'John',
        text:'Thinny is the best product',
        img: good
      
       },

       {
        id:'3',
        name:'Sam',
        text:'Thinny shoes are the best, because they are strong',
        img: fifi
      
       },
       {
        id:'4',
        name:'Isdor',
        text:'I am an athlete so shoes play a major role#Thinny',
        img: green
      
       }



    ]);

    const handleClick = () => {
      setBlog;
    }

  return (
 <>
    {blog.map((item) => (

      <div className="forever" key={item.id}>
           <img src={item.img} alt="images"  className='good' />
         <div className="infoy">
           <h1 className='h1-name'>{item.name}</h1>
           <p className='p-name'>{item.text}</p>
           <button className='simple' onClick={handleClick}>Learn More</button>
         </div>
      </div>

  ))}

</>
    

  
  )
}

export default TestimonialProps;