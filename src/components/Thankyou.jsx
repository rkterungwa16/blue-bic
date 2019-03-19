import React from 'react'

import greenCircle from '../assets/thanks-green-ellipse.svg'
import check from '../assets/check.svg'
import home from '../assets/home.svg'
import bookOpen from '../assets/book-open.svg'
import bell from '../assets/bell.svg'
import addLike from '../assets/add-like.svg'
import book1 from '../assets/scar-tissue.png'
import book2 from  '../assets/eat-awesome.png'
import book3 from '../assets/steven-king.png'

const Thankyou = () => (
  <div className='welcome__container'>
    <div className='welcome-form__wrapper form-wrapper__column'>
      <div className='form-bulb__wrapper'>
        <div className='welcome-image__wrapper'>
          <img src={check} alt='Light Bulb' className='form-bulb__img' />
          <img src={greenCircle} alt='Form Circle' />
        </div>
        <div className='welcome-text__wrapper'>
          <span className='welcome__text'>Thank You!</span>
          <span className='welcome-msg__text thanks-msg__text--top'>You have submitted your first book for review, now you can make some friends.</span>
        </div>

        <div className='form__wrapper'>
          <button className='welcome-btn__signup'>Add Friends</button>
          <span className='redirect-login__text interests__text--top'>You may also be intereseted in:</span>
        </div>
      </div>
      <div className='books__wrapper'>
        <div className='book__interest'>
          <img src={book1} alt='Book 1' className='book__image' />
          <span className='book__interest--title'>Scar Tissue</span>
          <span className='book__interest--author'>Anthony Kiedis</span>
        </div>
        <div className='book__interest'>
          <img src={book2} alt='Book 1' className='book__image' />
          <span className='book__interest--title'>Eat Awesome</span>
          <span className='book__interest--author'>Paul Jarvis</span>
        </div>
        <div className='book__interest'>
          <img src={book3} alt='Book 1' className='book__image' />
          <span className='book__interest--title'>The Wastelands</span>
          <span className='book__interest--author'>Stephen King</span>
        </div>
      </div>
      <div className='bottom__menu--wrapper'>
        <div className='bottom__menu'>
          <div className='menu__item menu__timeline'>
            <img src={home} alt='Time line' className='menu__timeline--img' />
            <span className='menu__timeline--text'>Timeline</span>
          </div>

          <div className='menu__item menu__timeline'>
            <img src={bookOpen} alt='Time line' className='menu__timeline--img' />
            <span className='menu__timeline--text'>My Books</span>
          </div>

          <div className='menu__item menu__timeline'>
            <img src={addLike} alt='Time line' className='menu__timeline--img' />
            <span className='menu__timeline--text'>Add Review</span>
          </div>

          <div className='menu__item menu__timeline'>
            <img src={bell} alt='Time line' className='menu__timeline--img' />
            <span className='menu__timeline--text'>Notifications</span>
          </div>
        </div>
        <hr className='base-line' />
      </div>
    </div>
  </div>
)

export default Thankyou
