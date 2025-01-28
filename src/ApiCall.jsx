import React from 'react'
import { useEffect, useState } from 'react'
import useFetcher from './useFetcher'

function ApiCall() {
    const [data,setData] = useState([])

    // useEffect(() => {
    //     const getData = async () => {
    //         let res = await fetch('https://jsonplaceholder.typicode.com/posts')
    //         let resParse = await res.json()
    //         setData(resParse)
    //     }
    //     getData()
    // })


    //                                                   CUSTOM HOOK

    let hookresp = useFetcher("https://jsonplaceholder.typicode.com/posts") 
    console.log(hookresp)

    return (
        <div>
            {data.map((i)=><li>{i.body}</li>)}
            </div>
    )
}
export default ApiCall