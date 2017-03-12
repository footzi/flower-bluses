import React from "react";
import { Link } from "react-router";
var Carousel = require('react-responsive-carousel').Carousel;
import { browserHistory } from 'react-router';

let Product = React.createClass({
    
    render () {
        let { product } = this.props;
        let linkProduct = location.href;

        // function close(e) {
        //     e.preventDefault();
        //     document.getElementById("b-popup").style="display:none";
        //  }
        function order(e) {
            e.preventDefault();
            document.getElementById("order").style="display:table";
            document.getElementById("product").style="display:none";
         }
        function back(e) {
                    e.preventDefault();
                    document.getElementById("order").style="display:none";
                    document.getElementById("product").style="display:table";
        }

        return (
            
            <div id="b-popup">
                <div className="b-popup-content">
                     
                    <div id="product">
                        <div id="b-popup-close-button" onClick={browserHistory.goBack}>
                            <img src="/./images/catalog/close.png" />
                        </div> 
                        <div id="product-info">   
                            <p className="product-info-name">{this.props.name}</p>
                            <p className="product-info-text">{this.props.text}</p>
                            <div className="product-info-button" onClick={order}>Заказать</div>
                        </div>

                    <div id="product-carousel">
                        <Carousel>
                            <div><img src={this.props.image1} /></div>
                            <div><img src={this.props.image2} /></div>
                            <div><img src={this.props.image3} /></div>
                            <div><img src={this.props.image4} /></div>
                            <div><img src={this.props.image5} /></div>
                        </Carousel>
                    </div>
                    
                    </div>
                    <div id="order">
                        <div id="b-popup-close-button" className="order-close-button" onClick={browserHistory.goBack}>
                            <img src="/./images/catalog/close.png" />
                        </div> 
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
                                <span className="order-buttons-back" onClick={back}>◄ назад</span>
                                <button id="orderform-button" className="order-buttons-send">Отправить</button>

                             </div>
                        </form>
                    </div>
                </div>
            </div>
          
        )
    }
})

export default Product; 