import React from 'react';
import { Link } from "react-router";

let Main = React.createClass({
		componentDidMount(){
			$(".nav-mobile-button img").click(function() {
                if ($(".nav-mobile-menu").css("display")=="none") {
                    $(".nav-mobile-menu").css("display","block")
                } else 
                    $(".nav-mobile-menu").css("display","none")

                });
            $(".nav-mobile-menu li").click(function() {
            $(".nav-mobile-menu").hide()
             })
		},
	render() {
		return (
			<div>
 		   		<header>
        <div className="clear"></div>
    </header>
    <nav>
        <div className="nav">
            <img className="navbar-butterfly" src="/images/navbar/butterfly.png" />
            <img className="navbar-butterfly2" src="/images/navbar/butterfly2.png" />
            <img className="navbar-butterfly3" src="/images/navbar/butterfly3.png" />
            <div className="navbar-button">
                <Link to="/"><img src="/images/navbar/button-main.png" /></Link>
            </div>
            <div className="navbar-button">
                <Link to="/about"><img src="/images/navbar/button-about.png" /></Link>
            </div>
            <div className="navbar-button">
                <Link to="/catalog"><img src="/images/navbar/button-catalog.png" /></Link>
            </div>
            <div className="navbar-button">
                <Link to="/lessons"><img src="/images/navbar/button-mk.png" /></Link>
            </div>
            <div className="navbar-button">
                <Link to="/contacts"><img src="/images/navbar/button-contacts.png" /></Link>
            </div>
        </div>
        <div className="nav-mobile">
            <div className="nav-mobile-button">
                <img src="/images/burger-button.png" />
            </div>
            <ul className="nav-mobile-menu">
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/about">Обо мне</Link></li>
                <li><Link to="/catalog">Каталог</Link></li>
                <li><Link to="/lessons">Обучение</Link></li>
                <li><Link to="/contacts">Контакты</Link></li>
            </ul>
        </div>
    </nav>
    <main id="main">
    {this.props.children}
    </main>
    <div className="clear"></div>
    <footer id="footer">
        <div className="footer-content">
            <div className="footer-content-regulations">
                <p className="footer-content-regulations-title">Условия использования материалов ресурса:</p>
                <p className="footer-text ">Все фотографии на данном ресурсе являются собственностью Агафоновой Галины Владимировны.</p>
                <p className="footer-text">Запрещено использование любого контента данного ресурса для получения коммерческой выгоды. </p>
                <p className="footer-text">При размещении материалов на сторонних ресурсах обязательна ссылка на первоначальный ресурс-источник.
                </p>
            </div>
            <div className="footer-content-icons">
                <a href="https://vk.com/zivem_so_vkusom"><img className="footer-content-icons-img" src="/images/vk.png" /></a>
                <a href="https://ru-ru.facebook.com/people/Galina-Agafonova/100005326959410"><img className="footer-content-icons-img" src="/images/fb.png" /></a>
                <a href="https://www.instagram.com/art_pastille"><img className="footer-content-icons-img" src="/images/in.png" /></a>
                <a href="https://www.livemaster.ru/zivem-so-vkusom"><img className="footer-content-icons-img" src="/images/ym.png" /></a>
            </div>
            <div className="footer-content-developer">
                <p className="footer-title footer-content-developer-title">Дизайн и разработка: <a href="https://vk.com/vlad.vlad.vlad">ArtBox</a></p>
            </div>
            <div className="footer-content-contacts">
                <p className="footer-title footer-content-contacts-title">Cвязаться с нами: </p>
                <p className="footer-text footer-content-contacts-text">г.Нижний Новгород</p>
                <p className="footer-text footer-content-contacts-text">тел: <u>+7(903)8482661</u></p>
                <p className="footer-text footer-content-contacts-text">e-mail: <u>galina.agafonova.2013@mail.ru</u></p>
            </div>
        </div>
        <div className="footer-content-mobile">
            <div className="footer-content-icons">
                <a href="https://vk.com/zivem_so_vkusom"><img className="footer-content-icons-img" src="/images/vk.png" /></a>
                <a href="https://ru-ru.facebook.com/people/Galina-Agafonova/100005326959410"><img className="footer-content-icons-img" src="/images/fb.png" /></a>
                <a href="https://www.instagram.com/art_pastille"><img className="footer-content-icons-img" src="/images/in.png" /></a>
                <a href="https://www.livemaster.ru/zivem-so-vkusom"><img className="footer-content-icons-img" src="/images/ym.png" /></a>
            </div>
    
            <div className="footer-content-contacts">
                <p className="footer-title footer-content-contacts-title">Cвязаться с нами: </p>
                <p className="footer-text footer-content-contacts-text">г.Нижний Новгород</p>
                <p className="footer-text footer-content-contacts-text">тел: <u>+7(903)8482661</u></p>
                <p className="footer-text footer-content-contacts-text">e-mail: <u>galina.agafonova.2013@mail.ru</u></p>
            </div>
            <div className="footer-content-regulations">
                <p className="footer-content-regulations-title">Условия использования материалов ресурса:</p>
                <p className="footer-text ">Все фотографии на данном ресурсе являются собственностью Агафоновой Галины.</p>
                <p className="footer-text">Запрещено использование любого контента данного ресурса для получения коммерческой выгоды. </p>
                <p className="footer-text">При размещении материалов на сторонних ресурсах обязательна ссылка на первоначальный ресурс-источник.
                </p>
            </div>
            <div className="footer-content-developer">
                <p className="footer-title footer-content-developer-title">Дизайн и разработка: <a href="https://vk.com/vlad.vlad.vlad">ArtBox</a></p>
            </div>
        </div>
    </footer>
		    </div>
				)
	}
})

export default Main;