import React, { useState } from 'react'

const PasswordInput = () => {
    const [isInvalid,setIsInvalid] = useState(false)
    
    const handleInputValidation = (e) => {
        const value = e.target.value;
        const isValid = /^[a-zA-Z]+$/.test(value);
        setIsInvalid(!isValid)
    }
  return (
    <>
        <div className='main-form-container'>
            <div>
                <h2>Password Input Form</h2>
            </div>
            <div className='password-form'>
                <form className='form'>
                    <div className='pass-default'>
                        <label htmlFor='defaultPassword'>Default Password</label>
                        <input
                            type='password'
                            name='password'
                            placeholder='Default Password'
                            required
                            autoComplete='off'
                            id='defaultPassword'
                            className='defaultPassword'
                        />
                    </div>
                    <div className='pass-focus'>
                        <label htmlFor='defaultPassword'>Focus Password</label>
                        <input
                            type='password'
                            name='password'
                            placeholder='Focus Password'
                            required
                            autoComplete='off'
                            id='defaultPassword'
                            className='defaultPassword'
                        />
                    </div>
                    <div className='pass-invalid'>
                        <label htmlFor='defaultPassword'>Invalid Password</label>
                        <input
                            type='password'
                            name='password'
                            placeholder='Invalid Password'
                            required
                            autoComplete='off'
                            id='defaultPassword'
                            className={`invalidInput ${isInvalid ? 'error' : ""}`}
                            onInput={handleInputValidation}
                        />
                    </div>
                    <div className='pass-placeholder'>
                        <label htmlFor='defaultPassword'>Placeholder Password</label>
                        <input
                            type='password'
                            name='password'
                            placeholder='Placeholder Password'
                            required
                            autoComplete='off'
                            id='defaultPassword'
                            className='defaultPassword'
                        />
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default PasswordInput