import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Content from './Content';
import Footer from './Footer';
import ApiCall from './ApiCall';


// function App() {
//   //const [count, setCount] = useState(0)

//   // let data1 = "Parent data"  //parent to child
  
//   // function getdata(data){     //child to parent
//   //   console.log(data);
//   // }

//   // const [childData, setChildData] = useState("");   //child to child
//   // function getdata(data) {
//   //   setChildData(data);   // Set the state with child data
//   // }

//   return (
//     <>

// <Content pdata={getdata} /> {/* Pass function to Content to send data */}
// <Footer pdata={childData} /> {/* Pass the child data to Footer */}


//     {/*<ApiCall/>       {/* hook */}

//     {/*<Footer/>   {/*for hooks*/}

//     {/* <Content pdata={getdata}/>
//     <Footer pdata ={data1}/> */}  {/* for types of data transfer */}

//     {/* <Header/> */}
//     {/* <Content/>
//     <Footer/>
//     <Comp1 />
//     <Comp2 />
//     <Comp3 />
//     <Comp4 />
//     <Comp5 /> */}
//     </>
//   )
// }

// export default App





// // we can use <Header></Header> instead <Header/>  - functional component
// //<></> - used to wrap many containers

// //not necessary to write <Header/> - it requires in case of crash
// //<Header></Header>  - on giving this content in header.jsx will be displayed as output






// // export default App
// // // we can use <Header></Header> instead <Header/>  - functional component
// // //<></> - used to wrap many containers

// // //not necessary to write <Header/> - it requires in case of crash
// // //<Header></Header>  - on giving this content in header.jsx will be displayed as output

// // //sibling to sibling















// //                                                      TO-DO LIST

// import  Todo from './Todo'
// function App() {

//   return (
//     <>

//      <Todo/>

//     </>
//   )
// }

// export default App


// //create input box add button name it as save















//                                                         DAY-5 

//                                                    REACT ROUTER DOM 


import { BrowserRouter,Routes,Route} from 'react-router-dom'; 
import Home from './Home';
import About from './About';
import Contact from './Contact';
import OldBook from './OldBook';
import NewBook from './NewBook';
import User from './User';

import { Link } from 'react-router-dom';   // for react router component

function App() {

  return (
    <>

    {/* <Home/> */}

    {/* ROUTING. */}

    {/* <ul>
      <li><a href="/home" >Home</a></li>
      <li><a href="/about" >About</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul> */}


    <BrowserRouter>
    {/* <ul>
      <li><Link to="/home" >Home</Link></li>
      <li><Link to="/about" >About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul> */}

    <Routes>

      


      {/* Static Route */}
      <Route path='/home' element = {<Home/>}/>     {/* use like this '<Route/>' | path - lowercase | o/p - change the suffix of o/p web link with '/home'*/} 
      <Route path='/about' element = {<About/>}/>
      <Route path='/contact' element = {<Contact/>}/>
      
      <Route path='/books'>            {/* nested route */}
      <Route path='oldbooks' element = {<OldBook/>}/>
      <Route path='newbooks' element = {<NewBook/>}/>
      </Route>

      <Route path='/user/:routeParam' element = {<User/>} /> {/* : - dynamic route */}
   
        </Routes>
        </BrowserRouter>

    </>
  )
}

export default App