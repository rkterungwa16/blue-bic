import React from 'react'

import home from '../assets/home.svg'
import bookOpen from '../assets/book-open.svg'
import bell from '../assets/bell.svg'
import addLike from '../assets/add-like.svg'
import topEllipse from '../assets/book-list-ellipse.svg'
import searchIcon from '../assets/search.svg'
import ratedStar from '../assets/star-rated.svg'
import unratedStar from '../assets/star-unrated.svg'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'

const BookList = () => (
  <div className='welcome__container'>
    <div className='welcome-form__wrapper form-wrapper__column'>
      <img src={topEllipse} alt='Top Ellipse' className='top-ellipse' />
      <span className='booklist__text--top'>My Book List</span>
      <img src={searchIcon} alt='Search Icon' className='search-icon' />
      <input
        className='book-list__search'
        type='text'
        placeholder='Search Text'
      />
      <div className='form-bulb__wrapper booklist-form__wrapper--top'>
        <div className='booklist-text__wrapper'>
          <span className='redirect-login__text books__reviewed--text'>Books reviewed by you</span>
        </div>
      </div>

      <div className='book__list'>
        <div className='book__list--item'>
         <div className='booklist__image--wrapper'>
          <img src={image1} alt='Book Item 1' className='booklist__item--image' />
         </div>
          <div className='booklist__item--text'>
            <div className='booklist__item--info'>
              <span className='booklist__item--title'>Remote: Office Not Required</span>
              <span className='booklist__item--author'>Jason Fried</span>
            </div>
            <div className='booklist__ratings'>
              <img src={ratedStar} alt='Rated' />
              <img src={ratedStar} alt='Rated' />
              <img src={ratedStar} alt='Rated' />
              <img src={ratedStar} alt='Rated' />
              <img src={unratedStar} alt='UnRated' />
            </div>
          </div>
        </div>
        <div className='book__list--item'>
         <div className='booklist__image--wrapper'>
          <img src={image2} alt='Book Item 1' className='booklist__item--image' />
         </div>
          <div className='booklist__item--text'>
            <div className='booklist__item--info'>
              <span className='booklist__item--title'>Papillon</span>
              <span className='booklist__item--author'>Henri Charriere</span>
            </div>
            <div className='booklist__ratings'>
              <img src={ratedStar} alt='Rated' />
              <img src={ratedStar} alt='Rated' />
              <img src={ratedStar} alt='Rated' />
              <img src={ratedStar} alt='Rated' />
              <img src={unratedStar} alt='UnRated' />
            </div>
          </div>
        </div>
      </div>

      <button className='welcome-btn__signup book-list__btn'>Add Book Review</button>
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

export default BookList
