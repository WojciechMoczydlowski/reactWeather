import React, { Component } from 'react';
import 'typeface-roboto';
import '@babel/polyfill';
import {Provider} from 'react-redux';
import store from './redux/store';

import './styles/main.scss'

import MainPage from './scenes/MainPage/MainPage'

class App extends Component {
  render() {
    return (<Provider store={store}>
      <div className="App">
        <MainPage/>
      </div>
      </Provider>
    );
  }
}

export default App;
