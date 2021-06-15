import React, { useRef, useState } from 'react'
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'
import './Videos.css'
const Videos = ({
    url,
    channel,
    description,
    song,
    likes,
    messages,
    shares
}) => {
    const [playing, setPlaying] = useState(false)
    const videoRef = useRef(null)
    const onVideoPress=()=>{
        if(playing){
            videoRef.current.pause()
            setPlaying(false)
        }
        else{
            videoRef.current.play()
            setPlaying(true)
        }
    }
    return (
        <div className='video'>
            <video loop
            ref={videoRef}
            onClick={onVideoPress}
            className='video__player'>
                <source src={url} type='video/mp4'/>
            </video>
            <div className='video__playerLogo'>        
                <img src="https://www.citypng.com/public/uploads/preview/tik-tok-horizontal-logo-text-social-media-11583758361kleyi809yb.png" alt="" />
            </div>
            
            <VideoFooter
            channel={channel}
            description={description}
            song={song}            />
            <VideoSidebar shares={shares} message={messages} likes={likes}/>
            {/* <iframe width="727" height="409" src="https://www.youtube.com/embed/GePLvNgWROg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
        </div>
    )
}

export default Videos
