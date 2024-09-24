import { Outlet, Navigate, useLocation } from "react-router-dom"
import projectAuth from "../Firabase/config"

const PrivateRouteLoyout = () => {

    const location = useLocation();

  return projectAuth.currentUser ? (<Outlet />) : (<Navigate to='/Authentication' state={{from : location}} replace/>)
}

export default PrivateRouteLoyout