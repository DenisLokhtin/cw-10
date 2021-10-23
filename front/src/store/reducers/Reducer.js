import {SET_NEWS, SET_COMMENTS, SET_CURRENT_NEWS} from "../actions/Actions";

const initialState = {
  news: [],
  comments: [],
  currentNews: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEWS:
      return {...state, news: action.payload};
    case SET_COMMENTS:
      return {...state, comments: action.payload};
    case SET_CURRENT_NEWS:
      return {...state, currentNews: action.payload};
    default:
      return state;
  }
};

export default reducer;