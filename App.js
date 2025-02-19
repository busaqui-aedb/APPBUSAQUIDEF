/* eslint-disable prettier/prettier */
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import MainStack from './src/navigators/MainStack';
import { store, persistor } from './src/services/store';
import Home from './src/screens/Home';

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>  
      {/* <MainStack/>  */}
      <Home/>
    </PersistGate>{/*Fim PersistGate */}
  </Provider>/*Fim Provider*/
);/*Fim Export default*/