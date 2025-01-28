// function Content(){    //functional component

//     //                                                     EVENT LISTENER 
// //     function handleclick(){
// //     alert("you clicked the button!")
// //    }

// //     function handleclick1(msg){    // for parameter function
// //     alert(msg)
// //    }


//     return( 
//         <>         
//         <div>  


//             {/* <h1>ViteApp</h1>
//             <p>sample web using vite js concepts</p> */}

//         {/*                                                 EVENT LISTENER - Day 4                                    */}

//         {/*<button onClick={handleclick}> click </button>     {/*} if we give as handleclick() - before clicking alert msg will be displayed onclick - it is a click attribute */ }

//         {/*<button onClick={()=>handleclick1("button clicked")}>  button </button>  {/* for parameter function*/}

        


//         </div>
//         </>
//     )
// }
// export default Content;


/*
//                                                           TYPES OF DATA TRASFER - DAY 4

//PARENT TO CHILD

// function Content(props){

// console.log();
//     return(
//         <div>{
//           props.pdata
//           }
//         </div>
//     )
// }
// export default Content;



// destructuring 
function Content({pdata}){

// let obj = {data:1,data1:2}
//     console.log(obj);       //{data: 1, data1: 2}
//     console.log(obj.data1)  //2  

        return(
            <div>{
              pdata
              }
            </div>
        )
    }
    export default Content;





//CHILD TO PARENT (leveling up)
function Content({pdata}){

    let cdata = "child data"

    function clickevent(){
        pdata(cdata)

    }
        return(
            <div>
                <button onClick={clickevent}> level up </button>

            </div>
        )
    }
    export default Content;

// step - 1 : send function to props (parameterized function)
// step - 2 : extract props
// step - 3 : call function by providing child data 
// done by -  globalised or prop sharing

*/


//SIBLINGS TO SIBLINGS
 
// 1st - child to parent , 2nd - parent to child -> child to child

function Content({ pdata }) {
  let cdata = "Child data"; // Child's data

  function clickevent() {
    pdata(cdata); // Call parent function to send data to parent
  }

  return (
    <div>
      <button onClick={clickevent}>Level up</button> {/* Send data on button click */}
      </div>
    );
  }
  
  export default Content;
  







//                                              BACKGROUND COLOR

// import "./App.css"

// function Content({pdata}){

//     let cdata = "child data"

//     function clickevent(){
//         pdata(cdata)

//     }

//     let styleobj={background : "red"}
//     let tags=(
//         <div style={styleobj} onClick={clickevent}>
//             <p>hello..</p>
//         </div>
//        )
//         return(
//             <div>
//                 {/*<button className = "btn" onClick={clickevent}> level up </button>  {/*class is a reserved keyword in JavaScript, so we use className to avoid conflicts.*/}

//                {/* <button style = {styleobj} onClick={clickevent}> button </button>      {/* from , let styleobj={background : "red"}*/}

//                <button style = {{background : "red"}} onClick={clickevent}> button </button>
//             </div>
//         )
//     }

//     export default Content;




// function Content({ pdata }) {
//     let cdata = "child data";
  
//     function clickevent() {
//       pdata(cdata);
//     }
  
//     let styleObj = { background: "red", padding: "20px", cursor: "pointer" };
  
//     return (
//       <div>
//           {/* <button className="btn" onClick={clickevent}>level up</button>*/}
//                   {/* <button style={styleObj} onClick={clickevent}>level up</button> */}
//         <div style={styleObj} onClick={clickevent}>
//           <p>hello</p>
//         </div>
//       </div>
//     );
//   }
// export default Content;