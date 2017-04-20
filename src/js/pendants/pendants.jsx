import React from 'react';
import { products } from "./../Data/data-pendants.js";
import ProductPreview from './../ProductPreview.jsx';
import { Link } from 'react-router';
import Product from "../product.jsx"
var Carousel = require('react-responsive-carousel').Carousel;

let Pendants = React.createClass({
     componentDidMount () {
        $(function(){
                $(window).resize(function(){
                    if($(window).width()>640) {
                        $("#footer").css({"margin-top":"28.6%"});
                        } 
                }).resize()
            })
         //$("#footer").css({"margin-top":"28.6%"});
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
        this.context.router.push(`/catalog/polimer/pendants/${productId}`);
    },

    render () {
            let { products } = this.state;
        return (
            <div>
                <div className="catalog-navigation">
                    <Link to="/catalog">Каталог>></Link>
                    <Link to="/catalog/polimer/all">Полимерная глина>></Link>
                    <Link to="/catalog/polimer/pendants">Кулоны/подвески</Link>
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

                <div >
                {this.props.children}
                </div>


            </div>
        )
    }
})

let ProductPendant = React.createClass({
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
                  cost={ product.cost }
                  image1={product.image1}
                  image2={product.image2}
                  image3={product.image3}
                  image4={product.image4}
                  image5={product.image5}
                  imagePreview={product.imagePreview}/>
        )
    }
})


export { Pendants, ProductPendant };