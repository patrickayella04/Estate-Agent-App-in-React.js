import React from 'react';
import { Link } from 'react-router-dom';
import AddTimeEntryForm from './add-time-entry-form';
import TimesList from './time-list';










function AppointmentsPage() { 
    


    return (

     <>
        
            <div className="profile">

                <h1>Create Appoinments </h1>
                <AddTimeEntryForm />
                <TimesList />
                


                

                <Link to='/' >
                <li>sign out</li>
                </Link> 
            
            </div> 
     
</>
        
    )
}

export default AppointmentsPage