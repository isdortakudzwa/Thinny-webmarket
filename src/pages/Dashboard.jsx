import userLogOut from "../components/Auth/Logout"
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

function Dashboard() {
    const navigate = useNavigate();
    const {error, logOut} = userLogOut();
    
    const handleLogOut =async () => {
        await logOut();

        if (!error) {
            navigate('/Home');
            alert('logOut successfull')
        }
    }

  return (
    <><div>
      <h1>The Home of quality music</h1>
      <button onClick={handleLogOut}>LogOut</button>
    </div><Footer /></>
  )
};

export default Dashboard

