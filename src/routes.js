import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import Login from './Login';
import Home from './Home';

const Routes = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Route path='/' exact component={Login} />
          <Route path='/Home' component={Home} />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  ) 
}

export default Routes;