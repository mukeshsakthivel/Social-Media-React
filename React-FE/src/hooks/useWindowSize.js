import React, { useEffect, useState } from 'react'

const useWindowSize = () => {
    const [windowSize,setWindowSize]=useState({width:undefined,hight:undefined})

    useEffect(()=>{
        const handlesize=()=>{
            setWindowSize({
                        width:window.innerWidth,
                        hight:window.innerHeight
            })
        }
        handlesize();
        window.addEventListener("resize",handlesize)
        
    },[])
    
  return windowSize
}

export default useWindowSize