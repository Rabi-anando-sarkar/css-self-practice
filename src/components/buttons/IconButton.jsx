import React from 'react'
import { FaCirclePlus } from "react-icons/fa6";

const IconButton = () => {
  return (
    <div>
        <button className='icon-button icon-btn-container'>
            <FaCirclePlus className='plus-icon' />
            Upload here
        </button>
    </div>
  )
}

export default IconButton