import React,{useState} from 'react';
import './VideoSidebar.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageIcon from '@material-ui/icons/Message';
const VideoSidebar = () => {
    const [liked, setLiked] = useState(false)
    return (
        <div className='videoSidebar'>
            <div className="videoSidebar__button">
                <FavoriteIcon/>
                <p>300</p>
            </div>
            <div className="videoSidebar__button">
                <FavoriteBorderIcon/>
                <p>300</p>
            </div>  
            <div className="videoSidebar__button">
                <MessageIcon/>
                <p>300</p>
            </div>  
            
        </div>
    )
}

export default VideoSidebar
