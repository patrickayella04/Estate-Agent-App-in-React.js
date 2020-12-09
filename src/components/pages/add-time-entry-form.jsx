import React, {useState} from 'react';
import firebase from '../../firebase';


const AddTimeEntryForm = () => {

    // We are cacheing values into the below variables.

    const [ title, setTitle ] = useState('') 
    const [ time, setTime ] = useState('')
    
    function onSubmit(e) {

        e.preventDefault() // Prevents default behaviour of refreshing whole page once we select submit button. 

        firebase
            .firestore()
            .collection('times')
            .add({
                title,
                time_hours: parseInt(time) //The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems ie. Binary, Decimal etc. ).
            }).then(() => {
                setTime('')
                setTitle('')
            })


        
    }

    
    return (

        // Goal: Fill out the form and post the input to firebase. 
     
        <form onSubmit={onSubmit}>
            <h4>Add Appointment</h4>
            <div>
                <label>Title</label>
                <input type="text" value={title} onChange={e => setTitle(e.currentTarget.value)}/>  
            </div> 
            <div>
                <label>Time</label>
                <input type="number" value={time} onChange={e => setTime(e.currentTarget.value) }/>
            </div>
            <button>Add Time Entry</button>
        </form>
    )
}

export default AddTimeEntryForm

// The currentTarget read-only property of the Event interface identifies the current target for the event, as the event traverses the DOM. It always refers to the element to which the event handler has been attached, as opposed to Event.target, which identifies the element on which the event occurred and which may be its descendant.

// JavaScript allows us to listen to an input’s change in value by providing the attribute onchange. React’s version of the onchange event handler is the same, but camel-cased. If you’re using forms inside of a React component, it’s a good idea to understand how the onChange event handler works with forms, state, and how you can pass the value to a function. The final example we’ll explore today is how to store an input’s current value inside of a state value. This is extremely useful for keeping track of the current input fields values, and displaying them on the UI.