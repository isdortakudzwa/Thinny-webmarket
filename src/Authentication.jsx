import Login from "./Login";
import Signup from "./Signup";
import { useState } from "react";


function Authentication() {

    const [toggle, setToggle] = useState(true);

    const handleToggle = () => {
        setToggle(!toggle);
    }

  return (
    <div>{toggle ?   (<Login toggleForm={handleToggle} /> ):      (<Signup toggleForm={handleToggle}/> ) } </div>
  )
}
 
export default Authentication;