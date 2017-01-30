import React from "react"; 
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Index from "./index.jsx"
import Catalog from "./catalog.jsx"



ReactDOM.render (
    <Router history={hashHistory}>
        <Route path="/" component={Index} />
        <Route path="/catalog" component={Catalog} />
    </Router>,
    document.getElementById("wrapper")
);

