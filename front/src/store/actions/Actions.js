import axios from "axios";

export const SET_NEWS = 'SET_NEWS';
export const SET_COMMENTS = 'SET_COMMENTS';
export const SET_CURRENT_NEWS = 'SET_CURRENT_NEWS';

export const setNews = value => ({type: SET_NEWS, payload: value});
export const setComments = value => ({type: SET_COMMENTS, payload: value});
export const setCurrentNews = value => ({type: SET_CURRENT_NEWS, payload: value});

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

export const fetchCurrentNews = (id) => {
  return async dispatch => {
    try {
      const response = await axios.get('http://localhost:8002/news/' + id);
      dispatch(setCurrentNews(response.data));
    } catch (e) {
      console.log(e)
    }
  };
};

export const fetchComments = (id) => {
  return async dispatch => {
    try {
      const response = await axios.get('http://localhost:8002/comments?news_id=' + id);
      dispatch(setComments(response.data));
    } catch (e) {
      console.log(e)
    }
  };
};

export const deleteNews = (id) => {
  return async dispatch => {
    try {
      await axios.delete('http://localhost:8002/news/' + id);
    } catch (e) {
      console.log(e)
    }
  };
};

export const deleteComment = (id) => {
  return async dispatch => {
    try {
      await axios.delete('http://localhost:8002/comments/' + id);
    } catch (e) {
      console.log(e)
    }
  };
};

