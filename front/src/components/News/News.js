import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchComments, fetchCurrentNews, fetchNews} from "../../store/actions/Actions";
import CommentsCard from "../CommentsCard/CommentsCard";
import './News.css'

const News = (props) => {
    const dispatch = useDispatch();
    const news = useSelector(state => state.currentNews);
    const comments = useSelector(state => state.comments);

    const id = window.location.pathname.slice(-1);

    useEffect(() => {
        dispatch(fetchCurrentNews(id));
        dispatch(fetchComments(id))
    }, []);

    const toMain = () => {
        return props.history.push('/')
    }

    return (
        <div>
            <div className="expand-nav">
                <h2>{news.title}</h2>
                <span onClick={toMain}>X</span>
            </div>
            <p>{news.publication_date}</p>
            <p>{news.content}</p>
            <h2>Comments</h2>
            {comments.map(comments => {
                return (
                    <CommentsCard
                        key={comments.id}
                        author={comments.author}
                        comment={comments.comment}
                    />
                )
            })}
            <h2>Add Comments</h2>
            <div className="comment-send">
                <input type="text" placeholder="name"/>
                <input type="text" placeholder="Comment"/>
                <button>Send</button>
            </div>
        </div>
    )
};

export default News
