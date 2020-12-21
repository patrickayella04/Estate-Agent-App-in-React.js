import React, {useState} from 'react';
import firebase from '../../firebase';

const AddPropertyEntryForm = () => {
    
    const [address, setAddress] = useState('')
    const [url, setImg] = useState('')


    function onSubmit(e) {
        
        e.preventDefault()

        firebase
            .firestore()
            .collection('properties')
            .add({
                address,
                url
            }).then(() => {
                setAddress('')
                setImg('')
            })
    }


    return (
        <form onSubmit={onSubmit}>
            <h4>Add Property</h4>
            <div>
                <label>Adress</label>
                <input type="text" value={address} onChange={e => setAddress(e.currentTarget.value)}/>  
            </div> 
            <div>
                <label>Picture URL </label>
                <input type="text" value={url} onChange={e => setImg(e.currentTarget.value) }/>
            </div>
            <button>Add Property Entry</button>
        </form>
    )

    


}

export default AddPropertyEntryForm