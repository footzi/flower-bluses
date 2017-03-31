import React from 'react';
import { products, products2 } from "./../Data/data-all.js";
//import ProductPreview from './../ProductPreview.jsx';
import { Link } from 'react-router';
import Product from "../product.jsx"
var Carousel = require('react-responsive-carousel').Carousel;

let All = React.createClass({
    componentDidMount () {
         $("#footer").css({"margin-top":"3.5%"});
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
        this.context.router.push(`/catalog/polimer/all/${productId}`);
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
    render () {
        
        

        let { products } = this.state;
        return (
            <div>
                <div className="catalog-navigation">
                    <Link to="/catalog">Каталог>></Link>
                    <Link to="/catalog/polimer/all">Полимерная глина>></Link>
                    <Link to="/catalog/polimer/all">Всё</Link>
                </div>
                <div>
                {
                    products.map(product => 
                    <ProductPreview
                        key={product.id}
                        //onClick={this.handlePreviewClick.bind(null, product.id)}
                        imagePreview={product.imagePreview}
                        name={product.name}
                        text={product.text}
                        cost={product.cost}
                        instock={product.instock}
                        link={product.link}
                    />

                )}
            
                </div>
                <div >
                {this.props.children}
                </div>
                <div className="pages">
                    <div className="pages-back">
                         <a className="pages-link">← предыдущая</a>
                    </div>
                    <div className="pages-numbers">
                        <p className="pages-numbers-link pages-numbers-link1" onClick={this.toPage1}>1</p>
                        <p className="pages-numbers-link pages-numbers-link2" onClick={this.toPage2}>2</p>
                        <p className="pages-numbers-link pages-numbers-link3" onClick={this.toPage3}>3</p>
                        <p className="pages-numbers-link pages-numbers-link4" onClick={this.toPage4}>4</p>
                        <p className="pages-numbers-link pages-numbers-link5" onClick={this.toPage5}>5</p>
                    </div>
                    <div className="pages-next">
                         <a className="pages-link">следующая →</a>
                    </div>
            </div>


            </div>
        )
    }
})


let ProductAll = React.createClass({
    
    getInitialState() {
        let { productId } = this.props.params;

        return {
            product: products.find(product => product.id === productId)
        };
    },
    componentWillReceiveProps(nextProps) {
        let { productId: prevId } = this.props.params;
        let { productId: nextId } = nextProps.params;

        if (prevId !== nextId) {
            this.setState({
                product: products.find(product => product.id === nextId)
            });
        }
    },
    render () {
       
        
        let { product } = this.state;

        return (
            <Product
                  id={product.id}
                  name={ product.name }
                  text={ product.text }
                  image1={product.image1}
                  image2={product.image2}
                  image3={product.image3}
                  image4={product.image4}
                  image5={product.image5}
                  imagePreview={product.imagePreview}/>
        )
    }
})

let ProductPreview = React.createClass ({
    componentDidMount() {
        function openPopup(e) {
            e.preventDefault();
            $("b-popup").show()
        }
    },
    render () {
        
    
        let {name, text, cost, instock, imagePreview, onClick, link} = this.props;
        return (
        <div className="product-preview">
            
            <div className="product-preview-thumbs">
                <img className="product-preview-img" src={imagePreview} />
                <div className="product-preview-caption">
                    <span className="product-preview-name">{name}</span>
                    <span className="product-preview-cost">Цена: {cost} </span>
                    <Link to={link}>
                        <span className="product-preview-button">
                            <div className="product-preview-button-img">Заказать</div>
                        </span>
                    </Link>
                    
                     <span><img className="product-preview-instock"  src={instock} /></span>
                   
                </div>

            </div>
            
            <div>
                {this.props.children} 
            </div>
        </div>
        )
    }
})


export default { All, ProductAll} ;