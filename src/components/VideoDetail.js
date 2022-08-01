import React from "react";

const VideoDetail = ({video}) => {

    if(!video){
        return ( <div>Loading...</div> );
    }
    

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return ( 
        <React.Fragment>
     
    
        <div>
            <div className="ui embed">
                <iframe src={videoSrc} allow="autoplay; fullscreen"/>
            </div>
        </div>

        <div className="ui segment">
           <h4 className="ui header">{video.snippet.title}</h4> 
           <p>{video.snippet.description}</p>
        </div> 
        
        </React.Fragment>
    );

}

export default VideoDetail;