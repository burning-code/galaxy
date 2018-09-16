import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import Sidebar from './app/components/navbar/Sidebar'
import CustomerContainer from './app/components/customer/CustomerContainer'

class App extends Component {
  render() {
    return (
      <div>
          <Sidebar/>
          <div className={'container'}>
              <Route exact path="/" render={() => (
                  <h3>Welcome to Galaxy Customer Management System!</h3>
              )} />
              <Route path="/customer" component={CustomerContainer} />
          </div>
      </div>
    );
  }
}

export default App;
