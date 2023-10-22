import { useState } from "react";
import style from "./FormAuth.module.css"

function FormAuth ({title, handleClick}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
        <div className={style.formBlock}>
            <div className={style.form}>
                <div>
                    <h1>Create an account</h1>
                    <p>Have an account login</p>
                </div>
                <form>
                    <input 
                        type="text"
                        value={name} 
                        onChange={(e)=>setName(e.target.value)}
                        placeholder="User name"
                    />
                    <input 
                        type="email"
                        value={email} 
                        onChange={(e)=>setEmail(e.target.value)}
                        placeholder="Email adress"
                    />
                    <input 
                        type="password"
                        value={pass} 
                        onChange={(e)=>setPass(e.target.value)}
                        placeholder="Password"
                    />
                <p>Use 8 or more characters with a mix of letters, numbers & symbols</p>
                </form>
                <div>
                    <p>By creating an account, you agree to our <br/> Terms of use and Privacy Policy.</p>
                </div>
                <div>
                    <input type="checkbox" />
                    <p>I`m not a robot</p>
                </div>
                <button onClick={()=>handleClick(email, pass)}>{title}</button>
                <p>Already have an account? <a href="#">Log in</a></p>
            </div>
     </div>
   )
 }
export default FormAuth;
   