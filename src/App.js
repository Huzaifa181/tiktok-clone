import React, { useEffect } from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Videos from './Videos'
function App() {
  return (
    <div className='app'>
      <div className='app__video'>
        <Videos
        url="https://media.istockphoto.com/videos/abstract-background-with-3d-rings-and-rotating-parts-clean-and-modern-video-id1248225100"
          channel='Huzaifa'
          description="Whats app"
          Song="Hi How are you"
          shares={200}
          messages={130}
          likes={190}
        />
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
