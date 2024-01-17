import React from 'react'
import Logo from '../../img/logo.webp'
import {UilSearch} from '@iconscout/react-unicons'
import './LogoSearch.css'

const LogoSearch = () => {
  return (
   <div className="LogoSearch">
       <img className="logoImg" src={Logo} alt="" />
       <div className="Search">
           <input type="text" placeholder='#Explore' />
           <div className="s-icon">
               <UilSearch/>
           </div>
       </div>
   </div>
  )
}

export default LogoSearch
