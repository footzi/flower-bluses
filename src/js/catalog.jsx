import React from 'react';
import { Link } from "react-router"


let Catalog = React.createClass ({
    render () {
        return (
<div className="catalog">

     <div className="catalog-greeting">
        <img className="catalog-butterfly1" src="../images/catalog/catalog-butterfly1.png" />
        <div className="catalog-title">ДОБРО ПОЖАЛОВАТЬ</div>
        <div className="catalog-introduction">Здесь Вы найдете нежные и изящные украшения и цветочные композиции ручной работы, которые будут радовать Вас своей свежестью и красатой круглый год!</div>
        <img className="catalog-butterfly2" src="../images/catalog/catalog-butterfly2.png" />
     </div>


     <div className="catalog-img">
        <div className="catalog-img-prew">
        <div className="catalog-thumbs">
            <Link to="/catalog/polimer"> <img src="../images/catalog/1.png" /> </Link>
            <div className="catalog-caption">
                <span>Украшения из полимерной глины</span>
            </div>
        </div>
        </div>

        <div className="catalog-img-prew">
        <div className="catalog-thumbs">
            <Link to="/catalog/polimer"> <img src="../images/catalog/2.png" /> </Link>
            <div className="catalog-caption">
                <span>Украшения из полимерной глины</span>
            </div>
        </div>
        </div>

        <div className="catalog-img-prew">
        <div className="catalog-thumbs">
            <Link to="/catalog/polimer"> <img src="../images/catalog/3.png" /> </Link>
            <div className="catalog-caption">
                <span>Украшения из полимерной глины</span>
            </div>
        </div>
        </div>
     </div>
     <div className="catalog-info">
        <div className="catalog-info-polimer">
            <p className="catalog-info-title">ПОЛИМЕРНАЯ ГЛИНА</p>
            <p className="catalog-info-text">Цветочные украшения из полимерной глины обладают необычайной легкостью и реалистичностью. Благодаря этим двум качествам цветы ручной работы пользуются большой популярностью среди женского населения. Многообразие цветов и исключительно ручная работа позволяет создавать уникальные украшения, которых не будет больше ни у кого. Даже две одинаковые веточки сирени будут выглядеть по-разному и необычайно живо. Украшения ручной работы из самозастывающей полимерной глины — это красивый, эффектный и уникальный подарок. Вам не стоит бояться, что вы можете подарить то, что уже есть у человека. Любое цветочное украшение будет уникальным!</p>
        </div>
        <div className="catalog-info-jewellery">
            <p className="catalog-info-title">ЮВЕЛИРНАЯ СМОЛА</p>
            <p className="catalog-info-text">Цветочные украшения из полимерной глины обладают необычайной легкостью и реалистичностью. Благодаря этим двум качествам цветы ручной работы пользуются большой популярностью среди женского населения. Многообразие цветов и исключительно ручная работа позволяет создавать уникальные украшения, которых не будет больше ни у кого. Даже две одинаковые веточки сирени будут выглядеть по-разному и необычайно живо. Украшения ручной работы из самозастывающей полимерной глины — это красивый, эффектный и уникальный подарок. Вам не стоит бояться, что вы можете подарить то, что уже есть у человека. Любое цветочное украшение будет уникальным!</p>
        </div>
     </div>
     
</div>
        )
    }
})


export default Catalog;
