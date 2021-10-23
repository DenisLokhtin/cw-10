import React from 'react';
import './CommentsCard.css'

const CommentsCard = (props) => (
    <div className="comments-card">
        <div>
            <b>{props.author} wrote: </b>
            <span>{props.comment}</span>
        </div>
        <div className="delete">Delete</div>
    </div>
);

export default CommentsCard;