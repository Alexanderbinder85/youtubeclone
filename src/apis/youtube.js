import axios from 'axios';

const KEY  = 'AIzaSyA3FDrW2kfQ0qPkmtUmxf8cZyVem3KjcJg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    },
    
  headers: {}
    
});