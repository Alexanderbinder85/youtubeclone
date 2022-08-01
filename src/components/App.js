import React,{ useEffect , useState} from 'react';
import ReactDOM from 'react-dom/client';
import Searchbar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () => {

  
    const [selectedVideo, setSelectedVideo] = useState(null);
    // state = {videos: [], selectedVideo: null };
    const [videos, search] = useVideos('Elvis');




    useEffect(() => {
        // search('elivs');

        setSelectedVideo(videos[0]);
        
    }, [videos]);


    return( 
        <div className='ui container' style={ { marginTop: '10px' } }>
            <Searchbar searchFromAppCallBack={search}/>
        
            <div className='ui grid'>
                <div className='ui row'>

                    <div className='eleven wide column'>
                        <VideoDetail video={selectedVideo}/>
                    </div>

                    <div className='five wide column'>
                        <VideoList onVideoSelect={setSelectedVideo} videos={videos}/>
                    </div>
    

            

                </div>
                        
            
            </div>
        </div>
   ); 

  };



       
    
    
     




export default App;