import React from 'react';
import { Link } from "react-router";
import ReactDOM from 'react-dom';


let Сompositions = React.createClass({
    componentDidMount () {
        window.scrollTo(0, 0)
        $("#footer").css({"margin-top":"3.5%"});
    },
    render () {
        return (
<div className="catalog-list">
    <div className="catalog-polimer">
            <img className="catalog-butterfly-img catalog-polimer-butterfly1" src="/../images/catalog/catalog-butterfly1.png" />
            <h1 className="catalog-title">ЦВЕТОЧНЫЕ КОМПОЗИЦИИ</h1>
            <h2 className="main-introduction catalog-polimer-introduction">Цветочные украшения из полимерной глины обладают необычайной легкостью и реалистичностью. Благодаря этим двум качествам цветы ручной работы пользуются большой популярностью среди женского населения. Многообразие цветов и исключительно ручная работа позволяет создавать уникальные украшения, которых не будет больше ни у кого. Даже две одинаковые веточки сирени будут выглядеть по-разному и необычайно живо. Украшения ручной работы из самозастывающей полимерной глины — это красивый, эффектный и уникальный подарок. Вам не стоит бояться, что вы можете подарить то, что уже есть у человека. Любое цветочное украшение будет уникальным!</h2>
            <img className="catalog-butterfly-img catalog-polimer-butterfly2" src="/../images/catalog/catalog-butterfly2.png" />    
    </div>
    <div>
        {this.props.children}
    </div>
</div>
        )
    }
})

export default Сompositions