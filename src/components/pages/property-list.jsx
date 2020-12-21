import React, { useState, useEffect } from 'react';
import firebase from '../../firebase';




function PropertyApp() {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        firebase.firestore().collection('properties').onSnapshot(snapshot =>
            setProperties(snapshot.docs.map(doc => doc.data()))
        )
    }, [])

    return properties
}

function PropertyList() {
    
    const properties = PropertyApp();

    return (
        <div>

            <ol>
                {properties.map(({id, address, url }) =>
                    
                    <li key={id}>
                        <div className="property-entry">
                            {address}
                    
                            <br />
                            <img src={url} alt=""/> 
                                 
                    </div>
                    </li>
                )}
        </ol>
    
   </div>
    )
}

export default PropertyList