import React from 'react';
import { Link } from 'react-router';

let Index = React.createClass({
    componentDidMount () {
        window.scrollTo(0, 0)
        $(function(){
                $(window).resize(function(){
                    if($(window).width()<=640) {
                        $("body").css({"background-image":"url(/images/fon640.jpg)"})
                        $("#footer").css({"margin-top":"23%"});

                    } else {
                        $("body").css({"background-image":"url(/images/fon.jpg)"});
                        $("#footer").css({"margin-top":"3%"});
                    }
                  //  if ($(window).width())
                }).resize()
            })
        //$("#footer").css({"margin-top":"3%"});
    
        $('.bxslider').bxSlider({
            auto:true,
             moveSlides: 1,
            minSlides: 4,
          maxSlides: 4,
          slideWidth: 360,
          slideMargin: 13
          })
          
          
    },
    render () {
        return (
<div>
        <div className="title">
            <h1 className="main-title">ДОБРО ПОЖАЛОВАТЬ НА ВИРТУАЛЬНУЮ СТРАНИЧКУ МОЕЙ ДОМАШНЕЙ МАСТЕРСКОЙ!</h1>
            <p className="main-introduction" >Безусловно, достичь совершенства и соперничать с художником – природой , невозможно... Но, прибли&shy;зиться к природной красоте , так, чтобы захотелось вдохнуть аромат , всколыхнуть воспоминания о ве&shy;сеннем пробуждении или почувствовать грусть осени… эту возможность дает удивительное искусство Керамической флористики! 
                <p>Для создания этих невероятно живых цветов и цветочных композиций используют специальные полимерные глины - эластичные материалы, которые позволяют максимально имитировать строение цветка. Каждый лепесточек, каждый стебелек создается вручную. Особые свойства материала и авторские методики помогают детально проработать каждый элемент, тем самым достигается невероятное сходство с живыми цветами.</p> </p>
        </div>
        <div className="stock">
            <h2 className="stock-title">УКРАШЕНИЯ В НАЛИЧИИ:</h2>
            <p className="stock-text">Большинство изделий я делаю на заказ, но есть и те которые Вы можете преобрести в самые короткие сроки, не дожидаясь их изготовления. Вот самые свежие готовые новинки В НАЛИЧИИ, успейте сделать заказ и уже через пару* дней Вы его получите!</p>
            <div className="stock-images">
                <ul className="bxslider">
                    <li className="slide"><a href="/catalog/polimer/inStock/1-1"><img className="stock-img" src="images/1.jpg" /></a></li>
                    <li className="slide"><a href="/catalog/polimer/earrings/2-1"><img className="stock-img" src="images/2.jpg" /></a></li>
                    <li className="slide"><a href="/catalog/polimer/earrings/2-2"><img className="stock-img" src="images/3.jpg" /></a></li>
                    <li className="slide"><a href="/catalog/polimer/earrings/2-3"><img className="stock-img" src="images/4.jpg" /></a></li>
                </ul>
            </div>
            <div className="stock-images-mobile">
                <img src="images/1-mobile.jpg" />
                <img src="images/2-mobile.jpg" />
                <img src="images/3-mobile.jpg" />
            </div>
            <Link to="/catalog">
                <div className="stock-button">Каталог</div>
            </Link>
        </div>
        <div className="news">
            <h2 className="stock-title">БЛИЖАЙШИЕ МАСТЕР-КЛАССЫ:</h2>
            <p className="news-text">Если Вы покорены этим видом искусства – созданием цветов из полимерных глин, реалистической флори&shy;стикой и хотите научиться этому виду творчества, то я  Вам помогу осуществить эту мечту!</p>
            <div className="news-content">
               <div className="news-calendar">
                    <img className="news-calendar-img" src="images/calendar.png" />
                </div>
               <div className="news-details">
                    <img className="news-details-marker" src="images/marker.png" />
                    <div className="news-details-text">Занятия будут проводиться независимо от количества пришедших на МК учеников, даже для одного человека! (группа небольшая, до 4 человек!)</div>
                  
                    <img className="news-details-marker" src="images/marker.png" />
                    <div className="news-details-text">Вы можете выбрать любой из предложенных  МК! И я, лично Вам, буду показывать нюансы и тонкости лепки выбранного вами цветка! </div>
                    
                    <img className="news-details-marker" src="images/marker.png" />
                    <div className="news-details-text">С завершенного МК, вы будете уходить с полностью готовой работой. Это может быть просто реалистический цветок, который можно будет поставить в вазу, или это будет брошка, или небольшая заколка- зажим.</div>
                 
                    <img className="news-details-marker" src="images/marker.png" />
                    <div className="news-details-text">У вас будет возможность тратить столько часов на одно посещение, сколько вам необходимо. И Вы можете придти в указанные дни в удобное для вас время</div>
                </div>
                <div className="clear"></div>
                 <Link to="/lessons"><div className="stock-button news-button">Подробнее</div></Link>
            </div>
        </div>
        
        
</div>
        )
    }
})

export default Index;

