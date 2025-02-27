import React, { useState } from 'react'

const DisabledButton = () => {
    const [buttonVal,setButtonValue] = useState("Click to start")
    const [isDisabled,setIsDisabled] = useState(true)
    const [colorValue,setColorValue] = useState('primary-disabled-button-true')


    const handleDisableAble = () => {
        setIsDisabled(!isDisabled)
        setButtonValue(isDisabled ? "Is Working!" : "Not Working!")
        setColorValue(isDisabled ? "primary-disabled-button-false" : "primary-disabled-button-true")
    }

    const handleButtonClick = () => {
        alert('Disabled Button is working now!')
    }
   return (
    <div className='grid grid-coloumn-two'>
        <button className='primary-abled-button' onClick={handleDisableAble} >Working!</button>
        <button className={`${colorValue}`} disabled={isDisabled} onClick={handleButtonClick}>{buttonVal}</button>
    </div>
  )
}

export default DisabledButton