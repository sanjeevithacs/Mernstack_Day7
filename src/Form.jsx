import React, { useState } from 'react'

function Form() {
  const [data,setData] = useState({
    email:"" , pass:""
  })

  
  console.log(data)
  return (
<div className="flex justify-center items-center min-h-screen bg-gray-100">
  <form className="bg-slate-800  p-8  rounded-lg shadow-lg w-80 ">
    <h1 className="text-2xl font-bold text-center text-white mb-6">LOG IN/SIGN IN</h1>

      <label className="block text-white font-semibold ">Email</label>
      <input type='text' value={data.email} onChange={(e) => setData({...data,email: e.target.value})} className="w-full px-2 py-2 border border-gray-500"/>   {/* function onchange is called with parameter using '()=>' function */}

      <label  className="block text-white font-semibold mt-2">Password</label>
      <input type='password' value={data.pass} onChange={(e) => setData({...data,pass: e.target.value})} className="w-full p-3 mt-2 rounded-md text-black"  />

    <button  className="w-full text-center bg-gray-900 text-cyan-50 py-3 rounded-md text-lg font-semibold hover:bg-gray-700 transition duration-300 mt-4 ">Log In</button>

  </form>
</div>
  )
}

export default Form