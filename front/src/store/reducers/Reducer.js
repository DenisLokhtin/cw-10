import {SET_NEWS, SET_COMMENTS} from "../actions/Actions";

const initialState = {
  news: [],
  comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEWS:
      console.log(state)
      return {...state, news: action.payload};
    case SET_COMMENTS:
      return {...state, comments: action.payload};
    default:
      return state;
  }
};

export default reducer;