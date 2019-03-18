import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Welcome from './components/Welcome'
import Review from './components/Review'
import './styles/styles.scss'
import 'circular-std';
import './assets/logo.png'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route exact path='/review-books' component={Review} />
        </Switch>
      </div>
    )
  }
}

export default App
