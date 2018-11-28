import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
    const options = {
      q : q,
      maxResults: 5,
      key: YOUTUBE_API_KEY
    }
    const action = {
      type: "SEARCH",
    }
    return dispatch => {
      dispatch(() => {
        searchYouTube(options,(data) => {action.payload = data});
        return action;
      });
    }
  //TODO:  Write an asynchronous action to handle a video search!
};

export default handleVideoSearch;
