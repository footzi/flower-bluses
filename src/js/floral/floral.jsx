import React from 'react';
import { products } from "./../Data/data-floral.js";
import ProductPreview from './../ProductPreview.jsx';
import { Link } from 'react-router';
import Product from "../product.jsx"
import navigationPage from "../other.js"
var Carousel = require('react-responsive-carousel').Carousel;

let Floral = React.createClass({
     componentDidMount () {
         $("#footer").css({"margin-top":"28.5%"});
         navigationPage ();
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
        this.context.router.push(`/catalog/compositions/floral/${productId}`);
    },

    render () {
            let { products } = this.state;
        return (
            <div>
                <div className="catalog-navigation">
                    <Link to="/catalog">Каталог>></Link>
                    <Link to="/catalog/polimer/all">Цветочные композиции</Link>
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
            <div className="pages">
                <div className="pages-back">
                        <a className="pages-link">← предыдущая</a>
                </div>
                <div className="pages-numbers">
                    <p className="pages-numbers-link pages-numbers-link1">1</p>
                    <p className="pages-numbers-link pages-numbers-link2">2</p>
                </div>
                <div className="pages-next">
                        <a className="pages-link">следующая →</a>
                </div>
            </div>
            </div>
        )
    }
})

let ProductFloral = React.createClass({
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
                  image6={product.image6}
                  image7={product.image7}
                  image8={product.image8}
                  image9={product.image9}
                  imagePreview={product.imagePreview}/>
        )
    }
})


export { Floral, ProductFloral };