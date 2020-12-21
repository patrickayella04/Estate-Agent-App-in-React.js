import React from 'react';
import { Link } from 'react-router-dom';
import PropertyList from './property-list';








function CreatePropertiesPage() { 
    


    return (

     <>
        
            <div className="profile">

                <h1>Create Property </h1>
                
                
                <PropertyList/>
                

                <Link to='/' >
                <li>sign out</li>
                </Link> 
            
            </div> 
     
</>
        
    )
}

export default CreatePropertiesPage