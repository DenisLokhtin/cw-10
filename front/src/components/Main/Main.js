import React, {useEffect} from 'react';
import NewsCard from '../NewsCard/NewsCard'
import {useDispatch, useSelector} from "react-redux";
import {fetchNews} from "../../store/actions/Actions";
import './Main.css'

const Main = (props) => {
    const dispatch = useDispatch();
    const news = useSelector(state => state.news);

    useEffect(() => {
        dispatch(fetchNews())
    }, [])

    const toAdd = () => {
        return props.history.push('/news/new')
    };

    const  printNews = () => {
        console.log(news)
        if (news) {
            return news.map(news => {
                return (
                    <NewsCard
                        key={news.id}
                        file={news.file}
                        title={news.title}
                        date={news.publication_date}
                        history={props.history}
                        id={news.id}
                    />
                )
            })
        }
    }


    return (
        <div>
            <div className="main-header">
                <h2>Posts</h2>
                <button onClick={toAdd}>Add new news</button>
            </div>
            <div>
                {printNews()}
            </div>
        </div>
    )
};

export default Main;