// import icon from '../src/components/Database/Images/211818_search_icon.png';
import nell from './components//Database/Images/2342729_add to cart_cart_online shop_shopping_shopping cart_icon.png';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from './Features/ContextProvider';

function SearchNavBar() {
  const {cart} = useContext(CartContext)
  return (
    <div className='safe-search'>
<p></p>
<div className="div">
        <Link className="carty" to='/Cart'>
        <img src={nell} alt="searchi" className="searcher"
        />
        <p className='add'>{cart.length}</p>
        </Link>
</div>

    </div>
  )
}

export default SearchNavBar;