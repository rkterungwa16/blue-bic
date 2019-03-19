import React from 'react'

import formCircle from '../assets/read-green-ellipse.svg'
import lightBulb from '../assets/read-book.svg'
import rightArrow from '../assets/review-arrow.svg'
import lowerCircle from '../assets/review-lower-ellipse.svg'
import readRedCircle from '../assets/read-red-ellipse.svg'
import readBlueCirce from '../assets/read-blue-ellipse.svg'

const Read= () => (
  <div className='welcome__container'>
    <div className='welcome-form__wrapper'>
      <img src={readRedCircle} alt='Red Circle' className='red-circle' />
      <img src={readBlueCirce} alt='Blue Circle' className='blue-circle' />
      <div className='form-bulb__wrapper'>
        <div className='review-image__wrapper'>
          <img src={lightBulb} alt='Light Bulb' className='review__star' />
          <img src={formCircle} alt='Form Circle' className='review-mid__circle' />
        </div>
        <div className='review-text__wrapper'>
          <span className='review__text'>Read Books</span>
          <span className='review-msg__text'>Create your account to get started. After that, you can share books and make friends.</span>
        </div>
        <div className='dot__wrapper'>
          <span className='dot'></span>
          <span className='dot active'></span>
          <span className='dot'></span>
        </div>
        <button className='review-btn'>
          <img src={rightArrow} alt='Right Arrow' />
        </button>
        <img src={lowerCircle} alt='Lower Circle' className='lowerCircle' />
        <span className='review__link'><a href='#/skip-intro' className='link__text'>Skip Intro</a></span>
      </div>
    </div>
  </div>
)

export default Read
