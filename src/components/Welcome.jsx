import React from 'react'

import formCircle from '../assets/form-circle.svg'
import lightBulb from '../assets/light-bulb.svg'
import topCornerCircle from '../assets/form-top-corner-circle.svg'
import inputCircle from '../assets/input-circle.svg'

const Welcome = () => (
  <div className='welcome__container'>
    <div className='welcome-form__wrapper'>
      <img src={topCornerCircle} alt='Top Corner Circle' className='form-circle__top' />
      <div className='form-bulb__wrapper'>
        <img src={lightBulb} alt='Light Bulb' className='form-bulb__img' />
        <img src={formCircle} alt='Form Circle' />
        <span className='welcome__text'>Welcome!</span>
        <span className='welcome-msg__text'>Create your account to get started. After that, you can share books and make friends.</span>
        <span className='welcome-email__text'>Email</span>
        <img src={inputCircle} alt='Input Circle' className='input-circle' />
        <input className='welcome-email__input' type='email' />
        <span className='welcome-password__text'>Password</span>
        <input className='welcome-password__input' type='password' />
        <span className='welcome-confirm-password__text'>Type Password Again</span>
        <input className='welcome-confirm-password__input' type='password' />
        <button className='welcome-btn__signup'>Signup</button>
        <span className='redirect-login__text'>Already have an account? <a href='#/login'>Login</a></span>
      </div>
    </div>
  </div>
)

export default Welcome
