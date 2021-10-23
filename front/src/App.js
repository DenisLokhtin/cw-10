import {Route, Switch} from "react-router-dom";
import Main from "./components/Main/Main";
import AddNews from "./components/AddNews/AddNews";
import News from "./components/News/News";
import React from "react";
import './App.css'

const App = () => (
<div>
    <div className="header">
        <h1>NEWS</h1>
    </div>
   <div className="container">
       <div className="container-inner">
           <Switch>
               <Route path="/" exact component={Main}/>
               <Route path="/news" exact component={Main}/>
               <Route path="/news/new" component={AddNews}/>
               <Route path="/news/:id" component={News}/>
           </Switch>
       </div>
   </div>
</div>
);

export default App;
