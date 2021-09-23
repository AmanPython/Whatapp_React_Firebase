import React,{useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import { LaptopMac } from '@material-ui/icons';
import {IconButton } from '@material-ui/core';
import GmailLogin from './Components/GmailLogin';



function App() {
  return (
    <div className="App">
        <div>
          <GmailLogin/>
        </div>
    </div>
  );
}

export default App;
