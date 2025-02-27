import React from 'react'
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const LoadingButton = () => {
  return (
    <div>
        <button className='icon-loading-button load-btn-container'>
            <AiOutlineLoading3Quarters className='loading-icon'/>
            Loading...
        </button>
    </div>
  )
}

export default LoadingButton