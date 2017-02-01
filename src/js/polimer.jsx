import React from 'react';
import { Link } from "react-router";
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Pendants from "./pendants.jsx"


let Polimer = React.createClass({
    render () {
        return (
<div>
    Полимерная глина
    <div>
        <ul>
            <Link to="/catalog/polimer:pendants"><li>Все</li></Link>    
            <li><a href="#">Кулоны/подвески</a></li>
            <li><a href="#">Серьги</a></li>
            <li><a href="#">Кольца</a></li>
            <li><a href="#">Браслеты</a></li>
            <li><a href="#">Броши/заколки</a></li>
            <li><a href="#">Наборы</a></li>
            <li><a href="#">Обводки</a></li>
            <div>
    {this.props.children}
    </div>
        </ul>
        
    </div>
</div>
        )
    }
})

export default Polimer