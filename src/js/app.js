import React from "react"; 
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Index from "./index.jsx"
import Catalog from "./catalog.jsx"
import Polimer from "./polimer.jsx"
import About from "./about.jsx"
import Contacts from "./сontacts.jsx"

import Lessons from "./lessons.jsx"
import LessonsInfo from "./lessonsInfo.jsx"

import InStock from "./inStock/inStock.jsx"
import ProductInStock from "./inStock/product-inStock.jsx"

import All from "./all/all.jsx"
import ProductAll from "./all/product-all.jsx"

import Pendants from "./pendants/pendants.jsx"
import ProductPendant from "./pendants/product-pendant.jsx"



//import "./Other/jquery.min.js"
//import "./Other/jquery.bxslider.js"
//import "./Other/html5shiv.js"
//import "./Other/respond.js"

ReactDOM.render (
    <Router history={browserHistory}>
        <Route path="/" component={Index} />
        <Route path="/about" component={About} />
        <Route path="/contacts" componet={Contacts} />
        <Route path="/lessons" component={Lessons} >
        <Route path="/lessons/:lessonId" component={LessonsInfo} />
        </Route>
        <Route path="/catalog" component={Catalog} />
        <Route path="/catalog/polimer" component={Polimer} >
        <Route path="/catalog/polimer/inStock" component={InStock} >
        <Route path="/catalog/polimer/inStock/:productId" component={ProductInStock} />
        </Route>
        <Route path="/catalog/polimer/all" component={All} >
        <Route path="/catalog/polimer/all/:productId" component={ProductAll} />
        
        </Route>
        <Route path="/catalog/polimer/pendants" component={Pendants} >
        <Route path="/catalog/polimer/pendants/:productId" component={ProductPendant} />
        </Route>
        </Route>
    </Router>,
    document.getElementById("main")
);

