import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Sidebar from './components/navbar/Sidebar'
import CustomerContainer from './components/customer/CustomerContainer'
import { SystemError } from './components/common'

class Main extends Component {
  render() {
    return (
      <div>
          <Sidebar/>
          <div className={'container'}>
              <SystemError errors={['1', '2', '3']} />
              <Route exact path="/" render={() => (
                  <h3>Welcome to Galaxy Customer Management System!</h3>
              )} />
              <Route path="/customer" component={CustomerContainer} />
          </div>
      </div>
    );
  }
}

export default Main;
