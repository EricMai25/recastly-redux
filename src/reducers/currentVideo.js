import Redux from 'redux';


var currentVideoReducer = (state = null, action) => {
  if ( action.type === 'CHANGE_VIDEO') {
    return action.video || state
  }
  return state
};

export default currentVideoReducer;
