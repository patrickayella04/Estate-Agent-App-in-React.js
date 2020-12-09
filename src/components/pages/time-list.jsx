import React, { useState, useEffect } from 'react';
import firebase from '../../firebase';






function UseTimes() {
    const [times, setTimes] = useState([]);

    useEffect(() => {
        // todo: we need an unsubscribe callback() (not for youtube subscribers.)

         // When a subscription is attachted, firebase is opening up an active websocket to the firestore data base. 
        
         
         const unsubscribe = firebase
            .firestore()
            .collection('times') // Behind the scenses I am loading this data from 'times' on firebase, below. And assigned that data to const times above in an array.
            .onSnapshot((snapshot) => { // using on snapshot callback
                const newTimes = snapshot.docs.map((doc) => ({
                    id: doc.id, // using merge operator (...) to merge this id with all of the below data. 
                    ...doc.data() 
                }))

                setTimes(newTimes) // setTimes now equal to newTimes


            }) 
        return () => unsubscribe() // This callback will be run by react once this component is unmounted. Basically if we no longer use this time-list component we will drop its connection to firebase. So there isn't any information lying around. Very important. 
    }, [])

    return times
}

const TimesList = () => {

    const times = UseTimes();
    
    return (
        <div>
            <h2></h2>
            {/* <div>
                <label htmlFor="">Sort By</label> {' '}
                <select>
                    <option>Time(fastes first)</option>
                    <option>Time (slowerst first)</option>
                    <option disabled>-----</option>
                    <option>Title (a-z)</option>
                    <option>Title (z-a)</option>
                </select>
            </div> */}
            <ol>
                {times.map((time) =>
                    <li key={time.id}>
                        <div className="time-entry">
                            {time.title}
                        
                        <br />
                            <code className="time"> 
                                {time.time_hours} </code> Hours
                        </div>
                    </li>
                )}
            </ol>
        </div>
    )
}

export default TimesList