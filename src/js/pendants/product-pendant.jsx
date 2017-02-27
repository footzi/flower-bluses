import React from "react";
import products from "./../Data/data-pendants.js";
import { Link } from "react-router";
import Product from "../product.jsx"
var Carousel = require('react-responsive-carousel').Carousel;

let ProductPendant = React.createClass({
    
    getInitialState() {
        let { productId } = this.props.params;

        return {
            product: products.find(product => product.id === productId)
        };
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

export default ProductPendant;