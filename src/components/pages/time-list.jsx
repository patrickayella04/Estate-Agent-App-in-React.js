import React, { useState, useEffect } from 'react';
import firebase from '../../firebase';

// 1. We need a variable to keep track of all the times. 

    //const [appointments, setAppoinments] = useState([]); // 2. The initial value of useState will be an empty array as we assume we have nothing in there yet.We need to import useState at top of screen. 
    
    // 3. We add a useEffect which allows us to run a piece of code when the app component loads. We only want it to happen once, we want to run this once because we need to set up a listner to the database one time. We dont want it to keep firing off...just want it to happen once. 

    // UseEffect takes in a function, and it takes in a second argument which is the dependancies - the empty array is the reason the component will run only once when it loads, because there is nothing indide of it. If there were variables inside, each time those variables changed would trigger the component to run again. There fore we keep the array empty so it only runs once. 

    // 4. Import firebase from our local firebase files NOT the modual firebase. Then we call collection, and the collection we created on firebase was 'times'. Next we call onSnapshot, which like using a camera to take a picture of the 'times' collection with all the times inside of it at that exact point in time which is the snapshot(everything in the collection in Real Time). Also, whenever something is added, removed, or changed we get a fresh snapshot and that snapshot will give us the most up to date value of what the 'times' folder or collection looks like. 

    // 5. setAppoinments, where snapshot.docs returns an array which is snapshot of everything inside of the times documents in an array form, and the .map method will allow you to loop through each document one by one - First time, second time, third time, etc. We want to map through each and return the data in a structure suitable for us to interprete. 
    
    // 6. Essentally map through each 'doc'data, and the doc.data is all of the properties associated with that document. Anything associated with that document(name,time_seconds, etc.) as we map through each and every document, we will get that information back for that particular document. And the data we recieve is actually an objects with key value pairs. 







function TimesApp() {
    
    const [appointments, setAppoinments] = useState([]); 

    useEffect(() => {

        const unsubscribe = firebase
            .firestore()
            .collection('times')
            .onSnapshot(snapshot => 
                setAppoinments(snapshot.docs.map(doc => doc.data()))
        )
        return () => unsubscribe()
    }, []) 
 return appointments
}

function TimesList() {

    const appointments = TimesApp();

    return (
        <div>

            <ol>
                {appointments.map(({id, time_hours, title, date }) =>
                    
                    <li key={id}>
                        <div className="time-entry">
                            {title}
                            <br/> {date}
                    
                            <br />
                            <code className="time">
                                {time_hours} </code> Hours
                            
                           
                            

                    </div>
                    </li>
                )}
        </ol>
    
   </div>
    )
    

}

export default TimesList
      







// function UseTimes() {

    // const [times, setTimes] = useState([]);

    // useEffect(() => {
    //     
    //      const unsubscribe = firebase
    //         .firestore()
    //         .collection('times') 
    //         .onSnapshot((snapshot) => {({
    //                 id: doc.id, 
    //                 ...doc.data() 
    //             }))

    //             setTimes(newTimes) 


    //         }) 
    //     return () => unsubscribe() 

    // }, [])

    // return times
// }

// const TimesList = () => {

//     const times = UseTimes();
    
//     return (
//         <div>
//             {/* <h2>Times List</h2>
//             <div>
//                 <label htmlFor="">Sort By</label> {' '}
//                 <select>
//                     <option>Time(fastes first)</option>
//                     <option>Time (slowerst first)</option>
//                     <option disabled>-----</option>
//                     <option>Title (a-z)</option>
//                     <option>Title (z-a)</option>
//                 </select>
//             </div> */}
//             <ol>
//                 {times.map((time) =>
//                     <li key={time.id}>
//                         <div className="time-entry">
//                             {time.title}
                        
//                         <br />
//                             <code className="time"> 
//                                 {time.time_hours} </code> Hours
//                         </div>
//                     </li>
//                 )}
//             </ol>
//         </div>
//     )
// }

// export default TimesList



/////////////////////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from 'react';
// import firebase from '../../firebase';






// function UseTimes() {
//     const [times, setTimes] = useState([]);

//     useEffect(() => {
//         // todo: we need an unsubscribe callback() (not for youtube subscribers.)

//          // When a subscription is attachted, firebase is opening up an active websocket to the firestore data base. 
        
         
//          const unsubscribe = firebase
//             .firestore()
//             .collection('times') // Behind the scenses I am loading this data from 'times' on firebase, below. And assigned that data to const times above in an array.
//             .onSnapshot((snapshot) => { // using on snapshot callback
//                 const newTimes = snapshot.docs.map((doc) => ({
//                     id: doc.id, // using merge operator (...) to merge this id with all of the below data. 
//                     ...doc.data() 
//                 }))

//                 setTimes(newTimes) // setTimes now equal to newTimes


//             }) 
//         return () => unsubscribe() // This callback will be run by react once this component is unmounted. Basically if we no longer use this time-list component we will drop its connection to firebase. So there isn't any information lying around. Very important. 
//     }, [])

//     return times
// }

// const TimesList = () => {

//     const times = UseTimes();
    
//     return (
//         <div>
//             {/* <h2>Times List</h2>
//             <div>
//                 <label htmlFor="">Sort By</label> {' '}
//                 <select>
//                     <option>Time(fastes first)</option>
//                     <option>Time (slowerst first)</option>
//                     <option disabled>-----</option>
//                     <option>Title (a-z)</option>
//                     <option>Title (z-a)</option>
//                 </select>
//             </div> */}
//             <ol>
//                 {times.map((time) =>
//                     <li key={time.id}>
//                         <div className="time-entry">
//                             {time.title}
                        
//                         <br />
//                             <code className="time"> 
//                                 {time.time_hours} </code> Hours
//                         </div>
//                     </li>
//                 )}
//             </ol>
//         </div>
//     )
// }

// export default TimesList