import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../firebase';
import { NavLink, useNavigate } from 'react-router-dom'
 
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/home")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }
 
    return(
        <div>                                            
            <h1> Student feedback </h1>                                                 
            <form>                                              
                <div>
                    <label>Email address </label>
                    <input
                        type="email"                                                                                                           
                        placeholder="Email address"
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label>Password </label>
                    <input
                        type="password"                                                                          
                        placeholder="Password"
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>

                <button onClick={onLogin}>Login</button>                     
            </form>
            
            <p>
                No account yet? {' '}
                <NavLink to="/signup">Sign up</NavLink>
            </p>                          
        </div>
    )
}
 
export default Login