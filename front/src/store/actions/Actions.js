import axios from "axios";

export const SET_NEWS = 'SET_NEWS';
export const SET_COMMENTS = 'SET_COMMENTS';

export const setNews = value => ({type: SET_NEWS, payload: value});
export const setComments = value => ({type: SET_COMMENTS, payload: value});

export const fetchNews = () => {
  return async dispatch => {
    try {
      const response = await axios.get('http://localhost:8002/news');
      dispatch(setNews(response.data));
    } catch (e) {
      console.log(e)
    }
  };
};

