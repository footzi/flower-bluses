import React from 'react';
import { Link } from 'react-router';
let Index = React.createClass({
    render () {
        return (
    <div>
        <nav>
                <div className="navbar-button">
                    <a href="#"><img className="navbar-button-main" src="images/navbar/button-main.png" /></a>
                 </div>                        
                <div className="navbar-button">
                    <a href="#"><img className="navbar-button-about" src="images/navbar/button-about.png" /></a>
                </div>
                <div className="navbar-button">
                    <Link to="/catalog"> <img className="navbar-button-catalog" src="images/navbar/button-catalog.png" /></Link>
                </div>
                <div className="navbar-button">
                    <a href="#"><img className="navbar-button-mk" src="images/navbar/button-mk.png" /></a>
                </div>
                <div className="navbar-button">
                    <a href="#"><img className="navbar-button-contacts" src="images/navbar/button-contacts.png" /></a>
                </div>
                <img className="navbar-butterfly" src="images/navbar/butterfly.png" />
            
            </nav>
        <main>   
        <div className="title">
            <h1 className="main-title">Добро пожаловать на виртуальную страничку моей домашней мастерской!</h1>
            <p className="main-introduction" >Безусловно, достичь совершенства и соперничать с художником – природой , невозможно... Но, приблизиться к природной красоте , так, чтобы захотелось вдохнуть аромат , всколыхнуть воспоминания о весеннем пробуждении или почувствовать грусть осени… эту возможность дает удивительное искусство Керамической флористики!</p>
        </div>
        <div className="stock">
            <h1 className="stock-title">УКРАШЕНИЯ В НАЛИЧИИ:</h1>
            <div className="img">
                <img className="stock-img" src="images/1.jpg" />
                <img className="stock-img" src="images/2.jpg" />
                <img className="stock-img" src="images/3.jpg" />
            </div>
            <div className="button">
                <Link to="/catalog"> <img className="button-img" src="images/button.png" /> </Link>
            </div>
        </div>
        <div className="news">
            <h1 className="stock-title">БЛИЖАЙШИЕ МАСТЕР-КЛАССЫ:</h1>
            <div className="news-content">
               <div className="news-calendar">
                   <img className="news-calendar-img" src="images/calendar.png" />
                </div>
               <div className="news-details">
                    <img className="news-details-marker" src="images/marker.png" />
                    <span className="news-details-text">Занятия  проводяться независимо от количества пришедших на МК учеников, даже для одного человека! (группа небольшая, до 4 человек!). </span>
                    <br />
                    <img className="news-details-marker" src="images/marker.png" />
                    <span className="news-details-text">Вы можете выбрать любой из предложенных  МК! И я, лично Вам, буду показывать нюансы и тонкости лепки выбранного вами цветка! </span>
                    <br />
                    <img className="news-details-marker" src="images/marker.png" />
                    <span className="news-details-text">С завершенного МК, вы будете уходить с полностью готовой работой! </span>
                </div>
                <div className="clear"></div>
                <div className="news-button">
                    <img className="button-img" src="images/button2.png" />
            </div>
            </div>
        </div>
        </main>
        </div>
        )
    }
})

export default Index;