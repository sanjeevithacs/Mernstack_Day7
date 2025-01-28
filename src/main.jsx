//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Header.jsx'     //from Header.jsx
import Footer from './Footer.jsx'
import Content from './Content.jsx'
import { Comp1, Comp2, Comp3, Comp4, Comp5 } from './Component.jsx';
import mycontext from './ContextApi.jsx'

import "./App.css"


let data="global data"
let data1="global data1"

createRoot(document.getElementById('root')).render(
    <>
    <Header></Header>  {/* currying */}

    <mycontext.Provider value={{data,data1}}>     {/* value - attribute , data - any global data , here given as object */}
    <App></App>
    </mycontext.Provider>   {/* wrapping 'App' into mycontext */}


</>
)

//<Header></Header>  - on giving this content in header.jsx will be displayed as output





