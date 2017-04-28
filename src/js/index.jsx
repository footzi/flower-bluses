import React from 'react';
import { Link } from 'react-router';

let Index = React.createClass({
    componentDidMount () {
        window.scrollTo(0, 0)
        $(function(){
                $(window).resize(function(){
                    if($(window).width()<=640) {
                       $("body").css({"background-image":"url(/images/fon2.jpg)"})
                    } else {
                        $("body").css({"background-image":"url(/images/fon.jpg)","height":"142vw"});
                        //$("#footer").css({"margin-top":"1%"});
                    }
                  
                }).resize()
            })
    
        $('.bxslider').bxSlider({
            auto:true,
            speed:100,
            moveSlides: 1,
            minSlides: 4,
            maxSlides: 4,
            slideWidth: 280,
            slideMargin: 20
          })
    },
    render () {
        return (
<div>
        <div className="title">
            <h1 className="main-title">ДОБРО ПОЖАЛОВАТЬ НА ВИРТУАЛЬНУЮ СТРАНИЧКУ МОЕЙ ДОМАШНЕЙ МАСТЕРСКОЙ!</h1>
            <p className="main-introduction" >Безусловно, достичь совершенства и соперничать с художником – природой, невозможно... Но, прибли&shy;зиться к природной красоте, так, чтобы захотелось вдохнуть аромат, всколыхнуть воспоминания о ве&shy;сеннем пробуждении или почувствовать грусть осени… эту возможность дает удивительное искусство Керамической флористики! 
                <p>Для создания этих невероятно живых цветов и цветочных композиций используют специальные полимерные глины - эластичные материалы, которые позволяют максимально имитировать строение цветка. Каждый лепесточек, каждый стебелек создается вручную. Особые свойства материала и авторские методики помогают детально проработать каждый элемент, тем самым достигается невероятное сходство с живыми цветами.</p> </p>
        </div>
        <div className="stock">
            <h2 className="stock-title">УКРАШЕНИЯ В НАЛИЧИИ:</h2>
            <p className="stock-text">Большинство изделий я делаю на заказ, но есть и те, которые Вы можете приобрести в самые короткие сроки, не дожидаясь их изготовления. Представленные ниже украшения и интерьерные композиции есть в наличии. Заказ можно оформить на сайте или, в случае возникновения вопросов и пожеланий, связаться со мной по <Link className="link-contacts" to="/contacts">форме обратной связи.</Link></p>
            <div className="stock-images">
                <ul className="bxslider">
                    <li className="slide"><Link to="/catalog/polimer/clips/4-12"><img className="stock-img" src="images/catalog/сlips/preview/заколка 7.jpg" /></Link></li>
                    <li className="slide"><Link to="/catalog/polimer/earrings/2-22"><img className="stock-img" src="images/catalog/earrings/preview/серьги 23.jpg" /></Link></li>
                    <li className="slide"><Link to="/catalog/polimer/earrings/2-26"><img className="stock-img" src="images/catalog/earrings/preview/серьги 26.jpg" /></Link></li>
                    <li className="slide"><Link to="/catalog/polimer/earrings/2-6"><img className="stock-img" src="images/catalog/earrings/preview/серьги 6.jpg" /></Link></li>

                    <li className="slide"><Link to="/catalog/polimer/clips/4-10"><img className="stock-img" src="images/catalog/сlips/preview/заколка 5.jpg" /></Link></li>
                    <li className="slide"><Link to="/catalog/polimer/earrings/2-24"><img className="stock-img" src="images/catalog/earrings/preview/серьги 25.jpg" /></Link></li>
                    <li className="slide"><Link to="/catalog/polimer/clips/4-13"><img className="stock-img" src="images/catalog/сlips/preview/заколка 8.jpg" /></Link></li>
                    <li className="slide"><Link to="/catalog/polimer/earrings/2-19"><img className="stock-img" src="images/catalog/earrings/preview/серьги 20.jpg" /></Link></li>

                    <li className="slide"><Link to="/catalog/polimer/earrings/2-27"><img className="stock-img" src="images/catalog/earrings/preview/серьги 26.jpg" /></Link></li>
                    <li className="slide"><Link to="/catalog/polimer/earrings/2-37"><img className="stock-img" src="images/catalog/earrings/preview/серьги 40.jpg" /></Link></li>
                    <li className="slide"><Link to="/catalog/polimer/earrings/2-21"><img className="stock-img" src="images/catalog/earrings/preview/серьги 22.jpg" /></Link></li>
                    <li className="slide"><Link to="/catalog/polimer/earrings/2-23"><img className="stock-img" src="images/catalog/earrings/preview/серьги 24.jpg" /></Link></li>
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
            <h2 className="stock-title">ОБУЧЕНИЕ:</h2>
            <p className="news-text">Если Вы мечтаете овладеть этим видом искусства – созданием цветов из полимерных глин, то я с удовольствием вам помогу. Я приглашаю вас на индивидуальные занятия или на обучение в группах.</p>
            <div className="news-content">
               <div className="news-calendar">
                    <img className="news-calendar-img" src="images/calendar.png" />
                </div>
               <div className="news-details">
                    <img className="news-details-marker" src="images/marker.png" />
                    <div className="news-details-text">Занятия будут проводиться в небольших группах. Максимальное количество участников - 4 человека.</div>
                  
                    <img className="news-details-marker" src="images/marker.png" />
                    <div className="news-details-text">Все необходимые материалы и фурнитура для создания украшений с реалистичными цветами предоставляются. Вам дополнительно докупать ничего не требуется.</div>
                    
                    <img className="news-details-marker" src="images/marker.png" />
                    <div className="news-details-text">С завершенного МК, вы будете уходить с полностью готовой работой. Это может быть просто реалистический цветок, который можно будет поставить в вазу, или это будет брошка, или небольшая заколка- зажим.</div>
                 
                    <img className="news-details-marker" src="images/marker.png" />
                    <div className="news-details-text">Участие в мастер-классах осуществляется по предварительной записи. Вы можете оставить свою заявку с помощью <Link className="link-contacts" to="/contacts">формы обратной связи</Link> или позвонив по телефону: +79038482661 </div>
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

