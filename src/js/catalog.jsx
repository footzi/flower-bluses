import React from 'react';
import { Link } from "react-router"

let Catalog = React.createClass ({
    render () {
        return (
<div className="catalog">

     <div className="catalog-greeting">
        <div className="catalog-title">ДОБРО ПОЖАЛОВАТЬ!</div>
        <div className="catalog-introduction">Здесь Вы найдете нежные и изящные украшения и цветочные композиции ручной работы, <br/> которые будут радовать Вас своей свежестью и красатой круглый год!</div>
        <img className="catalog-butterfly-img catalog-greeting-butterfly1" src="../images/catalog/catalog-butterfly1.png" />
        <img className="catalog-butterfly-img catalog-greeting-butterfly2" src="../images/catalog/catalog-butterfly2.png" />
     </div>


     <div className="catalog-img">
       <div className="catalog-img-prew"> <Link to="/catalog/polimer">
        <div className="catalog-thumbs">
             <img src="../images/catalog/1.png" /> 
            <div className="catalog-caption">
                <span className="catalog-caption-text">Украшения из<br/> полимерной глины</span>
            </div>
        </div>
        </Link>
        </div>
        

        <div className="catalog-img-prew"><Link to="/catalog/polimer">
        <div className="catalog-thumbs">
             <img src="../images/catalog/1.png" /> 
            <div className="catalog-caption">
                <span className="catalog-caption-text">Цветочные композиции<br/> из полимерной глины</span>
            </div>
        </div>
        </Link>
        </div>

     </div>
     <div className="catalog-info">
            <img className="catalog-butterfly-img catalog-info-butterfly1" src="../images/catalog/catalog-butterfly1.png" />
            <h1 className="catalog-info-title">ПОЛИМЕРНАЯ ГЛИНА</h1>
            <div className="catalog-info-text">В своей работе я использую японские глины: Modena, Modena Soft, Clay Craft By Deco; и тайские: Modern, Bella Rosa. Эти глины позволяют тонко раскатываться,  создавать на своей поверхности  фактуру живых лепестков и листьев.  Они высыхают на воздухе без специального нагрева. Необходимый цвет и оттенки цветам из полимерных глин придаются расписыванием и добавлением в глину масляных красок или пастели. Все цветочные композиции в украшениях покрыты влагостойким, защитным лаком. Но длительный контакт таких украшений с водой все таки не рекомендуется. Для украшений я использую в основном фурнитуру гипоаллергенную, с родиевым покрытием, производства Чехии.</div>
            <h2 className="catalog-info-recomendation">Рекомендации по уходу</h2>
            <div className="catalog-info-text">
                <p className="catalog-info-text-list">1. Хранить украшения с цветами необходимо в обычных плотно закрывающихся пластиковых контейнерах, которые предохраняют от пыли, влажности и интереса детей. Внутри можно проложить мягкой тканью. Не следует хранить большое количество украшений с цветами в одном контейнере или с другими украшениями, так как они могут поцарапать друг друга, могут заминаться лепестки. Не рекомендуется переносить  в дамской сумке украшение с цветами без упаковки.</p>
                <p className="catalog-info-text-list">2. Избегать длительного воздействия воды. Перед посещением бассейна, ванны, душа- украшения необходимо снимать. Если все же такое случилось, можно попробовать аккуратно положить изделие, чтобы фрагменты композиции не касались поверхности и дать ему самостоятельно высохнуть. Цветы из композиций – не ставить в вазу с водой.</p>
                <p className="catalog-info-text-list">3. Не рекомендуется носить украшения с цветами из полимерной глины под верхней одеждой. В противном случае, они не прослужат долго. Помните, что цветы создаются максимально реалистично, а значит они – очень нежные и тонкие.</p>
                <p className="catalog-info-text-list">4. Не стоит испытывать изделия на прочность, гибкость и износостойкость. Они не повреждаются при случайных единичных падениях и ударах. Материал достаточно гибкий и эластичный, но не нужно специально гнуть, ломать или царапать изделие.</p>
                <p className="catalog-info-text-list">5. Чистка. Если украшение или  цветочная композиция запылилось их можно аккуратно протереть хорошо отжатой влажной тряпочкой или почистить от пыли мягкой сухой чистой кисточкой.</p>
                <p className="catalog-info-text-list">6. Если произошли непредвиденные обстоятельства и у вашего украшения или цветка из букета отломился  кусочек -  можете сами попробовать приклеить его на клей Момент-гель прозрачный. Если остались вопросы или необходима помощь и консультация  - я всегда готова вам помочь.</p>
            </div>
            
            <img className="catalog-butterfly-img catalog-info-butterfly2" src="../images/catalog/catalog-butterfly2.png" />
     
    </div>


     
</div>
        )
    }
})


export default Catalog;
