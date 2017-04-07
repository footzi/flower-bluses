import React from 'react';
import { Link } from "react-router";
import ReactDOM from 'react-dom';


let Polimer = React.createClass({
    componentDidMount () {
        window.scrollTo(0, 0)
        //$("#footer").css({"margin-top":"3.5%"});
    },
    render () {
        return (
<div className="catalog-list">
    
    <div className="catalog-polimer">
            <img className="catalog-butterfly-img catalog-polimer-butterfly1" src="/../images/catalog/catalog-butterfly1.png" />
            <h1 className="catalog-title">ПОЛИМЕРНАЯ ГЛИНА</h1>
            <h2 className="main-introduction catalog-polimer-introduction">Цветочные украшения из полимерной глины обладают необычайной легкостью и реалистичностью. Благодаря этим двум качествам цветы ручной работы пользуются большой популярностью среди женского населения. Многообразие цветов и исключительно ручная работа позволяет создавать уникальные украшения, которых не будет больше ни у кого. Даже две одинаковые веточки сирени будут выглядеть по-разному и необычайно живо. Украшения ручной работы из самозастывающей полимерной глины — это красивый, эффектный и уникальный подарок. Вам не стоит бояться, что вы можете подарить то, что уже есть у человека. Любое цветочное украшение будет уникальным!</h2>
            <img className="catalog-butterfly-img catalog-polimer-butterfly2" src="/../images/catalog/catalog-butterfly2.png" />    
    </div>


    <div className="catalog-navbar">
            <ul className="catalog-navbar-ul">
                <Link to="/catalog/polimer/inStock" activeClassName="active-link" className="Link" onClick={this.onClick}><li className="Link-name">В НАЛИЧИИ</li></Link> 
                <Link to="/catalog/polimer/all" activeClassName="active-link" className="Link" onClick={this.onClick}><li className="Link-name">ВСЕ</li></Link>
                <Link to="/catalog/polimer/pendants" activeClassName="active-link" onClick={this.onClick}  className="Link"><li className="Link-name" >КУЛОНЫ/КОЛЬЕ</li></Link>
                <Link to="/catalog/polimer/earrings" activeClassName="active-link" onClick={this.onClick}  className="Link"><li className="Link-name">СЕРЬГИ</li></Link>
                <Link to="/catalog/polimer/rings" activeClassName="active-link" onClick={this.onClick} className="Link"><li className="Link-name" >КОЛЬЦА</li></Link>
                <Link to="/catalog/polimer/clips" activeClassName="active-link" onClick={this.onClick}  className="Link"><li className="Link-name" >БРОШИ/ЗАКОЛКИ</li></Link>
                <Link to="/catalog/polimer/sets" activeClassName="active-link" onClick={this.onClick}  className="Link"><li className="Link-name" >НАБОРЫ</li></Link>
                <Link to="/catalog/polimer/another" activeClassName="active-link" onClick={this.onClick}  className="Link"><li className="Link-name" >РАЗНОЕ</li></Link>
            </ul>
    </div>
    
    <div>
        {this.props.children}
    </div>
</div>
        )
    }
})

export default Polimer