import React from 'react';
import { Link } from "react-router";
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Pendants from "./pendants.jsx"

import All from "./all.jsx"

let Polimer = React.createClass({
    getInitialState: function() {
        return { 
        	shouldHide:false
        };
    },
    onClick: function() {
        if(!this.state.shouldHide){
        	this.setState({
        		shouldHide: true 
        	})
        }
    },
    render () {
        return (
<div className="list-items">

    <div className="catalog-info-polimer">
            <p className="catalog-info-title">ПОЛИМЕРНАЯ ГЛИНА</p>
            <p className="catalog-info-text">Цветочные украшения из полимерной глины обладают необычайной легкостью и реалистичностью. Благодаря этим двум качествам цветы ручной работы пользуются большой популярностью среди женского населения. Многообразие цветов и исключительно ручная работа позволяет создавать уникальные украшения, которых не будет больше ни у кого. Даже две одинаковые веточки сирени будут выглядеть по-разному и необычайно живо. Украшения ручной работы из самозастывающей полимерной глины — это красивый, эффектный и уникальный подарок. Вам не стоит бояться, что вы можете подарить то, что уже есть у человека. Любое цветочное украшение будет уникальным!</p>
    </div>

    <div className="catalog-navbar">
            <ul className="catalog-navbar-ul">
                <Link to="/catalog/polimer/all" activeClassName="active-link" className="Link" onClick={this.onClick}><li className="link-name">ВСЕ</li></Link> 
                <Link to="/catalog/polimer/pendants" activeClassName="active-link" className="Link" onClick={this.onClick}><li className="link-name">КУЛОНЫ/ПОДВЕСТКИ</li></Link>
                <Link to="/catalog/polimer/pendants"  className="Link"><li >СЕРЬГИ</li></Link>
                <Link to="/catalog/polimer/pendants"  className="Link"><li >КОЛЬЦА</li></Link>
                <Link to="/catalog/polimer/pendants" className="Link"><li >БРАСЛЕТЫ</li></Link>
                <Link to="/catalog/polimer/pendants"  className="Link"><li >БРОШИ/ЗАКОЛКИ</li></Link>
                <Link to="/catalog/polimer/pendants"  className="Link"><li >НАБОРЫ</li></Link>
                <Link to="/catalog/polimer/pendants"  className="Link"><li >ОБВОДКИ</li></Link>
            </ul>
    </div>

    <div  id="all" className={this.state.shouldHide ? 'hidden' : ''}>
        <All />
    </div>
    
    <div>
        {this.props.children}
    </div>
</div>
        )
    }
})





export default Polimer