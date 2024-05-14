import React from 'react'
import Home from '../../pages/Home/Home'
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
const Layout = () => {
  return (
    <>
    <div className="sidebar-section">
        <div className='sidebar'>
            <div className='sidebar-toggle-icons'>
               <p>
                < MdKeyboardDoubleArrowLeft size={30}/>
               </p>
            </div>
        </div>
        <div className='container'>
<Home />
        </div>

    </div>


    </>
  )
}

export default Layout