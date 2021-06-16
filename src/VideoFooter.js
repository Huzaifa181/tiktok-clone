import React from 'react'
import './VideoFooter.css';
import Ticker from 'react-ticker'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
const VideoFooter = ({channel, description, song}) => {
    console.log(channel)
    return (
        <div className='videoFooter'>
            <div className="videoFooter__text">
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div className="videoFooter__ticker">
                <MusicNoteIcon className='videoFooter__icon'/>
                <Ticker mode='smooth'>
                    {index=>{
                        return (
                            <p>{song}</p>
                        )
                    }}
                </Ticker>
                </div>
                
            </div>
            <img className='videoFooter__record' src="http://static.thenounproject.com/png/934821-200.png" alt="" />
        </div>
    )
}

export default VideoFooter
