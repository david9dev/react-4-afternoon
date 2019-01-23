import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import History from './../History/History'
import Contact from './../Contact/Contact'

export default class About extends Component {
  render() {
    return (
      <div>
        <div className='subnav'>
          <Link className='subnav_links' to='/about'><h3>About</h3></Link>
          <Link className='subnav_links' to='/about/history'><h3 >History</h3></Link>
          <Link className='subnav_links' to='/about/contact'><h3>Contact</h3></Link>
        </div>

        <div className='box'>
          <Switch>
            <Route path='/about/history' component={History} />
            <Route path='/about/contact' component={Contact} />
            <Route exact path='/about' render={() => (
              <div>
                <h1>About the University</h1>
                <p>
                  Nullam cursus sem sit amet quam sollicitudin blandit. Phasellus quis odio nec magna ultricies lacinia ut quis nisi. Fusce ultricies leo at quam vehicula, sit amet tincidunt nisl scelerisque. Mauris vitae hendrerit quam. Maecenas sed mi a turpis sollicitudin bibendum. Pellentesque id felis in leo cursus pharetra ac non purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec sapien tortor, cursus at sem ac, posuere condimentum mauris. Mauris auctor mi massa, non ullamcorper orci dapibus et. Phasellus ut pharetra nisl. Phasellus eu rhoncus lorem. In quis metus venenatis, eleifend dui a, iaculis arcu.
                </p>
              </div>)
            } />
          </Switch>
        </div>
      </div>
    )
  }
}