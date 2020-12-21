import React from 'react';
import { Link } from 'react-router-dom';
import AddPropertyEntryForm from './add-property-entry-form';
import AddTimeEntryForm from './add-time-entry-form';
import PropertyList from './property-list';








function CreatePropertiesPage() { 
    


    return (

     <>
        
            <div className="profile">

                <h1>Create Property </h1>
                
                <AddPropertyEntryForm />
                <PropertyList/>
                

                <Link to='/' >
                <li>sign out</li>
                </Link> 
            
            </div> 
     
</>
        
    )
}

export default CreatePropertiesPage