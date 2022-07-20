import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './component/App'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { CookiesProvider, useCookies } from 'react-cookie';

import { legacy_createStore as createStore } from 'redux';
import { Provider} from 'react-redux'
function reducer(currentstate, action){
  if(currentstate === undefined){
    return {
      login : 1
    }
  }
  let newState ={...currentstate}
  if(action.type === 'TOKEN_CREATE'){
    newState.login = 2;
    return newState
  }
}
const store = createStore(reducer);



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  
    
      
      <Container fixed>
        <CookiesProvider>
          <Provider store ={store}>
            <App />
          </Provider>
        </CookiesProvider>
      </Container>
    
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// 이민재가 이거를 바꿈