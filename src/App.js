import React from 'react';
import './App.css';
import CustomRouter from './Router';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

export default function App() {
    return (
      <CustomRouter history={history}/>
    );
}


