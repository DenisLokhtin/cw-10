import React from 'react';
import imageNotAvailable from '../../assets/images/not_available.png';
import './NewsCard.css';

const NewsCard = (props) => {

    const imgSrc = () => {
        if (props.file) {
            return 'http://localhost:8002/public/uploads/' + props.file;
        } else {
            return imageNotAvailable;
        }
    };

    const toExtendedNews = () => {
        return props.history.push('/news/'  + props.id)
    };

    return (
        <div className="card">
            <div className="card-inner">
                <div className="img">
                    <img src={imgSrc()} alt="img"/>
                </div>
                <div className="card-container">
                    <div>
                        <p>
                            {props.title}
                        </p>
                    </div>
                    <div className="additional-info">
                        <div className="date">{props.date} </div>
                        <div onClick={toExtendedNews} className="buttons-card">Read full post >>> </div>
                        <div className="buttons-card">Delete </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default NewsCard;