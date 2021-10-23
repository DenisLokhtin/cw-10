import React from 'react';
import NewsCard from '../NewsCard/NewsCard'
import './Main.css'

const Main = (props) => (
    <div>
       <p className="main-header">
           <h2>Posts</h2>
           <button>Add new news</button>
       </p>
        <div>
            <NewsCard/>
        </div>
    </div>
);

export default Main;