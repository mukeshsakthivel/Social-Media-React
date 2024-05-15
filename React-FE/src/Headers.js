import React from 'react'
import {FaLaptop,FaTabletAlt,FaMobileAlt} from 'react-icons/fa'
const Headers = ({title,width}) => {
  return (
    <header className='Header'>
        <h1>{title}</h1>
        {width<798 ? <FaMobileAlt/>:width <992 ?<FaTabletAlt/>:<FaLaptop/>   }

    </header>
  )
}

export default Headers