import React from 'react';
import { products } from "./../Data/data-earrings.js";
import ProductPreview from './../ProductPreview.jsx';
import { Link } from 'react-router';
import Product from "../product.jsx"
var Carousel = require('react-responsive-carousel').Carousel;

let Earrings = React.createClass({
    componentDidMount () {
         $("#footer").css({"margin-top":"3.5%"});
         $(".pages-numbers-link1").addClass("pages-numbers-link-active");
         
         
         $(".product-preview").hide();
         $(".product-preview").slice(0,9).show();

         $(".pages-numbers-link1").click(function(){
            $(".product-preview").hide();
            $(".product-preview").slice(0,9).show();
            $(".pages-numbers-link").removeClass("pages-numbers-link-active");
            $(".pages-numbers-link1").addClass("pages-numbers-link-active");
        })
        
         $(".pages-numbers-link2").click(function(){
            $(".product-preview").hide();
            $(".product-preview").slice(9,18).show();
            $(".pages-numbers-link").removeClass("pages-numbers-link-active");
            $(".pages-numbers-link2").addClass("pages-numbers-link-active");
         })

          $(".pages-numbers-link3").click(function(){
            $(".product-preview").hide();
            $(".product-preview").slice(18,27).show();
            $(".pages-numbers-link").removeClass("pages-numbers-link-active");
            $(".pages-numbers-link3").addClass("pages-numbers-link-active");
         })

         $(".pages-numbers-link4").click(function(){
            $(".product-preview").hide();
            $(".product-preview").slice(27,36).show();
            $(".pages-numbers-link").removeClass("pages-numbers-link-active");
            $(".pages-numbers-link4").addClass("pages-numbers-link-active");
         })

         $(".pages-numbers-link5").click(function(){
            $(".product-preview").hide();
            $(".product-preview").slice(36,45).show();
            $(".pages-numbers-link").removeClass("pages-numbers-link-active");
            $(".pages-numbers-link5").addClass("pages-numbers-link-active");
         })
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

    

    render () {
           // window.scrollTo(0, 500);
            let { products } = this.state;
        return (
            <div>
                <div className="catalog-navigation">
                    <Link to="/catalog">Каталог>></Link>
                    <Link to="/catalog/polimer/all">Полимерная глина>></Link>
                    <Link to="/catalog/polimer/pendants">Серьги</Link>
                </div>
                <div className="catalog-content">
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
                        <p className="pages-numbers-link pages-numbers-link1">1</p>
                        <p className="pages-numbers-link pages-numbers-link2">2</p>
                        <p className="pages-numbers-link pages-numbers-link3">3</p>
                        <p className="pages-numbers-link pages-numbers-link4">4</p>
                        <p className="pages-numbers-link pages-numbers-link5">5</p>
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

let ProductEarrings = React.createClass({
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



export  { Earrings, ProductEarrings } ;