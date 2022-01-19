import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './App';
import Vista1 from './views/Vista1';
import Vista2 from './views/Vista2';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Vista1 />} />
        <Route path='/0' element={<Vista1 />} />
        <Route path='/1' element={<Vista2 />} />
        <Route path='/2' element={<Vista1 />} />
        <Route path='/3' element={<Vista2 />} />
      </Route>
    </Routes>
  </BrowserRouter>
  ,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

