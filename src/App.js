import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Welcome from './components/Welcome'
import Review from './components/Review'
import Read from './components/Read'
import Thankyou from './components/Thankyou'
import './styles/styles.scss'
import 'circular-std';

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route exact path='/review-books' component={Review} />
          <Route exact path='/read-books' component={Read} />
          <Route exact path='/thank-you' component={Thankyou} />
        </Switch>
      </div>
    )
  }
}

export default App
