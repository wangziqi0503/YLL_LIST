import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';
import {GlobalStyle} from "./style";
import Home from './pages/home';
import Write from './pages/infowrite';
import Info from './pages/userinfo';

class App extends Component {
 
  render(){
    return (  
      <div>
        <Provider store={store} >
            <BrowserRouter>
              <div>
                  <Route path='/' exact component={Home}></Route>
                  <Route path='/write' exact component={Write}></Route>
                  <Route path='/info' exact component={Info}></Route>
              </div>
            </BrowserRouter>
            <GlobalStyle />
        </Provider>
      </div>
    )
  }
}

export default App;
