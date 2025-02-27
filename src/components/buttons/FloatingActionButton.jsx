import React, { useState } from 'react'
import { FaCirclePlus } from "react-icons/fa6";
import { MdCreate } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { IoReader } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import FABButton from './FABButton';

const FloatingActionButton = () => {

    const [isOpen,setIsOpen] = useState(false)

    const handleFABMenu = () => {
        setIsOpen(!isOpen)
    }
  return (
    <div className='main-fab-button'>
        <div className={`fab-menu ${isOpen ? 'open' : ''}`}>
            <FABButton 
                icons={<MdCreate className='fab-icon-create'/>} 
                onClick={() => alert('Created!')}
                className='create create-bg'
            />
            <FABButton 
                icons={<AiFillEdit className='fab-icon-update'/>} 
                onClick={() => alert('Edited!')}
                className='update update-bg'
            />
            <FABButton 
                icons={<IoReader className='fab-icon-read'/>} 
                onClick={() => alert('Readed!')}
                className='read read-bg'
            />
            <FABButton 
                icons={<MdDelete className='fab-icon-delete'/>} 
                onClick={() => alert('Deleted!')}
                className='delete delete-bg'
            />
        </div>
        <div >
            <button 
                className='fab-button fab-btn-container'
                onClick={handleFABMenu}
            >
                <FaCirclePlus className='fab-icon' />
            </button>
        </div>
    </div>
  )
}

export default FloatingActionButton