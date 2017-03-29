import React from 'react';
import { products, products2, products3, products4 } from "./../Data/data-earrings.js";
import ProductPreview from './../ProductPreview.jsx';
import { Link } from 'react-router';
import Product from "../product.jsx"
var Carousel = require('react-responsive-carousel').Carousel;

let Earrings = React.createClass({
     componentDidMount () {
        $(".pages-numbers-link1").addClass("pages-numbers-link-active");
     },
       
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    
    getInitialState() {
        return {
            
            products
        }
    },
    
        

    handlePreviewClick(productId) {
        this.context.router.push(`/catalog/polimer/earrings/${productId}`);
    },

    toPage1: function(e) {
        e.preventDefault();
        this.setState({products:products});
        $("#footer").css({"margin-top":"3.5%"});
        $(".pages-numbers-link").removeClass("pages-numbers-link-active");
        $(".pages-numbers-link1").addClass("pages-numbers-link-active");

    },
    toPage2: function(e) {
        e.preventDefault();
        this.setState({products:products2});
        $("#footer").css({"margin-top":"3.5%"});
        $(".pages-numbers-link").removeClass("pages-numbers-link-active");
        $(".pages-numbers-link2").addClass("pages-numbers-link-active");
    },
    toPage3: function(e) {
        e.preventDefault();
        this.setState({products:products3});
        $("#footer").css({"margin-top":"3.5%"});
        $(".pages-numbers-link").removeClass("pages-numbers-link-active");
        $(".pages-numbers-link3").addClass("pages-numbers-link-active");
    },
    toPage4: function(e) {
        e.preventDefault();
        this.setState({products:products4});
        $("#footer").css({"margin-top":"53.5%"});
        $(".pages-numbers-link").removeClass("pages-numbers-link-active");
        $(".pages-numbers-link4").addClass("pages-numbers-link-active");
    },

    render () {
            window.scrollTo(0, 500);
            let { products } = this.state;
        return (
            <div>
                <div className="catalog-navigation">
                    <Link to="/catalog">Каталог>></Link>
                    <Link to="/catalog/polimer/all">Полимерная глина>></Link>
                    <Link to="/catalog/polimer/pendants">Кулоны/подвески</Link>
                </div>
                <div>
                {
                    products.map(product => 
                    <ProductPreview
                        key={product.id}
                        onClick={this.handlePreviewClick.bind(null, product.id)}
                        imagePreview={product.imagePreview}
                        name={product.name}
                        text={product.text}
                        cost={product.cost}
                        instock={product.instock}
                    />

                )}
            
            </div>
            <div className="pages">
                    <div className="pages-back">
                         <a className="pages-link">← предыдущая</a>
                    </div>
                    <div className="pages-numbers">
                        <p className="pages-numbers-link pages-numbers-link1" onClick={this.toPage1}> 1</p>
                        <p className="pages-numbers-link pages-numbers-link2" onClick={this.toPage2}>2</p>
                        <p className="pages-numbers-link pages-numbers-link3" onClick={this.toPage3}>3</p>
                        <p className="pages-numbers-link pages-numbers-link4" onClick={this.toPage4}>4</p>
                    </div>
                    <div className="pages-next">
                         <a className="pages-link">следующая →</a>
                    </div>
                </div>

                <div >
                {this.props.children}
                </div>


            </div>
        )
    }
})




export default Earrings ;