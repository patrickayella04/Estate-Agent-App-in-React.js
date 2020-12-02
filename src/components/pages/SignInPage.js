import React from 'react';
import { Link } from 'react-router-dom';






function SignInPage() { 
    


    return (

        <>
           
            <div className="profile">

                <h1>Sign In Page </h1>

                <Link to='/createNewAccount' >
                <li>Create New Account</li>
                </Link> 
                
            <Link to='/home' >
                <li>SignIn</li>
                </Link> 
                
                <Link to='/forgottenPassword' >
                <li>Forgotten Sign in?</li>
            </Link> 
        
        
            </div>
        

    </>
        
    )
}

export default SignInPage