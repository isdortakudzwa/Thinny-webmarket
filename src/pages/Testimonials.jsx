import TestimonialProps from "./TestimonialProps";
import best from '../components/Database/Images/reng.jpg'; 
import { Link } from "react-router-dom";
import back from '../components/Database/Images/back.png';
function Testimonials() {
  return (
    <>
    <Link to='/AboutUs' className="back" ><img src={back} alt="" /><span>Back</span></Link>
    <div className="fit">
      <div className="test-text">
        <h1>2024 Nike</h1>
        <h2>The classical shoe</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quae eum commodi dolores eveniet voluptatum tenetur reprehenderit delectus, vel totam.</p>
        <button>Learn More</button>
      </div>

       <img src={best} alt="shoe image" />

    </div>
<div className="fulls">
  <h1>Our Customers</h1>
    <div className="keep">
      <TestimonialProps />
    </div>
</div>
    </> 

  )
}

export default Testimonials;
