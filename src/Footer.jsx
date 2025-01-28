import { useRef, useState } from "react";


// const Footer=()=>{    //functional component
//     return( 
//         <>         
//         <div>          
//             <ul>
//                 <li>About us</li>
//                 <li>Privacy policy</li>
//                 <li>Service</li>
//             </ul>
//         </div>
//         </>
//     )
// }
// export default Footer;


// //{} - we will render the file by this



// SIBLINGS TO SIBLINGS (ref Content)

function Footer({ pdata }) {
  return (
    <div>
      {pdata} {/* Display the data received from Content through App */}
    </div>
  );
}

export default Footer;











//                                                   HOOKS


// useState()

// function Footer() {
//     // let inc=0
//     // console.log(inc);
//     const [data,setdata] = useState(0);

//     function clickevent(){
//         // setdata(data+1)
//         // setdata(data+1)          //if the function 'setdata(data+1)' called twice also it won't afftect the o/p it will inc by 1
//         setdata((prev)=>prev+1)
//         setdata((prev)=>prev+1)    //if the function 'setdata((prev)=>prev+1)' called twice it will inc by 2 


//     }
//     console.log("state",data);
//   return (
//     <div>
//         {/* <div>{inc}</div>
//         <button onClick={()=>++inc}>add one </button> */}

//         {/* <div>{data}</div>
//         <button onClick={()=>setdata(data+1)}>add one </button> */}  

//         {/*<div>{data}</div>
//         <button onClick={()=>setdata((prev)=>prev+1)}>add one </button> */} 

//         <div>{data}</div>
//         <button onClick={clickevent}>add one </button>   {/* used function - 'clickevent' above */}
    
//     </div>
//   )
// }

// export default Footer;







//useRef()
 
// hook condition - can't use hook outside functional component bcz, hook dept on f.c
//                - can't create hook inside the blocks 
//                - can't create in iteratable blocks


//const refer = useRef()
// function Footer() {
//     const refer = useRef()
//     const [data,setdata] = useState(0);
//     function clickevent(){
//        refer.current.focus()        
//        console.log(refer.current.value)  //o/p - inputed value in text box
//     }

//     return (
//     <div>

//         <div>
//             <input ref={refer} type="text"></input>
//             <button onClick={clickevent}> useref </button>   
//         </div>
    
//     </div>
//   )
// }

// export default Footer;






//useEffects()

// syntax - useEffect(()=>{   optional - return()=>{}; },[referable variable]);

         //(search online) || refer - ApiCall
 




//usecontext()

// - used to globalise our data
// always give data to root , root will distribute to other nodes

// procedure to create context

//step 1 - create a file
//step 2 - create context and assign it to function
//step 3 - export created variable
//step 4 - import hook
//step 5 - wrap provider , usecontext created successfully | value=>()


//procedure to 

//step 1 - hook/usecontext



// // REFER - ContextApi.jsx

// import{useContext} from 'react';
// import mycontext from "./ContextApi";

// function Footer() {
//     const refer = useRef()
//     function clickevent(){
      
//     }

//     //let dataFromGlobal = useContext(mycontext)

//     //let {data : d} = useContext(mycontext)    //for single object in main.jsx

//     let {data:d,data1} = useContext(mycontext)
//     return (
//     <div>
//         {/*{dataFromGloba} */}
//         {d}
//         {data1}                          {/* {d , data1} - not possible */}
//         <input ref={refer} type="text"></input>
//         <button onClick={clickevent}>button</button>
    
//     </div>
//   )
// }

// export default Footer;

// // here main.jsx - root , mycontext - variable 


