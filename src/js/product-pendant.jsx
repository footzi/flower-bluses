import React from "react";
import pendants from "./Data/data-pendants.js";
import { Link } from "react-router";
//import Carousel from "react-responsive-carousel";
var Carousel = require('react-responsive-carousel').Carousel;

let ProductPendant = React.createClass({
    
    getInitialState() {
        let { productId } = this.props.params;

        return {
            product: pendants.find(product => product.id === productId)
        };
    },
    render () {
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
        
        let { product } = this.state;

        return (
            <div id="b-popup" className={this.state.shouldHide ? 'hidden' : ''}>
                <div className="b-popup-content">
                    <div id="b-popup-close-button">
                        <Link to="/catalog/polimer/pendants"><img src="/./images/catalog/close.png" /></Link>
                    </div>  
                    <div id="product">
                    <div id="product-info">   
                        <p className="product-info-name">{product.name}</p>
                        <p className="product-info-text">{product.text}</p>
                        <img className="butterfly" id="butterfly1" src="/./images/catalog/butterfly1.png" /> 
                        <img className="butterfly" id="butterfly2" src="/./images/catalog/butterfly2.png" />  
                        <img className="butterfly" id="butterfly3" src="/./images/catalog/butterfly3.png" />   
                        <button onClick={order}>Заказать</button>
                        <div id="product-info-button">Заказать</div>
                    </div>
                    <div id="product-carousel">
                        <Carousel>
                            <div><img src={product.image1} /></div>
                            <div><img src={product.image2} /></div>
                            <div><img src={product.image3} /></div>
                            <div><img src={product.image4} /></div>
                            <div><img src={product.image5} /></div>
                        </Carousel>
                    </div>
                    </div>
                    <div id="order">
                        Заказать товар
                        <div>
                        </div>
                        <form>
                            <input type="text" value={product.text}/>
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                            <button>Отправить</button>
                            <button><Link to="/catalog/polimer/pendants"> закрыть</Link></button>
                            <button onClick={back}> назад</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
})

export default ProductPendant;