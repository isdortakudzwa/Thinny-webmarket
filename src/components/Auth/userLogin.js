import projectAuth from "../Firabase/config";

let error = null;

const login = async  (email, password) => {

    try {
        const res = await projectAuth.signInWithEmailAndPassword(email, password);
        error = null;
        console.log(res.user)


        return res
        
    } catch (err) {
        error = err.massage;
        console.log(err.massage)
    }
};
 

const userLogin = () => {
    return {error, login}
}

export default userLogin