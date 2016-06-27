import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
import $ from 'jquery'
import ChatApp from './components/ChatApp/App.jsx'
import  '../styles/app.less'

$(function(){
  render((
    <Router>
      <Route path="/" component={ChatApp} />
    </Router>
  ), document.getElementById('app-container'));

})
