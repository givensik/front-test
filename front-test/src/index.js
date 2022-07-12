import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './component/App'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { CookiesProvider, useCookies } from 'react-cookie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    
      
      <Container fixed>
        <CookiesProvider>
          <App />
        </CookiesProvider>
      </Container>
    
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// 이민재가 이거를 바꿈