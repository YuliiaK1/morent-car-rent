import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import FormAuth from "./FormAuth";
import {useDispatch} from "react-redux"
import {} from "../store/userSlice"

function Login () {
  const dispath = useDispatch();

  
  const handleLogin = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then(console.log)
    .catch(console.error)
  }

  return (
    <FormAuth
      title = "sign in"
      handleClick={handleLogin}
    />
  )
}

export default Login;