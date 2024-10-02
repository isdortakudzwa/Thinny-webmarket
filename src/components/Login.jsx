// import { useState } from "react";
// import { Link } from "react-router-dom";
// import userLogin from "./Auth/userLogin";
// import { useNavigate, useLocation } from "react-router-dom";


// const Login = ({toggleForm}) => {

//     const [Email, setEmail] = useState("");
//     const [Password, setPassword] = useState("");
//     const [errorMessage, setErrorMassage] = useState(null);
//     const navigate = useNavigate();
//     const location = useLocation(); 

//     const from = location.state?.from?.pathname || "/Dashboard";

//     const {error, login} = userLogin();

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         await login(Email, Password);
//         if (!error) {
//             navigate( from, { replace: true});
//             setEmail("");
//             setPassword("");
//             console.log('success')
//             return;

//         }else{
//             setErrorMassage(error)
//             console.log('failed')
//         }

//     }

//   return (
//     <>
//     <Link to='/AboutUs' className="back">Back</Link>
//      <div className="more">
//           <h1 className="h1-more">Login into your account</h1><form onSubmit={handleLogin}>
//               <input
//                   type="email"
//                   placeholder="Email"
//                   value={Email}
//                   onChange={(e) => setEmail(e.target.value)} />
//               <input
//                   type="Password"
//                   placeholder="Password"
//                   value={Password}
//                   onChange={(e) => setPassword(e.target.value)} />

//               {error && <p>{errorMessage}</p>}
//               <button className="form-btn">Signin</button>
//               <p>Dont have an account</p>
//               <button className="form-btn" onClick={toggleForm}>Signup</button>
//           </form>
//       </div>
//       </>
//   )
// }

// export default Login
