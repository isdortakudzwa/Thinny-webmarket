import './App.css';
import Home from './pages/Home';
import Authentication from './Authentication';
import Error from './Error';
import { Routes, Route } from 'react-router-dom';
// import PrivateRouteLoyout from './components/layouts/PrivateRouteLoyout';
import Navbar from './pages/Navbar';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import Testimonials from './pages/Testimonials';
import Cart from './Features/Cart';
import Footer from './pages/Footer';
import Login from './Login';
function App() {



  return (

  <div >
      <Routes>
      <Route path='/' element={<Navbar />}>
          <Route exact path='/' element={<Home />} /> 
          <Route path='*' element={<Error />} />
          <Route path='/AboutUs' element={<AboutUs />} />
         
          <Route path='/ContactUs' element={<ContactUs  />} />
          <Route path='/Authentication' element={<Authentication />} />
          <Route path='/Testimonials' element={<Testimonials />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Cart' element={<Cart />} />

       {/* <Route element={<PrivateRouteLoyout />}> */}
         <Route path='/Services' element={<Services  />} />
       {/* </Route> */}


      
      </Route>
        
        
       </Routes>
 
       < Footer />
  </div>
  )
}


export default App
