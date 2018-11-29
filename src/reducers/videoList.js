import Redux from 'redux';


var videoListReducer = (state = [], action) => {

  if(action.type === 'CHANGE_VIDEO_LIST'){
    return action.videos
  }
  return state;
  //TODO: define a reducer for the videoList field of our state.
};

export default videoListReducer;
