import React, { useEffect } from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Videos from './Videos'
function App() {
  return (
    <div className='app'>
      <h1>This a app</h1>
      <div className='app__video'>
        <Videos/>
        <Videos/>
        <Videos/>
      </div>
        {/* <Switch>
        <Route exact path="/" render={()=><Layout/>}/>
        <Route exact path="/user-page" render={()=><Layout/>}/>
        </Switch> */}
</div>
  );
}

export default App;
