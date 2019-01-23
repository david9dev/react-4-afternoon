import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import ClassList from './components/ClassList/ClassList'
import Student from './components/Student/Student'
// import History from './components/History/History'
// import Contact from './components/Contact/Contact'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className='nav'>
            <div>WestSide University</div> 
            <div className='link-wrap'>
                <Link to="/" className='links'>Home</Link>
                <Link to='/about' className='links'>About</Link> 
            </div>
          </nav>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/student/:id' component={Student} /> 
            <Route path='/classlist/:class' component={ClassList}/>
            <Route path='/about'component={About}/>
          </Switch>
        </div>
      </Router>
    )
  }
}