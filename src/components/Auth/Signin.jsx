import projectAuth from "../Firabase/config";

let error = null;

const Signin = async (Email, Password) => {
    error = null;

    try {
        const res = await projectAuth.createWithEmailAndPassword(Email, Password);
        console.lo(res) 
    } catch (err) {
        error = err.massage;
        console.log('error')
        
    }
}

const UserSignUp = () => {
    return{error, Signin}
}

export default UserSignUp;