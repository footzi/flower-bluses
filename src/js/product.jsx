import React from "react";
import { Link } from "react-router";
var Carousel = require('react-responsive-carousel').Carousel;
import { browserHistory } from 'react-router';
import navigationPage from "./other.js"

let Product = React.createClass({
    componentDidMount () {
                    (function(){
                emailjs.init("user_jmnF1YC49paVFwkbJRipP");
            })();

            var orderform = $("#orderform");
            orderform.submit(function(event){
                event.preventDefault();

            // Change to your service ID, or keep using the default service
            var service_id = "mail_ru";
            var template_id = "order";

            orderform.find("#orderform-button").text("Отправляется");
            emailjs.sendForm(service_id,template_id,"orderform")
                .then(function(){ 
                    console.log("Sent!");
                orderform.find("#orderform-button").text("Отправлено");
                }, function(err) {
                console.log("Send email failed!\r\n Response:\n " + JSON.stringify(err));
                orderform.find("#orderform-button").text("Oшибка");
                });
            return false;
            });

            window.scrollTo(0, 0)
            function buttons () {
                $(".product-info-button").bind("click", function() {
                $("#product").hide()
                $("#order").show()
            })

             $(".order-buttons-back, .order-buttons-back-mobile").bind("click", function() {
                $("#product").show()
                $("#order").hide()
            });
            }
            buttons ();
            
    },
    render () {
        // $(document).ready(function() {
        //     navigationPage();
        // })
        let { product } = this.props;
        let linkProduct = location.href;
        return (
            <div id="b-popup">
                <div className="b-popup-content">
                     
                    <div id="product">
                        <div className="b-popup-close-button" onClick={browserHistory.goBack}>✖</div> 
                        <div className="product-info">   
                            <h1 className="product-info-name">{this.props.name}</h1>
                            <h2 className="product-info-text">{this.props.text}</h2>
                            <div className="product-info-cost-button">
                                <h2 className="product-info-cost">Цена: {this.props.cost}</h2>
                                <div className="product-info-button" >Заказать</div>
                            </div>
                        </div>
                        <div className="product-info-mobile">   
                            <h1 className="product-info-name">{this.props.name}</h1>
                        </div>

                    <div className="product-carousel">
                        <Carousel>
                            <div><img src={this.props.image1} /></div>
                            <div><img src={this.props.image2} /></div>
                            <div><img src={this.props.image3} /></div>
                            <div><img src={this.props.image4} /></div>
                            <div><img src={this.props.image5} /></div>
                            <div><img src={this.props.image6} /></div>
                            <div><img src={this.props.image7} /></div>
                            <div><img src={this.props.image8} /></div>
                            <div><img src={this.props.image9} /></div>
                        </Carousel>
                    </div>
                    <div className="product-info-mobile">
                        <h2 className="product-info-text">{this.props.text}</h2>
                        
                        <div className="product-info-button" >Заказать</div>
                        <div className="product-info-button-back" onClick={browserHistory.goBack}>« назад</div>
                    </div>
                    </div>
                    <div id="order">
                        <div className="order-close-button b-popup-close-button"  onClick={browserHistory.goBack}>✖</div> 
                        <div className="order-title">ЗАКАЗАТЬ / УТОЧНИТЬ
                        </div>
                        <div className="order-image">
                            <img src={this.props.image1}/>
                        </div>

                        <form id="orderform" method="post">
                            <div className="order-form">
                                <div className="order-form-hide">
                                    <input className="order-form-name" type="text" value={this.props.id}/>
                                    <label >Ссылкa:</label> <input type="text" name="link" value={linkProduct}/>
                                </div>
                                <input className="order-form-input" name="product" type="text" readonly placeholder="Ваш заказ:" value={this.props.name} />
                                <input className="order-form-input" name="name" type="text" required placeholder="Ваше имя:" />
                                <input className="order-form-input" name="email" type="email" required placeholder="Ваш e-mail:" /> 
                                <textarea className="order-form-input order-form-input-message" name="info" type="text" placeholder="Сообщение:" />
                            </div>
                             <div className="order-buttons">
                                <span className="order-buttons-back">« назад</span>

                                <button id="orderform-button" className="order-buttons-send">Отправить</button>
                                <div className="order-buttons-back-mobile product-info-button-back">« назад</div>
                             </div>
                        </form>
                    </div>
                </div>
            </div>
          
        )
    }
})

export default Product; 