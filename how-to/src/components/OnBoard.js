import React from 'react';
import SignUp from './SignUp';
import Login from './Login'

const Onboarding = () => {
    return ( 
        <div className="onboardPage">
            <br></br>
            <h1 style={{color:"white", padding:"10px"}}>How To </h1>
            <br></br>
        <Login />
        <br></br>
        <SignUp />
    
        </div>
     )
}
 
export default Onboarding;