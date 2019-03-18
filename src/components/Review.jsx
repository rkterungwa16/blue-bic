import React from 'react'

import formCircle from '../assets/review-middle-ellipse.svg'
import lightBulb from '../assets/review-star.svg'

const Review = () => (
  <div className='welcome__container'>
    <div className='welcome-form__wrapper'>
      <div className='form-bulb__wrapper'>
        <img src={lightBulb} alt='Light Bulb' className='review__star' />
        <img src={formCircle} alt='Form Circle' className='review-mid__circle' />
        <span className='review__text'>Review Them</span>
        <span className='review-msg__text'>Create your account to get started. After that, you can share books and make friends.</span>
        <button className='review-btn'>Signup</button>
        <span className='review__link'><a href='#/skip-intro' className='link__text'>Skip Intro</a></span>
      </div>
    </div>
  </div>
)

export default Review
