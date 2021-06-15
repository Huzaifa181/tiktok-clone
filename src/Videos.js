import React, { useRef, useState } from 'react'
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'
import './Videos.css'
const Videos = () => {
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
                <source src="https://media.istockphoto.com/videos/abstract-background-with-3d-rings-and-rotating-parts-clean-and-modern-video-id1248225100" type='video/mp4'/>
            </video>
            <VideoFooter
            channel="Huzaifa"
            description="Hi how are you"
            song="WHats up"
            />
            <VideoSidebar/>
            {/* <iframe width="727" height="409" src="https://www.youtube.com/embed/GePLvNgWROg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
        </div>
    )
}

export default Videos
