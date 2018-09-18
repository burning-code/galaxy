import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { SystemError } from './components/common'
import Sidebar from './components/navbar/Sidebar'
import Home from './components/home/Home'
import CustomerContainer from './components/customer/CustomerContainer'


class Main extends Component {
  render() {
    return (
      <div>
          <Sidebar/>
          <div className={'container'}>
              <SystemError />
              <Route exact path="/" component={Home} />
              <Route path="/customer" component={CustomerContainer} />
          </div>
      </div>
    );
  }
}

export default Main;
