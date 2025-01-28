// import React from 'react';   // type rafc - for arrow function

// const Header = () => {         // functional component
  //   let data = [1, 2, 3, 4, 5];
  //  return(
  //   <div>
  //       {data.map((i, k) => {  // Corrected syntax: added parentheses around (i, k)
  //           return(
  //               <li key={k}>{i}</li>  // Corrected key usage and syntax
  //           );
  //       })}
  //   </div>
  //  );



/*
  //                                            DAY - 4

  if(true){
    return(
      <h1>its' for client</h1>
    )
  }
  else{

  }



let data = true  // if only data is 'true' , then o/p - 'rendering' | 'false' - no o/p
return(
  <>
  {
    data &&
    <h1>rendering</h1>
  }
  </>
)
 

let data1 = [{id:1,username:"john"}]    //o/p - rendering
return(
  <>
  {
    data1 &&
    <h1>rendering</h1>
  }
  </>
)



let data2 = []    //o/p - rendering
return(
  <>
  {
    !data2.length > 0 &&
    <h1>rendering</h1>
  }
  </>
)



let data3 = []    //o/p - no data
return(
  <>
  {
    data3.length > 0 ?        //for o/p - there is data use '!data3.length > 0'
    <h1>there is data</h1> : <h1>no data</h1>
  }
  </>
)

*/


/*
let data4 = [{id:2,name:"alice"}]    //o/p - there is data
return(
  <>
  {
    data4.length > 0 ?        //also for o/p - there is data use '!data3.length > 0'
    <h1>there is data</h1> : <h1>no data</h1>
  }
  </>
)


};

export default Header;    // default export       // to export to other files
//export { Header };         //named export  

*/










//{} - used for rendering
// <></> - fragments 

/*
import React from 'react'      // type rfce - anonumous function

function Header() {
  return (
    <div>Header</div>
  )
}

export default Header

*/
















                                                        // 20.01.25


                                                        //curring 
//     - transforms a function with multiple arguments into a series of nested functions, each taking one argument at a time.


import React from 'react'

function Header() {
  console.log("curring")

  // function curry(a){   //using currying
  //   return (b)=>{
  //   console.log(a+b)
  //   }
  // }
  // curry(10)(20)
  // curry(7)(3)



  // const curry=(a)=>(b)=>a+b;  //using arrow function
  // console.log(curry(10)(20))



//  function greet(greeting,symbol){    //using template literals
//   return `${greeting} ${symbol}`
//  }
//  console.log(greet("hello","!"))






//  function greet(greeting,symbol){    
//   // return `${greeting} ${this.name} ${symbol}`    //using template literals & destructuring


//   const {name,age} = this;      //DESTRUCTURING
//   console.log(name,age)

// //  const {nn,a} = person;
// //  console.log(nn,a)
//  }

// //  const user={name:"alice"}
// //  console.log(greet.call(user,"hello","!"))

//  const user={name:"alice" , age:19 }
// //  const person = {nn:"markuuu" , a:74}
//  greet.call(user,"hello","!")
 








//  function greet(greeting, symbol) {
//   console.log(`${greeting}, ${this.name} ${symbol}`);
// }

// const user = { name: "Alice" };
// const boundGreet = greet.bind(user);
// boundGreet("Hello", "!");        // .bind() - Creates a new function with this set to a specified object, but does not invoke it immediately.


function greet(greeting, symbol) {
  console.log(`${greeting}, ${symbol}`);
  console.log(this)
}

const user = { name: "Alice" ,age:34};
const boundGreet = greet.bind(user);
boundGreet("Hello", "!"); 




// (function sayhello(){
//   console.log("hello")
// })()    //immmediately invoking function





  return (
    <div>Header</div>
  )
}

export default Header





