import React from "react"; 
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Index from "./index.jsx"
import Catalog from "./catalog.jsx"
import Polimer from "./polimer.jsx"
import About from "./about.jsx"
import Contacts from "./contacts.jsx"
import Main from "./main.jsx"
import Lessons from "./lessons.jsx"
import LessonsInfo from "./lessonsInfo.jsx"
import LessonsImage from "./lessonsImage.jsx"

import { InStock, ProductInStock } from "./inStock/inStock.jsx"
import { All, ProductAll} from "./all/all.jsx"
import { Pendants, ProductPendant } from "./pendants/pendants.jsx"
import { Earrings, ProductEarrings } from "./earrings/earrings.jsx"
import { Rings, ProductRings } from "./rings/rings.jsx"
import { Clips, ProductClips } from "./clips/clips.jsx"
import { Another, ProductAnother } from "./another/another.jsx"
import {Sets, ProductSets } from "./sets/sets.jsx"


import "./other.js"
import "./Other/jquery.min.js"
import "./Other/jquery.bxslider.min.js"
//import "./Other/html5shiv.js"
//import "./Other/respond.js"

ReactDOM.render (
    <Router history={browserHistory}>
        
        <Route path="/" component={Main} >
            <IndexRoute component={Index} />
            <Route path="/about" component={About} /> 
            <Route path="/contacts" component={Contacts} /> 
            <Route path="/lessons" component={Lessons} >
                <Route path="/lessons/:lessonId" component={LessonsInfo} />
                <Route path="/lessons/picture/:lessonId" component={LessonsImage} />
                </Route>
            <Route path="/catalog" component={Catalog} />
                <Route path="/catalog/polimer" component={Polimer} >
                    <Route path="/catalog/polimer/inStock" component={InStock} >
                        <Route path="/catalog/polimer/inStock/:productId" component={ProductInStock} />
                    </Route>
                    <Route path="/catalog/polimer/inStock" component={InStock} >
                        <Route path="/catalog/polimer/inStock/:productId" component={ProductInStock} />
                     </Route>
                     <Route path="/catalog/polimer/all" component={All} >
                        <Route path="/catalog/polimer/all/:productId" component={ProductAll} />
                     </Route>
                     <Route path="/catalog/polimer/pendants" component={Pendants} >
                        <Route path="/catalog/polimer/pendants/:productId" component={ProductPendant} />
                     </Route>
                     <Route path="/catalog/polimer/earrings" component={Earrings} >
                        <Route path="/catalog/polimer/earrings/:productId" component={ProductEarrings} />
                     </Route>
                     <Route path="/catalog/polimer/rings" component={Rings} >
                        <Route path="/catalog/polimer/rings/:productId" component={ProductRings} />
                     </Route>
                     <Route path="/catalog/polimer/clips" component={Clips} >
                        <Route path="/catalog/polimer/clips/:productId" component={ProductClips} />
                     </Route>
                     <Route path="/catalog/polimer/another" component={Another} >
                        <Route path="/catalog/polimer/another/:productId" component={ProductAnother} />
                     </Route>
                     <Route path="/catalog/polimer/sets" component={Sets} >
                        <Route path="/catalog/polimer/sets/:productId" component={ProductSets} />
                     </Route>
            </Route>
        </Route>

        

    </Router>,
document.getElementById("wrapper"))
