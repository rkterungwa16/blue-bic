import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }

    this.openHeaderTab = this.openHeaderTab.bind(this)
  }

  openHeaderTab () {
    this.setState({
      open: !this.state.open
    })
  }

  render () {
    return (
      <div className='header'>
        <div className='header__left'>
          <img
            className='header__logo'
            src={logo} alt='Blue bic'
          />
        </div>
        <div
          className={!this.state.open ? 'header__center' : 'header__center responsive'}>
          <Link
            to='/'
            className='header__link'
          >Welcome</Link>
          <Link
            to='/review-books'
            className='header__link'
          >Review Books</Link>
          <Link
            to='/read-books'
            className='header__link'
          >Read Books</Link>

          <Link
            to='/thank-you'
            className='header__link'
          >Thank You</Link>

          <Link
            to='/book-list'
            className='header__link'
          >Book List</Link>
        </div>
        <div
          className='header__icon'
          onClick={this.openHeaderTab}
        >
          <i className='fa fa-bars fa-3x header-menu__icon' />
        </div>
      </div>
    )
  }
}

export default Header
