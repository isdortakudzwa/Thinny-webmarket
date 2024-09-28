

import  { useState } from 'react';


import Stars from '../components/Database/Images/285661_star_icon.png';
import more from '../components/Database/Images/pexels-panther-2092450.jpg';
import kim from '../components/Database/Images/pexels-mart-production-8801115.jpg';
import oni from '../components/Database/Images/pexels-danxavier-1239291.jpg';
import nico from '../components/Database/Images/pexels-elsimage-1405963.jpg';
import bule from '../components/Database/Images/pexels-ox-street-3848035-6050921.jpg';

const reviewsData = [
  {
    id: '09',
    smallText: "The product exceeded my expectations. Great quality and fast shipping!",
    smallImg: more,
    nice: "Kudzi"
  },
  {
    id: '25',
    smallText: "Excellent customer service. They were very helpful with my inquiries.",
    smallImg: kim,
    nice: "Leo"
  },
  {
    id: '323',
    smallText: "I love the variety of products. Will definitely shop here again!",
    smallImg: oni,
    nice: "Everlin"
  },
  {
    id: '324',
    smallText: "The website is user-friendly and the checkout process was smooth.",
    smallImg: nico,
    nice: "Trevor"
  },
  {
    id: '39',
    smallText: "Fast delivery and the product was exactly as described. Very satisfied!",
    smallImg: bule,
    nice: "Fiona"
  }
];

const ReviewCard = ({ review }) => (
  <div className="review-card">
    <div className="stars">
      {[...Array(5)].map((_, index) => (
        <img key={index} src={Stars} alt="star" className="star" />
      ))}
    </div>
    <p className="review-text">{review.smallText}</p>
    <div className="reviewer">
      <img src={review.smallImg} alt={review.nice} className="reviewer-img" />
      <h4 className="reviewer-name">{review.nice}</h4>
    </div>
  </div>
);

const ReviewsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide ) => (prevSlide + 1) % reviewsData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + reviewsData.length) % reviewsData.length);
  };

  return (
    <div className="reviews-carousel">
      <h2 className="carousel-title">Customer Reviews</h2>
      <div className="carousel-container">
        <button onClick={prevSlide} className="nav-button prev">
          &#8249; 
        </button>
        <div className="carousel-content">
          <ReviewCard review={reviewsData[currentSlide]} />
        </div>
        <button onClick={nextSlide} className="nav-button next">
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default ReviewsCarousel;