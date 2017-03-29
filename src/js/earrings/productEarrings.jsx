import React from 'react';
let products1 = require("./../Data/data-earrings.js").products;
let products2 = require("./../Data/data-earrings.js").products2;
let products3 = require("./../Data/data-earrings.js").products3;
let products4 = require("./../Data/data-earrings.js").products4;
import Product from "../product.jsx"

let ProductEarrings = React.createClass({
    getInitialState() {
        let Link=location.pathname;
        let arr = Link.split("-");
        let number = arr[1]
        let products;
        switch(number) {
          case "4":
            products=products4;
            break;
          case "3":
            products=products3;
            break;  
          case "2":
            products=products2;
            break;
          case "1":
            products=products1;
            break;
          
        }
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
 export default ProductEarrings;