import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function User() {
    const  {routeParam} = useParams()   //to send parameters this hooks is used
    console.log(routeParam);

    const navigate = useNavigate();
    function handleclick(){
        navigate('/home')
    }

  return (
    <>User:{routeParam}
    <button onClick={handleclick}>button</button>
    </>
  )
}

export default User