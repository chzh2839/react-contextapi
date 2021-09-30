/* eslint-disable */

import React, { useState } from 'react';
import './App.css';
import ListBox from './components/ListBox';
import MyComponent from './components/MyComponent';
import { ColorProvider } from './contexts/color';
import SelectColors from './components/SelectColors';

function App() {

  return (
    <div className="App">
      <div className="black-nav">
        <div style={ { color : 'yellow', fontSize : '30px' } }>개발 블로그</div>
      </div>

      <div className="content-wrap">
        <ColorProvider>
          <SelectColors />
          <ListBox />
        </ColorProvider>
        {/* <MyComponent /> */}
      </div>
    </div>
  );
}

export default App;
