import React from 'react';
import { Link } from 'react-router-dom';








function ProfilePage() { 
    


    return (

     <>
        
            <div className="profile">

            <h1>Profile Page </h1>
                

                <Link to='apps' >
                <li>Create appointments</li>
                </Link> 

                {/* <Link to='createApps' >
                <li>create appointments</li>
                </Link>  */}

                <Link to='createProp' >
                <li>Create property</li>
                </Link> 

                <Link to='createCustom' >
                <li>Create customer</li>
                </Link> 
            
            </div> 
     
</>
        
    )
}

export default ProfilePage