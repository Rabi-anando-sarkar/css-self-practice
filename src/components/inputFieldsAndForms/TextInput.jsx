import React, { useState } from 'react'

const TextInput = () => {
    const [isInvalid,setIsInvalid] = useState(false)

    const handleInputValidation = (e) => {
        const value = e.target.value;
        const isValid = /^[a-zA-Z]+$/.test(value);
        setIsInvalid(!isValid)
    }
  return (
    <>
        <div className='main-form-conatiner'>
            <div>
                <h2>Default input Form</h2>
            </div>
            <form className='text-form'>
            <div className='invInput-default'>
                <label htmlFor='defaultInput'>Default Text Input</label>
                <input 
                    placeholder='Default Input'
                    name='default'
                    type='text'
                    required
                    autoComplete='off'
                    id='defaultInput'
                    className='defaultInput'
                />
            </div>
            <div className='invInput-focus'>
                <label htmlFor='focusInput'>Focus Text Input</label>
                <input 
                    placeholder='Focus Input'
                    name='focus'
                    type='text'
                    required
                    autoComplete='off'
                    id='focusInput'
                    className='focusInput'
                />
            </div>
            <div className='invInput-invalid'>
                <label htmlFor='invalidInput'>Invalid Text Input</label>
                <input 
                    placeholder='Invalid Input'
                    name='invalid'
                    type='text'
                    autoComplete='off'
                    id='invalidInput'
                    className={`invalidInput ${isInvalid ? 'error' : ""}`}
                    onInput={handleInputValidation}
                />
            </div>
            <div className='invInput-placeholder'>
                <label htmlFor='placeholderInput'>Placeholder Text Input</label>
                <input 
                    placeholder='Placeholder Input'
                    name='placeholder'
                    type='text'
                    disabled
                    autoComplete='off'
                    id='placeholderInput'
                    className='placeholderInput'
                />
            </div>
        </form>
        </div>
    </>
  )
}

export default TextInput