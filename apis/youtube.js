import axios from 'axios'

const KEY = 'AIzaSyAD107u7DsPzI0-qzzFU65N2_w7M-b1v64'

export default axios.create ({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
