import React from 'react';
import { Link } from 'react-router-dom';







function HomePage() { 
    


    return (

        <>

            <div className="home">

                <h1>Home Page </h1>
                

                <Link to='/profile' >
                <li>Profile</li>
                </Link> 
            
            </div> 

        
    </>
        
    )
}

export default HomePage