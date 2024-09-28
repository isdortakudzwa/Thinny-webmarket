import twitter from '../components/Database/Images/294709_circle_twitter_icon.png';
import facebook from '../components/Database/Images/5296499_fb_facebook_facebook logo_icon.png';
import Instagram from '../components/Database/Images/3225191_app_instagram_logo_media_popular_icon.png';
import { Outlet } from 'react-router-dom';

function Footer() {
  return (
    <><div className="footer-all">
          <h2 className='first-footer'>Thinny</h2>
          <div className="footer-main">

              <div className="footer-1">
                  <h2>Contact Us</h2>
                  <p>Address<span className="span-foter">: Harare, Zimbabwe</span></p>
                  <p>Phone<span className="span-foter">: +263 787 635 499</span></p>
                  <p>Email<span className="span-foter">: izzytaku@gmail.com</span></p>
              </div>

              <div className="footer-2">
                  <h2>Connect</h2>
                  <p>Address<span className="span-foter">: @izzyZimbabwe</span></p>
                  <p>Phone<span className="span-foter">: @Thinny</span></p>
                  <p>Email<span className="span-foter">: @Thinny.com</span></p>
              </div>

              <div className="footer-3">
                  <h2>FAQ</h2>
                  <p>Size Chart</p>
                  <p>Shipping Policy</p>
                  <p>Return Policy</p>
              </div>

              <div className="footer-4">
                  <h2>About Us</h2>
                  <p>Meet our team</p>
                  <p>Phone<span className="span-foter">: @Thinny</span></p>
                  <p>Email<span className="span-foter">: @Thinny.com</span></p>
              </div>

          </div>
          <div className="line"></div>
          <div className="icons">
              <img src={twitter} alt="logo" className='icon' />
              <img src={facebook} alt="logo" className='icon' />
              <img src={Instagram} alt="logo" className='icon' />
          </div>
          <p className='p-footer'>&copy;2024 Thinny. All rights reserved</p>
      </div><Outlet /></>
  )
}

export default Footer