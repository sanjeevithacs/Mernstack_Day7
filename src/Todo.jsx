// import React, { useState } from 'react'
// import { useRef } from 'react'

// function Todo() {
//     const refer = useRef()
//     const [data,setData] = useState([])

//     function clickevent(){
//    // console.log(refer.current.value)
//     setData([...data,{task:refer.current.value}])   //single object 
//     refer.current.value =" "       //to make i/p empty each time after save
//     }
//   return (
//     <div>
//         <input ref={refer} type='text'></input>
//         <button onClick={clickevent}>save</button>

//         {data.map(i=><li>{i.task}</li>)}

//     </div>
//   )
// }

// export default Todo





// //TASK-2  remove - use filter method id!=

// import React, { useState, useRef } from 'react';

// function Todo() {
//     const refer = useRef();
//     const [data, setData] = useState([]);

//     function clickevent() {
//         if (refer.current.value.trim() === "") return;
//         setData([...data, { id: Date.now(), task: refer.current.value }]);
//         refer.current.value = "";
//     }

//     function removeTask(id) {
//         setData(data.filter((item) => item.id !== id));
//     }

//     return (
//         <div>
//             <input ref={refer} type="text" placeholder="Enter a task"></input>
//             <button onClick={clickevent}>Save</button>

//             <ul>
//                 {data.map((item) => (
//                     <li key={item.id}>
//                         {item.task}
//                         <button onClick={() => removeTask(item.id)}>Remove</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default Todo;
