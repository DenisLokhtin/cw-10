import React from 'react';
import './AddNews.css'

const AddNews = (props) => {

    const toMain = () => {
        return props.history.push('/')
    }

return (
    <div>
        <div className="nav-add">
            <h2>Add News</h2>
            <span onClick={toMain}>X</span>
        </div>
        <div className="inputs">
            <input type="text" placeholder="Title"/>
            <textarea type="text" placeholder="Content" rows="10" cols="5"/>
            <input type="file"/>
            <button>Send</button>
        </div>
    </div>
)
};

export default AddNews;