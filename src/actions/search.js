import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
    return dispatch => {
      searchYouTube({q, maxResults:5, key: YOUTUBE_API_KEY},(data) => {
        dispatch(changeVideoList(data));
        dispatch(changeVideo(data[0]));
      })
    };
};

export default handleVideoSearch;
