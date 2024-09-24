import g1img1 from '../components/Database/Images/green.jpg';
import g1img2 from '../components/Database/Images/now1 - Copy.png';
// import g2img1 from '../components/Database/Images/now1.png';
import g4img2 from '../components/Database/Images/pexels-jibarofoto-14174472.jpg';
import g3img1 from '../components/Database/Images/pexels-melvin-buezo-1253763-2529148 (1).jpg';
import g3img2 from '../components/Database/Images/reng.jpg'
function Map() {
  return (
<>
     
    {/* <div className="center">
      <span className="pointer"></span>
      <span className="pulse"></span>
    </div> */}
    
    <div className="image-gallery">

        <div className="Gallery1">
           <img src={g1img1} alt="img galleryimgs" className='gall-img'  loading="lazy" />
           <img src={g1img2} alt="img galleryimgs" className='gall-img'  loading="lazy"/>
        </div>

        <div className="Gallery2">
          <img src={g3img2} alt="img galleryimgs" className='galls-img'  loading="lazy"/>
        </div>


        <div className="Gallery3">
          <img src={g3img1} alt="img galleryimgs" className='galle'  loading="lazy" />
          <img src={g4img2} alt="img galleryimgs" className='galle'  />
        </div>

    </div>
      
</>
    
  )
}

export default Map