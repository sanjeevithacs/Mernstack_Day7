import { useEffect, useState } from "react";

//                                                6    CUSTOM HOOK

const useFetcher=(url)=>{
    const[data,setData] = useState([])
    useEffect(()=>{
        const getData = async()=>{
            const res = await fetch(url)
            const resParse = await res.json()
            setData(resParse)
        }
        getData()
    },[])
    return data;
}        // here , successfully we have created our 'custom hook'

export default useFetcher;