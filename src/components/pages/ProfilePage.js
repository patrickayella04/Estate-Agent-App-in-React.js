import React from 'react';
import { Link } from 'react-router-dom';








function ProfilePage() { 
    


    return (

     <>
        
            <div className="profile">

            <h1>Profile Page </h1>
                

                <Link to='apps' >
                <li>appointments</li>
                </Link> 

                <Link to='createApps' >
                <li>create appointments</li>
                </Link> 

                <Link to='createProp' >
                <li>create property</li>
                </Link> 

                <Link to='createCustom' >
                <li>create customer</li>
                </Link> 
            
            </div> 
     
</>
        
    )
}

export default ProfilePage