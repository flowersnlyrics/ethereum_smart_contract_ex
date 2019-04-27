import React from 'react' ;
import VideoListItem from './video_list_item';

// props only has to be passed in for a functional component 
// class based component is this.props and is included (don't pass in)
// don't use for loops, really just use maps 
const VideoList = (props) => {

    const videoItems = props.videos.map((video) => {
        return <VideoListItem key={video.etag} video={video} />
    }); 

    return (
     <ul className="col-md-4 list-group">
        {videoItems} 
     </ul>
    ); 

}

export default VideoList; 
