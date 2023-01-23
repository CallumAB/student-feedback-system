import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../firebase';

const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
 
    const onSubmit = async (e) => {
      e.preventDefault()
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/login")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
 
   
    }
 
  return (
    
    <div>                  
        <h1>Student feedback </h1>                                                                            
        <form>                                                                                            
            <div>
                <label>Email address </label>
                <input
                    type="email"
                    placeholder="Email address"
                    onChange={(e) => setEmail(e.target.value)}                  
                />
            </div>

            <div>
                <label>Password </label>
                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}       
                />
            </div>                                             
            
            <button onClick={onSubmit}>Sign up</button>                                                   
        </form>
        
        <p>
            Already have an account?{' '}
            <NavLink to="/login" >Sign in</NavLink>
        </p>                   
    </div>
  )
}
 
export default Signup