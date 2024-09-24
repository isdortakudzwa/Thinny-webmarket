
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <><div className='navi'>
        
         <Link to='/' className="logo">
            <h1 className='los'>Thinny</h1>
         </Link> 

          <div className="nav">
              <Link to='/'>Home</Link>
              <Link to='/AboutUs'>About</Link>
              <Link to='/Services' >Services</Link>
              <Link to='/ContactUs' className='lastly'>Get in touch</Link>
          </div>
          

      </div><Outlet /></>
  )
}

export default Navbar