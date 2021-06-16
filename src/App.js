import React, { useEffect,useState } from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Videos from './Videos'
import {db} from './firebase'
function App() {
  const [videos, setVideos]= useState([])
  useEffect(() => {
    db.collection('videos')
    .onSnapshot((snapshot)=>{
        setVideos(snapshot.docs.map(doc=>doc.data()))
    })
}, []);
console.log(videos)
  return (
    <div className='app'>
      <div className='app__video'>
        {videos.map((video)=>{
          return(
            <Videos
          url={video.url}
          channel={video.channel}
          description={video.description}
          song={video.song}
          shares={video.shares}
          messages={video.messages}
          likes={video.likes}
        />
          )
        })}
      </div>
</div>
  );
}

export default App;
