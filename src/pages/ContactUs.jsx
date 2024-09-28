import shoe from '../components/Database/Images/pexels-ox-street-3848035-6050921.jpg';
import products from '../components/Database/Database';
function ContactUs() {
  return (
    <>
      <div className="partners-logo-slider">
        <div className="slide-track">
          {products.map(product => <div key={product.id} className="product">
            <img src={product.img} alt={product.name} className='data-img' loading="lazy" />
          </div>
          )}
        </div> 
    </div>
    
    <div className="film">

      <img src={shoe} alt="Best shoe" className='bestie'  loading="lazy" />
      <div className="more1">
        <h1 className='contact-h1'> Contact Us For More</h1>
        <form>
          <input className='iniput'
            type="Name"
            placeholder="Name" />

          <textarea className='texta'
            type="Massege"
            placeholder="Massage" />

          <button className="form-btni">Submit</button>

        </form>

      </div>
    </div>
  
    </>
    
  )
}

export default ContactUs