import axios from 'axios';

const KEY = 'AIzaSyCL3fGilu63sp66CtzXovYzt8bl-nqaKCc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});